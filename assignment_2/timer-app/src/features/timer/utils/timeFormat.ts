export interface TimeDisplay {
  hours: string;
  minutes: string;
  seconds: string;
}

export const formatTime = (totalSeconds: number): TimeDisplay => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (num: number): string => String(num).padStart(2, '0');

  return {
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
  };
}; 