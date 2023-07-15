import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Form, Button, List, ListItem } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="">
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <Button>Add contact</Button>
        </Form>
        <p>Contacts</p>
        <List>
          <ListItem></ListItem>
        </List>
      </>
    );
  }
}

export default App;
