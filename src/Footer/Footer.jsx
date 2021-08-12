import React from 'react';
import PropTypes from 'prop-types';
import TasksFilter from '../TasksFilter/TasksFilter';
import './Footer.css';

export default function Footer(props) {
  const {onFilter, onClearComplete, left, filters} = props;

  Footer.defaultProps = {
    onFilter: () => {
    },
    onClearComplete: () => {
    },
  };

  Footer.propTypes = {
    onFilter: PropTypes.func,
    onClearComplete: PropTypes.func,
    left: PropTypes.number.isRequired,
    filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  return (
    <footer className="footer">
      <span className="todo-count">{left} items left</span>
      <ul className="filters">
        {filters.map((elem) => (
          <TasksFilter key={elem.id} elem={elem} onFilter={onFilter}/>
        ))}
      </ul>
      <button type="button" className="clear-completed" onClick={onClearComplete}>
        Clear completed
      </button>
    </footer>
  );
};
