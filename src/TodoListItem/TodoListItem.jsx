import React from 'react';
import PropTypes from 'prop-types';

import './TodoListItem.css';
import classNames from 'classnames';
import Timer from "../Timer/Timer";
import ItemCreated from "../ItemCreated/ItemCreated";

import {onCheck, deleteItem, editItem, onEditSubmit} from "../Handlers/handlers";

export default function TodoListItem({ quest, quests, setQuests, editingValue, setEditingValue }) {

  const {title, id, done, date} = quest;

  let {className} = quest;

  TodoListItem.propTypes = {
    quests: PropTypes.arrayOf(PropTypes.object).isRequired,
    quest: PropTypes.shape({
      id: PropTypes.number,
      done: PropTypes.bool,
      title: PropTypes.string,
      className: PropTypes.string,
      date: PropTypes.number,
    }).isRequired,
    setQuests: PropTypes.func.isRequired,
    editingValue: PropTypes.string.isRequired,
    setEditingValue: PropTypes.func.isRequired,
  }

  function onLabelChange(ev) {
    const {value} = ev.target;
    setEditingValue(value);
  }

  const toggleCheck = () => {
    // timePause();
    onCheck(id, quests, setQuests)
  }

  className = classNames(className, {
    completed: done,
  });

  const onEdit = () => {
    if (!editingValue) {
      setEditingValue(title);
      editItem(id, setQuests);
    }
  }

  console.log(title);

  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={!!done} onChange={toggleCheck}/>
        <label>
          <span className="title">{title}</span>
          <Timer done={done}/>
          <ItemCreated date={date} />
        </label>
        <button aria-label="edit" type="button" className="icon icon-edit" onClick={onEdit}/>
        <button aria-label="delete" type="button" className="icon icon-destroy" onClick={() => deleteItem(id, setQuests)}/>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onEditSubmit(id, editingValue, '', setQuests);
          setEditingValue('');
        }}
      >
        <input type="text" className="edit" defaultValue={title} onChange={onLabelChange}/>
      </form>
    </li>
  );
};