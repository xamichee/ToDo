import React from 'react';
import PropTypes from 'prop-types';
import './TasksFilter.css';

export default function TasksFilter({ elem, onFilter }) {

  return (
    <li>
      <button type="button" className={elem.className} onClick={onFilter}>
        {elem.name}
      </button>
    </li>
  );
}

TasksFilter.propTypes = {
  elem: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    className: PropTypes.string,
  }).isRequired,
  onFilter: PropTypes.func.isRequired,
};
