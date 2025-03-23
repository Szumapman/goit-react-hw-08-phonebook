import { useState } from 'react';
import { Contact } from "../types/Contact";
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../redux/contacts/selectors';
import { addContact, editContact } from '../redux/contacts/operations';
import { Dialog, Field, Portal, Stack, Input, Button, CloseButton } from '@chakra-ui/react';


export const ContactForm = ({ name=null, number=null, id=null }: { name?: string | null, number?: string | null, id?: string | null }) => {
  const dispach = useDispatch();
  const contacts = useSelector(selectContacts);

  const namePattern = /^[a-zA-Z\u0400-\u04FF]+(([' \-][a-zA-Z\u0400-\u04FF ])?[a-zA-Z\u0400-\u04FF]*)*$/;
  const numberPattern = /\(?\+?\d{1,4}?\)?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}/;
  const nameString = "Name";
  const numberSting = "Number";
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newName = formData.get(nameString) as string;
    const newPhone = formData.get(numberSting) as string;
    name = newName.trim();
    number = newPhone.trim();
    

    if (contacts.some((contact: Contact) => contact.name.toLowerCase() === name?.toLowerCase() && contact.id !== id)) {
      setErrorMessage(`${name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')} is already in contacts`);
      return;
    }
    setErrorMessage(null);
    if (id) {
      (dispach as any)(editContact({ name, number, id }));
    } else {
      (dispach as any)(addContact({ name, number }));
    }

    const closeButton: HTMLButtonElement | null = document.querySelector('.close-dialog-button');
    closeButton?.click();

    event.currentTarget.reset();
  };

  
  return (
    <Portal>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <form onSubmit={handleSubmit} >
            <Dialog.Header>
              <Dialog.Title>Add Contact</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Stack gap="4" w="full">
                <Field.Root invalid={errorMessage !== null}>
                  <Field.Label>Name</Field.Label>
                  <Input
                    type="text"
                    name={nameString}
                    pattern={namePattern.source}
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required={true}
                    defaultValue={name || ""}
                  />
                  <Field.ErrorText>{errorMessage}</Field.ErrorText>
                </Field.Root>
                <Field.Root>
                  <Field.Label>Phone</Field.Label>
                  <Input
                    type="tel"
                    name={numberSting}
                    pattern={numberPattern.source}
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required={true}
                    defaultValue={number || ""}
                  />
                </Field.Root>
              </Stack>              
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button colorPalette="blue" type="submit">
                {id ? "Save" : "Add" } contact
              </Button>
            </Dialog.Footer>
          <Dialog.CloseTrigger asChild>
            <CloseButton size="sm" className="close-dialog-button"/>
          </Dialog.CloseTrigger>
          </form>
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  );
};