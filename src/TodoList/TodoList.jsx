import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import TodoListItem from '../TodoListItem/TodoListItem';

import './TodoList.css';

function TodoList({ todos, activeFilter}) {

  TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    activeFilter: PropTypes.string.isRequired,
  };

  const questsToRender = todos.filter((elem) => {
    switch (activeFilter) {
      case 'Completed': return (elem.done)
      case 'Active': return (!elem.done)
      default: return true;
    }
  });

  return (
    <ul className="todo-list">
      {questsToRender.map((elem) => (
        <TodoListItem
          key={elem.id}
          quest={elem}
          quests={questsToRender}/>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
  activeFilter: state.activeFilter,
});

export default connect(mapStateToProps)(TodoList)
