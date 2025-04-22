import { motion } from 'framer-motion';
import ProductCard from '../../../utils/ProductCard';
import { useGetFeaturedProductsQuery } from '../../../Redux/features/products/productsApi';



const FeaturedProducts = () => {
  const {data: products} = useGetFeaturedProductsQuery(undefined);


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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products?.map((product: any, index: number) => (
              <motion.div 
                key={index}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative group"
              >
                {/* use a reausable component for the product card */}
                <ProductCard product={product} index={index} />
               
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default FeaturedProducts;
