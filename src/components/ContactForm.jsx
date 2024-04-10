import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../components/ContactForm.module.css'

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (!name.trim() || !number.trim()) return;
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.component} onSubmit={handleSubmit}>
        <label >Name</label>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
       <label >Number</label>
      <input
        type="text"
        placeholder="Number"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
