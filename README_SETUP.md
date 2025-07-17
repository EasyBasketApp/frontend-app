# BasketEasy Frontend

A modern React TypeScript frontend application for basketball team management, built with Material-UI and best practices.

## 🚀 Features

- **Modern Tech Stack**: React 19, TypeScript, Material-UI v5
- **State Management**: TanStack Query for server state, React Context for auth
- **Form Management**: React Hook Form with Zod validation
- **Routing**: React Router v6 with protected routes
- **HTTP Client**: Axios with interceptors for auth and error handling
- **Theme**: Custom Material-UI theme with basketball-inspired colors
- **Responsive Design**: Mobile-first responsive layout
- **TypeScript**: Full type safety throughout the application

## 🛠️ Architecture

### Project Structure

```
src/
├── components/
│   ├── auth/              # Authentication components
│   ├── common/            # Reusable UI components
│   └── layout/            # Layout components (Header, Footer, Layout)
├── contexts/              # React contexts (Auth, Notifications)
├── hooks/                 # Custom hooks (API hooks)
├── pages/                 # Page components
├── services/              # API service layer
├── theme/                 # Material-UI theme configuration
├── config/                # App configuration and constants
└── types/                 # TypeScript type definitions
```

### Key Features

#### Authentication System

- JWT-based authentication with token refresh
- Protected routes with automatic redirection
- Persistent auth state with localStorage
- Login/Register forms with validation

#### API Layer

- Centralized API service with Axios
- Automatic token attachment and refresh
- Error handling and retry logic
- TypeScript-typed responses

#### UI/UX

- Material-UI components with custom theme
- Responsive grid layout using CSS Grid
- Loading states and error boundaries
- Toast notifications system
- Consistent design language

#### State Management

- TanStack Query for server state management
- React Context for global client state
- Optimistic updates and cache invalidation
- Background refetching and stale data handling

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm
- Backend API running on http://localhost:3000

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

The app will start on http://localhost:3001

### Building for Production

```bash
npm run build
```

### Environment Variables

Copy `.env` and configure your environment:

```
REACT_APP_API_BASE_URL=http://localhost:3000
```

## 🎨 Theming

The app uses a custom Material-UI theme with basketball-inspired colors:

- Primary: Basketball blue (#1976d2)
- Secondary: Basketball orange (#ff6b35)
- Custom component overrides for consistent styling

## 🔐 Authentication Flow

1. User visits protected route
2. AuthContext checks for valid token
3. If no token, redirects to login
4. Successful login stores token and user data
5. API service automatically attaches token to requests
6. Token refresh handled automatically on 401 responses

## 🌐 API Integration

The frontend integrates with the NestJS backend API:

- User registration and authentication
- Team management
- Player tracking
- Game scheduling

## 📱 Responsive Design

- Mobile-first design approach
- Responsive navigation with collapsible menu
- Adaptive grid layouts
- Touch-friendly interactive elements

## 🧪 Development Tools

- TypeScript for type safety
- ESLint for code quality
- React Query Devtools for debugging
- Hot reloading for development

## 🔄 State Management Strategy

### Server State (TanStack Query)

- API data caching and synchronization
- Background updates and invalidation
- Loading and error states
- Optimistic updates

### Client State (React Context)

- Authentication state
- User preferences
- UI state (notifications, modals)

## 📦 Key Dependencies

- `@mui/material` - UI component library
- `@tanstack/react-query` - Server state management
- `react-hook-form` - Form management
- `zod` - Schema validation
- `axios` - HTTP client
- `react-router-dom` - Routing

## 🚀 Next Steps

The frontend is set up with a solid foundation for:

- Team management interfaces
- Player profiles and statistics
- Game scheduling and management
- Tournament brackets
- Analytics and reporting

## 🤝 Contributing

Follow the established patterns:

- Use TypeScript throughout
- Implement proper error handling
- Follow Material-UI design patterns
- Write reusable components
- Use custom hooks for logic
- Maintain responsive design
