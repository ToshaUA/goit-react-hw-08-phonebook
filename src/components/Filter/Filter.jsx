import { Label, InpuStyle, FilterBox } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ onSearch, value }) => {
  return (
    <FilterBox>
      <Label>
        Find contacts by name
        <InpuStyle type="text" value={value} onChange={onSearch} />
      </Label>
    </FilterBox>
  );
};

Filter.proTotype = {
  onSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
