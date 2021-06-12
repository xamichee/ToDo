import React from "react";
import TasksFilter from "./TasksFilter";

const filters = [
  {id: 1, name: 'All', className: 'selected'},
  {id: 2, name: 'Active', className: ''},
  {id: 3, name: 'Completed', className: ''},
]

const Footer = () => {
  return (
  <footer className="footer">
      <span className="todo-count">1 items left</span>
      <ul className="filters">
        {filters.map(elem => {
          return <TasksFilter elem={elem} />
        })}
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}

export default Footer;