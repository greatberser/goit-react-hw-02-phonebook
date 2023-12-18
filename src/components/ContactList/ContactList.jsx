import React from 'react';
import { Contact } from 'components/Contact/Contact';
import css from './ContactList.module.css'

export const ContactList = ({ 
    contacts, 
    title = '', 
    handleProfileDelete 
}) => {
  return (
    <div className={css.container}>
      {title && <h2>{title}</h2>}
      <ul className={css.list}>
        {contacts && contacts.length > 0 ? (
          contacts.map(contact => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              handleDeleteProfile={handleProfileDelete} 
            />
          ))
        ) : (
          <p>No contacts available</p>
        )}
      </ul>
    </div>
  );
};

export default ContactList;
