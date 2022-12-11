import { Component } from 'react';
import { GlobalStyle, Container } from 'style/Global.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contact !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const sevedContacts = localStorage.getItem('contacts');
    if (sevedContacts !== null) {
      this.setState({ contacts: JSON.parse(sevedContacts) });
    }
  }

  addContact = contact => {
    let isName = false;
    const { contacts } = this.state;
    contacts.forEach(({ name }) => {
      if (contact.name.toLowerCase() === name.toLowerCase()) {
        alert(`${contact.name} is already in contacts`);
        isName = true;
      }
    });
    if (!isName) {
      contact.id = nanoid();
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  visibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
    return filterContacts;
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const changeFilter = this.onChangeFilter;
    const filterContacts = this.visibleContacts();
    const deleteContact = this.deleteContact;

    return (
      <Container>
        <Section title={'Phonebook'}>
          <ContactForm addContact={this.addContact} />
        </Section>
        <Section title={'Contacts'}>
          <Filter onSearch={changeFilter} value={filter} />
          {contacts.length > 0 && (
            <ContactList
              contacts={filterContacts}
              onDeleteContact={deleteContact}
            />
          )}
        </Section>
        <GlobalStyle />
      </Container>
    );
  }
}
