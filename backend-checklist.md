# Exzams Backend Development Checklist

A comprehensive checklist for building the Exzams backend API.

---

## Phase 1: Project Foundation

### 1.1 Express + TypeScript Setup

- [ ] Initialize Node.js project
  ```bash
  npm init -y
  ```
- [ ] Install core dependencies
  ```bash
  npm install express mongoose dotenv cors helmet morgan
  npm install -D typescript @types/node @types/express ts-node nodemon
  ```
- [ ] Configure TypeScript (`tsconfig.json`)
  - [ ] Strict mode enabled
  - [ ] Path aliases configured
  - [ ] Output to `dist` folder
- [ ] Set up folder structure
  ```
  /src
  ├── config/
  ├── controllers/
  ├── middleware/
  ├── models/
  ├── routes/
  ├── services/
  ├── utils/
  ├── types/
  ├── validations/
  └── app.ts
  ```
- [ ] Create `app.ts` entry point
- [ ] Add npm scripts (dev, build, start)

### 1.2 Environment Configuration

- [ ] Create `.env.example` with all variables
- [ ] Set up config loader (`/config/index.ts`)
- [ ] Environment validation on startup
- [ ] Variables needed:
  - [ ] `NODE_ENV`
  - [ ] `PORT`
  - [ ] `MONGODB_URI`
  - [ ] `JWT_SECRET`
  - [ ] `JWT_REFRESH_SECRET`
  - [ ] `REDIS_URL`
  - [ ] `CLOUDFLARE_R2_*`
  - [ ] `ZEPTOMAIL_API_KEY`
  - [ ] `AI_PROVIDER` & `AI_API_KEY`

### 1.3 Core Middleware Setup

- [ ] CORS configuration (allow frontend origin)
- [ ] Helmet for security headers
- [ ] Morgan for request logging
- [ ] JSON body parser
- [ ] Error handling middleware
- [ ] Not found handler

### 1.4 Database Connection

- [ ] MongoDB connection utility
- [ ] Connection retry logic
- [ ] Graceful shutdown handling
- [ ] Connection event logging

---

## Phase 2: Database Models (Mongoose)

### 2.1 Core Models

- [ ] **School Model**

  ```typescript
  - name: string
  - code: string (unique, auto-generated)
  - address: object
  - state: string
  - lga: string
  - type: enum (primary, secondary, both)
  - logo: string (R2 URL)
  - subscriptionPlan: ObjectId
  - subscriptionExpiry: Date
  - isActive: boolean
  - settings: object
  - timestamps
  ```

- [ ] **User Model**

  ```typescript
  - email: string (unique)
  - password: string (hashed)
  - firstName: string
  - lastName: string
  - role: enum (super_admin, school_admin, teacher, student, parent)
  - school: ObjectId (ref: School)
  - profilePicture: string
  - isActive: boolean
  - lastLogin: Date
  - refreshToken: string
  - resetPasswordToken: string
  - timestamps
  ```

- [ ] **Student Profile Model**

  ```typescript
  - user: ObjectId (ref: User)
  - admissionNumber: string
  - class: ObjectId (ref: Class)
  - dateOfBirth: Date
  - gender: enum
  - parentId: ObjectId (ref: User)
  - timestamps
  ```

- [ ] **Teacher Profile Model**

  ```typescript
  - user: ObjectId (ref: User)
  - employeeId: string
  - subjects: [ObjectId] (ref: Subject)
  - classes: [ObjectId] (ref: Class)
  - qualifications: [string]
  - timestamps
  ```

- [ ] **Class Model**

  ```typescript
  - name: string
  - school: ObjectId
  - level: enum (primary_1 through ss_3)
  - section: string (optional)
  - classTeacher: ObjectId (ref: User)
  - academicSession: ObjectId
  - isActive: boolean
  - timestamps
  ```

- [ ] **Subject Model**
  ```typescript
  - name: string
  - code: string
  - school: ObjectId
  - description: string
  - isActive: boolean
  - timestamps
  ```

### 2.2 Exam Models

