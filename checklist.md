# eExams Development Checklist

## Project: Online Exam Management System

**Status Legend:**
- ⬜ Not Started
- 🔄 In Progress
- ✅ Completed
- 🚫 Blocked
- ⏭️ Skipped (for MVP)

---

## Phase 1: Project Foundation (Week 1-2)

### 1.1 Development Environment Setup

- [x] Create React project with Vite
- [x] Configure TypeScript
- [x] Set up TailwindCSS
- [x] Install and configure Shadcn/UI
- [x] Set up React Router
- [x] Configure ESLint & Prettier
- [x] Create folder structure
- [ ] Set up environment variables (.env)
- [ ] Create backend project structure
- [ ] Initialize Express.js server
- [ ] Configure TypeScript for backend
- [ ] Set up MongoDB connection
- [ ] Install backend dependencies (mongoose, bcrypt, jwt, etc.)
- [ ] Configure CORS
- [ ] Set up error handling middleware
- [ ] Configure logging (Morgan)

### 1.2 Database Setup

- [ ] Create MongoDB Atlas cluster
- [ ] Design database schema
- [ ] Create Mongoose models:
  - [ ] User model
  - [ ] Exam model
  - [ ] Question model
  - [ ] Result model
- [ ] Set up database indexes
- [ ] Create seed data scripts
- [ ] Test database connections

### 1.3 Authentication - Backend

- [ ] Create auth routes file
- [ ] Implement user registration endpoint
  - [ ] Validate input (name, email, password)
  - [ ] Check for existing email
  - [ ] Hash password with bcrypt
  - [ ] Create user in database
  - [ ] Generate JWT token
  - [ ] Return token and user data
- [ ] Implement login endpoint
  - [ ] Validate credentials
  - [ ] Compare password hash
  - [ ] Generate JWT token
  - [ ] Update last login timestamp
  - [ ] Return token and user data
- [ ] Implement logout endpoint
  - [ ] Invalidate token (if using refresh tokens)
- [ ] Implement forgot password endpoint
  - [ ] Generate reset token
  - [ ] Save token to user document
  - [ ] Send email with reset link (mock for MVP)
- [ ] Implement reset password endpoint
  - [ ] Validate reset token
  - [ ] Update password
  - [ ] Clear reset token
- [ ] Create auth middleware
  - [ ] Verify JWT token
  - [ ] Attach user to request
  - [ ] Handle token expiration
- [ ] Create role-based middleware
  - [ ] Check user role
  - [ ] Restrict access to routes

### 1.4 Authentication - Frontend

- [x] Create Login page component
- [x] Create login form with validation
- [x] Add email input field
- [x] Add password input field
- [x] Add "Remember me" checkbox
- [x] Add "Forgot Password" link
- [ ] Implement login API call
- [ ] Handle login errors
- [ ] Store JWT token (localStorage/cookies)
- [ ] Redirect to dashboard on success
- [ ] Add loading state during submission
- [ ] Create Registration page component
- [ ] Create registration form with validation
- [ ] Add name input field
- [ ] Add email input field
- [ ] Add password input field
- [ ] Add confirm password field
- [ ] Add user type selection (Student/Instructor)
- [ ] Implement registration API call
- [ ] Handle registration errors
- [ ] Redirect to login on success
- [x] Create Forgot Password page
- [x] Add email input field
- [ ] Implement forgot password API call
- [ ] Show success message
- [x] Create Reset Password page
- [x] Add new password field
- [ ] Add confirm password field
- [ ] Implement reset password API call
- [ ] Redirect to login on success
- [ ] Create AuthContext for global auth state
- [ ] Implement useAuth hook
- [ ] Create ProtectedRoute component
- [ ] Implement auto-logout on token expiry

---

## Phase 2: Core Features (Week 3-4)

### 2.1 User Profile - Backend

- [ ] Create user routes file
- [ ] Implement get profile endpoint
- [ ] Implement update profile endpoint
- [ ] Implement change password endpoint
- [ ] Add profile avatar upload (optional)

### 2.2 User Profile - Frontend

- [ ] Create Profile page component
- [ ] Display user information
- [ ] Create edit profile form
- [ ] Implement profile update
- [ ] Create change password form
- [ ] Implement password change
- [ ] Add avatar upload (optional)

