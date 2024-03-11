import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../actions/contactActions';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact(formData));
    setFormData({ fullName: '', email: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="fullName" placeholder="Nome Completo" onChange={handleInputChange} value={formData.fullName} required />
      <input type="email" name="email" placeholder="E-mail" onChange={handleInputChange} value={formData.email} required />
      <input type="tel" name="phone" placeholder="Telefone" onChange={handleInputChange} value={formData.phone} required />
      <button type="submit">Adicionar Contato</button>
    </form>
  );
};

export default ContactForm;