import React from "react";
import './TasksFilter.css';

function TasksFilter(props) {
  const {elem, onFilter} = props;

  return (
    <li key={elem.id}>
      <button
        className={elem.className}
        onClick={onFilter}>{elem.name}</button>
    </li>
  );
}

export default TasksFilter;
