import { HStack } from "@chakra-ui/react";
import { AiOutlineContacts } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const ContactsNav = ({ display }: { display: any }) => {
    return (
        <NavLink to={'/contacts'}>
            <HStack _hover={{ color: "blue.600" }}  display={display}>
                <AiOutlineContacts /> Contacts
            </HStack>
        </NavLink>
    );
};

export default ContactsNav;