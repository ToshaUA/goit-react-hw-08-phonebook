import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

const initialValue = {
  name: '',
  number: '',
};

let schema = yup.object().shape({
  name: yup
    .string()
    .required('Name may contain only letters, apostrophe, dash and spaces.'),
  number: yup
    .number()
    .required(
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .positive()
    .integer(),
});

export const ContactForm = ({ addContact }) => {
  const handleSubmit = (value, { resetForm }) => {
    addContact(value);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValue}
      validationScheme={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="name">
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="number">
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
