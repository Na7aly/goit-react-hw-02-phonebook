import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, setFilter }) => {
  const handleChange = event => {
    setFilter(event.target.value);
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={handleChange}
      placeholder="Search contacts..."
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
