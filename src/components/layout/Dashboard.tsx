// import { NavLink, Outlet } from "react-router-dom";
// import { useAppSelector } from "../../Redux/hooks";
// import { motion } from "framer-motion";
// import { FaHome, FaPlus, FaUsers, FaCog, FaList } from "react-icons/fa";
// import { useState, useEffect } from "react";

// const Dashboard = () => {
//   const user = useAppSelector((state) => state.auth.user);
//   const isAdmin = user?.role === 'admin';
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     if (windowWidth >= 640) { // sm breakpoint
//       setIsMobileMenuOpen(false);
//     }
//   }, [windowWidth]);

//   const menuItemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: { opacity: 1, x: 0 }
//   };

//   const SidebarContent = () => (
//     <motion.div 
//       initial="hidden"
//       animate="visible"
//       transition={{ staggerChildren: 0.1 }}
//       className="space-y-2"
//     >
//       {isAdmin && (
//         <>
//           <motion.div variants={menuItemVariants}>
//             <NavLink to="/dashboard/admin-home" 
//               className={({ isActive }) => 
//                 `flex items-center p-3 text-white rounded-lg hover:bg-blue-700 transition-all ${isActive ? 'bg-blue-700' : ''}`
//               }
//             >
//               <FaHome className="w-5 h-5 mr-3" />
//               <span className="font-medium">Admin Home</span>
//             </NavLink>
//           </motion.div>

//           <motion.div variants={menuItemVariants}>
//             <NavLink to="/dashboard/add-items"
//               className={({ isActive }) => 
//                 `flex items-center p-3 text-white rounded-lg hover:bg-blue-700 transition-all ${isActive ? 'bg-blue-700' : ''}`
//               }
//             >
//               <FaPlus className="w-5 h-5 mr-3" />
//               <span className="font-medium">Add Items</span>
//             </NavLink>
//           </motion.div>

//           <motion.div variants={menuItemVariants}>
//             <NavLink to="/dashboard/manage-items"
//               className={({ isActive }) => 
//                 `flex items-center p-3 text-white rounded-lg hover:bg-blue-700 transition-all ${isActive ? 'bg-blue-700' : ''}`
//               }
//             >
//               <FaCog className="w-5 h-5 mr-3" />
//               <span className="font-medium">Manage Items</span>
//             </NavLink>
//           </motion.div>

//           <motion.div variants={menuItemVariants}>
//             <NavLink to="/dashboard/all-users"
//               className={({ isActive }) => 
//                 `flex items-center p-3 text-white rounded-lg hover:bg-blue-700 transition-all ${isActive ? 'bg-blue-700' : ''}`
//               }
//             >
//               <FaUsers className="w-5 h-5 mr-3" />
//               <span className="font-medium">All Users</span>
//             </NavLink>
//           </motion.div>

//           <div className="my-4 border-t border-blue-400"></div>

//           <motion.div variants={menuItemVariants}>
//             <NavLink to="/"
//               className={({ isActive }) => 
//                 `flex items-center p-3 text-white rounded-lg hover:bg-blue-700 transition-all ${isActive ? 'bg-blue-700' : ''}`
//               }
//             >
//               <FaHome className="w-5 h-5 mr-3" />
//               <span className="font-medium">Main Home</span>
//             </NavLink>
//           </motion.div>
//         </>
//       )}
//     </motion.div>
//   );

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Desktop Sidebar */}
//       <motion.aside 
//         initial={false}
//         animate={{ x: 0 }}
//         className="fixed left-0 z-40 w-64 h-screen hidden sm:block"
//       >
//         <div className="h-full px-3 py-4 overflow-y-auto bg-gradient-to-b from-blue-600 to-blue-800">
//           <SidebarContent />
//         </div>
//       </motion.aside>

//       {/* Mobile Sidebar */}
//       <motion.aside 
//         initial={{ x: -250 }}
//         animate={{ x: isMobileMenuOpen ? 0 : -250 }}
//         transition={{ type: "spring", stiffness: 100 }}
//         className={`fixed left-0 z-50 w-64 h-screen sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
//       >
//         <div className="h-full px-3 py-4 overflow-y-auto bg-gradient-to-b from-blue-600 to-blue-800">
//           <SidebarContent />
//         </div>
//       </motion.aside>

//       {/* Overlay for mobile */}
//       {isMobileMenuOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
//           onClick={() => setIsMobileMenuOpen(false)}
//         />
//       )}

//       {/* Main Content */}
//       <div className="w-full p-4 sm:ml-64 transition-all duration-300">
//         <div className="p-4 rounded-lg">
//           <Outlet />
//         </div>
//       </div>

//       {/* Mobile menu button */}
//       <button 
//         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         className="fixed bottom-4 right-4 p-4 bg-blue-600 text-white rounded-full shadow-lg sm:hidden z-50 hover:bg-blue-700 transition-colors"
//         aria-label="Toggle mobile menu"
//       >
//         <FaList className="w-6 h-6" />
//       </button>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Sidebar for mobile and desktop */}
      <Sidebar 
        isMobile={isMobile} 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />

      {/* Main content */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <Outlet />
             
             
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;