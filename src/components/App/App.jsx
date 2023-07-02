import { Component } from 'react';
import { Container, Section, Heading, Title } from './App.styled';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';
import { Form } from 'components/Form/Form';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contactsFromLS = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsFromLS);
    if (!parsedContacts) return;
    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  createContact = data => {
    if (this.state.contacts.find(contact => contact.name === data.name)) {
      Notiflix.Notify.warning(`${data.name} is already in contacts`, {
        position: 'right-top',
        fontSize: '15px',
      });

      return;
    }

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          ...data,
          id: nanoid(),
        },
      ],
    }));
  };

  onFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  getContact = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return filterContacts;
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filterContact = this.getContact();

    return (
      <Container>
        <Section>
          <Heading>Phonebook</Heading>
          <Form createContact={this.createContact}></Form>

          <Filter value={filter} onFilter={this.onFilter}></Filter>
          <Title>Contacts</Title>
          <Contacts
            contacts={filterContact}
            onDeleteContact={this.removeContact}
          />
        </Section>
      </Container>
    );
  }
}
