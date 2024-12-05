const TIMER_STATUS = Object.freeze({
  IDLE: 'idle',
  RUNNING: 'running',
  PAUSED: 'paused',
})

const TIMEOUT = 1000

const createTimer = () => {
  let count = 0
  let status = TIMER_STATUS.IDLE

  const start = async () => {
    if (status === TIMER_STATUS.RUNNING) return

    status = TIMER_STATUS.RUNNING

    while (status === TIMER_STATUS.RUNNING) {
      await new Promise((resolve) => setTimeout(resolve, TIMEOUT))
      if (status === TIMER_STATUS.RUNNING) {
        count++
      }
    }
  }

  const pause = () => {
    if (status !== TIMER_STATUS.RUNNING) return
    status = TIMER_STATUS.PAUSED
  }

  const reset = () => {
    if (status !== TIMER_STATUS.PAUSED) return
    count = 0
    status = TIMER_STATUS.IDLE
  }

  const getTimer = () => count

  return {
    start,
    pause,
    reset,
    getTimer,
  }
}

// Test the timer
const timer = createTimer()

// Log timer value every second
const logTimer = setInterval(() => {
  console.log('Timer:', timer.getTimer())
}, 1000)

// Start the timer
timer.start()

// Pause after 5 seconds
setTimeout(() => {
  timer.pause()
  console.log('Timer paused at:', timer.getTimer())
}, 5000)

// Reset after 6 seconds
setTimeout(() => {
  timer.reset()
  console.log('Timer reset to:', timer.getTimer())
  clearInterval(logTimer) // Stop logging
}, 6000)
