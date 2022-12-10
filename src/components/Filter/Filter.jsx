export const Filter = ({ onSearch, value }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onSearch} />
      </label>
    </>
  );
};
