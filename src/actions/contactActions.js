export const addContact = (contact) => ({
  type: 'ADD_CONTACT',
  payload: contact,
});

export const removeContact = (id) => ({
  type: 'REMOVE_CONTACT',
  payload: id,
});

export const editContact = (id, updatedData) => ({
  type: 'EDIT_CONTACT',
  payload: { id, updatedData },
});
