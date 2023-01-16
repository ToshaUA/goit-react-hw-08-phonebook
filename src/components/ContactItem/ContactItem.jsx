import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Contact, Button } from './ContactItem.styled';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

export const ContactItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Contact>
        {name}: {phone}
      </Contact>
      <Button
        type="button"
        onClick={() =>
          dispatch(deleteContact(id)) &&
          toast('Contact deleted!', {
            icon: '🤦‍♂️',
          })
        }
      >
        Delete
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
