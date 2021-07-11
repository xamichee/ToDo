import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoListItem.css';
import classNames from 'classnames';

export default class TodoListItem extends Component {
  static defaultProps = {
    onCheckClick: () => {},
    onDelete: () => {},
    onEdit: () => {},
    onEditSubmit: () => {},
  };

  static propTypes = {
    quest: PropTypes.shape({
      id: PropTypes.number,
      done: PropTypes.bool,
      title: PropTypes.string,
      className: PropTypes.string,
      created: PropTypes.string,
    }).isRequired,
    onCheckClick: PropTypes.func,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    onEditSubmit: PropTypes.func,
  };

  state = {
    label: null,
  };

  onLabelChange = (ev) => {
    this.setState({
      label: ev.target.value,
    });
  };

  render() {
    const { onCheckClick, onDelete, onEdit, onEditSubmit, quest } = this.props;
    const { title, id, done, created } = quest;
    let { className } = quest;
    const { label } = this.state;

    className = classNames(className, {
      completed: done,
    });

    return (
      <li className={className}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={!!done} onChange={onCheckClick} />
          <label>
            <span className="description">{title}</span>
            <span className="created">{created}</span>
          </label>
          <button aria-label="edit" type="button" className="icon icon-edit" onClick={onEdit} />
          <button aria-label="delete" type="button" className="icon icon-destroy" onClick={onDelete} />
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onEditSubmit(id, label);
          }}
        >
          <input type="text" className="edit" defaultValue={title} onChange={this.onLabelChange} />
        </form>
      </li>
    );
  }
}