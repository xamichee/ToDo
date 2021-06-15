import React, {Component} from "react";
import TasksFilter from "./TasksFilter";
import './footer.css'

export default class Footer extends Component {

  filters = [
    {id: 1, name: 'All', className: ''},
    {id: 2, name: 'Active', className: ''},
    {id: 3, name: 'Completed', className: ''},
  ]

  // onFilter = (e) => {
  //   console.dir(e.target.textContent)
  // }

  render () {
    const {onFilter} = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">1 items left</span>
        <ul className="filters">
          {this.filters.map(elem => {
            return <TasksFilter elem={elem} onFilter={onFilter}/>
          })}
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    )
  }
}


