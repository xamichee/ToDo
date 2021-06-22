import React from "react";
import PropTypes from 'prop-types';
import './TasksFilter.css';

function TasksFilter(props) {
  const {elem, onFilter} = props;

  TasksFilter.defaultProps = {
    onFilter: () => {}
  }

  TasksFilter.propTypes = {
    elem: PropTypes.object.isRequired,
    onFilter: PropTypes.func
  }

  return (
    <li key={elem.id}>
      <button className={elem.className} onClick={onFilter} >
        {elem.name}
      </button>
    </li>
  );
}

export default TasksFilter;
