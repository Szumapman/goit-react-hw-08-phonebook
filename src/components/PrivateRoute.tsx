import { Navigate } from "react-router-dom";
import useAuth  from "../hooks/useAuth";
import { JSX } from "react";

const PrivateRoute = ({ component, redirectTo = "/" }: { component: JSX.Element; redirectTo?: string }) => {
    const { isLoggedIn } = useAuth();

    return isLoggedIn ? component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;