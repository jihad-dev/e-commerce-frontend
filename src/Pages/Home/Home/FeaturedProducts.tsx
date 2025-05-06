import { motion } from 'framer-motion';
import { useGetFeaturedProductsQuery } from '../../../Redux/features/products/productsApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import Loader from '../../../utils/Loader';
import AllProductCard from '../../../components/ProductCard/AllProductCard';


const FeaturedProducts = () => {
  // Include isLoading and isError states
  const {
    data: featuredData = [],
    isLoading,
    isError
  } = useGetFeaturedProductsQuery(undefined) as {
    data?: any[];
    isLoading: boolean;
    isError: boolean;
  };

  // Handle loading state
  if (isLoading) {
    return <Loader />
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
          style={{ padding: '20px' }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
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
          {featuredData && featuredData?.map((product: any, index: number) => ( // Removed optional chaining as we check products existence above
            <SwiperSlide key={index}>
              <motion.div
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full relative group"
              >
                 <AllProductCard key={product._id} product={product} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProducts;
