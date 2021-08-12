import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './TodoListItem.css';
import classNames from 'classnames';
import { getMinutes, getSeconds } from 'date-fns';

export default function TodoListItem(props) {
  const {onCheckClick, onDelete, onEdit, onEditSubmit, quest} = props;
  const {title, id, done, created} = quest;

  let {className} = quest;

  const [label, setLabel] = useState(title);
  const [timer, setTimer] = useState(0);
  const [timerColor, setTimerColor] = useState('black');
  const [pause, setPause] = useState(true);


  const minutes = getMinutes(timer);
  const seconds = getSeconds(timer);
  const minutesDraw = minutes < 10 ? `0${minutes}` : minutes;
  const secondsDraw = seconds < 10 ? `0${seconds}` : seconds;

  TodoListItem.propTypes = {
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
  }

  TodoListItem.defaultProps = {
    onCheckClick: () => {
    },
    onDelete: () => {
    },
    onEdit: () => {
    },
    onEditSubmit: () => {
    },
  };

  const onLabelChange = (ev) => setLabel(ev.target.value);

  const timeGo = () => {
    if (pause && !done) {
      setTimerColor('green');
      setPause(false);
    }
  };

  const timePause = () => {
    if (!pause) {
      setPause(true);
      setTimerColor('black');
    }
  };

  const toggleCheck = () => {
    timePause();
    onCheckClick();
  }

  useEffect(() => {
    let interval;
    if (!pause) {
      const timerFunc = () => {
        setTimer(tmr => tmr + 1000);
      }
      interval = setInterval(timerFunc, 1000);
    }
    return () => {
      clearInterval(interval);
    }
  }, [pause]);

  className = classNames(className, {
    completed: done,
  });


  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={!!done} onChange={toggleCheck}/>
        <label>
          <span className={`title ${timerColor}`}>{title}</span>
          <span className="description timer">
              <button aria-label="play" className="icon icon-play" type="button" name="play" onClick={timeGo}/>
              <button aria-label="pause" className="icon icon-pause" type="button" name="pause" onClick={timePause}/>
              <span className="time">
                {minutesDraw}:{secondsDraw}
              </span>
            </span>
          <span className="description">{created}</span>
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