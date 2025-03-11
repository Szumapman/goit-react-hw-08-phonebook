import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { ContactForm } from './components/ContactForm/ContactForm'
import { ContactList } from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';
import { selectError, selectIsLoading } from './redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from './redux/operations';


function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError)

  useEffect(() => {
    (dispatch as any)(fetchContacts());
  }, [dispatch]);
  

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && <ContactList />}
    </>
  )
}

export default App
