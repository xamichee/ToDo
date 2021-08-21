import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TodoListItem.css';
import classNames from 'classnames';
import Timer from "../Timer/Timer";
import ItemCreated from "../ItemCreated/ItemCreated";

import {onCheck, deleteItem, editItem, onEditSubmit} from "../Handlers/handlers";


export default function TodoListItem({ quest, quests, setQuests, isEditing, setIsEditing }) {

  const {title, id, done, date} = quest;

  let {className} = quest;

  const [label, setLabel] = useState(title);

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
    isEditing: PropTypes.bool.isRequired,
    setIsEditing: PropTypes.func.isRequired,
  }

  const onLabelChange = (ev) => setLabel(ev.target.value);

  const toggleCheck = () => {
    // timePause();
    onCheck(id, quests, setQuests)
  }

  className = classNames(className, {
    completed: done,
  });

  const onEdit = () => {
    if (!isEditing) {
      setIsEditing(true);
      editItem(id, setQuests);
    }
  }

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
          onEditSubmit(id, label, setQuests);
          setIsEditing(false);
        }}
      >
        <input type="text" className="edit" defaultValue={title} onChange={onLabelChange}/>
      </form>
    </li>
  );
};