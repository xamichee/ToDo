import React from "react";
import PropTypes from 'prop-types';
import './todo-list-item.css';
import formatDistanceToNow from "date-fns/formatDistanceToNow";

function TodoListItem(props) {
  TodoListItem.defaultProps = {
    onCheckClick: () => {},
    onDelete: () => {}
  }

  TodoListItem.propTypes = {
    quest: PropTypes.object.isRequired,
    onCheckClick: PropTypes.func,
    onDelete: PropTypes.func,
  }

  const {title, id, done, date } = props.quest;
  let { className } = props.quest;
  const {onCheckClick, onDelete} = props;

  if (done) className += ' completed';

  return (
    <li key={id} className={className}>
      <div className="view">
        <input className="toggle" type="checkbox"
               checked={!!done}
               onChange={onCheckClick}/>
        <label>
          <span className="description">{title}</span>
          <span className="created">{formatDistanceToNow(date)}</span>
        </label>
        <button
          className="icon icon-edit"/>
        <button
          className="icon icon-destroy"
          onClick={onDelete}/>
      </div>
      {className === 'editing' ? <input type="text" className="edit" value="Editing task"/> : null}
    </li>
  );
}

export default TodoListItem;