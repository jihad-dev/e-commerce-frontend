import { motion } from 'framer-motion';
import ProductCard from '../../../utils/ProductCard';

const featuredProducts = [
  {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      rating: 4.8,
      image: "https://readdy.ai/api/search-image?query=premium%20wireless%20headphones%20with%20sleek%20modern%20design%2C%20studio%20quality%20sound%2C%20noise%20cancellation%2C%20on%20a%20minimalist%20light%20gray%20background%2C%20product%20photography%2C%20ultra%20high%20resolution%2C%20detailed%20texture&width=600&height=400&seq=1&orientation=landscape",
      description: "Experience studio-quality sound with our premium wireless headphones. Features active noise cancellation and 30-hour battery life."
  },
  {
      id: 2,
      name: "Smart Fitness Watch",
      price: 149.99,
      rating: 4.6,
      image: "https://readdy.ai/api/search-image?query=modern%20smart%20fitness%20watch%20with%20health%20tracking%20features%2C%20sleek%20design%2C%20on%20wrist%2C%20on%20minimalist%20light%20gray%20background%2C%20product%20photography%2C%20ultra%20high%20resolution%2C%20detailed%20texture&width=600&height=400&seq=2&orientation=landscape",
      description: "Track your fitness goals with precision. Features heart rate monitoring, sleep tracking, and 7-day battery life."
  },
  {
      id: 3,
      name: "Ultra-Thin Laptop",
      price: 1299.99,
      rating: 4.9,
      image: "https://readdy.ai/api/search-image?query=ultra%20thin%20premium%20laptop%20with%20aluminum%20body%2C%20high%20resolution%20display%2C%20sleek%20design%20on%20minimalist%20light%20gray%20background%2C%20product%20photography%2C%20ultra%20high%20resolution%2C%20detailed%20texture&width=600&height=400&seq=3&orientation=landscape",
      description: "Powerful performance in an ultra-thin design. Features 16GB RAM, 512GB SSD, and 14-hour battery life."
  },
  {
      id: 4,
      name: "Professional Camera Kit",
      price: 899.99,
      rating: 4.7,
      image: "https://readdy.ai/api/search-image?query=professional%20DSLR%20camera%20with%20lens%20kit%2C%20high%20quality%20photography%20equipment%20on%20minimalist%20light%20gray%20background%2C%20product%20photography%2C%20ultra%20high%20resolution%2C%20detailed%20texture&width=600&height=400&seq=4&orientation=landscape",
      description: "Capture stunning photos with our professional camera kit. Includes 24.2MP sensor, 4K video, and multiple lenses."
  }
];
const FeaturedProducts = () => {
  
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
            {featuredProducts?.map((product: any, index: number) => (
              <motion.div 
                key={product.id}
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
