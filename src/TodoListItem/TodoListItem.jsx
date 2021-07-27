import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoListItem.css';
import classNames from 'classnames';
import { getMinutes, getSeconds } from 'date-fns';

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
    timer: 0,
    timerColor: 'black'
  };

  interval = null;

  onLabelChange = (ev) => {
    this.setState({
      label: ev.target.value,
    });
  };

  timeGo = () => {
    if (!this.interval) {
      this.setState({timerColor: 'green'});
      const timerFunc = () => { this.setState(({ timer }) => ({ timer: timer + 1000 })) };
      this.interval = setInterval(timerFunc, 1000);
    }
  };

  timePause = () => {
    clearInterval(this.interval);
    this.interval = null;
    this.setState({ timerColor: 'black' })
  };

  render() {
    const { onCheckClick, onDelete, onEdit, onEditSubmit, quest } = this.props;
    const { title, id, done, created } = quest;
    let { className } = quest;
    const { label, timerColor, timer } = this.state;

    const minutes = getMinutes(timer);
    const seconds = getSeconds(timer);

    const minutesDraw = minutes < 10 ? `0${minutes}` : minutes;
    const secondsDraw = seconds < 10 ? `0${seconds}` : seconds;

    className = classNames(className, {
      completed: done,
    });

    return (
      <li className={className}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={!!done} onChange={onCheckClick} />
          <label>
            <span className={`title ${timerColor}`}>{title}</span>
            <span className="description timer">
              <button aria-label="play" className="icon icon-play" type="button" onClick={this.timeGo} />
              <button aria-label="pause" className="icon icon-pause" type="button" onClick={this.timePause} />
              <span className="time">
                {minutesDraw}:{secondsDraw}
              </span>
            </span>
            <span className="description">{created}</span>
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
