// ContactItem.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeContact, editContact } from '../actions/contactActions';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({ fullName: contact.fullName, email: contact.email, phone: contact.phone });

  const handleRemove = () => {
    dispatch(removeContact(contact.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    dispatch(editContact(contact.id, editedData));
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // Se desejar, pode restaurar os dados originais ao cancelar a edição.
    // setEditedData({ fullName: contact.fullName, email: contact.email, phone: contact.phone });
  };

  const handleInputChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input type="text" name="fullName" value={editedData.fullName} onChange={handleInputChange} />
          <input type="email" name="email" value={editedData.email} onChange={handleInputChange} />
          <input type="tel" name="phone" value={editedData.phone} onChange={handleInputChange} />
          <button onClick={handleSaveEdit}>Salvar</button>
          <button onClick={handleCancelEdit}>Cancelar</button>
        </>
      ) : (
        <>
          <p>{contact.fullName}</p>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
          <button onClick={handleEdit}>Editar</button>
          <button onClick={handleRemove}>Remover</button>
        </>
      )}
    </div>
  );
};

export default ContactItem;
