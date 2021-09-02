import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from '../TodoListItem/TodoListItem';

import './TodoList.css';

export default function TodoList({ quests, setQuests, editingValue, setEditingValue}) {

  TodoList.propTypes = {
    quests: PropTypes.arrayOf(PropTypes.object).isRequired,
    setQuests: PropTypes.func.isRequired,
    editingValue: PropTypes.string.isRequired,
    setEditingValue: PropTypes.func.isRequired,
  };

  return (
    <ul className="todo-list">
      {quests.map((elem) => (
        <TodoListItem
          key={elem.id}
          quest={elem}
          quests={quests}
          setQuests={setQuests}
          editingValue={editingValue}
          setEditingValue={setEditingValue}/>
      ))}
    </ul>
  );
};
