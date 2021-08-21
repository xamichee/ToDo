import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TasksFilter from '../TasksFilter/TasksFilter';
import './Footer.css';
import {filtersList} from "../InitialState/initialState";
import {onFilter} from "../Handlers/handlers";

export default function Footer({ quests, setQuests, setActiveFilter}) {
  const [filters, setFilters] = useState(filtersList);

  Footer.propTypes = {
    setActiveFilter: PropTypes.func.isRequired,
    quests: PropTypes.arrayOf(PropTypes.object).isRequired,
    setQuests: PropTypes.func.isRequired,
  };

  const onClearComplete = () => {
    setQuests(Quests => Quests.filter((elem) => !elem.done))
  };

  const left = quests.filter((elem) => !elem.done).length;

  return (
    <footer className="footer">
      <span className="todo-count">{left} items left</span>
      <ul className="filters">
        {filters.map((elem) => (
          <TasksFilter
            key={elem.id}
            elem={elem}
            onFilter={event => onFilter(event, setActiveFilter, setFilters)}
          />
        ))}
      </ul>
      <button type="button" className="clear-completed" onClick={onClearComplete}>
        Clear completed
      </button>
    </footer>
  );
};
