import { useParams } from "react-router-dom";
import { useGetProductsByCategoryQuery } from "../Redux/features/products/productsApi";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
const DynamicCategory = () => {
   
    const {category} = useParams();
    const {data: products , isLoading} = useGetProductsByCategoryQuery(category);
    if(isLoading){
        return <Loader/>
    }
    return (
        <div>
         
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products && products?.map((product: any, index: number) => (
              <motion.div 
                key={index}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative group"
              >
               
                <ProductCard product={product} index={index} />
               
              </motion.div>
            ))}
          </div>
        </div>
    )
}

export default DynamicCategory;

