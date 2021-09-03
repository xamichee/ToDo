import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from "react-redux";

import { removeTodo, editTodo, editSubmit, editChange, checkItemDone } from "../redux/store.actions";

import './TodoListItem.css';
import Timer from "../Timer/Timer";
import ItemCreated from "../ItemCreated/ItemCreated";

function TodoListItem({ quest, editingValue, editChange: onChange, checkItemDone: toggleCheck,
                        editSubmit: editSubmitTodo, removeTodo: removeTodoItem, editTodo: editTodoItem }) {

  const {title, id, done, date} = quest;

  let {className} = quest;

  TodoListItem.propTypes = {
    quest: PropTypes.shape({
      id: PropTypes.string,
      done: PropTypes.bool,
      title: PropTypes.string,
      className: PropTypes.string,
      date: PropTypes.number,
    }).isRequired,
    editingValue: PropTypes.string.isRequired,
    removeTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    editSubmit: PropTypes.func.isRequired,
    editChange: PropTypes.func.isRequired,
    checkItemDone: PropTypes.func.isRequired,

  }

  function onLabelChange(ev) {
    const {value} = ev.target;
    onChange(value);
  }

  className = classNames(className, {
    completed: done,
  });

  const onEdit = () => {
    if (!editingValue) {
      editTodoItem(id, title);
    }
  }

  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={!!done} onChange={() => toggleCheck(id)}/>
        <label>
          <span className="title">{title}</span>
          <Timer done={done}/>
          <ItemCreated date={date} />
        </label>
        <button aria-label="edit" type="button" className="icon icon-edit" onClick={onEdit}/>
        <button aria-label="delete" type="button" className="icon icon-destroy" onClick={() => removeTodoItem(id)}/>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          editSubmitTodo(id, editingValue);
        }}
      >
        <input type="text" className="edit" defaultValue={title} onChange={onLabelChange}/>
      </form>
    </li>
  );
}

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id)),
  editTodo: (id,value) => dispatch(editTodo(id, value)),
  editSubmit: (id, value) => dispatch(editSubmit(id, value)),
  editChange: value => dispatch(editChange(value)),
  checkItemDone: id => dispatch(checkItemDone(id))
});

const mapStateToProps = store => ({
  editingValue: store.editingValue
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);