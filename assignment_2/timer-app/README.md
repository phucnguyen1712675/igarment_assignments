# Timer Display React Application

A React TypeScript application that implements a timer with display in both raw seconds and formatted HH:MM:SS format.

## Features

- Display timer in raw seconds
- Display timer in HH:MM:SS format
- Start/Pause/Reset functionality
- Visual status indication
- TypeScript support
- Modular CSS styling

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:

```bash
npm install
```

## Project Structure

```
src/
├── features/
│ └── timer/
    │ ├── components/
    │ │ ├── TimerDisplay.tsx
    │ │ └── TimerDisplay.module.css
    │ ├── core/
    │ │ └── timer.ts
    │ ├── hooks/
    │ │ └── useTimer.ts
    │ └── utils/
    │   └── timeFormat.ts
└── App.tsx
```


## Running the Application

To start the development server:
```bash
npm start
```


The application will be available at `http://localhost:3000`

## Usage

The timer interface provides three main controls:

- **Start**: Begins the timer (disabled while running)
- **Pause**: Pauses the timer (only enabled while running)
- **Reset**: Resets the timer to 0 (only enabled while paused)

The display shows:
- Raw timer value in seconds
- Formatted time in HH:MM:SS
- Current timer status

## Development

### Key Components

1. **Timer Core (timer.ts)**
   - Manages timer state and operations
   - Provides timer interface

2. **Timer Hook (useTimer.ts)**
   - Custom React hook for timer state management
   - Handles timer updates and callbacks

3. **Timer Display (TimerDisplay.tsx)**
   - Main UI component
   - Renders timer values and controls

4. **Time Format Utility (timeFormat.ts)**
   - Handles time formatting logic
   - Converts seconds to HH:MM:SS format

### Styling

The application uses CSS Modules for styling. Each component has its own scoped CSS file to prevent style conflicts.

