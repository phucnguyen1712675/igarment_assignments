import { useState, useEffect, useCallback } from 'react';
import { Timer, createTimer, TimerStatus } from '../core/timer';

export const useTimer = () => {
  const [timer] = useState<Timer>(createTimer);
  const [timerValue, setTimerValue] = useState<number>(0);
  const [status, setStatus] = useState<TimerStatus>(timer.getStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerValue(timer.getTimer());
      setStatus(timer.getStatus());
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleStart = useCallback(() => {
    timer.start();
  }, [timer]);

  const handlePause = useCallback(() => {
    timer.pause();
  }, [timer]);

  const handleReset = useCallback(() => {
    timer.reset();
  }, [timer]);

  return {
    timerValue,
    status,
    handleStart,
    handlePause,
    handleReset,
  };
}; 