import { useGetAllCategoriesQuery } from '../../Redux/features/categories/categoryApi';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useGetAllProductsQuery } from '../../Redux/features/products/productsApi';

// Placeholder types - Define properly in shared types files
interface Product {
    _id: string;
    category: string;
    // Add other product properties if needed
}

interface Category {
    _id: string;
    name: string;
    image: string;
    description?: string;
}

interface ApiResponse<T> {
    data?: T[];
    // Add other potential API response fields (message, success, etc.)
}

const AllCategories = () => {
    // Explicitly type the hook results
    const { data: categories, isLoading: isLoadingCategories } = useGetAllCategoriesQuery<ApiResponse<Category>>(undefined,{
        refetchOnMountOrArgChange: true,    
        refetchOnFocus: true,
        refetchOnReconnect: true,
    });
    const { data: products} = useGetAllProductsQuery<ApiResponse<Product>>(undefined,{
        refetchOnMountOrArgChange: true,
        refetchOnFocus: true,
        refetchOnReconnect: true,
    });


    // Count products per category
    const getProductCountByCategory = (categoryName: string) => {
        // Now 'products' is correctly typed as Product[]
        return products?.filter((product: Product) => product?.category === categoryName).length || 0;
    };


    if (isLoadingCategories) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
            </div>
        );
    }

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 sm:p-6 lg:p-8"
        >
            <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    All Categories
                </h1>
                <p className="mt-2 text-sm text-gray-600">
                    Manage your product categories
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {/* Use the typed 'categories' array */} 
                {categories.map((category: Category) => (
                    <motion.div
                        key={category._id}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <img 
                                    src={category.image} 
                                    alt={category.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="font-medium text-gray-900">
                                        {category.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {category.description || 'No description'}
                                    </p>
                                </div>
                            </div>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {getProductCountByCategory(category.name)} Products
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Use the typed 'categories' array */} 
            {categories.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500">No categories found</p>
                </div>
            )}
        </motion.div>
    );
};

export default AllCategories;
