export const TIMER_STATUS = {
  IDLE: 'idle',
  RUNNING: 'running',
  PAUSED: 'paused',
} as const;

export type TimerStatus = typeof TIMER_STATUS[keyof typeof TIMER_STATUS];

export interface Timer {
  start: () => void;
  pause: () => void;
  reset: () => void;
  getTimer: () => number;
  getStatus: () => TimerStatus;
}

const TIMEOUT = 1000;

export const createTimer = (): Timer => {
  let count = 0;
  let status: TimerStatus = TIMER_STATUS.IDLE;

  const start = async () => {
    if (status === TIMER_STATUS.RUNNING) return;

    status = TIMER_STATUS.RUNNING;

    while (status === TIMER_STATUS.RUNNING) {
      await new Promise((resolve) => setTimeout(resolve, TIMEOUT));
      if (status === TIMER_STATUS.RUNNING) {
        count++;
      }
    }
  };

  const pause = () => {
    if (status !== TIMER_STATUS.RUNNING) return;
    status = TIMER_STATUS.PAUSED;
  };

  const reset = () => {
    if (status !== TIMER_STATUS.PAUSED) return;
    count = 0;
    status = TIMER_STATUS.IDLE;
  };

  const getTimer = () => count;
  const getStatus = () => status;

  return {
    start,
    pause,
    reset,
    getTimer,
    getStatus,
  };
};
