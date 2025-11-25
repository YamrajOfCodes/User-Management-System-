# User Management System – Frontend Dashboard

A scalable, production-ready frontend dashboard for managing users. Built with maintainability and long-term growth in mind, featuring robust state management, form handling, and a clean architecture.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
git clone <your-repo-url>
cd your-project-folder
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

## 🏗️ Architecture & Approach

### State Management

I used Redux Toolkit as the main state layer. It keeps things organized and avoids the usual Redux boilerplate.

The store is split into feature-based slices using both:
- **Standard reducers** for simple updates
- **Extra reducers** for async logic (API requests, CRUD operations)

This structure makes it easy to add new dashboard modules without reworking everything.

### Form Handling & Validation

**Formik + Zod** combination for robust form management:

- **Formik**: Handles form state, submissions, and field-level logic
- **Zod**: Provides type-safe validation schemas that are reusable across components
- **Consistent error handling**: Unified approach to form errors and validation messages

### UI State Management

Every async operation includes proper loading and error states:

- **Loading indicators**: Visual feedback during API calls
- **Error boundaries**: Graceful error handling with user-friendly messages
- **No silent failures**: The UI always reflects the actual state of operations

### Theme System

Implements a **Context API-based** theme system for dark/light mode:

- Separated from Redux to keep UI preferences isolated
- Clean toggle implementation without polluting global state
- Efficient re-renders only for theme-dependent components

## 💡 Challenges & Learnings

### Theme System with Context API

I'm used to working with Redux, but I haven't had much practical experience using the Context API.

For this project, I used Context specifically for the theme system (dark mode), because stuffing UI theme state into Redux didn't make sense.

At first it was a bit awkward because I'm not as familiar with Context, but building the theme toggling system forced me to actually understand how it works. By the end, it felt a lot more natural, and the theme feature ended up being cleaner than it would've been in Redux.

## 🔧 Tech Stack

- **React** - UI library
- **Redux Toolkit** - State management
- **Formik** - Form handling
- **Zod** - Schema validation
- **Context API** - Theme management

## 📝 Future Enhancements

- Add unit and integration tests
- Implement role-based access control
- Add data export functionality
- Enhance error logging and monitoring

---

Built with a focus on clean code, scalability, and developer experience.