- [ ] **Exam Model**

  ```typescript
  - title: string
  - description: string
  - school: ObjectId
  - class: ObjectId
  - subject: ObjectId
  - createdBy: ObjectId (teacher)
  - duration: number (minutes)
  - totalMarks: number
  - passingScore: number
  - startTime: Date
  - endTime: Date
  - status: enum (draft, scheduled, active, completed)
  - settings: object (shuffle, showResults, attempts)
  - isOfflineEnabled: boolean
  - offlineVersion: number
  - timestamps
  ```

- [ ] **Question Model**

  ```typescript
  - exam: ObjectId (optional, for exam-specific)
  - school: ObjectId
  - subject: ObjectId
  - topic: string
  - type: enum (multiple_choice, true_false, fill_blank, short_answer, essay)
  - difficulty: enum (easy, medium, hard)
  - content: string (the question text)
  - options: [object] (for MCQ: text, isCorrect)
  - correctAnswer: string
  - marks: number
  - explanation: string
  - imageUrl: string
  - createdBy: ObjectId
  - isAIGenerated: boolean
  - timestamps
  ```

- [ ] **Exam Attempt Model**
  ```typescript
  - exam: ObjectId
  - student: ObjectId
  - startedAt: Date
  - submittedAt: Date
  - answers: [object] (questionId, answer, isCorrect, marksAwarded)
  - totalScore: number
  - percentage: number
  - status: enum (in_progress, submitted, graded)
  - isOfflineAttempt: boolean
  - syncedAt: Date
  - feedback: object (AI-generated)
  - timestamps
  ```

### 2.3 Practice Exam Models

- [ ] **Practice Category Model**

  ```typescript
  - name: string (Common Entrance, WAEC, NECO, JAMB, NABTEB)
  - description: string
  - icon: string
  - isActive: boolean
  ```

- [ ] **Practice Question Model**
  ```typescript
  - category: ObjectId
  - subject: string
  - year: number
  - content: string
  - options: [object]
  - correctAnswer: string
  - explanation: string
  - difficulty: enum
  - timestamps
  ```

### 2.4 Supporting Models

- [ ] **Academic Session Model**
- [ ] **Subscription Plan Model**
- [ ] **Payment Model**
- [ ] **Notification Model**
- [ ] **Audit Log Model**

---

## Phase 3: Authentication System

### 3.1 JWT Implementation

- [ ] Install jsonwebtoken
- [ ] Access token generation (15min expiry)
- [ ] Refresh token generation (7 days expiry)
- [ ] Token verification utility
- [ ] Token blacklist with Redis

### 3.2 Password Security

- [ ] Install bcryptjs
- [ ] Password hashing utility
- [ ] Password comparison utility
- [ ] Password strength validation

### 3.3 Auth Middleware

- [ ] `authenticate` middleware (verify JWT)
- [ ] `authorize` middleware (role-based)
- [ ] `schoolContext` middleware (multi-tenant)
- [ ] Rate limiting for auth endpoints

### 3.4 Auth Controllers

- [ ] **POST /auth/register** - School registration
- [ ] **POST /auth/login** - User login
- [ ] **POST /auth/logout** - User logout
- [ ] **POST /auth/refresh** - Refresh token
- [ ] **POST /auth/forgot-password** - Request reset
- [ ] **POST /auth/reset-password** - Reset password
- [ ] **GET /auth/me** - Get current user

---

## Phase 4: Multi-Tenancy

### 4.1 Tenant Middleware

- [ ] Extract school ID from JWT/request
- [ ] Attach school context to request
- [ ] Validate school is active
- [ ] Check subscription status

### 4.2 Query Scoping

- [ ] Base query helper with school filter
- [ ] Mongoose plugin for auto-scoping
- [ ] Cross-tenant access prevention

---

## Phase 5: Core API Endpoints

### 5.1 School Management (Super Admin)

- [ ] **GET /schools** - List all schools
- [ ] **POST /schools** - Create school
- [ ] **GET /schools/:id** - Get school details
- [ ] **PUT /schools/:id** - Update school
- [ ] **DELETE /schools/:id** - Deactivate school
- [ ] **GET /schools/:id/stats** - School statistics

