import { HStack } from "@chakra-ui/react";
import { RiHome5Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const HomeNav = ( { display }: { display: any }) => {
    return (
        <NavLink to={'/'}>
            <HStack  _hover={{ color: "blue.600" }} display={display}>      
                <RiHome5Line /> Home
            </HStack>
        </NavLink>
    );
};

export default HomeNav;