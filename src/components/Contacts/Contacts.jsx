import PropTypes from 'prop-types';
import { List, Item, Button } from './Contacts.styled';

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <Button onClick={() => onDeleteContact(contact.id)}>Delete</Button>
        </Item>
      ))}
    </List>
  );
};
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
