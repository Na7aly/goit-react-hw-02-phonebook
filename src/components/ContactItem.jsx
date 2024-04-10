
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../components/ContactForm.module.css'

const ContactItem = ({ contact, onDeleteContact }) => {
  const handleDelete = () => {
    onDeleteContact(contact.id);
  };

  return (
    <li className={styles.item}>
      {contact.name} - {contact.number}
      <button className={styles.buton} onClick={handleDelete}>Delete</button>
      
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
