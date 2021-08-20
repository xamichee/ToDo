import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TodoListItem.css';
import classNames from 'classnames';
import Timer from "../Timer/Timer";
import ItemCreated from "../ItemCreated/ItemCreated";

export default function TodoListItem({ onDelete, onEdit, onEditSubmit, quest, onCheck }) {

  const {title, id, done, date} = quest;

  let {className} = quest;

  const [label, setLabel] = useState(title);

  TodoListItem.propTypes = {
    quest: PropTypes.shape({
      id: PropTypes.number,
      done: PropTypes.bool,
      title: PropTypes.string,
      className: PropTypes.string,
      date: PropTypes.number,
    }).isRequired,
    onCheck: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onEditSubmit: PropTypes.func.isRequired,
  }

  const onLabelChange = (ev) => setLabel(ev.target.value);

  const toggleCheck = () => {
    // timePause();
    onCheck();
  }

  className = classNames(className, {
    completed: done,
  });

  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={!!done} onChange={toggleCheck}/>
        <label>
          <span className="title">{title}</span>
          <Timer />
          <ItemCreated date={date} />
        </label>
        <button aria-label="edit" type="button" className="icon icon-edit" onClick={onEdit}/>
        <button aria-label="delete" type="button" className="icon icon-destroy" onClick={onDelete}/>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onEditSubmit(id, label);
        }}
      >
        <input type="text" className="edit" defaultValue={title} onChange={onLabelChange}/>
      </form>
    </li>
  );
};