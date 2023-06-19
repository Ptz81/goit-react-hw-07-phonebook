import css from './Phonebook.module.css'
import {ContactForm} from './ContactForm/ContactForm'
import Section from './Section/Section'
import React from 'react';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <div className={css.container}>
      <>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactList contacts={contacts}
          />
        </Section>
      </>
    </div>
  );
};
export default App;
