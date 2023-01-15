import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactListStyle, ContacStyle } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ContactListStyle>
      {contacts.map(contact => (
        <ContacStyle key={contact.id}>
          <ContactItem contact={contact} />
        </ContacStyle>
      ))}
    </ContactListStyle>
  );
};
