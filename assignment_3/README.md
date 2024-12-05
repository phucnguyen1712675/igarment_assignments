# Profile Page Component Breakdown

## Main Components

### 1. Navigation Bar (`NavBar`)

- Logo
- Main navigation links (Rack Rental, Server Leasing, About Us, etc.)
- User dropdown menu

### 2. Profile Header (`ProfileHeader`)

- Profile icon/avatar
- "Profile Page" title
- Edit button

### 3. Personal Details Form (`PersonalDetailsForm`)

Contains user information fields:

- Email
- Name
- Phone Number
- Password
- Company Name
- Company Address

### 4. Services Section (`ServicesGrid`)

Grid of available services with icons:

- VPS
- Rack Rental

## Component Hierarchy

```
ProfilePage
├── NavBar
├── ProfileHeader
├── PersonalDetailsForm
└── ServicesGrid
```

## Component Responsibilities

### NavBar

- Handles top-level navigation
- Manages user authentication state
- Provides access to admin functions

### ProfileHeader

- Displays page title and user context
- Provides edit functionality for profile

### PersonalDetailsForm

- Manages user's personal and company information
- Handles form validation
- Provides password update functionality

### ServicesGrid

- Displays available services as clickable cards
- Shows service icons and labels
- Handles navigation to service-specific pages

## Data Flow

1. User data is passed to ProfilePage component
2. ProfilePage distributes relevant data to child components
3. Form updates are managed through state management (e.g., Redux/Context)
4. Service selections trigger navigation events
