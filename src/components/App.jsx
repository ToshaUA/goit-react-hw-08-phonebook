import { GlobalStyle, Container } from 'style/Global.styled';
import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { LoaderМount } from './Loader/Loader';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const { items, isLoading, error } = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        {isLoading && <LoaderМount />}
        {items.length > 0 && !isLoading && !error && <ContactList />}
      </Section>
      <Toaster position="bottom-right" reverseOrder={false} />
      <GlobalStyle />
    </Container>
  );
};
