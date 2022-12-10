export const ContactItem = ({
  contact: { id, name, number },
  onDeleteContact,
}) => {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </>
  );
};
