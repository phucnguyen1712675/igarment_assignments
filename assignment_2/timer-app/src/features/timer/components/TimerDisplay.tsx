import { useTimer } from '../hooks/useTimer';
import { formatTime } from '../utils/timeFormat';
import { TIMER_STATUS } from '../core/timer';
import styles from './TimerDisplay.module.css';

export const TimerDisplay: React.FC = () => {
  const { timerValue, status, handleStart, handlePause, handleReset } = useTimer();
  const timeDisplay = formatTime(timerValue);

  return (
    <div className={styles.timerDisplay}>
      <h2>Timer Display</h2>
      <div className={styles.timerValue}>Raw Value: {timerValue} seconds</div>
      <div className={styles.timerFormatted}>
        Formatted Time: {timeDisplay.hours}:{timeDisplay.minutes}:{timeDisplay.seconds}
      </div>
      <div className={styles.timerControls}>
        <button 
          onClick={handleStart}
          disabled={status === TIMER_STATUS.RUNNING}
        >
          Start
        </button>
        <button 
          onClick={handlePause}
          disabled={status !== TIMER_STATUS.RUNNING}
        >
          Pause
        </button>
        <button 
          onClick={handleReset}
          disabled={status === TIMER_STATUS.RUNNING}
        >
          Reset
        </button>
      </div>
      <div className={styles.timerStatus}>
        Status: {status}
      </div>
    </div>
  );
};

export default TimerDisplay;