### 5.2 User Management

- [ ] **GET /users** - List users (filtered by role)
- [ ] **POST /users** - Create user
- [ ] **GET /users/:id** - Get user details
- [ ] **PUT /users/:id** - Update user
- [ ] **DELETE /users/:id** - Deactivate user
- [ ] **POST /users/bulk** - Bulk import users (CSV)
- [ ] **PUT /users/:id/password** - Change password

### 5.3 Class & Subject Management

- [ ] **CRUD for /classes**
- [ ] **CRUD for /subjects**
- [ ] **POST /classes/:id/students** - Assign students
- [ ] **POST /subjects/:id/teachers** - Assign teachers

### 5.4 Exam Management

- [ ] **GET /exams** - List exams (with filters)
- [ ] **POST /exams** - Create exam
- [ ] **GET /exams/:id** - Get exam details
- [ ] **PUT /exams/:id** - Update exam
- [ ] **DELETE /exams/:id** - Delete exam
- [ ] **POST /exams/:id/publish** - Publish exam
- [ ] **POST /exams/:id/duplicate** - Duplicate exam

### 5.5 Question Management

- [ ] **GET /questions** - List questions (bank)
- [ ] **POST /questions** - Create question
- [ ] **PUT /questions/:id** - Update question
- [ ] **DELETE /questions/:id** - Delete question
- [ ] **POST /questions/bulk** - Bulk create

### 5.6 Exam Taking (Student)

- [ ] **GET /exams/:id/start** - Start exam attempt
- [ ] **POST /exams/:id/answer** - Submit single answer
- [ ] **POST /exams/:id/submit** - Submit entire exam
- [ ] **GET /exams/:id/result** - Get exam result

### 5.7 Results & Analytics

- [ ] **GET /results** - List results (filtered)
- [ ] **GET /results/:attemptId** - Detailed result
- [ ] **GET /analytics/student/:id** - Student analytics
- [ ] **GET /analytics/exam/:id** - Exam analytics
- [ ] **GET /analytics/class/:id** - Class analytics

---

## Phase 6: Offline Sync API

### 6.1 Exam Download

- [ ] **GET /exams/:id/download** - Download exam for offline
  - Include all questions
  - Include images (base64 or URLs)
  - Version number for sync
  - Expiry time

### 6.2 Sync Endpoints

- [ ] **POST /sync/answers** - Sync offline answers
  - Accept batch of answers
  - Conflict detection
  - Return sync status

- [ ] **POST /sync/submit** - Sync completed exam
  - Validate exam was downloaded
  - Check for duplicate submission
  - Process grading

- [ ] **GET /sync/status** - Get sync status
  - Pending items
  - Last sync time

### 6.3 Conflict Resolution

- [ ] Server-side conflict detection
- [ ] Last-write-wins strategy
- [ ] Conflict logging for audit

---

## Phase 7: AI Integration Service

### 7.1 Provider-Agnostic Setup

- [ ] Create AI service abstraction layer
- [ ] Support multiple providers:
  - [ ] OpenAI
  - [ ] Google Gemini
  - [ ] Anthropic Claude
  - [ ] Local/Custom
- [ ] Provider selection via config
- [ ] Fallback mechanism

### 7.2 Question Generation

- [ ] **POST /ai/generate-questions**
  - Input: topic, subject, count, difficulty
  - Output: array of questions
  - Rate limiting per school
  - Usage tracking

### 7.3 Feedback Generation

- [ ] **POST /ai/generate-feedback**
  - Input: exam attempt, answers
  - Output: personalized feedback
  - Strengths/weaknesses analysis

### 7.4 Essay Grading Assistance

- [ ] **POST /ai/grade-essay**
  - Input: question, answer
  - Output: suggested score, comments
  - Teacher review required

### 7.5 Usage & Limits

- [ ] Track AI usage per school
- [ ] Enforce subscription limits
- [ ] Usage reports for billing

---

