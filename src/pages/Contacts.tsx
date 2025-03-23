import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import { Filter } from "../components/Filter";
import { ContactList } from "../components/ContactList";
import { useDispatch } from "react-redux";
import AddContact from "@/components/AddContact";
import { Flex } from "@chakra-ui/react";

const Contacts = () => {
    const dispatch = useDispatch();
    

    useEffect(() => {
        (dispatch as any)(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <title>Contacts</title>
            <Flex flexDirection="column" gap={4} alignItems="center" justifyContent="center" marginTop={20}>
                <AddContact />
                <Filter />
                <ContactList />
            </Flex>
        </>
    );
}

export default Contacts;