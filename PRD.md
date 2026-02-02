# Product Requirements Document (PRD)

## Online Exam Management System (eExams)

**Version:** 1.0  
**Last Updated:** February 2, 2026  
**Author:** Muhammad  
**Project Type:** Capstone Project - Baze University

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Problem Statement](#2-problem-statement)
3. [Goals & Objectives](#3-goals--objectives)
4. [Target Users](#4-target-users)
5. [User Stories](#5-user-stories)
6. [Functional Requirements](#6-functional-requirements)
7. [Non-Functional Requirements](#7-non-functional-requirements)
8. [System Architecture](#8-system-architecture)
9. [Database Schema](#9-database-schema)
10. [API Specification](#10-api-specification)
11. [UI/UX Requirements](#11-uiux-requirements)
12. [Security Requirements](#12-security-requirements)
13. [Success Metrics](#13-success-metrics)
14. [Timeline & Milestones](#14-timeline--milestones)
15. [Technical Stack](#15-technical-stack)
16. [Risks & Mitigations](#16-risks--mitigations)
17. [Future Enhancements](#17-future-enhancements)

---

## 1. Executive Summary

### 1.1 Product Overview

eExams is a comprehensive online examination management system designed for educational institutions. It enables instructors to create, manage, and grade exams while providing students with a seamless exam-taking experience. The platform supports multiple question types, automatic grading, real-time progress tracking, and detailed analytics.

### 1.2 Vision Statement

To provide a secure, user-friendly, and scalable online examination platform that enhances the assessment experience for both educators and students.

### 1.3 Key Features

- **Multi-role Authentication** - Separate experiences for students and instructors
- **Exam Creation & Management** - Rich exam builder with multiple question types
- **Timed Examinations** - Countdown timer with auto-submission
- **Automatic Grading** - Instant results for objective questions
- **Performance Analytics** - Visual dashboards for tracking progress
- **Secure Testing Environment** - Anti-cheating measures and session management

---

## 2. Problem Statement

### 2.1 Current Challenges

Traditional examination systems face several challenges:

1. **Logistical Complexity** - Physical exams require venue booking, paper printing, and manual distribution
2. **Manual Grading** - Time-consuming and error-prone grading process
3. **Limited Accessibility** - Students must be physically present at specific times/locations
4. **No Real-time Feedback** - Students wait days/weeks for results
5. **Paper Waste** - Environmental impact of printed exam materials
6. **Data Analysis** - Difficult to identify trends and areas for improvement

### 2.2 Opportunity

A digital examination platform can:

- Reduce administrative overhead by 70%
- Provide instant results for objective assessments
- Enable flexible exam scheduling
- Generate actionable insights from exam data
- Support remote and hybrid learning models

---

## 3. Goals & Objectives

### 3.1 Primary Goals

| Goal | Description | Success Metric |
|------|-------------|----------------|
| **G1** | Enable online exam creation | Instructors can create exams in < 15 minutes |
| **G2** | Provide seamless exam-taking | < 1% technical issues during exams |
| **G3** | Deliver instant results | Results available within 5 seconds of submission |
| **G4** | Ensure exam security | Zero unauthorized access incidents |

### 3.2 Objectives

1. **O1:** Build a responsive web application accessible on desktop and mobile
2. **O2:** Support at least 100 concurrent exam takers
3. **O3:** Implement role-based access control (RBAC)
4. **O4:** Achieve 99.5% uptime during exam periods
5. **O5:** Provide comprehensive analytics dashboards

---

## 4. Target Users

### 4.1 User Personas

#### Persona 1: Student (Primary User)

| Attribute | Details |
|-----------|---------|
| **Name** | Amina Ibrahim |
| **Age** | 21 |
| **Role** | Undergraduate Student |
| **Tech Savvy** | Moderate |
| **Goals** | Take exams conveniently, view results quickly, track academic progress |
| **Pain Points** | Anxiety about technical failures, unclear exam instructions |
| **Devices** | Laptop, Android phone |

#### Persona 2: Instructor (Primary User)

| Attribute | Details |
|-----------|---------|
| **Name** | Dr. Chukwu Emmanuel |
| **Age** | 45 |
| **Role** | Senior Lecturer |
| **Tech Savvy** | Low to Moderate |
| **Goals** | Create exams efficiently, grade automatically, analyze student performance |
| **Pain Points** | Time spent on manual grading, difficulty creating varied questions |
| **Devices** | Desktop computer |

#### Persona 3: Administrator (Secondary User)

| Attribute | Details |
|-----------|---------|
| **Name** | System Admin |
| **Role** | IT Department |
| **Goals** | Manage users, monitor system health, handle support requests |
| **Devices** | Desktop computer |

### 4.2 User Distribution (Expected)

- Students: 85%
- Instructors: 12%
- Administrators: 3%

---

## 5. User Stories

### 5.1 Authentication & User Management

| ID | As a... | I want to... | So that... | Priority |
|----|---------|--------------|------------|----------|
| US-01 | Student | register for an account | I can access the exam platform | P0 |
| US-02 | User | log in with email/password | I can access my dashboard | P0 |
| US-03 | User | reset my password | I can recover my account | P0 |
| US-04 | User | update my profile | my information stays current | P1 |
| US-05 | User | log out securely | my session is terminated | P0 |
| US-06 | Admin | manage user accounts | I can activate/deactivate users | P1 |

### 5.2 Student Features

| ID | As a... | I want to... | So that... | Priority |
|----|---------|--------------|------------|----------|
| US-10 | Student | view available exams | I know which exams I can take | P0 |
| US-11 | Student | see exam details before starting | I can prepare accordingly | P0 |
| US-12 | Student | take an exam with a timer | I manage my time effectively | P0 |
| US-13 | Student | navigate between questions | I can answer in any order | P0 |
| US-14 | Student | flag questions for review | I can revisit uncertain answers | P1 |
| US-15 | Student | submit my exam | my answers are recorded | P0 |
| US-16 | Student | view my exam results | I know my score | P0 |
| US-17 | Student | see correct answers (if allowed) | I can learn from mistakes | P1 |
| US-18 | Student | view my exam history | I can track my performance | P1 |
| US-19 | Student | see performance analytics | I understand my strengths/weaknesses | P2 |

### 5.3 Instructor Features

| ID | As a... | I want to... | So that... | Priority |
|----|---------|--------------|------------|----------|
| US-20 | Instructor | create a new exam | students can take assessments | P0 |
| US-21 | Instructor | add multiple choice questions | I can test knowledge efficiently | P0 |
| US-22 | Instructor | add true/false questions | I can create quick assessments | P0 |
| US-23 | Instructor | add short answer questions | I can test deeper understanding | P1 |
| US-24 | Instructor | set exam duration | students have time limits | P0 |
| US-25 | Instructor | set passing score | grading criteria is clear | P0 |
| US-26 | Instructor | schedule exam availability | exams are only available at specific times | P1 |
| US-27 | Instructor | view all my exams | I can manage my assessments | P0 |
| US-28 | Instructor | edit existing exams | I can fix errors or update content | P0 |
| US-29 | Instructor | delete exams | I can remove outdated assessments | P1 |
| US-30 | Instructor | view student results | I can assess performance | P0 |
| US-31 | Instructor | export results to CSV | I can analyze data externally | P2 |
| US-32 | Instructor | see class analytics | I understand overall performance | P1 |

---

## 6. Functional Requirements

### 6.1 Authentication Module

| ID | Requirement | Description | Priority |
|----|-------------|-------------|----------|
| FR-01 | User Registration | System shall allow users to register with name, email, password, and user type | P0 |
| FR-02 | Email Validation | System shall validate email format and uniqueness | P0 |
| FR-03 | Password Requirements | Passwords must be minimum 8 characters with at least one number | P0 |
| FR-04 | User Login | System shall authenticate users with email and password | P0 |
| FR-05 | JWT Authentication | System shall issue JWT tokens valid for 24 hours | P0 |
| FR-06 | Password Reset | System shall allow password reset via email token | P0 |
| FR-07 | Session Management | System shall invalidate sessions on logout | P0 |
| FR-08 | Role Assignment | System shall assign roles (student/instructor/admin) at registration | P0 |

### 6.2 Exam Management Module

| ID | Requirement | Description | Priority |
|----|-------------|-------------|----------|
| FR-10 | Create Exam | Instructors can create exams with title, description, duration, passing score | P0 |
| FR-11 | Question Types | Support multiple choice, true/false, and short answer questions | P0 |
| FR-12 | Question Points | Each question can have configurable point values | P0 |
| FR-13 | Answer Options | Multiple choice questions support 2-6 answer options | P0 |
| FR-14 | Correct Answer | Instructors must specify correct answers for auto-grading | P0 |
| FR-15 | Exam Scheduling | Exams can have start and end availability dates | P1 |
| FR-16 | Exam Status | Exams have statuses: draft, published, closed | P1 |
| FR-17 | Edit Exam | Instructors can edit exams that haven't been taken | P0 |
| FR-18 | Delete Exam | Instructors can delete exams (soft delete) | P1 |
| FR-19 | Question Reordering | Instructors can reorder questions via drag-and-drop | P2 |
| FR-20 | Question Bank | Instructors can save questions for reuse | P2 |

### 6.3 Exam Taking Module

| ID | Requirement | Description | Priority |
|----|-------------|-------------|----------|
| FR-30 | Exam List | Students can view available exams | P0 |
| FR-31 | Exam Details | Students can view exam info before starting | P0 |
| FR-32 | Start Exam | Students can start exams within availability window | P0 |
| FR-33 | Timer | Countdown timer displays remaining time | P0 |
| FR-34 | Auto-Submit | Exam auto-submits when time expires | P0 |
| FR-35 | Question Navigation | Students can navigate to any question | P0 |
| FR-36 | Answer Persistence | Answers are saved as student progresses | P0 |
| FR-37 | Flag Question | Students can flag questions for review | P1 |
| FR-38 | Progress Indicator | Show answered/unanswered question count | P0 |
| FR-39 | Submit Exam | Students can manually submit before time expires | P0 |
| FR-40 | Submission Confirmation | System confirms successful submission | P0 |
| FR-41 | One Attempt | Students can only take each exam once | P0 |

### 6.4 Results & Analytics Module

| ID | Requirement | Description | Priority |
|----|-------------|-------------|----------|
| FR-50 | Instant Results | System calculates and displays score immediately | P0 |
| FR-51 | Pass/Fail Status | System indicates if student passed based on passing score | P0 |
| FR-52 | Answer Review | Students can review their answers (if enabled) | P1 |
| FR-53 | Correct Answers | Show correct answers after exam (if enabled) | P1 |
| FR-54 | Exam History | Students can view all past exam results | P1 |
| FR-55 | Class Results | Instructors can view all student results for an exam | P0 |
| FR-56 | Score Distribution | Show histogram of score distribution | P2 |
| FR-57 | Performance Trends | Show student performance over time | P2 |
| FR-58 | Export Results | Export results to CSV format | P2 |

---

## 7. Non-Functional Requirements

### 7.1 Performance

| ID | Requirement | Target |
|----|-------------|--------|
| NFR-01 | Page Load Time | < 2 seconds on 3G connection |
| NFR-02 | API Response Time | < 500ms for 95th percentile |
| NFR-03 | Concurrent Users | Support 100+ simultaneous exam takers |
| NFR-04 | Database Queries | < 100ms for indexed queries |

### 7.2 Reliability

| ID | Requirement | Target |
|----|-------------|--------|
| NFR-10 | Uptime | 99.5% during exam periods |
| NFR-11 | Data Durability | Zero data loss for submitted exams |
| NFR-12 | Auto-save | Answers saved every 30 seconds |
| NFR-13 | Recovery | Session recovery on browser refresh |

### 7.3 Security

| ID | Requirement | Target |
|----|-------------|--------|
| NFR-20 | Authentication | JWT with secure httpOnly cookies |
| NFR-21 | Authorization | Role-based access control (RBAC) |
| NFR-22 | Data Encryption | HTTPS/TLS for all traffic |
| NFR-23 | Password Storage | bcrypt with cost factor 12 |
| NFR-24 | Input Validation | Server-side validation for all inputs |
| NFR-25 | XSS Prevention | Input sanitization and CSP headers |
| NFR-26 | CSRF Protection | Anti-CSRF tokens for state-changing requests |

### 7.4 Usability

| ID | Requirement | Target |
|----|-------------|--------|
| NFR-30 | Responsive Design | Fully functional on mobile, tablet, desktop |
| NFR-31 | Accessibility | WCAG 2.1 AA compliance |
| NFR-32 | Browser Support | Chrome, Firefox, Safari, Edge (latest 2 versions) |
| NFR-33 | Error Messages | Clear, actionable error messages |

### 7.5 Scalability

| ID | Requirement | Target |
|----|-------------|--------|
| NFR-40 | Horizontal Scaling | Stateless API for load balancing |
| NFR-41 | Database Scaling | MongoDB sharding-ready schema |
| NFR-42 | Asset Delivery | Static assets via CDN |

---

## 8. System Architecture

### 8.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              React + TypeScript + Vite                   │    │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────────┐   │    │
│  │  │  Auth   │ │Dashboard│ │  Exams  │ │   Results   │   │    │
│  │  │  Pages  │ │  Pages  │ │  Pages  │ │    Pages    │   │    │
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────────┘   │    │
│  │  ┌─────────────────────────────────────────────────┐   │    │
│  │  │        Shared Components (Shadcn/UI)            │   │    │
│  │  └─────────────────────────────────────────────────┘   │    │
│  │  ┌─────────────────────────────────────────────────┐   │    │
│  │  │     State Management (Context API / Zustand)    │   │    │
│  │  └─────────────────────────────────────────────────┘   │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ HTTPS / REST API
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                         BACKEND                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              Node.js + Express.js                        │    │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────────┐   │    │
│  │  │  Auth   │ │  User   │ │  Exam   │ │   Result    │   │    │
│  │  │ Routes  │ │ Routes  │ │ Routes  │ │   Routes    │   │    │
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────────┘   │    │
│  │  ┌─────────────────────────────────────────────────┐   │    │
│  │  │     Middleware (Auth, Validation, Error)        │   │    │
│  │  └─────────────────────────────────────────────────┘   │    │
│  │  ┌─────────────────────────────────────────────────┐   │    │
│  │  │           Mongoose ODM / Models                 │   │    │
│  │  └─────────────────────────────────────────────────┘   │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ MongoDB Driver
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        DATABASE                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                    MongoDB Atlas                         │    │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────────┐   │    │
│  │  │  Users  │ │  Exams  │ │Questions│ │   Results   │   │    │
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────────┘   │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

### 8.2 Component Diagram

```
Frontend Components:
├── App.tsx (Router)
├── pages/
│   ├── auth/
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   ├── ForgotPasswordPage.tsx
│   │   └── ResetPasswordPage.tsx
│   ├── dashboard/
│   │   ├── StudentDashboard.tsx
│   │   └── InstructorDashboard.tsx
│   ├── exams/
│   │   ├── ExamList.tsx
│   │   ├── ExamDetails.tsx
│   │   ├── TakeExam.tsx
│   │   ├── CreateExam.tsx
│   │   └── EditExam.tsx
│   └── results/
│       ├── ExamResult.tsx
│       ├── ExamHistory.tsx
│       └── ClassResults.tsx
├── components/
│   ├── ui/ (Shadcn components)
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   └── Footer.tsx
│   ├── exam/
│   │   ├── QuestionCard.tsx
│   │   ├── QuestionNavigation.tsx
│   │   ├── Timer.tsx
│   │   └── QuestionForm.tsx
│   └── shared/
│       ├── LoadingSpinner.tsx
│       ├── ErrorMessage.tsx
│       └── ConfirmModal.tsx
├── hooks/
│   ├── useAuth.ts
│   ├── useExam.ts
│   └── useTimer.ts
├── services/
│   ├── api.ts
│   ├── authService.ts
│   ├── examService.ts
│   └── resultService.ts
└── context/
    ├── AuthContext.tsx
    └── ExamContext.tsx
```

---

## 9. Database Schema

### 9.1 Entity Relationship Diagram

```
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│      User       │       │      Exam       │       │    Question     │
├─────────────────┤       ├─────────────────┤       ├─────────────────┤
│ _id             │       │ _id             │       │ _id             │
│ name            │       │ title           │       │ examId (FK)     │
│ email           │◄──────│ instructorId(FK)│       │ type            │
│ password        │       │ description     │◄──────│ text            │
│ role            │       │ duration        │       │ options[]       │
│ createdAt       │       │ passingScore    │       │ correctAnswer   │
│ updatedAt       │       │ startDate       │       │ points          │
└─────────────────┘       │ endDate         │       │ order           │
                          │ status          │       └─────────────────┘
                          │ createdAt       │
                          └─────────────────┘
                                  │
                                  │
                                  ▼
                          ┌─────────────────┐
                          │     Result      │
                          ├─────────────────┤
                          │ _id             │
                          │ studentId (FK)  │
                          │ examId (FK)     │
                          │ answers[]       │
                          │ score           │
                          │ totalPoints     │
                          │ passed          │
                          │ startedAt       │
                          │ submittedAt     │
                          └─────────────────┘
```

### 9.2 Collection Schemas

#### Users Collection

```javascript
{
  _id: ObjectId,
  name: String,           // required, min 2 chars
  email: String,          // required, unique, valid email
  password: String,       // required, bcrypt hashed
  role: String,           // enum: ['student', 'instructor', 'admin']
  avatar: String,         // optional, URL
  resetToken: String,     // for password reset
  resetTokenExpiry: Date,
  isActive: Boolean,      // default: true
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

#### Exams Collection

```javascript
{
  _id: ObjectId,
  title: String,          // required, max 200 chars
  description: String,    // optional, max 2000 chars
  instructorId: ObjectId, // ref: Users
  duration: Number,       // in minutes, required
  passingScore: Number,   // percentage (0-100)
  startDate: Date,        // when exam becomes available
  endDate: Date,          // when exam closes
  status: String,         // enum: ['draft', 'published', 'closed']
  shuffleQuestions: Boolean,
  showResults: Boolean,   // show results immediately
  showCorrectAnswers: Boolean,
  totalPoints: Number,    // calculated
  questionCount: Number,  // calculated
  createdAt: Date,
  updatedAt: Date
}
```

#### Questions Collection

```javascript
{
  _id: ObjectId,
  examId: ObjectId,       // ref: Exams
  type: String,           // enum: ['multiple-choice', 'true-false', 'short-answer']
  text: String,           // required, the question text
  options: [{             // for multiple-choice
    id: String,
    text: String
  }],
  correctAnswer: Mixed,   // String for MC/TF, Array for multiple correct
  points: Number,         // default: 1
  order: Number,          // display order
  explanation: String,    // shown after submission
  createdAt: Date,
  updatedAt: Date
}
```

#### Results Collection

```javascript
{
  _id: ObjectId,
  studentId: ObjectId,    // ref: Users
  examId: ObjectId,       // ref: Exams
  answers: [{
    questionId: ObjectId,
    answer: Mixed,        // student's answer
    isCorrect: Boolean,
    pointsEarned: Number
  }],
  score: Number,          // percentage
  totalPoints: Number,    // points earned
  maxPoints: Number,      // max possible points
  passed: Boolean,
  flaggedQuestions: [ObjectId],
  startedAt: Date,
  submittedAt: Date,
  timeSpent: Number,      // in seconds
  ipAddress: String,
  userAgent: String
}
```

### 9.3 Indexes

```javascript
// Users
{ email: 1 }              // unique
{ role: 1 }

// Exams
{ instructorId: 1 }
{ status: 1, startDate: 1, endDate: 1 }

// Questions
{ examId: 1, order: 1 }

// Results
{ studentId: 1, examId: 1 }  // unique compound
{ examId: 1 }
{ studentId: 1, submittedAt: -1 }
```

---

## 10. API Specification

### 10.1 Base URL

```
Development: http://localhost:5000/api
Production:  https://api.eexams.example.com/api
```

### 10.2 Authentication Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/auth/register` | Register new user | No |
| POST | `/auth/login` | User login | No |
| POST | `/auth/logout` | User logout | Yes |
| POST | `/auth/forgot-password` | Request password reset | No |
| POST | `/auth/reset-password` | Reset password with token | No |
| GET | `/auth/me` | Get current user | Yes |
| PUT | `/auth/update-password` | Change password | Yes |

### 10.3 User Endpoints

| Method | Endpoint | Description | Auth | Role |
|--------|----------|-------------|------|------|
| GET | `/users/profile` | Get user profile | Yes | All |
| PUT | `/users/profile` | Update profile | Yes | All |
| GET | `/users` | List all users | Yes | Admin |
| GET | `/users/:id` | Get user by ID | Yes | Admin |
| PUT | `/users/:id` | Update user | Yes | Admin |
| DELETE | `/users/:id` | Deactivate user | Yes | Admin |

### 10.4 Exam Endpoints

| Method | Endpoint | Description | Auth | Role |
|--------|----------|-------------|------|------|
| GET | `/exams` | List available exams | Yes | Student |
| GET | `/exams/my-exams` | List instructor's exams | Yes | Instructor |
| GET | `/exams/:id` | Get exam details | Yes | All |
| POST | `/exams` | Create new exam | Yes | Instructor |
| PUT | `/exams/:id` | Update exam | Yes | Instructor |
| DELETE | `/exams/:id` | Delete exam | Yes | Instructor |
| POST | `/exams/:id/publish` | Publish exam | Yes | Instructor |
| POST | `/exams/:id/close` | Close exam | Yes | Instructor |

### 10.5 Question Endpoints

| Method | Endpoint | Description | Auth | Role |
|--------|----------|-------------|------|------|
| GET | `/exams/:examId/questions` | Get exam questions | Yes | All |
| POST | `/exams/:examId/questions` | Add question | Yes | Instructor |
| PUT | `/questions/:id` | Update question | Yes | Instructor |
| DELETE | `/questions/:id` | Delete question | Yes | Instructor |
| PUT | `/exams/:examId/questions/reorder` | Reorder questions | Yes | Instructor |

### 10.6 Exam Taking Endpoints

| Method | Endpoint | Description | Auth | Role |
|--------|----------|-------------|------|------|
| POST | `/exams/:id/start` | Start exam attempt | Yes | Student |
| GET | `/exams/:id/attempt` | Get current attempt | Yes | Student |
| PUT | `/exams/:id/answer` | Save answer | Yes | Student |
| POST | `/exams/:id/submit` | Submit exam | Yes | Student |
| POST | `/exams/:id/flag/:questionId` | Toggle flag | Yes | Student |

### 10.7 Result Endpoints

| Method | Endpoint | Description | Auth | Role |
|--------|----------|-------------|------|------|
| GET | `/results/my-results` | Get student's results | Yes | Student |
| GET | `/results/:id` | Get specific result | Yes | All |
| GET | `/exams/:id/results` | Get exam results | Yes | Instructor |
| GET | `/exams/:id/analytics` | Get exam analytics | Yes | Instructor |
| GET | `/results/export/:examId` | Export to CSV | Yes | Instructor |

### 10.8 API Response Format

**Success Response:**
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": [ ... ]
  }
}
```

### 10.9 HTTP Status Codes

| Code | Description |
|------|-------------|
| 200 | OK - Request successful |
| 201 | Created - Resource created |
| 400 | Bad Request - Validation error |
| 401 | Unauthorized - Authentication required |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource not found |
| 409 | Conflict - Resource already exists |
| 422 | Unprocessable Entity - Business logic error |
| 500 | Internal Server Error |

---

## 11. UI/UX Requirements

### 11.1 Design Principles

1. **Clarity** - Clear visual hierarchy and intuitive navigation
2. **Consistency** - Uniform design patterns across all pages
3. **Feedback** - Immediate visual feedback for all actions
4. **Accessibility** - Usable by people with disabilities
5. **Mobile-First** - Optimized for mobile, enhanced for desktop

### 11.2 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#1546a3` | Buttons, links, highlights |
| Secondary | `#0d99ff` | Accents, icons |
| Success | `#22c55e` | Success states, passing |
| Warning | `#f59e0b` | Warnings, caution |
| Error | `#ef4444` | Errors, failing |
| Background | `#f2f4f6` | Page background |
| Text Primary | `#262e3d` | Main text |
| Text Secondary | `#64748b` | Secondary text |

### 11.3 Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| H1 | Inter | 32px | 700 |
| H2 | Inter | 24px | 600 |
| H3 | Inter | 20px | 600 |
| Body | Inter | 16px | 400 |
| Small | Inter | 14px | 400 |
| Caption | Inter | 12px | 400 |

### 11.4 Key Screens

1. **Login Page** - Clean, centered form with logo
2. **Student Dashboard** - Overview cards, exam list, progress chart
3. **Exam List** - Cards with exam info, status badges
4. **Take Exam** - Question display, timer, navigation sidebar
5. **Exam Result** - Score card, answer breakdown
6. **Instructor Dashboard** - Exam management, quick stats
7. **Create Exam** - Multi-step form, question builder

### 11.5 Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| Mobile | < 640px | Phones |
| Tablet | 640px - 1024px | Tablets |
| Desktop | > 1024px | Laptops, Desktops |

---

## 12. Security Requirements

### 12.1 Authentication Security

- [ ] Passwords hashed with bcrypt (cost factor 12)
- [ ] JWT tokens with 24-hour expiry
- [ ] Refresh tokens with 7-day expiry (httpOnly cookie)
- [ ] Rate limiting on login attempts (5 per minute)
- [ ] Account lockout after 10 failed attempts

### 12.2 Authorization Security

- [ ] Role-based access control (RBAC)
- [ ] Resource ownership verification
- [ ] API route protection middleware
- [ ] Frontend route guards

### 12.3 Data Security

- [ ] HTTPS only in production
- [ ] Input validation on all endpoints
- [ ] MongoDB injection prevention
- [ ] XSS prevention (content sanitization)
- [ ] CORS configuration (whitelist origins)

### 12.4 Exam Security

- [ ] One attempt per student per exam
- [ ] Server-side timer validation
- [ ] Answer encryption in transit
- [ ] IP address logging
- [ ] Browser/device fingerprinting (optional)

---

## 13. Success Metrics

### 13.1 Key Performance Indicators (KPIs)

| Metric | Target | Measurement |
|--------|--------|-------------|
| **User Registration** | 100+ users | Count in database |
| **Exams Created** | 20+ exams | Count in database |
| **Exam Completion Rate** | > 95% | Submitted / Started |
| **Average Response Time** | < 500ms | API monitoring |
| **Uptime** | > 99% | Monitoring tools |
| **User Satisfaction** | > 4/5 | Survey feedback |

### 13.2 Technical Metrics

| Metric | Target |
|--------|--------|
| Page Load Time | < 2 seconds |
| Time to First Byte | < 200ms |
| Error Rate | < 0.1% |
| Test Coverage | > 70% |

---

## 14. Timeline & Milestones

### 14.1 Project Phases

| Phase | Duration | Description |
|-------|----------|-------------|
| **Phase 1: Foundation** | Week 1-2 | Setup, Auth, Basic UI |
| **Phase 2: Core Features** | Week 3-4 | Exam CRUD, Taking Exams |
| **Phase 3: Results** | Week 5 | Scoring, Results, History |
| **Phase 4: Polish** | Week 6 | Testing, Deployment, Docs |

### 14.2 Milestone Schedule

| Milestone | Date | Deliverables |
|-----------|------|--------------|
| **M1: Project Setup** | Week 1 | Dev environment, DB schema, Auth API |
| **M2: Auth Complete** | Week 2 | Login, Register, Password Reset |
| **M3: Exam Management** | Week 3 | Create/Edit/Delete Exams |
| **M4: Exam Taking** | Week 4 | Take Exam, Timer, Submit |
| **M5: Results** | Week 5 | Scoring, Results, Analytics |
| **M6: Deployment** | Week 6 | Production deployment, Documentation |

---

## 15. Technical Stack

### 15.1 Frontend

| Technology | Purpose |
|------------|---------|
| **React 18** | UI library |
| **TypeScript** | Type safety |
| **Vite** | Build tool |
| **React Router 6** | Routing |
| **TailwindCSS** | Styling |
| **Shadcn/UI** | Component library |
| **React Hook Form** | Form handling |
| **Zod** | Validation |
| **Zustand** | State management |
| **Recharts** | Charts |
| **Sonner** | Toast notifications |

### 15.2 Backend

| Technology | Purpose |
|------------|---------|
| **Node.js 18+** | Runtime |
| **Express.js** | Web framework |
| **TypeScript** | Type safety |
| **MongoDB** | Database |
| **Mongoose** | ODM |
| **JWT** | Authentication |
| **bcrypt** | Password hashing |
| **Joi** | Validation |
| **Morgan** | Logging |
| **Helmet** | Security headers |
| **CORS** | Cross-origin |

### 15.3 DevOps

| Technology | Purpose |
|------------|---------|
| **Git** | Version control |
| **GitHub** | Repository hosting |
| **Vercel** | Frontend hosting |
| **Render** | Backend hosting |
| **MongoDB Atlas** | Database hosting |
| **ESLint** | Linting |
| **Prettier** | Code formatting |

---

## 16. Risks & Mitigations

### 16.1 Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Exam timer desync | Medium | High | Server-side time validation |
| Data loss during exam | Low | Critical | Auto-save every 30 seconds |
| High traffic crashes | Medium | High | Load testing, horizontal scaling |
| Security breach | Low | Critical | Security audit, penetration testing |

### 16.2 Project Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Scope creep | High | Medium | Strict MVP definition |
| Timeline delay | Medium | Medium | Buffer time in schedule |
| Technical complexity | Medium | Medium | Incremental development |

---

## 17. Future Enhancements

### 17.1 Version 2.0 Features

- [ ] Essay questions with manual grading
- [ ] Proctoring integration (camera monitoring)
- [ ] Question bank with tags and search
- [ ] Bulk question import (CSV/Excel)
- [ ] Exam templates
- [ ] Randomized question pools
- [ ] Partial credit scoring
- [ ] Multi-language support
- [ ] Email notifications
- [ ] Mobile app (React Native)

### 17.2 Version 3.0 Features

- [ ] AI-powered question generation
- [ ] Plagiarism detection
- [ ] Advanced analytics with ML insights
- [ ] Integration with LMS (Moodle, Canvas)
- [ ] API for third-party integrations
- [ ] White-label customization

---

## Appendix

### A. Glossary

| Term | Definition |
|------|------------|
| **JWT** | JSON Web Token - authentication standard |
| **RBAC** | Role-Based Access Control |
| **ODM** | Object Document Mapper (Mongoose) |
| **SSR** | Server-Side Rendering |
| **CRUD** | Create, Read, Update, Delete |

### B. References

- React Documentation: https://react.dev
- Express.js Guide: https://expressjs.com
- MongoDB Manual: https://docs.mongodb.com
- Tailwind CSS: https://tailwindcss.com
- Shadcn/UI: https://ui.shadcn.com

---

*Document End*
