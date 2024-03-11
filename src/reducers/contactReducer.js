const initialState = {
  contacts: [],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, { ...action.payload, id: Date.now() }],
      };
    case 'REMOVE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
      };
      // contactReducer.js
    case 'EDIT_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? { ...contact, ...action.payload.updatedData } : contact
        ),
      };

    default:
      return state;
  }
};

export default contactReducer;