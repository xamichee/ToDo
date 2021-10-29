import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TasksFilter from '../TasksFilter/TasksFilter';
import { clearComplete, setFilter, editSubmit } from '../redux/todo.slice';

import './Footer.css';

function Footer() {
  const dispatch = useDispatch();
  const {todos, filtersList, editingValue, editingId} = useSelector(state => state.todos);

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
                dispatch(editSubmit({id: editingId, editingValue}));
              }
              dispatch(setFilter(event.target.textContent));
            }}
          />
        ))}
      </ul>
      <button type="button" className="clear-completed" onClick={() => dispatch(clearComplete())}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
