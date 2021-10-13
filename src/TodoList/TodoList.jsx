import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import todosForRender from '../redux/todos.selector';
import TodoListItem from '../TodoListItem/TodoListItem';

import './TodoList.css';

function TodoList({ todos }) {

  return (
    <ul className="todo-list">
      {todos.map((elem) => (
        <TodoListItem key={elem.id} quest={elem} />
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({ todos: todosForRender(state) });

export default connect(mapStateToProps)(TodoList);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};