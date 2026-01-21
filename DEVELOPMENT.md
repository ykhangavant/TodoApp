# Todo - Development Status & Roadmap

---

## Project Overview

Todo is a self-hosted task management application that helps users organize tasks, projects, areas, notes, and tags with a hierarchical structure. It emphasizes privacy, flexibility, and productivity through smart recurring tasks, collaboration features, and seamless integrations.

---

## Features

### Core Features
- **Task Management**: Create, update, delete tasks with priorities, due dates, and status tracking
- **Subtasks**: Break down tasks into manageable subtasks with progress tracking
- **Recurring Tasks**: Daily, weekly, monthly patterns with completion-based recurrence
- **Projects**: Organize tasks into projects with descriptions and notes
- **Areas**: Group projects by life areas (GTD-style organization)
- **Notes**: Rich text notes with Markdown support, attachable to projects
- **Tags**: Flexible tagging system for tasks and notes
- **Views**: Today, Upcoming, Someday, Completed, and custom views
- **Calendar**: Calendar view with OAuth integration support
- **Search**: Universal search across tasks, projects, and notes

### User Experience
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark/Light Mode**: Automatic theme detection with manual override
- **Multi-language**: Support for 24 languages with full localization
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

### Integrations
- **Telegram Bot**: Create tasks via messages, receive daily digests
- **REST API**: Complete CRUD operations with Swagger documentation
- **API Keys**: Personal access tokens for programmatic access

### Collaboration
- **Project Sharing**: Share projects with team members
- **Permissions**: Granular access control (read-only, read-write)
- **Role-based Access**: RBAC system with action-based permissions

---

## Project Structure

```
todo/
├── frontend/          # React + TypeScript frontend
│   ├── components/    # UI components
│   ├── contexts/      # React contexts
│   ├── entities/      # TypeScript type definitions
│   ├── hooks/         # Custom React hooks
│   ├── store/         # Zustand state management
│   ├── utils/         # Utility functions
│   └── styles/        # CSS and Tailwind styles
│
├── backend/           # Node.js + Express backend
│   ├── config/        # Configuration files
│   ├── middleware/    # Express middleware
│   ├── models/        # Sequelize models
│   ├── routes/        # API routes
│   ├── services/      # Business logic
│   ├── migrations/    # Database migrations
│   ├── seeders/       # Database seeders
│   └── tests/         # Backend tests
│
├── public/            # Static assets
│   ├── locales/       # Translation files (24 languages)
│   └── [assets]       # Images, icons, favicons
│
├── e2e/               # End-to-end tests (Playwright)
└── scripts/           # Build and utility scripts
```

---

## Technology Stack

### Frontend
- **Framework**: React 18.3.1
- **Language**: TypeScript 5.6.2
- **Styling**: Tailwind CSS 3.4.13
- **Routing**: React Router 6.26.2
- **State Management**: Zustand 5.0.3
- **Internationalization**: i18next 15.4.1 (24 languages)
- **Build Tool**: Webpack 5.95.0
- **Testing**: Jest 29.0.0, React Testing Library, Playwright

### Backend
- **Runtime**: Node.js
- **Framework**: Express 4.21.2
- **ORM**: Sequelize 6.37.7
- **Database**: SQLite3 5.1.7
- **Authentication**: Session-based + API tokens
- **Documentation**: Swagger/OpenAPI 3.0
- **Security**: Helmet, CORS, rate limiting
- **Testing**: Jest, Supertest

### Development Tools
- **Code Quality**: ESLint, Prettier
- **Hot Reload**: Nodemon, Webpack Dev Server
- **Database**: Sequelize CLI for migrations
- **Package Manager**: npm

---

## Currently Implemented Features

### ✅ Task Management
- [x] CRUD operations for tasks
- [x] Task status (pending, completed, archived)
- [x] Priority levels (low, medium, high)
- [x] Due date tracking and filtering
- [x] Task descriptions with Markdown
- [x] Task attachments
- [x] Task filtering and sorting

### ✅ Subtasks
- [x] Hierarchical task breakdown
- [x] Progress tracking
- [x] Parent-child navigation
- [x] Completion affects parent task

### ✅ Recurring Tasks
- [x] Daily, weekly, monthly patterns
- [x] Monthly on specific weekdays
- [x] Monthly last day
- [x] Completion-based recurrence
- [x] Parent-child relationship
- [x] Custom intervals
- [x] Optional end dates

### ✅ Projects & Areas
- [x] Project creation and management
- [x] Project descriptions and notes
- [x] Area-based organization
- [x] Project sharing
- [x] Permission system
- [x] Project metrics

### ✅ Notes & Tags
- [x] Rich text notes with Markdown
- [x] Project-associated notes
- [x] Standalone notes
- [x] Note attachments
- [x] Tag system for tasks and notes
- [x] Tag-based filtering

### ✅ Views & Search
- [x] Today view
- [x] Upcoming tasks
- [x] Someday tasks
- [x] Completed tasks
- [x] Custom views
- [x] Universal search
- [x] Advanced filtering

### ✅ User Interface
- [x] Responsive design
- [x] Dark/light themes
- [x] 24 language support
- [x] Accessibility features
- [x] Calendar view

### ✅ Integrations
- [x] Telegram bot integration
- [x] REST API (v1)
- [x] Swagger documentation
- [x] API key authentication
- [x] Calendar OAuth support

### ✅ Security & Performance
- [x] Session authentication
- [x] Password hashing (bcrypt)
- [x] Email verification
- [x] Role-based access control
- [x] Rate limiting
- [x] CORS configuration
- [x] Security headers (Helmet)

### ✅ Developer Experience
- [x] Unit tests (Jest)
- [x] Integration tests
- [x] E2E tests (Playwright)
- [x] ESLint + Prettier
- [x] TypeScript type checking
- [x] Pre-commit hooks
---

**License:** MIT License
