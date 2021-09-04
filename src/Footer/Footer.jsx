import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import TasksFilter from '../TasksFilter/TasksFilter';
import { clearComplete, setFilter, editSubmit } from "../redux/store.actions";

import './Footer.css';

function Footer({ todos, filters, clearComplete: onClearComplete, setFilter: onFilter,editingValue, editingId, editSubmit: editSubmitTodo }) {

  Footer.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    clearComplete: PropTypes.func.isRequired,
    setFilter: PropTypes.func.isRequired,
    editSubmit: PropTypes.func.isRequired,
    filters: PropTypes.arrayOf(PropTypes.object).isRequired,
    editingValue: PropTypes.string.isRequired,
    editingId: PropTypes.string.isRequired
  };

  const left = todos.filter((elem) => !elem.done).length;

  return (
    <footer className="footer">
      <span className="todo-count">{left} items left</span>
      <ul className="filters">
        {filters.map((elem) => (
          <TasksFilter
            key={elem.id}
            elem={elem}
            onFilter={event => {
              if (editingValue) {
                editSubmitTodo(editingId, editingValue);
              }
              onFilter(event)
            }}
          />
        ))}
      </ul>
      <button type="button" className="clear-completed" onClick={onClearComplete}>
        Clear completed
      </button>
    </footer>
  );
}

const mapStateToProps = state => ({
  todos: state.todos,
  filters: state.filtersList,
  editingValue: state.editingValue,
  editingId: state.editingId,
});

const mapDispatchToProps = dispatch => ({
  clearComplete: () => dispatch(clearComplete()),
  setFilter: event => dispatch(setFilter(event)),
  editSubmit: (id, value) => dispatch(editSubmit(id, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
