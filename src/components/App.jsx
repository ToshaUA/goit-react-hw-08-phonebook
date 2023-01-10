import { GlobalStyle, Container } from 'style/Global.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const { contactsList } = useSelector(getContacts);

  if (!contactsList) {
    return;
  }

  return (
    <Container>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        {contactsList.length > 0 && <ContactList />}
      </Section>
      <GlobalStyle />
    </Container>
  );
};
// export const App = () => {
//   const [contacts, setContacts] = useState(() =>
//     JSON.parse(window.localStorage.getItem('contacts') ?? [])
//   );
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const addContact = contact => {
//     let isName = false;
//     contacts.forEach(({ name }) => {
//       if (contact.name.toLowerCase() === name.toLowerCase()) {
//         alert(`${contact.name} is already in contacts`);
//         isName = true;
//       }
//     });
//     if (!isName) {
//       contact.id = nanoid();
//       setContacts([contact, ...contacts]);
//     }
//   };

//   const onChangeFilter = e => {
//     setFilter(e.currentTarget.value);
//   };

//   const visibleContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     const filterContacts = contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter)
//     );
//     return filterContacts;
//   };

//   const deleteContact = contactId => {
//     setContacts(contacts.filter(({ id }) => id !== contactId));
//   };

//   const filterContacts = visibleContacts();

//   return (
//     <Container>
//       <Section title={'Phonebook'}>
//         <ContactForm addContact={addContact} />
//       </Section>
//       <Section title={'Contacts'}>
//         <Filter onSearch={onChangeFilter} value={filter} />
//         {contacts.length > 0 && (
//           <ContactList
//             contacts={filterContacts}
//             onDeleteContact={deleteContact}
//           />
//         )}
//       </Section>
//       <GlobalStyle />
//     </Container>
//   );
// };
