import { Component } from 'react';
// import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';

// import { List, ListItem } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    contacts.name === name;
    contacts.number === number;
  };

  render() {
    // const { inputValue } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
      </>
    );
  }
}

export default App;
