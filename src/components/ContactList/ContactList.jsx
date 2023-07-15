import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';

const ContactList = ({ contactsList, deleteContact }) => {
  return (
    <List>
      {contactsList.map(({ id, number, name }) => (
        <Item key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <Button onClick={() => deleteContact(id)}>Delete contact</Button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
