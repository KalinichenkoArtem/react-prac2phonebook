import { Component } from 'react';

import PropTypes from 'prop-types';
import { Form, Button } from 'components/App/App.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input
              value={name}
              onChange={this.handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="">
            Number
            <input
              onChange={this.handleChange}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <Button>Add contact</Button>
        </Form>
        <ul>
          <li>
            <p>
              {this.name}:{this.number}
            </p>
          </li>
        </ul>
      </>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