### 2.3 Dashboard - Student

- [x] Create Dashboard layout component
- [x] Create Sidebar navigation
- [x] Create Header component
- [x] Create DashboardHome component
- [x] Display welcome message
- [x] Display overview cards (courses, level, semester, CGPA)
- [ ] Fetch and display available exams count
- [ ] Fetch and display completed exams count
- [ ] Display upcoming exams list
- [x] Add performance chart component
- [ ] Fetch performance data from API
- [ ] Add quick links to exams

### 2.4 Dashboard - Instructor

- [ ] Create Instructor Dashboard component
- [ ] Display welcome message
- [ ] Display overview cards:
  - [ ] Total exams created
  - [ ] Active exams
  - [ ] Total students
  - [ ] Average pass rate
- [ ] Display recent exams list
- [ ] Add "Create Exam" button
- [ ] Display quick stats chart
- [ ] Add links to manage exams

### 2.5 Exam Management - Backend

- [ ] Create exam routes file
- [ ] Implement create exam endpoint
  - [ ] Validate exam data
  - [ ] Create exam document
  - [ ] Return created exam
- [ ] Implement get all exams endpoint
  - [ ] Filter by instructor (for instructor)
  - [ ] Filter by status and date (for student)
  - [ ] Add pagination
- [ ] Implement get exam by ID endpoint
  - [ ] Include questions (for instructor)
  - [ ] Exclude correct answers (for student before submit)
- [ ] Implement update exam endpoint
  - [ ] Validate ownership
  - [ ] Update exam data
- [ ] Implement delete exam endpoint
  - [ ] Soft delete (set status to deleted)
- [ ] Implement publish exam endpoint
- [ ] Implement close exam endpoint

### 2.6 Question Management - Backend

- [ ] Create question routes file
- [ ] Implement add question endpoint
  - [ ] Validate question data
  - [ ] Add to exam
  - [ ] Update exam totalPoints
- [ ] Implement update question endpoint
- [ ] Implement delete question endpoint
  - [ ] Update exam totalPoints
- [ ] Implement reorder questions endpoint
- [ ] Implement bulk add questions endpoint

### 2.7 Exam Creation - Frontend (Instructor)

- [ ] Create CreateExam page component
- [ ] Create exam details form:
  - [ ] Title input
  - [ ] Description textarea
  - [ ] Duration input (minutes)
  - [ ] Passing score input
  - [ ] Start date picker
  - [ ] End date picker
- [ ] Implement save exam as draft
- [ ] Create Question Builder component
- [ ] Add question type selector
- [ ] Create Multiple Choice question form:
  - [ ] Question text input
  - [ ] Options inputs (A, B, C, D)
  - [ ] Correct answer selector
  - [ ] Points input
- [ ] Create True/False question form
- [ ] Create Short Answer question form
- [ ] Implement add question
- [ ] Implement edit question
- [ ] Implement delete question
- [ ] Implement reorder questions (drag & drop)
- [ ] Add question preview
- [ ] Implement publish exam
- [ ] Add confirmation modal for publish

### 2.8 Exam List - Frontend

- [ ] Create ExamList page for students
- [ ] Display available exams as cards
- [ ] Show exam info:
  - [ ] Title
  - [ ] Duration
  - [ ] Question count
  - [ ] Availability dates
  - [ ] Status (upcoming, ongoing, completed)
- [ ] Add "Start Exam" button
- [ ] Add exam details modal
- [ ] Create MyExams page for instructors
- [ ] Display instructor's exams
- [ ] Show exam stats
- [ ] Add edit/delete actions
- [ ] Add status filter
- [ ] Add search functionality

### 2.9 Exam Taking - Backend

- [ ] Implement start exam endpoint
  - [ ] Check if exam is available
  - [ ] Check if student already attempted
  - [ ] Create result document with startedAt
  - [ ] Return exam questions (without correct answers)
- [ ] Implement save answer endpoint
  - [ ] Update answer in result document
  - [ ] Return updated result
- [ ] Implement submit exam endpoint
  - [ ] Calculate score
  - [ ] Determine pass/fail
  - [ ] Update result document
  - [ ] Return result
- [ ] Implement get current attempt endpoint
  - [ ] Return current answers and time remaining
- [ ] Implement toggle flag endpoint

