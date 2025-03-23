import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser, selsectIsRefreshing } from "../redux/auth/selectors";

const useAuth = () => {
    const isLoggedIn  = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selsectIsRefreshing);
    const user = useSelector(selectUser);
    
    return {
        isLoggedIn,
        user,
        isRefreshing,
    };
}

export default useAuth;