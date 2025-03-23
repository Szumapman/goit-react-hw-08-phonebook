import { HStack } from "@chakra-ui/react"
import { GrUserAdd } from "react-icons/gr"
import { NavLink } from "react-router-dom"

const RegisterNav = () => {
    return (
        <NavLink to={"/register"}>
            <HStack _hover={{ color: "blue.600" }} >
                <GrUserAdd /> Register
            </HStack>
        </NavLink>
    );
};

export default RegisterNav
