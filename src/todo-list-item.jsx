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
    quest: PropTypes.object.isRequired,
    onCheckClick: PropTypes.func,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    onEditSubmit: PropTypes.func,
  }

  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  render () {
  const {title, id, done, date } = this.props.quest;
  let { className } = this.props.quest;
  const {onCheckClick, onDelete, onEdit, onEditSubmit} = this.props;

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
          className="icon icon-edit"
          onClick={onEdit} />
        <button
          className="icon icon-destroy"
          onClick={onDelete} />
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        onEditSubmit(id, this.state.label);
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
