import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from '../TodoListItem/TodoListItem';
import {onCheck, deleteItem, editItem, onEditSubmit} from "../Handlers/handlers";

import './TodoList.css';

export default function TodoList({quests, setQuests}) {

  TodoList.propTypes = {
    quests: PropTypes.arrayOf(PropTypes.object).isRequired,
    setQuests: PropTypes.func.isRequired,
  };

  return (
    <ul className="todo-list">
      {quests.map((elem) => (
        <TodoListItem
          key={elem.id}
          quest={elem}
          onDelete={() => deleteItem(elem.id, setQuests)}
          onEdit={() => editItem(elem.id, setQuests)}
          onCheck={() => onCheck(elem.id, quests, setQuests)}
          onEditSubmit={(id, value) => onEditSubmit(id, value, setQuests)}
          setQuests={setQuests}
        />
      ))}
    </ul>
  );
};
