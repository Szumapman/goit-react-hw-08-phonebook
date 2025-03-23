import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { HStack, Link } from "@chakra-ui/react";
import { GrLogout } from "react-icons/gr";

const Logout = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        (dispatch as any)(logOut()) 
    };
    return (
        <HStack >
            <Link onClick={handleLogout} _hover={{ color: "blue.600", cursor: "pointer", textDecoration: "none" }}>
                <GrLogout />Logout
            </Link>
        </HStack>
    );
};

export default Logout;