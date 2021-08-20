import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from '../TodoListItem/TodoListItem';
import {onCheck, deleteItem, editItem} from "../Handlers/handlers";

import './TodoList.css';

export default function TodoList(props) {
  TodoList.defaultProps = {
    onEditSubmit: () => {
    },
  };

  TodoList.propTypes = {
    quests: PropTypes.arrayOf(PropTypes.object).isRequired,
    onEditSubmit: PropTypes.func,
    setQuests: PropTypes.func.isRequired,
  };

  const {quests, onEditSubmit, setQuests} = props;

  return (
    <ul className="todo-list">
      {quests.map((elem) => (
        <TodoListItem
          key={elem.id}
          quest={elem}
          onDelete={() => deleteItem(elem.id, setQuests)}
          onEdit={() => editItem(elem.id, setQuests)}
          onCheck={() => onCheck(elem.id, quests, setQuests)}
          onEditSubmit={onEditSubmit}
          setQuests={setQuests}
        />
      ))}
    </ul>
  );
};
