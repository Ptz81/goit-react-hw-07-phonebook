import { useDispatch, useSelector } from 'react-redux';
import css from '../Phonebook.module.css';
import { getContacts } from 'redux/selectors';
import { createContacts } from 'redux/api';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return;
    }
     dispatch(createContacts({ name, number }));
    e.currentTarget.reset();
  }
    return (
      <form className={css.form}onSubmit={handleSubmit}>
        <label htmlFor='name' className={css.form_label}>
          Name
        </label>
        <input
          type="text"
            name="name"
            id = 'name'
            className={css.form_input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor='number' className={css.form_label}>
          Number
        </label>
        <input
          type="tel"
            name="number"
            id='number'
            className={css.form_input}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          />
      <input type="submit" className={css.btn} value='Add contact'/>
      </form>
    )
  }

