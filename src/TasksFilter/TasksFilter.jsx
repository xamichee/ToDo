import React from 'react';
import PropTypes from 'prop-types';
import './TasksFilter.css';

function TasksFilter(props) {
  const { elem, onFilter } = props;

  TasksFilter.defaultProps = {
    onFilter: () => {},
  };

  TasksFilter.propTypes = {
    elem: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      className: PropTypes.string,
    }).isRequired,
    onFilter: PropTypes.func,
  };

  return (
    <li key={elem.id}>
      <button type="button" className={elem.className} onClick={onFilter}>
        {elem.name}
      </button>
    </li>
  );
}

export default TasksFilter;
