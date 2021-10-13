import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TodoListItem from '../TodoListItem/TodoListItem';

import './TodoList.css';

function TodoList({ todos, activeFilter }) {

  const questsToRender = todos.filter((elem) => {
    switch (activeFilter) {
      case 'Completed':
        return elem.done;
      case 'Active':
        return !elem.done;
      default:
        return true;
    }
  });

  return (
    <ul className="todo-list">
      {questsToRender.map((elem) => (
        <TodoListItem key={elem.id} quest={elem} />
      ))}
    </ul>
  );
}

const mapStateToProps = ({ todos, activeFilter }) => ({ todos, activeFilter });

export default connect(mapStateToProps)(TodoList);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeFilter: PropTypes.string.isRequired,
};