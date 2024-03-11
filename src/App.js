// App.js
import React from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <div>
      <h1>Lista de Contatos</h1>
      <ContactList />
      <ContactForm />
    </div>
  );
};

export default App;
