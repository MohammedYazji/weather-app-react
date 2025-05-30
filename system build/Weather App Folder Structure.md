# Weather App Folder Structure

## Root Structure
```
weather-app-react/
├── public/                  # Static files
│   ├── index.html           # HTML template
│   ├── favicon.ico          # App favicon
│   ├── manifest.json        # PWA manifest
│   └── assets/              # Static assets
│       └── icons/           # Weather icons
├── src/                     # Source code
│   ├── components/          # React components
│   ├── context/             # React context providers
│   ├── hooks/               # Custom React hooks
│   ├── services/            # API and other services
│   ├── utils/               # Utility functions
│   ├── styles/              # Global styles
│   ├── assets/              # Dynamic assets
│   ├── App.js               # Main App component
│   ├── index.js             # Entry point
│   └── setupTests.js        # Test configuration
├── .env                     # Environment variables (not in version control)
├── .env.example             # Example environment variables
├── .gitignore               # Git ignore file
├── package.json             # Dependencies and scripts
├── README.md                # Project documentation
└── todo.md                  # Project tasks and progress
```

## Detailed Component Structure
```
src/components/
├── Header/
│   ├── Header.jsx           # Main header component
│   ├── Logo.jsx             # App logo component
│   ├── ThemeToggle.jsx      # Dark/light mode toggle
│   ├── UnitToggle.jsx       # Temperature unit toggle
│   └── index.js             # Barrel export file
├── SearchBar/
│   ├── SearchBar.jsx        # Main search component
│   ├── SearchInput.jsx      # Input field component
│   ├── LocationButton.jsx   # Geolocation button
│   └── index.js             # Barrel export file
├── WeatherDisplay/
│   ├── CurrentWeather/
│   │   ├── CurrentWeather.jsx     # Current weather container
│   │   ├── WeatherIcon.jsx        # Weather icon component
│   │   ├── Temperature.jsx        # Temperature display
│   │   ├── WeatherDetails.jsx     # Additional weather details
│   │   └── index.js               # Barrel export file
│   ├── Forecast/
│   │   ├── Forecast.jsx           # Forecast container
│   │   ├── DailyForecast.jsx      # Daily forecast item
│   │   ├── HourlyForecast.jsx     # Hourly forecast item (optional)
│   │   └── index.js               # Barrel export file
│   └── index.js                   # Barrel export file
├── UI/
│   ├── Card.jsx             # Reusable card component
│   ├── Button.jsx           # Reusable button component
│   ├── Loader.jsx           # Loading indicator
│   ├── ErrorMessage.jsx     # Error display component
│   └── index.js             # Barrel export file
└── Footer/
    ├── Footer.jsx           # Main footer component
    ├── Credits.jsx          # API attribution
    └── index.js             # Barrel export file
```

## Context Structure
```
src/context/
├── WeatherContext.jsx       # Weather data context
├── LocationContext.jsx      # Location data context
├── PreferencesContext.jsx   # User preferences context
└── index.js                 # Barrel export file
```

## Hooks Structure
```
src/hooks/
├── useWeather.js            # Hook for fetching weather data
├── useGeolocation.js        # Hook for handling geolocation
├── useLocalStorage.js       # Hook for persistent storage
└── index.js                 # Barrel export file
```

## Services Structure
```
src/services/
├── api/
│   ├── weatherApi.js        # Weather API service
│   ├── geocodingApi.js      # Geocoding API service
│   └── index.js             # Barrel export file
├── storage/
│   ├── localStorage.js      # Local storage service
│   └── index.js             # Barrel export file
└── index.js                 # Barrel export file
```

## Utils Structure
```
src/utils/
├── dateUtils.js             # Date formatting utilities
├── tempUtils.js             # Temperature conversion utilities
├── weatherUtils.js          # Weather data processing utilities
├── validationUtils.js       # Input validation utilities
└── index.js                 # Barrel export file
```

## Styles Structure
```
src/styles/
├── global.css               # Global CSS styles
├── variables.css            # CSS variables
├── animations.css           # CSS animations
└── themes/
    ├── light.css            # Light theme styles
    └── dark.css             # Dark theme styles
```

## Assets Structure
```
src/assets/
├── images/                  # Image assets
├── icons/                   # Icon assets
└── animations/              # Animation assets (if using Lottie)
```

## Best Practices for This Structure

### Component Organization
- Each component has its own folder with related files
- Index.js files for clean imports
- Separation of concerns between UI, logic, and styling
- Reusable UI components in separate folder

### State Management
- Context API for global state
- Component state for local concerns
- Custom hooks for reusable logic

### Code Splitting
- Logical grouping of related functionality
- Barrel exports for clean imports
- Component-based organization for easier code splitting

### Styling Approach
- CSS modules or styled-components recommended
- Global variables for consistent theming
- Separate files for animations and themes

### Testing Structure
- Tests located alongside components
- Utility functions for test helpers
- Mock services for API testing

### Scalability Considerations
- Structure supports adding new features
- Clear separation of concerns
- Easy to navigate for new developers
- Follows React best practices
