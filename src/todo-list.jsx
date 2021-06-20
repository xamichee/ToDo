import React from "react";
import PropTypes from 'prop-types';
import './todo-list.css';
import TodoListItem from "./todo-list-item";

function TodoList(props) {
  TodoList.defaultProps = {
    onDelete: () => {},
    onEdit: () => {},
    onCheckClick: () => {},
    onEditSubmit: () => {},
  }

  TodoList.propTypes = {
    quests: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    onCheckClick: PropTypes.func,
    onEditSubmit: PropTypes.func,
  }

  const {quests, onDelete, onEdit, onCheckClick, onEditSubmit} = props;

  return (
    <ul className='todo-list'>
      {quests.map(elem => <TodoListItem
        quest = {elem}
        onDelete = {() => onDelete(elem.id)}
        onEdit = {() => onEdit(elem.id)}
        onCheckClick = {() => onCheckClick(elem.id)}
        onEditSubmit = {onEditSubmit}
      />)}
    </ul>
  )
}

export default TodoList;
