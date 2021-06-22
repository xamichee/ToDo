import React, { Component } from "react";
import PropTypes from 'prop-types';
import './todo-list-item.css';
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default class TodoListItem extends Component {

  static defaultProps = {
    onCheckClick: () => {},
    onDelete: () => {},
    onEdit: () => {},
    onEditSubmit: () => {},
  }

  static propTypes = {
    quest: PropTypes.shape({
      id: PropTypes.number,
      done: PropTypes.bool,
      title: PropTypes.string,
      className: PropTypes.string,
      date: PropTypes.number
    }).isRequired,
    onCheckClick: PropTypes.func,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    onEditSubmit: PropTypes.func,
  }

  state = {
    label: ''
  }

  onLabelChange = (ev) => {
    this.setState({
      label: ev.target.value
    })
  }

  render () {
  const {onCheckClick, onDelete, onEdit, onEditSubmit, quest} = this.props;
  const {title, id, done, date } = quest;
  let { className } = quest;
  const { label } = this.state;

  if (done) className += ' completed';

  return (
    <li key={id} className={className}>
      <div className="view">
        <input className="toggle" type="checkbox"
               checked={!!done}
               onChange={onCheckClick} />
        <label>
          <span className="description">{title}</span>
          <span className="created">{formatDistanceToNow(date)}</span>
        </label>
        <button
          aria-label="edit"
          type="button"
          className="icon icon-edit"
          onClick={onEdit} />
        <button
          aria-label="delete"
          type="button"
          className="icon icon-destroy"
          onClick={onDelete} />
      </div>
      <form onSubmit={(event) => {
        event.preventDefault();
        onEditSubmit(id, label);
      }}>
        <input
          type="text"
          className="edit"
          defaultValue={title}
          onChange={this.onLabelChange}
        />
      </form>
    </li>
  );
}}
