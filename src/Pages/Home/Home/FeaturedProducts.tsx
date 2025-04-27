import { motion } from 'framer-motion';
import ProductCard from '../../../utils/ProductCard';
import { useGetFeaturedProductsQuery } from '../../../Redux/features/products/productsApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Loader from '../../../utils/Loader';

// Import Swiper styles if not already imported globally
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const FeaturedProducts = () => {
  // Include isLoading and isError states
  const { data: featuredData, isLoading, isError } = useGetFeaturedProductsQuery(undefined);
  
  // Handle loading state
  if (isLoading) {
    return <div className="py-12 flex justify-center"><Loader /></div>; 
  }

  // Handle error state
  if (isError || !featuredData) {
    return <div className="py-12 text-center text-red-600">Error loading featured products.</div>;
  }


  return (
    <div className="py-12 bg-gray-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-gray-900 text-center mb-8"
        >
          Featured Products
        </motion.h2>
        <Swiper
          slidesPerView={1} // Default slides per view
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 768px (added for medium screens)
            768: {
                slidesPerView: 3,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper pb-10" // Added padding-bottom for pagination dots
        >
          {featuredData.map((product: any, index: number) => ( // Removed optional chaining as we check products existence above
            <SwiperSlide key={index}>
              <motion.div
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full relative group"
              >
                <ProductCard product={product} index={index} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProducts;
