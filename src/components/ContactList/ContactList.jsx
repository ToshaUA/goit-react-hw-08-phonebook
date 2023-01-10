import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactListStyle, ContacStyle } from './ContactList.styled';
import { getContacts, getFilterValue } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const { contactsList } = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const filterContacts = contactsList.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
    return filterContacts;
  };

  const contacts = visibleContacts();
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
