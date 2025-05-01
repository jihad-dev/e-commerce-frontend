import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import { useGetAllCategoriesQuery } from "../../../Redux/features/categories/categoryApi";

const ShopByCategory = () => {
    const { data: categoriesData } = useGetAllCategoriesQuery(undefined);
    
    return (
        <div>
            {/* Categories Section */}
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    { categoriesData && categoriesData?.map((category: any) => (
                        <SwiperSlide key={category._id}>
                            <Link 
                                to={`/category/${category?.name}`} 
                                className="group relative cursor-pointer overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-md block"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                                    <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                                    <div className="flex items-center">
                                        <span className="text-sm">Shop Now</span>
                                        <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ShopByCategory;
