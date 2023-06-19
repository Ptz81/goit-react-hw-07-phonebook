import React from "react";
import css from '../Phonebook.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { deleteContact } from "redux/contactsSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  let contactItems = contacts;
  if (filter) {
  const str = filter.trim().toLowerCase();
  contactItems = contactItems.filter(item => item.name.toLowerCase().includes(str));
}
  if(contactItems.length === 0) return null;
    return (
       <ul className={css.contact_list}>
        {contactItems.map((contact) => {
          return (
            <li className={css.contact_item} key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button
                className={css.btn}
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    )
}
export default ContactList;
