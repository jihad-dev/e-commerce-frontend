import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../Redux/hooks";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const user = useAppSelector((state) => state.auth.user);
    const location = useLocation();
    return <>
        {
            (user?.role === "admin" || user?.role === "user") ? children : <Navigate to="/login" state={{ from: location }} />
        }
       


    </>;
};

export default PrivateRoute;

