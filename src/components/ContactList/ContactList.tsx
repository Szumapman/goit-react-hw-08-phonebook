import { Contact } from "../../types/Contact";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
import { deleteContact } from "../../redux/operations";
import css from "./ContactList.module.css";



export const ContactList = () => {
  const dispach = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact: Contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.phone}
          <button onClick={() => (dispach as any)(deleteContact(contact.id)) }>Delete</button>
        </li>
      ))}
    </ul>
  );
};