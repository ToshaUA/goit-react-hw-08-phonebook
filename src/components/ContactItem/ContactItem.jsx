import { Contact, Button } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({
  contact: { id, name, number },
  onDeleteContact,
}) => {
  return (
    <>
      <Contact>
        {name}: {number}
      </Contact>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};
