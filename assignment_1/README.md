# JavaScript Timer Implementation

A simple timer implementation in JavaScript with start, pause, and reset functionality.

## Features

- Start the timer
- Pause the timer
- Reset the timer (only when paused)
- Get current timer value

## How It Works

The timer uses a factory function `createTimer()` that returns an object with four methods: 

```javascript
const timer = createTimer()
timer.start() // Starts the timer
timer.pause() // Pauses the timer
timer.reset() // Resets the timer (only works when paused)
timer.getTimer() // Gets current timer value
```


### Timer States

The timer has three possible states:
- `IDLE`: Initial state and after reset
- `RUNNING`: When the timer is counting
- `PAUSED`: When the timer is paused

### State Transitions
- `IDLE` → `RUNNING` (via start)
- `RUNNING` → `PAUSED` (via pause)
- `PAUSED` → `IDLE` (via reset)

## Example Usage

```javascript
const timer = createTimer()
timer.start()
// Do something...
timer.pause()
// Reset the timer (only works when paused)
timer.reset()
```


## Implementation Details

- Uses async/await for timing
- Counts in 1-second intervals
- No external dependencies
- Uses closure for state management

## Notes

- Reset only works when the timer is paused
- Start has no effect if timer is already running
- Pause has no effect if timer is not running