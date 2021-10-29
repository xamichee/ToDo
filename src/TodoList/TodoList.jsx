import React from 'react';
import { useSelector } from 'react-redux';

import todosForRender from '../redux/todos.selector';
import TodoListItem from '../TodoListItem/TodoListItem';

import './TodoList.css';

function TodoList() {
  const todos = todosForRender(useSelector(state => state))

  return (
    <ul className="todo-list">
      {todos.map((elem) => (
        <TodoListItem key={elem.id} quest={elem} />
      ))}
    </ul>
  );
}

export default TodoList;
