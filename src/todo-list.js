import React from "react";
import './todo-list.css';
import TodoListItem from "./todo-list-item";

function TodoList(props) {
  const {quests, onDelete, onEdit, onCheckClick} = props;

  return (
    <ul className='todo-list'>
      {quests.map(elem => <TodoListItem
        quest={elem}
        onDelete={() => onDelete(elem.id)}
        onEdit={() => onEdit(elem.id)}
        onCheckClick={() => onCheckClick(elem.id)}
      />)}
    </ul>
  )
}

export default TodoList;
