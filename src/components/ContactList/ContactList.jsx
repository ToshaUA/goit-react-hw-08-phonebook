import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactListStyle, ContacStyle } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListStyle>
      {contacts.map(contact => (
        <ContacStyle key={contact.id}>
          <ContactItem contact={contact} onDeleteContact={onDeleteContact} />
        </ContacStyle>
      ))}
    </ContactListStyle>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
