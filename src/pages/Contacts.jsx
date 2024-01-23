import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import FilterContacts from 'components/FilterContacts';
import { getError, getIsLoading } from '../redux/contacts/contactsSelectors';
import { fetchContacts } from '../redux/contacts/contactsOperations';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="contacts">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      <FilterContacts />
      <ContactList />
    </div>
  );
};

export default Contacts;