### 2.10 Exam Taking - Frontend

- [ ] Create TakeExam page component
- [ ] Create exam start confirmation modal
- [ ] Create Timer component
  - [ ] Display countdown
  - [ ] Warning at 5 minutes
  - [ ] Auto-submit at 0
- [ ] Create QuestionDisplay component
  - [ ] Show question text
  - [ ] Show answer options
  - [ ] Handle answer selection
- [ ] Create QuestionNavigation component
  - [ ] Show all question numbers
  - [ ] Indicate answered questions
  - [ ] Indicate flagged questions
  - [ ] Enable jump to question
- [ ] Implement answer auto-save
- [ ] Implement flag question toggle
- [ ] Create submit confirmation modal
- [ ] Implement manual submit
- [ ] Handle auto-submit on timer end
- [ ] Show submission success message
- [ ] Redirect to result page

---

## Phase 3: Results & Analytics (Week 5)

### 3.1 Results - Backend

- [ ] Implement get student results endpoint
- [ ] Implement get single result endpoint
  - [ ] Include questions if showResults enabled
  - [ ] Include correct answers if showCorrectAnswers enabled
- [ ] Implement get exam results endpoint (instructor)
  - [ ] All students who took the exam
  - [ ] Include scores and pass/fail
- [ ] Implement get exam analytics endpoint
  - [ ] Average score
  - [ ] Pass rate
  - [ ] Score distribution
  - [ ] Question-level analytics
- [ ] Implement export results to CSV endpoint

### 3.2 Results - Frontend

- [ ] Create ExamResult page component
- [ ] Display score card:
  - [ ] Total score
  - [ ] Passing score
  - [ ] Pass/Fail badge
  - [ ] Time spent
- [ ] Display answer breakdown:
  - [ ] Question list
  - [ ] Student's answer
  - [ ] Correct answer (if enabled)
  - [ ] Points earned
- [ ] Create ExamHistory page
- [ ] Display all past results
- [ ] Show score trends chart
- [ ] Add filter by date
- [ ] Create ClassResults page (instructor)
- [ ] Display all student results
- [ ] Show sortable table
- [ ] Add search by student name
- [ ] Add export to CSV button

### 3.3 Analytics - Frontend

- [ ] Create Analytics component
- [ ] Display score distribution chart
- [ ] Display pass/fail pie chart
- [ ] Display performance over time line chart
- [ ] Display subject-wise performance bar chart
- [ ] Add comparison with class average

---

## Phase 4: Polish & Deployment (Week 6)

### 4.1 Error Handling & Validation

- [ ] Implement global error boundary (frontend)
- [ ] Create error page (404, 500)
- [ ] Add form validation messages
- [ ] Implement toast notifications
- [ ] Add loading states to all async operations
- [ ] Add empty states for lists
- [ ] Implement retry logic for failed requests

### 4.2 Performance Optimization

- [ ] Add lazy loading for routes
- [ ] Optimize images
- [ ] Implement caching for API responses
- [ ] Add pagination for long lists
- [ ] Optimize database queries with indexes
- [ ] Add compression middleware

### 4.3 Security Hardening

- [ ] Implement rate limiting
- [ ] Add Helmet security headers
- [ ] Configure CORS properly
- [ ] Sanitize all user inputs
- [ ] Implement CSRF protection
- [ ] Add request validation middleware
- [ ] Audit all endpoints for authorization

### 4.4 Testing

- [ ] Set up Jest for frontend
- [ ] Write unit tests for utilities
- [ ] Write tests for auth hooks
- [ ] Set up Jest for backend
- [ ] Write unit tests for models
- [ ] Write integration tests for auth endpoints
- [ ] Write integration tests for exam endpoints
- [ ] Write integration tests for result endpoints
- [ ] Add API documentation (Swagger/OpenAPI)

### 4.5 Documentation

- [ ] Write API documentation
- [ ] Create user guide for students
- [ ] Create user guide for instructors
- [ ] Update README with setup instructions
- [ ] Add inline code comments
- [ ] Create architecture diagram
- [ ] Document database schema

### 4.6 Deployment

- [ ] Set up MongoDB Atlas production cluster
- [ ] Configure production environment variables
- [ ] Deploy backend to Render
- [ ] Configure backend domain/SSL
- [ ] Deploy frontend to Vercel
- [ ] Configure frontend environment
- [ ] Set up CI/CD pipeline
- [ ] Configure monitoring/alerts
- [ ] Perform load testing
- [ ] Final security audit

