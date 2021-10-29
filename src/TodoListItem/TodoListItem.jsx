import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import { removeTodo, editTodo, editSubmit, editChange, checkItemDone } from '../redux/todo.slice';

import './TodoListItem.css';
import Timer from '../Timer/Timer';
import ItemCreated from '../ItemCreated/ItemCreated';

function TodoListItem({ quest }) {

  const {editingValue} = useSelector(state => state.todos);

  const {title, id, done, date} = quest;
  const dispatch = useDispatch();

  let {className} = quest;

  className = classNames(className, {
    completed: done,
  });

  const onEdit = () => {
    if (!editingValue) {
      console.log(id, title)
      dispatch(editTodo({id, title}));
    }
  };

  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={!!done} onChange={() => dispatch(checkItemDone(id))}/>
        <div className="label">
          <span className="title">{title}</span>
          <Timer done={done}/>
          <ItemCreated date={date}/>
        </div>
        <button aria-label="edit" type="button" className="icon icon-edit" onClick={onEdit}/>
        <button aria-label="delete" type="button" className="icon icon-destroy" onClick={() => dispatch(removeTodo(id))}/>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(editSubmit({id, editingValue}));
        }}
      >
        <input
          type="text"
          className="edit"
          defaultValue={title}
          onChange={({target: {value}}) => dispatch(editChange(value))}
        />
      </form>
    </li>
  );
}

export default TodoListItem;

TodoListItem.propTypes = {
  quest: PropTypes.shape({
    id: PropTypes.string,
    done: PropTypes.bool,
    title: PropTypes.string,
    className: PropTypes.string,
    date: PropTypes.number,
  }).isRequired,
};