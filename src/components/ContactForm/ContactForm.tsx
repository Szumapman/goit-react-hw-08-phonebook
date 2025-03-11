import React from 'react';
import { Input } from "../Input/Input";
import { Contact } from "../../types/Contact";
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';
import  css from "./ContactForm.module.css";



export const ContactForm = () => {
  const dispach = useDispatch();
  const contacts = useSelector(selectContacts);

  const namePattern = /^[a-zA-Z\u0400-\u04FF]+(([' \-][a-zA-Z\u0400-\u04FF ])?[a-zA-Z\u0400-\u04FF]*)*$/;
  const numberPattern = /\(?\+?\d{1,4}?\)?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}/;
  const nameString = "Name";
  const numberSting = "Number";
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newName = formData.get(nameString) as string;
    const newPhone = formData.get(numberSting) as string;
    const name = newName.trim();
    const phone = newPhone.trim();

    if (contacts.some((contact: Contact) => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')} is already in contacts`);
      return;
    }

    (dispach as any)(addContact({ name, phone }));

    event.currentTarget.reset();
  };

  
  return (
    <form onSubmit={handleSubmit} className={css.contactForm}>
        <Input type="text" name={nameString} pattern={namePattern.source} title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required={true} />
        <Input type="tel" name={numberSting} pattern={numberPattern.source} title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" required={true} />
        <button type="submit">Add contact</button>
    </form>
  );
};