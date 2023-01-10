import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/itemsSlice/contactsSlice';
import { Contact, Button } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Contact>
        {name}: {number}
      </Contact>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
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
};
