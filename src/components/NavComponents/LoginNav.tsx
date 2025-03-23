import { HStack } from "@chakra-ui/react"
import { GrUserAdmin } from "react-icons/gr"
import { NavLink } from "react-router-dom"

const LoginNav = () => {
    return (
        <NavLink to="/login">
            <HStack _hover={{ color: "blue.600" }} >
                <GrUserAdmin /> Login
            </HStack>
        </NavLink>
    );
};

export default LoginNav