import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {getMinutes, getSeconds} from "date-fns";
import './Timer.css'

function Timer({done}) {

  Timer.propTypes = {
    done: PropTypes.bool.isRequired,
  }

  const [timer, setTimer] = useState(0);
  const [timerColor, setTimerColor] = useState('black');
  const [pause, setPause] = useState(true);

  const minutes = getMinutes(timer);
  const seconds = getSeconds(timer);
  const minutesDraw = minutes < 10 ? `0${minutes}` : minutes;
  const secondsDraw = seconds < 10 ? `0${seconds}` : seconds;

  const timeGo = () => {
    if (pause && !done) {
      setTimerColor('red');
      setPause(false);
    }
  };

  const timePause = () => {
    if (!pause) {
      setPause(true);
      setTimerColor('black');
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

  return (
    <div className="timer_wrapper">
      <span className="description timer">
        <button aria-label="play" className="icon icon-play" type="button" name="play" onClick={timeGo}/>
        <button aria-label="pause" className="icon icon-pause" type="button" name="pause" onClick={timePause}/>
        <span className="time" style={{color: timerColor}}>
          {minutesDraw}:{secondsDraw}
        </span>
      </span>
    </div>
  );
}

export default Timer;