## Phase 8: Email Service (ZeptoMail)

### 8.1 ZeptoMail Integration

- [ ] Install ZeptoMail SDK
- [ ] Configure API credentials
- [ ] Create email service class
- [ ] HTML email templates

### 8.2 Email Templates

- [ ] Welcome email
- [ ] Password reset email
- [ ] Exam scheduled notification
- [ ] Exam result notification
- [ ] Subscription expiry warning
- [ ] Parent notification template

### 8.3 Email Queue

- [ ] Use BullMQ for email queue
- [ ] Retry failed emails
- [ ] Track email delivery status

---

## Phase 9: File Upload (Cloudflare R2)

### 9.1 R2 Configuration

- [ ] Install AWS S3 SDK (R2 compatible)
- [ ] Configure R2 credentials
- [ ] Create upload service

### 9.2 Upload Endpoints

- [ ] **POST /upload/profile** - Profile picture upload
  - Image validation
  - Resize/optimize
  - Return R2 URL

- [ ] **POST /upload/question-image** - Question image
  - Size limits
  - Format validation

### 9.3 File Management

- [ ] Signed URL generation
- [ ] File deletion utility
- [ ] Usage tracking

---

## Phase 10: Caching & Queue (Redis + BullMQ)

### 10.1 Redis Setup

- [ ] Install ioredis
- [ ] Connection configuration (Upstash)
- [ ] Connection error handling

### 10.2 Caching Implementation

- [ ] Cache frequently accessed data
  - School settings
  - User sessions
  - Exam metadata
- [ ] Cache invalidation strategy
- [ ] TTL configuration

### 10.3 BullMQ Setup

- [ ] Install bullmq
- [ ] Create queue instances
- [ ] Job processors

### 10.4 Background Jobs

- [ ] Email sending queue
- [ ] AI processing queue
- [ ] Report generation queue
- [ ] Sync processing queue

---

## Phase 11: Security & Validation

### 11.1 Input Validation

- [ ] Install Zod
- [ ] Create validation schemas for all endpoints
- [ ] Validation middleware
- [ ] Sanitize user input

### 11.2 Security Measures

- [ ] SQL injection prevention (N/A for MongoDB)
- [ ] NoSQL injection prevention
- [ ] XSS prevention (sanitize HTML)
- [ ] Rate limiting (express-rate-limit)
- [ ] Request size limits
- [ ] HTTPS enforcement

### 11.3 API Security

- [ ] API versioning (`/api/v1/`)
- [ ] Request ID tracking
- [ ] Audit logging for sensitive operations

---

## Phase 12: Error Handling & Logging

### 12.1 Error Handling

- [ ] Custom error classes
  - [ ] ValidationError
  - [ ] AuthenticationError
  - [ ] AuthorizationError
  - [ ] NotFoundError
  - [ ] ConflictError
- [ ] Global error handler middleware
- [ ] Consistent error response format

### 12.2 Logging

- [ ] Install winston
- [ ] Configure log levels
- [ ] Log to console (dev)
- [ ] Log to file/service (prod)
- [ ] Request/response logging
- [ ] Error logging with stack traces

---

## Phase 13: Testing

### 13.1 Unit Testing

- [ ] Set up Jest/Vitest
- [ ] Test utility functions
- [ ] Test validation schemas
- [ ] Test service layer

### 13.2 Integration Testing

- [ ] Test database operations
- [ ] Test API endpoints
- [ ] Test authentication flow
- [ ] Test multi-tenancy

### 13.3 API Testing

- [ ] Create Postman collection
- [ ] Document all endpoints
- [ ] Automated test runs

---

## Phase 14: API Documentation

### 14.1 Swagger/OpenAPI

- [ ] Install swagger-jsdoc and swagger-ui-express
- [ ] Document all endpoints
- [ ] Include request/response schemas
- [ ] Authentication documentation

### 14.2 README Documentation

- [ ] Setup instructions
- [ ] Environment variables
- [ ] API overview
- [ ] Deployment guide

---

## Phase 15: Deployment

### 15.1 Production Build

