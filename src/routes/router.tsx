import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/Mainlayout";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Products from "../Pages/Products/Products";
import Dashboard from "../components/layout/Dashboard";
import AdminHome from "../Pages/AdminPage/AdminHome";
import Customers from "../Pages/AdminPage/Customers";
import PrivateRoute from "../utils/PrivateRoute";
import Profile from "../Pages/Profile/Profile";
import DynamicCategory from "../utils/DynamicCategory";
import Cart from "../Pages/Cart/Cart";
export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/products",
        element: <Products />,
        
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile /></PrivateRoute>,
      },
      {
        path: "/category/:category",
        element: <DynamicCategory />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard/>
      </PrivateRoute>
    ),
    children: [
      {
        path:"/dashboard/admin-home",
        element:<PrivateRoute><AdminHome/></PrivateRoute>
      },
      {
        path: "/dashboard/products",
        element: <h3>Productswerwrwerwer</h3>
      },
      {
        path: "/dashboard/customers",
        element: <PrivateRoute><Customers/></PrivateRoute>
      },
      // {
      //   path: "/dashboard/payment",
      //   element: <Payment></Payment>
      // },
      // {
      //   path: '/dashboard/payment-history',
      //   element: <PaymentHistory></PaymentHistory>,


      // },
      // // admin only routes //
      // {
      //   path: '/dashboard/all-users',
      //   element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      // },
      // {
      //   path: '/dashboard/add-items',
      //   element: <AdminRoute><AddItems></AddItems></AdminRoute>
      // },
      // {
      //   path: '/dashboard/manage-items',
      //   element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      // },
      // {
      //   path: '/dashboard/updateItem/:id',
      //   element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
      //   loader: async ({ params }) => {
      //     return fetch(`https://bistroo-boss-server.vercel.app/menu/${params.id}`)
      //   }

      // },
      // {
      //   path: '/dashboard/admin-home',
      //   element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      // }
    ],
  },
]);

