import React from "react";
import PropTypes from 'prop-types';
import TasksFilter from "./TasksFilter";
import './footer.css'

function Footer(props) {
  const filters = [
    {id: 1, name: 'All', className: ''},
    {id: 2, name: 'Active', className: ''},
    {id: 3, name: 'Completed', className: ''},
  ]

  const {onFilter, onClearComplete, left} = props;

  Footer.defaultProps = {
    onFilter: () => {},
    onClearComplete: () => {},
    left: () => {}
  }

  Footer.propTypes = {
    onFilter: PropTypes.func,
    onClearComplete: PropTypes.func,
    left: PropTypes.func
  }

    return (
      <footer className="footer">
        <span className="todo-count">{left} items left</span>
        <ul className="filters">
          {filters.map(elem => {
            return <TasksFilter
              elem={elem}
              onFilter={onFilter}
            />
          })}
        </ul>
        <button
          className="clear-completed"
          onClick={onClearComplete}>Clear completed
        </button>
      </footer>
    )
}

export default Footer;
