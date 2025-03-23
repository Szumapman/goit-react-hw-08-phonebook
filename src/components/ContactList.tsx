import { Contact } from "../types/Contact";
import { useSelector } from "react-redux";
import { selectContacts, selectFilteredContacts } from "../redux/contacts/selectors";
import { Flex } from "@chakra-ui/react";
import ContactCard from "./ContactCard";
import EmptyPhonebook from "./EmptyPhonebook";
import NoSearchResult from "./NoSearchResult";

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const contacts: Contact[] = useSelector(selectContacts);

  return (
    <>
      {contacts.length === 0 && <EmptyPhonebook />}
      {contacts.length > 0 && filteredContacts.length === 0 && <NoSearchResult />}
      { filteredContacts.length > 0 && (
          <Flex gap="4" wrap="wrap" maxW="100%" justifyContent="center">
            {filteredContacts.map((contact: Contact) => (
              <ContactCard name={contact.name} number={contact.number} id={contact.id} key={contact.id} />
            ))}
          </Flex>
        )
      };
    </>  
  );
};