- [ ] TypeScript compilation
- [ ] Environment-specific configs
- [ ] Remove dev dependencies

### 15.2 Railway/Render Setup

- [ ] Connect GitHub repository
- [ ] Configure environment variables
- [ ] Set up auto-deployments
- [ ] Configure health checks

### 15.3 Database Setup

- [ ] MongoDB Atlas cluster
- [ ] Create database user
- [ ] IP whitelist configuration
- [ ] Backup configuration

### 15.4 Production Checklist

- [ ] Environment variables set
- [ ] Database connected
- [ ] Redis connected
- [ ] Email service configured
- [ ] R2 configured
- [ ] AI service configured
- [ ] Health endpoint working
- [ ] Logs configured
- [ ] Error tracking set up

---

## Endpoint Summary

### Authentication

| Method | Endpoint              | Description            |
| ------ | --------------------- | ---------------------- |
| POST   | /auth/register        | Register new school    |
| POST   | /auth/login           | User login             |
| POST   | /auth/logout          | User logout            |
| POST   | /auth/refresh         | Refresh token          |
| POST   | /auth/forgot-password | Request password reset |
| POST   | /auth/reset-password  | Reset password         |
| GET    | /auth/me              | Get current user       |

### Schools (Super Admin)

| Method | Endpoint     | Description        |
| ------ | ------------ | ------------------ |
| GET    | /schools     | List all schools   |
| POST   | /schools     | Create school      |
| GET    | /schools/:id | Get school details |
| PUT    | /schools/:id | Update school      |
| DELETE | /schools/:id | Deactivate school  |

### Users

| Method | Endpoint    | Description     |
| ------ | ----------- | --------------- |
| GET    | /users      | List users      |
| POST   | /users      | Create user     |
| GET    | /users/:id  | Get user        |
| PUT    | /users/:id  | Update user     |
| DELETE | /users/:id  | Deactivate user |
| POST   | /users/bulk | Bulk import     |

### Exams

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | /exams              | List exams           |
| POST   | /exams              | Create exam          |
| GET    | /exams/:id          | Get exam             |
| PUT    | /exams/:id          | Update exam          |
| DELETE | /exams/:id          | Delete exam          |
| POST   | /exams/:id/publish  | Publish exam         |
| GET    | /exams/:id/download | Download for offline |
| GET    | /exams/:id/start    | Start attempt        |
| POST   | /exams/:id/submit   | Submit exam          |

### Sync

| Method | Endpoint      | Description          |
| ------ | ------------- | -------------------- |
| POST   | /sync/answers | Sync offline answers |
| POST   | /sync/submit  | Sync completed exam  |
| GET    | /sync/status  | Get sync status      |

### AI

| Method | Endpoint               | Description          |
| ------ | ---------------------- | -------------------- |
| POST   | /ai/generate-questions | Generate questions   |
| POST   | /ai/generate-feedback  | Generate feedback    |
| POST   | /ai/grade-essay        | Assist essay grading |

---

## Progress Tracking

| Phase                       | Status      | Completion |
| --------------------------- | ----------- | ---------- |
| Phase 1: Project Foundation | Not Started | 0%         |
| Phase 2: Database Models    | Not Started | 0%         |
| Phase 3: Authentication     | Not Started | 0%         |
| Phase 4: Multi-Tenancy      | Not Started | 0%         |
| Phase 5: Core API Endpoints | Not Started | 0%         |
| Phase 6: Offline Sync API   | Not Started | 0%         |
| Phase 7: AI Integration     | Not Started | 0%         |
| Phase 8: Email Service      | Not Started | 0%         |
| Phase 9: File Upload        | Not Started | 0%         |
| Phase 10: Caching & Queue   | Not Started | 0%         |
| Phase 11: Security          | Not Started | 0%         |
| Phase 12: Error Handling    | Not Started | 0%         |
| Phase 13: Testing           | Not Started | 0%         |
| Phase 14: Documentation     | Not Started | 0%         |
| Phase 15: Deployment        | Not Started | 0%         |

---

**Last Updated**: $(date)
