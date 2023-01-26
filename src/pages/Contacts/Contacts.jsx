import { Container } from '../../style/Global.styled';
import { useEffect } from 'react';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Section } from '../../components/Section/Section';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { LoaderМount } from '../../components/Loader/Loader';
import { Toaster } from 'react-hot-toast';

const Contacts = () => {
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
        {error && <div>Sorry, something went wrong :( Please try again</div>}
        {items.length > 0 && !isLoading && <ContactList />}
        {!isLoading && items.length === 0 && <>You haven't any contacts yet</>}
      </Section>
      <Toaster position="bottom-right" reverseOrder={false} />
    </Container>
  );
};

export default Contacts;
