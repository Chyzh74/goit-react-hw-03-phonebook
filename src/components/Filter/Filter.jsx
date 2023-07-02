import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { FilterLabel, FilterInput, LabelBox } from './Filter.styled';

export function Filter({ value, onFilter }) {
  return (
    <FilterLabel>
      <LabelBox>
        <BsSearch />
        Find contacts by name
      </LabelBox>
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={onFilter}
        placeholder="Name"
      />
    </FilterLabel>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