---

## Shared Components Checklist

### UI Components (Shadcn/UI)

- [x] Button
- [x] Input
- [x] Form
- [x] Label
- [x] Checkbox
- [x] Card
- [x] Dialog/Modal
- [x] Avatar
- [ ] Select
- [ ] Dropdown Menu
- [ ] Table
- [ ] Tabs
- [ ] Badge
- [ ] Alert
- [ ] Progress
- [ ] Skeleton
- [ ] Tooltip
- [ ] Calendar/Date Picker

### Custom Components

- [ ] LoadingSpinner
- [ ] ErrorMessage
- [ ] ConfirmModal
- [x] Navbar
- [ ] Sidebar
- [ ] Footer
- [ ] PageHeader
- [ ] EmptyState
- [ ] DataTable
- [ ] SearchInput
- [ ] FilterDropdown
- [ ] Pagination
- [ ] Timer
- [ ] QuestionCard
- [ ] AnswerOption
- [ ] ScoreCard
- [ ] StatCard
- [ ] ChartCard

---

## API Endpoints Checklist

### Authentication

- [ ] `POST /api/auth/register`
- [ ] `POST /api/auth/login`
- [ ] `POST /api/auth/logout`
- [ ] `POST /api/auth/forgot-password`
- [ ] `POST /api/auth/reset-password`
- [ ] `GET /api/auth/me`
- [ ] `PUT /api/auth/update-password`

### Users

- [ ] `GET /api/users/profile`
- [ ] `PUT /api/users/profile`
- [ ] `GET /api/users` (admin)
- [ ] `GET /api/users/:id` (admin)
- [ ] `PUT /api/users/:id` (admin)
- [ ] `DELETE /api/users/:id` (admin)

### Exams

- [ ] `GET /api/exams`
- [ ] `GET /api/exams/my-exams`
- [ ] `GET /api/exams/:id`
- [ ] `POST /api/exams`
- [ ] `PUT /api/exams/:id`
- [ ] `DELETE /api/exams/:id`
- [ ] `POST /api/exams/:id/publish`
- [ ] `POST /api/exams/:id/close`

### Questions

- [ ] `GET /api/exams/:examId/questions`
- [ ] `POST /api/exams/:examId/questions`
- [ ] `PUT /api/questions/:id`
- [ ] `DELETE /api/questions/:id`
- [ ] `PUT /api/exams/:examId/questions/reorder`

### Exam Taking

- [ ] `POST /api/exams/:id/start`
- [ ] `GET /api/exams/:id/attempt`
- [ ] `PUT /api/exams/:id/answer`
- [ ] `POST /api/exams/:id/submit`
- [ ] `POST /api/exams/:id/flag/:questionId`

### Results

- [ ] `GET /api/results/my-results`
- [ ] `GET /api/results/:id`
- [ ] `GET /api/exams/:id/results`
- [ ] `GET /api/exams/:id/analytics`
- [ ] `GET /api/results/export/:examId`

---

## Database Models Checklist

### User Model

- [ ] Schema definition
- [ ] Pre-save hook (password hashing)
- [ ] Method: comparePassword
- [ ] Method: generateAuthToken
- [ ] Method: generateResetToken
- [ ] Virtual: fullName
- [ ] Indexes

### Exam Model

- [ ] Schema definition
- [ ] Pre-save hook (calculate totals)
- [ ] Method: isAvailable
- [ ] Method: canBeEdited
- [ ] Virtual: questionCount
- [ ] Indexes
- [ ] Population

### Question Model

- [ ] Schema definition
- [ ] Pre-save hook (validate options)
- [ ] Method: checkAnswer
- [ ] Indexes

### Result Model

- [ ] Schema definition
- [ ] Pre-save hook (calculate score)
- [ ] Method: calculateScore
- [ ] Virtual: percentage
- [ ] Indexes
- [ ] Population

---

## Files to Create/Modify

### Frontend Files

