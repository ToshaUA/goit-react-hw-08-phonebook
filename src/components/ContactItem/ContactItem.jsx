import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { Contact, Button } from './ContactItem.styled';
import { Loader } from '../Loader/Loader';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const { isLoadingDelete } = useSelector(selectContacts);

  const [isDeleting, setIsDeleting] = useState(null);

  const handleDelete = id => {
    setIsDeleting(id);
    dispatch(deleteContact(id)) &&
      toast('Contact deleted!', {
        icon: '🤦‍♂️',
      });
  };

  return (
    <>
      <Contact>
        {name}: {number}
      </Contact>
      <Button type="button" onClick={() => handleDelete(id)}>
        Delete
        {isLoadingDelete && isDeleting === id && <Loader />}
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
