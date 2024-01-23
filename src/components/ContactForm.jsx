import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contacts/contactsOperations';

const INITIAL_STATE = { name: '', number: '' };

const ContactForm = () => {
  const [form, setForm] = useState({ ...INITIAL_STATE });
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact(form));

    setForm({ ...INITIAL_STATE });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            onChange={handleChange}
            value={form.name}
            type="text"
            name="name"
            placeholder="Name"
            required
          />
        </label>
        <label>
          <input
            onChange={handleChange}
            value={form.number}
            type="tel"
            name="number"
            placeholder="Number"
            required
          />
        </label>

        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
