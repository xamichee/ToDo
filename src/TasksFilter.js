import React from "react";

const TasksFilter = (props) => {
  return (
    <li key={props.elem.id}>
      <button className={props.elem.className}>{props.elem.name}</button>
    </li>
  );
};

export default TasksFilter;