```
frontend/src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   └── Footer.tsx
│   ├── exam/
│   │   ├── Timer.tsx
│   │   ├── QuestionCard.tsx
│   │   ├── QuestionNavigation.tsx
│   │   ├── QuestionForm.tsx
│   │   └── AnswerOption.tsx
│   ├── shared/
│   │   ├── LoadingSpinner.tsx
│   │   ├── ErrorMessage.tsx
│   │   ├── ConfirmModal.tsx
│   │   ├── EmptyState.tsx
│   │   └── PageHeader.tsx
│   └── charts/
│       ├── ScoreDistribution.tsx
│       └── PerformanceTrend.tsx
├── pages/
│   ├── auth/
│   │   ├── LoginPage.tsx ✅
│   │   ├── RegisterPage.tsx
│   │   ├── ForgotPasswordPage.tsx ✅
│   │   ├── VerifyOtpPage.tsx ✅
│   │   └── ResetPasswordPage.tsx ✅
│   ├── dashboard/
│   │   ├── Dashboard.tsx ✅
│   │   ├── DashboardHome.tsx ✅
│   │   ├── StudentDashboard.tsx
│   │   └── InstructorDashboard.tsx
│   ├── exams/
│   │   ├── ExamList.tsx
│   │   ├── ExamDetails.tsx
│   │   ├── TakeExam.tsx
│   │   ├── CreateExam.tsx
│   │   ├── EditExam.tsx
│   │   └── MyExams.tsx
│   ├── results/
│   │   ├── ExamResult.tsx
│   │   ├── ExamHistory.tsx
│   │   └── ClassResults.tsx
│   └── profile/
│       └── Profile.tsx ✅
├── hooks/
│   ├── useAuth.ts
│   ├── useExam.ts
│   ├── useTimer.ts
│   └── useResults.ts
├── services/
│   ├── api.ts
│   ├── authService.ts
│   ├── examService.ts
│   ├── questionService.ts
│   └── resultService.ts
├── context/
│   ├── AuthContext.tsx
│   └── ExamContext.tsx
├── types/
│   ├── auth.types.ts
│   ├── exam.types.ts
│   ├── question.types.ts
│   └── result.types.ts
└── utils/
    ├── formatDate.ts
    ├── formatTime.ts
    └── storage.ts
```

### Backend Files

```
backend/
├── src/
│   ├── config/
│   │   ├── database.ts
│   │   └── env.ts
│   ├── models/
│   │   ├── User.ts
│   │   ├── Exam.ts
│   │   ├── Question.ts
│   │   └── Result.ts
│   ├── routes/
│   │   ├── auth.routes.ts
│   │   ├── user.routes.ts
│   │   ├── exam.routes.ts
│   │   ├── question.routes.ts
│   │   └── result.routes.ts
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   ├── user.controller.ts
│   │   ├── exam.controller.ts
│   │   ├── question.controller.ts
│   │   └── result.controller.ts
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   ├── role.middleware.ts
│   │   ├── validate.middleware.ts
│   │   └── error.middleware.ts
│   ├── validators/
│   │   ├── auth.validator.ts
│   │   ├── exam.validator.ts
│   │   └── question.validator.ts
│   ├── utils/
│   │   ├── jwt.ts
│   │   ├── email.ts
│   │   └── response.ts
│   └── app.ts
├── .env.example
├── package.json
└── tsconfig.json
```

---

## Quick Start Commands

### Frontend

```bash
cd frontend
yarn install
yarn dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Database

```bash
# Seed database
npm run seed

# Reset database
npm run db:reset
```

---

## Notes & Decisions

### Architecture Decisions

- Using JWT for stateless authentication
- MongoDB for flexible schema
- Shadcn/UI for consistent components
- Zustand over Redux for simpler state management

### Trade-offs Made

- No email verification for MVP (simulated)
- No proctoring for MVP
- No essay questions (manual grading) for MVP
- No question bank for MVP

### Known Limitations

- Single session per user
- No offline support
- No real-time updates (polling instead of WebSocket)

---

## Progress Summary

| Phase | Status | Completion |
|-------|--------|------------|
| Phase 1: Foundation | 🔄 In Progress | ~30% |
| Phase 2: Core Features | 🔄 In Progress | ~15% |
| Phase 3: Results | ⬜ Not Started | 0% |
| Phase 4: Polish | ⬜ Not Started | 0% |

**Overall Progress: ~15%**

---

*Last Updated: February 2, 2026*
