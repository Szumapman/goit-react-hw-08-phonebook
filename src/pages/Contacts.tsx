import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import { Filter } from "../components/Filter";
import { ContactList } from "../components/ContactList";
import { useDispatch, useSelector } from "react-redux";
import AddContact from "@/components/AddContact";
import { Flex } from "@chakra-ui/react";
import { selectContacts } from "@/redux/contacts/selectors";
import { Contact } from "@/types/Contact";

const Contacts = () => {
    const dispatch = useDispatch();
    const contacts: Contact[] = useSelector(selectContacts);
    

    useEffect(() => {
        (dispatch as any)(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <title>Contacts</title>
            <Flex flexDirection="column" gap={4} alignItems="center" justifyContent="center" marginTop={20}>
                <AddContact />
                {contacts.length > 0 && <Filter />}
                <ContactList />
            </Flex>
        </>
    );
};

export default Contacts;