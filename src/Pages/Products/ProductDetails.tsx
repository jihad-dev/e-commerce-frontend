import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../Redux/features/products/productsApi";
import Loader from "../../utils/Loader";
import { useAddToCartMutation } from "../../Redux/features/cart/cartApi";
import { useAppSelector } from "../../Redux/hooks";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";

const ProductDetails = () => {
    const { id } = useParams();
    const { data: product, isLoading } = useGetProductByIdQuery(id, {
        skip: !id,
        refetchOnMountOrArgChange: true,
        refetchOnFocus: true,
        refetchOnReconnect: true,
    });

    const [selectedImage, setSelectedImage] = useState(0);
    const [cart] = useAddToCartMutation();
    const navigate = useNavigate();
    const user = useAppSelector((state) => state.auth.user);

    const addToCart = async(productId: string) => {
        let toastId: string | number | undefined;
        try {
            toastId = toast.loading('Adding to cart...');
            const res: any = await cart({ productId, quantity: 1 });
            
            if(res?.data?.success) {
                toast.success('Product added to cart successfully!', { id: toastId });
            } else if(res?.error) {
                toast.error(res.error.data.message || 'Failed to add product to cart', { id: toastId });
            }
        } catch (error) {
            toast.error('Something went wrong! Please try again.', { id: toastId });
            console.error('Add to cart error:', error);
        }
    }

    if (isLoading) {
        return <Loader />;
    }

    if (!product) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center text-gray-500">
                    <h2 className="text-2xl font-semibold mb-2">Product Not Found</h2>
                    <p>The product you're looking for doesn't exist or has been removed.</p>
                    <button 
                        onClick={() => navigate('/products')}
                        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Browse Products
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                    {/* Image gallery */}
                    <div className="flex flex-col space-y-4">
                        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden">
                            <img
                                src={product.images[selectedImage]}
                                alt={product.title}
                                className="w-full h-full object-center object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        
                        {/* Thumbnail gallery */}
                        <div className="grid grid-cols-4 gap-4">
                            {product.images.map((image: string, idx: number) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`aspect-w-1 aspect-h-1 rounded-md overflow-hidden ${
                                        selectedImage === idx ? 'ring-2 ring-blue-500' : 'ring-1 ring-gray-200'
                                    }`}
                                >
                                    <img
                                        src={image}
                                        alt={`Product ${idx + 1}`}
                                        className="w-full h-full object-center object-cover hover:opacity-75"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product info */}
                    <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                        <nav aria-label="Breadcrumb" className="mb-4">
                            <ol className="flex items-center space-x-2 text-sm text-gray-500">
                                <li><a href="/products" className="hover:text-blue-600">Products</a></li>
                                <li>/</li>
                                <li><a href={`/products?category=${product.category}`} className="hover:text-blue-600">{product.category}</a></li>
                            </ol>
                        </nav>

                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-4">{product.title}</h1>
                        
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <svg
                                            key={rating}
                                            className={`h-5 w-5 flex-shrink-0 ${
                                                rating < (product.ratings || 0)
                                                    ? 'text-yellow-400'
                                                    : 'text-gray-300'
                                            }`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="ml-2 text-sm text-gray-500">({product.ratingsCount} reviews)</p>
                            </div>
                            <div className="h-5 w-px bg-gray-300"></div>
                            <div className={`text-sm font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {product.stock > 0 ? `${product.stock} in stock` : 'Out of Stock'}
                            </div>
                        </div>

                        <div className="flex items-baseline space-x-4 mb-8">
                            <h2 className="text-3xl font-bold text-gray-900">${product.finalPrice.toFixed(2)}</h2>
                            {product.discount > 0 && (
                                <>
                                    <span className="text-lg text-gray-500 line-through">${product.price.toFixed(2)}</span>
                                    <span className="text-sm font-medium text-red-600">Save {product.discount}%</span>
                                </>
                            )}
                        </div>

                        <div className="prose prose-sm text-gray-700 mb-8">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Description</h3>
                            <div className="space-y-4">{product.description}</div>
                        </div>

                        <div className="border-t border-gray-200 pt-8">
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-8">
                                <div className="border rounded-lg p-4">
                                    <h4 className="text-xs text-gray-500 uppercase">Brand</h4>
                                    <p className="mt-1 font-medium">{product.brand || 'N/A'}</p>
                                </div>
                                <div className="border rounded-lg p-4">
                                    <h4 className="text-xs text-gray-500 uppercase">Category</h4>
                                    <p className="mt-1 font-medium">{product.category}</p>
                                </div>
                                <div className="border rounded-lg p-4">
                                    <h4 className="text-xs text-gray-500 uppercase">Stock</h4>
                                    <p className="mt-1 font-medium">{product.stock}</p>
                                </div>
                                {product.shipping > 0 && (
                                    <div className="border rounded-lg p-4">
                                        <h4 className="text-xs text-gray-500 uppercase">Shipping</h4>
                                        <p className="mt-1 font-medium">${product.shipping}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => user ? addToCart(product._id) : navigate('/login')}
                                disabled={product.stock === 0}
                                className={`flex-1 min-w-[200px] bg-blue-600 border border-transparent rounded-lg py-4 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${
                                    product.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            >
                                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                            </button>
                            
                            <button 
                                className="flex-1 min-w-[200px] bg-gray-100 border border-gray-300 rounded-lg py-4 px-8 flex items-center justify-center text-base font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                            >
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
