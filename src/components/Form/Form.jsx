import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { BsFillTelephoneFill, BsPersonFill } from 'react-icons/bs';
import { IoMdPersonAdd } from 'react-icons/io';
import { ContactForm, Input, Label, SubmitBtn } from './Form.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInput = nanoid();
  telInput = nanoid();

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.createContact(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <ContactForm onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameInput}>
          <BsPersonFill />Name
        </Label>
        
        <Input
          id={this.nameInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <Label htmlFor={this.telInput}>
          <BsFillTelephoneFill />Number</Label>
        <Input
          id={this.telInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Phone number"
          value={this.state.number}
          onChange={this.handleChange}
        />
        <SubmitBtn type="submit">
          <IoMdPersonAdd />Add contact
        </SubmitBtn>
      </ContactForm>
    );
  }
}

Form.propTypes = {
  createContact: PropTypes.func.isRequired,
};
