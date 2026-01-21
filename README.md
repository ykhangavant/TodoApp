<p align="center">
  <h2 align="center">Productivity made simple</p></h2>
  <p align="center">Organize your life and projects with a clear, hierarchical structure,<br>
  smart recurring tasks, and seamless Telegram integration.<br>
  Get focused, stay productive, and keep your data private.
  </p>
</p>



## 🚀 How It Works

This app allows users to manage their tasks, projects, areas, notes, and tags in an organized way. Users can create tasks, projects, areas (to group projects), notes, and tags. Each task can be associated with a project, and both tasks and notes can be tagged for better organization. Projects can belong to areas and can also have multiple notes and tags. This structure helps users categorize and track their work efficiently, whether they’re managing individual tasks, larger projects, or keeping detailed notes.

## ✨ Features

- **Task Management**: Create, update, and delete tasks. Mark tasks as completed and view them by different filters (Today, Upcoming, Someday). Order them by Name, Due Date, Date Created, or Priority.
- **Subtasks**: Break down complex tasks into smaller, manageable subtasks with progress tracking and seamless navigation.
- **Recurring Tasks**: Comprehensive recurring task system with intelligent parent-child relationships:
    - **Multiple Recurrence Patterns**: Daily, weekly, monthly, monthly on specific weekdays, and monthly last day
    - **Completion-Based Recurrence**: Option to repeat based on completion date rather than due date
    - **Smart Parent-Child Linking**: Generated task instances maintain connection to their original recurring pattern
    - **Direct Parent Editing**: Edit recurrence settings directly from any generated task instance
    - **Flexible Scheduling**: Set custom intervals (every 2 weeks, every 3 months, etc.)
    - **End Date Control**: Optional end dates for recurring series
- **Project Sharing & Collaboration**: Share projects with team members and collaborate effectively
- **Quick Notes**: Create, update, delete, or assign text notes to projects.
- **Tags**: Create tags for tasks and notes to enhance organization.
- **Project Tracking**: Organize tasks into projects. Each project can contain multiple tasks and/or multiple notes.
- **Area Categorization**: Group projects into areas for better organization and focus.
- **Due Date Tracking**: Set due dates for tasks and view them based on due date categories.
- **Responsive Design**: Accessible from various devices, ensuring a consistent experience across desktops, tablets, and mobile phones.
- **Multi-Language Support**: Available in 24 languages with full localization support for a truly global productivity experience.
- **Telegram Integration**:
    - Create tasks directly through Telegram messages
    - Receive daily digests of your tasks
    - Quick capture of ideas and todos on the go

## 🛠️ Getting Started

Get up and running quickly with our comprehensive documentation:

### Quick Start

```bash
npm install
npm run backend:dev
npm run frontend:dev
```

Navigate to [http://localhost:8080](http://localhost:3002) and login with your credentials.

## 🔌 API

Todo provides a comprehensive REST API for integration with external tools and automation workflows.

**Base URL:** `http://localhost:8080/api/v1`

**Key Features:**
- Complete CRUD operations for tasks, projects, notes, and areas
- Personal API keys for secure access
- Swagger documentation available at `/api-docs` (requires authentication)
- Support for recurring tasks, subtasks, and tag management
- Real-time task metrics and productivity insights

**Authentication:** Uses session cookies or Bearer token authentication. Generate personal API keys through the web interface for programmatic access.

**Quick Example:**
```bash
# Get all tasks
curl -H "Authorization: Bearer YOUR_API_KEY" \
     http://localhost:3002/api/v1/tasks

# Create a new task
curl -X POST \
     -H "Authorization: Bearer YOUR_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"name":"Complete API documentation","priority":"medium"}' \
     http://localhost:3002/api/v1/task
```

For full API documentation, visit `/api-docs` after authentication or check the Swagger schema definitions in [`backend/config/swagger.js`](backend/config/swagger.js).

## 📜 License

This project is licensed under the [MIT License](LICENSE).



