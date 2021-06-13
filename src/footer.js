import React, {Component} from "react";
import TasksFilter from "./TasksFilter";
import './footer.css'

export default class Footer extends Component {

  render () {

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
}

const filters = [
  {id: 1, name: 'All', className: 'selected'},
  {id: 2, name: 'Active', className: ''},
  {id: 3, name: 'Completed', className: ''},
]
