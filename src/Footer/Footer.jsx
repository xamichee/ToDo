import React from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';

import TasksFilter from '../TasksFilter/TasksFilter';
import { clearComplete, setFilter, editSubmit } from '../redux/todo.slice';

import './Footer.css';

function Footer({ todos, filtersList, editingValue, editingId, }) {
  const dispatch = useDispatch();

  const left = todos.filter((elem) => !elem.done).length;

  return (
    <footer className="footer">
      <span className="todo-count">{left} items left</span>
      <ul className="filters">
        {filtersList.map((elem) => (
          <TasksFilter
            key={elem.id}
            elem={elem}
            onFilter={(event) => {
              if (editingValue) {
                dispatch(editSubmit(editingId, editingValue));
              }
              dispatch(setFilter(event));
            }}
          />
        ))}
      </ul>
      <button type="button" className="clear-completed" onClick={dispatch(clearComplete)}>
        Clear completed
      </button>
    </footer>
  );
}

const mapStateToProps = ({todos}) => ({...todos});

export default connect(mapStateToProps)(Footer);

Footer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  filtersList: PropTypes.arrayOf(PropTypes.object).isRequired,
  editingValue: PropTypes.string.isRequired,
  editingId: PropTypes.string.isRequired,
};