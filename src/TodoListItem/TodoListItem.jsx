import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './TodoListItem.css';
import classNames from 'classnames';
import { getMinutes, getSeconds } from 'date-fns';

function TodoListItem(props) {
  const {onCheckClick, onDelete, onEdit, onEditSubmit, quest} = props;
  const {title, id, done, created} = quest;

  let {className} = quest;
  // let inter = null;

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

  // const timeGo = (e) => {
  //   console.log(e.target.name);
  //   if (!inter) {
  //     setTimerColor('green')
  //     const timerFunc = () => {
  //       setTimer(tmr => tmr + 1000);
  //     }
  //     inter = setInterval(timerFunc, 1000);
  //     console.log(inter);
  //   }
  // };
  //
  // const timePause = (e) => {
  //   console.log(e.target.name);
  //   clearInterval(inter);
  //   setTimerColor('black' );
  // };

  const timeGo = () => {
    if (pause) {
      setTimerColor('green');
      setPause(false);
    }
  };

  const timePause = () => {
    if (!pause) {
      setPause(true);
      setTimerColor('black' );
    }
  };

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
        <input className="toggle" type="checkbox" checked={!!done} onChange={onCheckClick} />
        <label>
          <span className={`title ${timerColor}`}>{title}</span>
          <span className="description timer">
              <button aria-label="play" className="icon icon-play" type="button" name="play" onClick={timeGo} />
              <button aria-label="pause" className="icon icon-pause" type="button" name="pause" onClick={timePause} />
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
        <input type="text" className="edit" defaultValue={title} onChange={onLabelChange} />
      </form>
    </li>
  );


}

// export default class TodoListItem_ extends Component {
//   static defaultProps = {
//     onCheckClick: () => {},
//     onDelete: () => {},
//     onEdit: () => {},
//     onEditSubmit: () => {},
//   };
//
//   static propTypes = {
//     quest: PropTypes.shape({
//       id: PropTypes.number,
//       done: PropTypes.bool,
//       title: PropTypes.string,
//       className: PropTypes.string,
//       created: PropTypes.string,
//     }).isRequired,
//     onCheckClick: PropTypes.func,
//     onDelete: PropTypes.func,
//     onEdit: PropTypes.func,
//     onEditSubmit: PropTypes.func,
//   };
//
//   state = {
//     label: null,
//     timer: 0,
//     timerColor: 'black'
//   };
//
//   interval = null;
//
//   onLabelChange = (ev) => {
//     this.setState({
//       label: ev.target.value,
//     });
//   };
//
//   timeGo = () => {
//     if (!this.interval) {
//       this.setState({timerColor: 'green'});
//       const timerFunc = () => { this.setState(({ timer }) => ({ timer: timer + 1000 })) };
//       this.interval = setInterval(timerFunc, 1000);
//     }
//   };
//
//   timePause = () => {
//     clearInterval(this.interval);
//     this.interval = null;
//     this.setState({ timerColor: 'black' })
//   };
//
//   render() {
//     const { onCheckClick, onDelete, onEdit, onEditSubmit, quest } = this.props;
//     const { title, id, done, created } = quest;
//     let { className } = quest;
//     const { label, timerColor, timer } = this.state;
//
//     const minutes = getMinutes(timer);
//     const seconds = getSeconds(timer);
//
//     const minutesDraw = minutes < 10 ? `0${minutes}` : minutes;
//     const secondsDraw = seconds < 10 ? `0${seconds}` : seconds;
//
//     className = classNames(className, {
//       completed: done,
//     });
//
//     return (
//       <li className={className}>
//         <div className="view">
//           <input className="toggle" type="checkbox" checked={!!done} onChange={onCheckClick} />
//           <label>
//             <span className={`title ${timerColor}`}>{title}</span>
//             <span className="description timer">
//               <button aria-label="play" className="icon icon-play" type="button" onClick={this.timeGo} />
//               <button aria-label="pause" className="icon icon-pause" type="button" onClick={this.timePause} />
//               <span className="time">
//                 {minutesDraw}:{secondsDraw}
//               </span>
//             </span>
//             <span className="description">{created}</span>
//           </label>
//           <button aria-label="edit" type="button" className="icon icon-edit" onClick={onEdit} />
//           <button aria-label="delete" type="button" className="icon icon-destroy" onClick={onDelete} />
//         </div>
//         <form
//           onSubmit={(event) => {
//             event.preventDefault();
//             onEditSubmit(id, label);
//           }}
//         >
//           <input type="text" className="edit" defaultValue={title} onChange={this.onLabelChange} />
//         </form>
//       </li>
//     );
//   }
// }

export default TodoListItem;