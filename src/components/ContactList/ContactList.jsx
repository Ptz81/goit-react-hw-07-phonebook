import React, { useEffect } from "react";
import css from '../Phonebook.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
// import { deleteContact } from "redux/contactsSlice";
import Loader from "components/Loader/Loader";
import { deleteContactsThunk, getContactsThunk } from "redux/thunks";

const ContactList = () => {
  const {items, isLoading, error} = useSelector(getContacts);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  useEffect(() => {
    dispatch(getContactsThunk())
  }, [dispatch])

  let contactItems = items;
  if (filter) {
  const str = filter.trim().toLowerCase();
  contactItems = contactItems.filter(item => item.name.toLowerCase().includes(str));
}
  if(contactItems.length === 0) return null;
  return (
    <>
      {error && <h2>{error}</h2>}
      {isLoading && <Loader/>}
       {items && <ul className={css.contact_list}>
        {contactItems.map((contact) => {
          return (
            <li className={css.contact_item} key={contact.id}>
              <p>
                {contact.name}: {contact.phone}
              </p>
              <button
                className={css.btn}
                onClick={() => dispatch(deleteContactsThunk(contact.id))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>}
      </>

    )
}
export default ContactList;
