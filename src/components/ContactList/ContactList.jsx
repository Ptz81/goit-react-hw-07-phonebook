import React, { useEffect } from "react";
import css from '../Phonebook.module.css';
import { useDispatch, useSelector } from "react-redux";
import { filteredContacts, getError, getIsLoading} from "redux/selectors";
import Loader from "components/Loader/Loader";
import { deleteContacts, fetchContacts } from "redux/api";

const ContactList = () => {
  const contactItems = useSelector(filteredContacts);
  const error = useSelector(getError)
  const isLoading = useSelector(getIsLoading)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  if(contactItems && contactItems.length === 0) return null;
  return (
    <>
      {error && <h2>{error}</h2>}
      {isLoading && <Loader/>}
       {contactItems && <ul className={css.contact_list}>
        {contactItems.map((contact) => {
          return (
            <li className={css.contact_item} key={contact.id}>
              <p>
                {contact.name}: {contact.phone}
              </p>
              <button
                className={css.btn}
                onClick={() => dispatch(deleteContacts(contact.id))}
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
