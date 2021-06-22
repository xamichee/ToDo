import React from "react";
import PropTypes from 'prop-types';
import TasksFilter from "./TasksFilter";
import './footer.css'

function Footer(props) {
  const {onFilter, onClearComplete, left, filters} = props;

  Footer.defaultProps = {
    onFilter: () => {},
    onClearComplete: () => {},
  }

  Footer.propTypes = {
    onFilter: PropTypes.func,
    onClearComplete: PropTypes.func,
    left: PropTypes.number,
    filters: PropTypes.arrayOf(PropTypes.object)
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
