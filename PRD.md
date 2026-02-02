# Product Requirements Document (PRD)

## Exzams - CBT Platform for Nigerian Schools

**Version:** 2.0  
**Last Updated:** February 2, 2026  
**Author:** Muhammad  
**Location:** Bauchi State, Nigeria  
**Project Type:** Capstone Project - Baze University  
**Target Market:** Primary and Secondary Schools in Northern Nigeria

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Market Analysis](#2-market-analysis)
3. [Problem Statement](#3-problem-statement)
4. [Goals & Objectives](#4-goals--objectives)
5. [Target Users](#5-target-users)
6. [User Stories](#6-user-stories)
7. [Functional Requirements](#7-functional-requirements)
8. [Non-Functional Requirements](#8-non-functional-requirements)
9. [Offline-First Architecture](#9-offline-first-architecture)
10. [AI Integration](#10-ai-integration)
11. [System Architecture](#11-system-architecture)
12. [Database Schema](#12-database-schema)
13. [API Specification](#13-api-specification)
14. [UI/UX Requirements](#14-uiux-requirements)
15. [Security Requirements](#15-security-requirements)
16. [Exam Practice Modules](#16-exam-practice-modules)
17. [Success Metrics](#17-success-metrics)
18. [Timeline & Milestones](#18-timeline--milestones)
19. [Technical Stack](#19-technical-stack)
20. [Risks & Mitigations](#20-risks--mitigations)
21. [Future Enhancements](#21-future-enhancements)

---

## 1. Executive Summary

### 1.1 Product Overview

**Exzams** is an offline-first, AI-powered Computer-Based Testing (CBT) platform designed specifically for primary and secondary schools in Northern Nigeria. The platform addresses the unique challenges of limited internet connectivity while providing a world-class examination experience.

Exzams operates as a **multi-tenant SaaS platform**, enabling multiple schools to subscribe and manage their examinations independently. Each school has isolated data while benefiting from shared infrastructure, reduced costs, and continuous platform improvements.

### 1.2 Vision Statement

_To democratize quality education assessment in Nigeria by providing an accessible, reliable, and intelligent CBT platform that works seamlessly regardless of internet connectivity._

### 1.3 Mission Statement

_Empower Nigerian schools with technology that enhances learning outcomes through smart assessments, AI-powered insights, and exam preparation tools for national examinations._

### 1.4 Key Differentiators

| Feature                    | Exzams                       | Traditional CBT               |
| -------------------------- | ---------------------------- | ----------------------------- |
| **Offline Capability**     | ✅ Full exam support offline | ❌ Requires constant internet |
| **AI Question Generation** | ✅ AI-powered                | ❌ Manual only                |
| **AI Student Feedback**    | ✅ Personalized analysis     | ❌ Basic scores only          |
| **National Exam Practice** | ✅ WAEC, NECO, JAMB, etc.    | ❌ Custom only                |
| **Multi-School SaaS**      | ✅ Scalable & affordable     | ❌ Per-school installation    |
| **Mobile Responsive**      | ✅ Works on any device       | ⚠️ Often desktop-only         |

### 1.5 Core Features

- **Offline-First Architecture** - Exams download to device, work without internet, sync when connected
- **AI Question Generator** - Teachers generate questions using AI based on topic and student level
- **AI Feedback Analyzer** - Students receive intelligent analysis of failed questions with study recommendations
- **National Exam Practice** - Common Entrance, NABTEB, WAEC, NECO, and JAMB practice modules
- **Multi-School Platform** - SaaS model with school-level isolation and branding
- **All Grade Levels** - Primary 1-6, JSS 1-3, SSS 1-3
- **Real-Time Proctoring** - Live monitoring for online exams
- **Parent Portal** - Parents track student progress and exam schedules
- **Comprehensive Analytics** - School-wide and individual performance dashboards

---

## 2. Market Analysis

### 2.1 Market Size

| Metric                         | Value           |
| ------------------------------ | --------------- |
| Total Schools in Nigeria       | ~80,000+        |
| Schools in Northern Nigeria    | ~35,000+        |
| Schools in Bauchi State        | ~3,500+         |
| Students (Primary & Secondary) | ~45 million     |
| Annual WAEC/NECO Candidates    | ~1.8 million    |
| Annual JAMB Candidates         | ~1.9 million    |
| CBT Adoption Rate              | Growing 25% YoY |

### 2.2 Target Market Segments

#### Primary Segment: Bauchi State & Northern Nigeria Private Schools

- ~8,000 private primary and secondary schools in Northern Nigeria
- ~800+ private schools in Bauchi State
- Higher technology adoption willingness
- Budget for digital solutions
- Seeking competitive advantage

#### Secondary Segment: Public Schools (Government Partnerships)

- ~27,000 public schools in Northern Nigeria
- Larger student populations
- Government digitization initiatives
- Potential for state-wide contracts

### 2.3 Competitive Landscape

| Competitor                | Strengths         | Weaknesses                     |
| ------------------------- | ----------------- | ------------------------------ |
| **JAMB CBT Centers**      | Official, trusted | Limited to JAMB, no offline    |
| **Exam.net**              | Feature-rich      | Expensive, no offline, foreign |
| **MySchool/PastQuestion** | Free practice     | No school management, ads      |
| **Testmoz**               | Simple            | No offline, limited features   |

### 2.4 Our Competitive Advantage

1. **Built for Nigeria** - Designed for Nigerian curriculum and exam boards
2. **Offline-First** - Works in areas with poor connectivity
3. **AI-Powered** - Intelligent question generation and feedback
4. **Affordable SaaS** - No expensive per-school installation
5. **Comprehensive** - School exams + National exam practice in one platform
6. **Local Support** - Based in Bauchi State, understands local needs

---

## 3. Problem Statement

### 3.1 Current Challenges

#### For Schools

- **Connectivity Issues** - Inconsistent internet makes online exams unreliable
- **Manual Processes** - Paper-based exams are time-consuming to create and grade
- **Limited Resources** - Lack of question banks and exam preparation materials
- **No Analytics** - Difficult to track student performance trends
- **High Costs** - Traditional CBT software requires expensive setup per school

#### For Teachers

- **Question Creation Burden** - Hours spent creating exam questions
- **Grading Workload** - Manual grading of hundreds of papers
- **No Performance Insights** - Hard to identify struggling students
- **Limited Differentiation** - Can't easily create level-appropriate questions

#### For Students

- **Exam Anxiety** - Limited practice with CBT format
- **No Feedback** - Just scores, no understanding of mistakes
- **Poor Preparation** - Limited access to quality practice materials
- **Technology Gap** - Unfamiliar with CBT when facing JAMB/WAEC

#### For Parents

- **Lack of Visibility** - Don't know child's academic progress
- **No Early Intervention** - Learn about problems only at report card time
- **Communication Gap** - Hard to track upcoming exams and deadlines

### 3.2 Solution Overview

Exzams addresses these challenges through:

| Challenge                | Solution                                             |
| ------------------------ | ---------------------------------------------------- |
| Poor connectivity        | Offline-first architecture with smart sync           |
| Question creation burden | AI-powered question generation                       |
| No student feedback      | AI analysis of failed questions with recommendations |
| CBT unfamiliarity        | National exam practice modules                       |
| High costs               | Affordable SaaS with monthly subscriptions           |
| No analytics             | Comprehensive dashboards for all stakeholders        |

---

## 4. Goals & Objectives

### 4.1 Business Goals

| Goal                           | Target            | Timeline |
| ------------------------------ | ----------------- | -------- |
| Onboard pilot schools (Bauchi) | 10 schools        | Month 3  |
| Active students                | 5,000             | Month 6  |
| Paying schools                 | 50                | Month 12 |
| Monthly Recurring Revenue      | ₦2.5M             | Month 12 |
| Geographic expansion           | 5 Northern states | Month 18 |

### 4.2 Product Goals

| Goal                | Success Criteria                             |
| ------------------- | -------------------------------------------- |
| Offline reliability | 99.9% exam completion rate offline           |
| AI adoption         | 60% of teachers using AI question generation |
| Student engagement  | 80% of students using practice modules       |
| Exam efficiency     | 70% reduction in grading time                |
| Parent engagement   | 50% of parents accessing portal monthly      |

### 4.3 Technical Goals

| Goal                     | Target                              |
| ------------------------ | ----------------------------------- |
| Offline sync reliability | 100% data integrity after sync      |
| AI response time         | < 5 seconds for question generation |
| Page load time           | < 2 seconds (online)                |
| Uptime                   | 99.5% availability                  |
| Mobile responsiveness    | 100% feature parity on mobile       |

---

## 5. Target Users

### 5.1 User Personas

#### 5.1.1 Super Admin (Platform Owner)

**Name:** Platform Administrator  
**Role:** Manages the entire SaaS platform

**Responsibilities:**

- Onboard and manage school subscriptions
- Monitor platform health and usage
- Manage billing and payments
- Handle support escalations
- Configure national exam question banks
- View platform-wide analytics

---

#### 5.1.2 School Admin

**Name:** Malam Ibrahim  
**Age:** 45  
**Role:** Principal / School Administrator  
**School:** Sunrise Academy, Bauchi  
**Tech Comfort:** Moderate

**Goals:**

- Modernize school's examination process
- Reduce operational costs of exams
- Track overall school performance
- Compete with other schools

**Responsibilities:**

- Manage school profile and branding
- Add/remove teachers and classes
- Configure school-wide exam settings
- View school analytics dashboard
- Manage parent communications

---

#### 5.1.3 Teacher

**Name:** Mrs. Amina Yusuf  
**Age:** 32  
**Role:** Mathematics Teacher (JSS 1-3)  
**School:** Sunrise Academy, Bauchi  
**Tech Comfort:** Moderate-High

**Goals:**

- Save time on exam creation
- Get instant grading
- Identify struggling students
- Create engaging assessments

**Responsibilities:**

- Create and manage exams
- Use AI to generate questions
- Review student performance
- Provide feedback on weak areas
- Manage class enrollments

---

#### 5.1.4 Student (Secondary)

**Name:** Fatima Abdullahi  
**Age:** 15  
**Role:** SSS 2 Student  
**School:** Sunrise Academy, Bauchi  
**Tech Comfort:** High (smartphone native)

**Goals:**

- Score well in school exams
- Prepare for WAEC/JAMB
- Understand her mistakes
- Track improvement over time

---

#### 5.1.5 Student (Primary)

**Name:** Ahmed Musa  
**Age:** 10  
**Role:** Primary 5 Student  
**School:** Little Stars Primary School, Bauchi  
**Tech Comfort:** Low-Moderate

**Goals:**

- Complete school assessments
- Prepare for Common Entrance
- Make parents proud

---

#### 5.1.6 Parent

**Name:** Dr. Hauwa Ibrahim  
**Age:** 42  
**Role:** Parent of 2 students  
**Occupation:** Medical Doctor  
**Tech Comfort:** High

**Goals:**

- Monitor children's academic progress
- Get early warning of struggles
- Support children's exam preparation
- Stay informed about school activities

---

### 5.2 User Hierarchy

```
┌─────────────────────────────────────────────────────────────────┐
│                      SUPER ADMIN                                 │
│                   (Platform Level)                               │
└─────────────────────┬───────────────────────────────────────────┘
                      │
        ┌─────────────┴─────────────┬─────────────────────┐
        ▼                           ▼                     ▼
┌───────────────┐           ┌───────────────┐     ┌───────────────┐
│   SCHOOL A    │           │   SCHOOL B    │     │   SCHOOL C    │
│   (Tenant)    │           │   (Tenant)    │     │   (Tenant)    │
└───────┬───────┘           └───────────────┘     └───────────────┘
        │
        ├── School Admin
        │
        ├── Teachers ──┬── Classes ──┬── Students
        │              │             │
        │              │             └── Parents
        │              │
        │              └── Exams
        │
        └── Students (all)
```

---

## 6. User Stories

### 6.1 Super Admin Stories

| ID    | Story                                                                            | Priority    |
| ----- | -------------------------------------------------------------------------------- | ----------- |
| SA-01 | As a Super Admin, I can onboard new schools so they can start using the platform | Must Have   |
| SA-02 | As a Super Admin, I can manage school subscriptions and billing                  | Must Have   |
| SA-03 | As a Super Admin, I can view platform-wide analytics and usage metrics           | Must Have   |
| SA-04 | As a Super Admin, I can manage national exam question banks                      | Must Have   |
| SA-05 | As a Super Admin, I can suspend/activate school accounts                         | Must Have   |
| SA-06 | As a Super Admin, I can configure platform settings and feature flags            | Should Have |
| SA-07 | As a Super Admin, I can view and respond to support tickets                      | Should Have |
| SA-08 | As a Super Admin, I can broadcast announcements to all schools                   | Could Have  |

### 6.2 School Admin Stories

| ID     | Story                                                               | Priority    |
| ------ | ------------------------------------------------------------------- | ----------- |
| SCH-01 | As a School Admin, I can configure my school's profile and branding | Must Have   |
| SCH-02 | As a School Admin, I can add and manage teachers                    | Must Have   |
| SCH-03 | As a School Admin, I can create and manage classes/grades           | Must Have   |
| SCH-04 | As a School Admin, I can bulk import students via CSV               | Must Have   |
| SCH-05 | As a School Admin, I can view school-wide performance dashboard     | Must Have   |
| SCH-06 | As a School Admin, I can set exam periods and academic calendar     | Should Have |
| SCH-07 | As a School Admin, I can configure notification preferences         | Should Have |
| SCH-08 | As a School Admin, I can manage parent access                       | Should Have |
| SCH-09 | As a School Admin, I can download performance reports               | Should Have |
| SCH-10 | As a School Admin, I can set school-wide exam policies              | Could Have  |

### 6.3 Teacher Stories

| ID   | Story                                                                     | Priority    |
| ---- | ------------------------------------------------------------------------- | ----------- |
| T-01 | As a Teacher, I can create exams with multiple question types             | Must Have   |
| T-02 | As a Teacher, I can use AI to generate questions based on topic and level | Must Have   |
| T-03 | As a Teacher, I can assign exams to my classes                            | Must Have   |
| T-04 | As a Teacher, I can set time limits and exam windows                      | Must Have   |
| T-05 | As a Teacher, I can enable offline mode for an exam                       | Must Have   |
| T-06 | As a Teacher, I can view automatic grading results                        | Must Have   |
| T-07 | As a Teacher, I can see per-student and per-question analytics            | Must Have   |
| T-08 | As a Teacher, I can grade essay/subjective questions manually             | Should Have |
| T-09 | As a Teacher, I can create question banks for reuse                       | Should Have |
| T-10 | As a Teacher, I can share exams with other teachers                       | Should Have |
| T-11 | As a Teacher, I can set up practice tests from past exams                 | Should Have |
| T-12 | As a Teacher, I can monitor live exam progress                            | Could Have  |
| T-13 | As a Teacher, I can randomize question order per student                  | Could Have  |
| T-14 | As a Teacher, I can upload profile picture                                | Must Have   |

### 6.4 Student Stories

| ID   | Story                                                                    | Priority    |
| ---- | ------------------------------------------------------------------------ | ----------- |
| S-01 | As a Student, I can view my upcoming and available exams                 | Must Have   |
| S-02 | As a Student, I can download an exam for offline use                     | Must Have   |
| S-03 | As a Student, I can take an exam offline without internet                | Must Have   |
| S-04 | As a Student, I can see my answers auto-sync when internet returns       | Must Have   |
| S-05 | As a Student, I can see my results immediately after submission          | Must Have   |
| S-06 | As a Student, I can receive AI feedback on my failed questions           | Must Have   |
| S-07 | As a Student, I can practice WAEC/NECO/JAMB past questions               | Must Have   |
| S-08 | As a Student, I can view my performance history and trends               | Should Have |
| S-09 | As a Student, I can bookmark questions for review                        | Should Have |
| S-10 | As a Student, I can upload my profile picture                            | Must Have   |
| S-11 | As a Student, I can see my ranking in class (optional feature by school) | Could Have  |
| S-12 | As a Student, I can set study reminders                                  | Could Have  |

### 6.5 Parent Stories

| ID   | Story                                                  | Priority    |
| ---- | ------------------------------------------------------ | ----------- |
| P-01 | As a Parent, I can view my children's exam scores      | Must Have   |
| P-02 | As a Parent, I can see performance trends over time    | Must Have   |
| P-03 | As a Parent, I can view upcoming exam schedules        | Should Have |
| P-04 | As a Parent, I can receive notifications about results | Should Have |
| P-05 | As a Parent, I can see AI-recommended focus areas      | Could Have  |
| P-06 | As a Parent, I can message teachers (if enabled)       | Could Have  |

---

## 7. Functional Requirements

### 7.1 Authentication & Authorization

#### 7.1.1 Authentication

| ID      | Requirement                                       | Priority    |
| ------- | ------------------------------------------------- | ----------- |
| AUTH-01 | Email/password authentication for all users       | Must Have   |
| AUTH-02 | Phone number authentication (OTP) for parents     | Should Have |
| AUTH-03 | Student ID + password authentication for students | Must Have   |
| AUTH-04 | JWT-based session management with refresh tokens  | Must Have   |
| AUTH-05 | Password reset via email                          | Must Have   |
| AUTH-06 | Account lockout after 5 failed attempts           | Must Have   |
| AUTH-07 | Remember me functionality (30 days)               | Should Have |
| AUTH-08 | Session timeout after 24 hours of inactivity      | Must Have   |

#### 7.1.2 Authorization (Role-Based Access Control)

| Role         | Dashboard | Users        | Exams        | Analytics | Billing | Practice  |
| ------------ | --------- | ------------ | ------------ | --------- | ------- | --------- |
| Super Admin  | Platform  | All Schools  | View All     | Platform  | ✅      | Manage    |
| School Admin | School    | School Users | View School  | School    | View    | Configure |
| Teacher      | Personal  | Students     | Create/Grade | Class     | ❌      | Assign    |
| Student      | Personal  | ❌           | Take         | Personal  | ❌      | Access    |
| Parent       | Children  | ❌           | View Results | Children  | ❌      | ❌        |

### 7.2 School Management (Multi-Tenant)

| ID        | Requirement                                               | Priority    |
| --------- | --------------------------------------------------------- | ----------- |
| SCHOOL-01 | Each school has isolated data (multi-tenant architecture) | Must Have   |
| SCHOOL-02 | School profile with name, logo, address, contact          | Must Have   |
| SCHOOL-03 | School branding (logo displayed on student interface)     | Should Have |
| SCHOOL-04 | Academic year and term configuration                      | Must Have   |
| SCHOOL-05 | Class/Grade structure (Primary 1-6, JSS 1-3, SSS 1-3)     | Must Have   |
| SCHOOL-06 | Subject management per grade                              | Must Have   |
| SCHOOL-07 | School-specific exam policies                             | Should Have |
| SCHOOL-08 | Subscription status and limits                            | Must Have   |

### 7.3 User Management

| ID      | Requirement                              | Priority    |
| ------- | ---------------------------------------- | ----------- |
| USER-01 | CRUD operations for all user types       | Must Have   |
| USER-02 | Bulk import via CSV (students, teachers) | Must Have   |
| USER-03 | Profile picture upload (Cloudflare R2)   | Must Have   |
| USER-04 | Student assignment to classes            | Must Have   |
| USER-05 | Teacher assignment to subjects/classes   | Must Have   |
| USER-06 | Parent linking to students               | Should Have |
| USER-07 | User activation/deactivation             | Must Have   |
| USER-08 | Password reset by admin                  | Must Have   |

### 7.4 Exam Management

#### 7.4.1 Exam Creation

| ID      | Requirement                                                  | Priority    |
| ------- | ------------------------------------------------------------ | ----------- |
| EXAM-01 | Create exam with title, subject, class, instructions         | Must Have   |
| EXAM-02 | Multiple question types (MCQ, True/False, Fill-blank, Essay) | Must Have   |
| EXAM-03 | AI question generation                                       | Must Have   |
| EXAM-04 | Question bank management (save for reuse)                    | Should Have |
| EXAM-05 | Import questions from CSV/Excel                              | Should Have |
| EXAM-06 | Image support in questions                                   | Should Have |
| EXAM-07 | Set correct answers and points per question                  | Must Have   |
| EXAM-08 | Set negative marking (optional)                              | Could Have  |
| EXAM-09 | Question shuffling options                                   | Should Have |
| EXAM-10 | Answer choice shuffling                                      | Should Have |

#### 7.4.2 Exam Configuration

| ID      | Requirement                            | Priority    |
| ------- | -------------------------------------- | ----------- |
| EXAM-11 | Set time limit (minutes)               | Must Have   |
| EXAM-12 | Set exam window (start/end datetime)   | Must Have   |
| EXAM-13 | Enable/disable offline mode            | Must Have   |
| EXAM-14 | Set passing score percentage           | Should Have |
| EXAM-15 | Allow/disallow review after submission | Should Have |
| EXAM-16 | Set max attempts (usually 1)           | Should Have |
| EXAM-17 | Configure auto-submit on timeout       | Must Have   |

### 7.5 Exam Taking (Student)

#### 7.5.1 Online Mode

| ID      | Requirement                         | Priority    |
| ------- | ----------------------------------- | ----------- |
| TAKE-01 | View available exams list           | Must Have   |
| TAKE-02 | Start exam with instructions screen | Must Have   |
| TAKE-03 | Countdown timer display             | Must Have   |
| TAKE-04 | Navigate between questions          | Must Have   |
| TAKE-05 | Flag questions for review           | Should Have |
| TAKE-06 | Question overview panel             | Should Have |
| TAKE-07 | Auto-save answers every 30 seconds  | Must Have   |
| TAKE-08 | Submit exam manually                | Must Have   |
| TAKE-09 | Auto-submit on timeout              | Must Have   |
| TAKE-10 | Full-screen mode for exam security  | Should Have |

#### 7.5.2 Offline Mode (Critical for Northern Nigeria)

| ID     | Requirement                                   | Priority  |
| ------ | --------------------------------------------- | --------- |
| OFF-01 | Download exam with all questions before start | Must Have |
| OFF-02 | Store exam data in IndexedDB                  | Must Have |
| OFF-03 | Full exam functionality without internet      | Must Have |
| OFF-04 | Visual indicator of offline/online status     | Must Have |
| OFF-05 | Local timer that continues offline            | Must Have |
| OFF-06 | Auto-sync answers when connection restored    | Must Have |
| OFF-07 | Manual sync trigger option                    | Must Have |
| OFF-08 | Conflict resolution for sync issues           | Must Have |
| OFF-09 | Offline submission queue                      | Must Have |
| OFF-10 | Proof of completion timestamp (anti-cheat)    | Must Have |

### 7.6 Grading & Results

| ID       | Requirement                                       | Priority    |
| -------- | ------------------------------------------------- | ----------- |
| GRADE-01 | Automatic grading for MCQ, True/False, Fill-blank | Must Have   |
| GRADE-02 | Manual grading interface for essays               | Should Have |
| GRADE-03 | Instant results display for auto-graded           | Must Have   |
| GRADE-04 | Score calculation with weighting                  | Must Have   |
| GRADE-05 | Pass/fail determination                           | Should Have |
| GRADE-06 | Result release control (immediate vs scheduled)   | Should Have |
| GRADE-07 | Result notification to students                   | Should Have |
| GRADE-08 | Result notification to parents                    | Should Have |
| GRADE-09 | Certificate generation (optional)                 | Could Have  |

### 7.7 AI Features

#### 7.7.1 AI Question Generation (Teachers)

| ID    | Requirement                                                | Priority    |
| ----- | ---------------------------------------------------------- | ----------- |
| AI-01 | Generate MCQ questions from topic/chapter                  | Must Have   |
| AI-02 | Specify difficulty level (easy, medium, hard)              | Must Have   |
| AI-03 | Specify grade level (Primary/JSS/SSS)                      | Must Have   |
| AI-04 | Generate questions from uploaded content/notes             | Should Have |
| AI-05 | Bulk generation (5, 10, 20 questions)                      | Must Have   |
| AI-06 | Edit/refine AI-generated questions                         | Must Have   |
| AI-07 | Rate/feedback on AI question quality                       | Should Have |
| AI-08 | Subject-specific generation (Math, English, Science, etc.) | Must Have   |

#### 7.7.2 AI Feedback Analysis (Students)

| ID    | Requirement                             | Priority    |
| ----- | --------------------------------------- | ----------- |
| AI-09 | Analyze incorrect answers after exam    | Must Have   |
| AI-10 | Explain why the correct answer is right | Must Have   |
| AI-11 | Provide hints for improvement           | Must Have   |
| AI-12 | Identify knowledge gaps                 | Should Have |
| AI-13 | Recommend study topics                  | Should Have |
| AI-14 | Personalized study plan generation      | Could Have  |
| AI-15 | Progress-based encouragement messages   | Could Have  |

### 7.8 Analytics & Reporting

#### 7.8.1 Platform Analytics (Super Admin)

| ID           | Requirement                              | Priority    |
| ------------ | ---------------------------------------- | ----------- |
| ANALYTICS-01 | Total schools, students, teachers, exams | Must Have   |
| ANALYTICS-02 | Monthly active users                     | Must Have   |
| ANALYTICS-03 | Exam completion rates                    | Must Have   |
| ANALYTICS-04 | Revenue and subscription metrics         | Must Have   |
| ANALYTICS-05 | Feature usage statistics                 | Should Have |

#### 7.8.2 School Analytics (School Admin)

| ID           | Requirement                       | Priority    |
| ------------ | --------------------------------- | ----------- |
| ANALYTICS-06 | Overall school performance trends | Must Have   |
| ANALYTICS-07 | Performance by subject            | Must Have   |
| ANALYTICS-08 | Performance by grade/class        | Must Have   |
| ANALYTICS-09 | Top performing students           | Should Have |
| ANALYTICS-10 | At-risk students identification   | Should Have |
| ANALYTICS-11 | Teacher activity metrics          | Should Have |
| ANALYTICS-12 | Exportable reports (PDF, Excel)   | Should Have |

#### 7.8.3 Class Analytics (Teacher)

| ID           | Requirement                         | Priority    |
| ------------ | ----------------------------------- | ----------- |
| ANALYTICS-13 | Class average per exam              | Must Have   |
| ANALYTICS-14 | Per-question analysis (most missed) | Must Have   |
| ANALYTICS-15 | Student ranking (optional)          | Should Have |
| ANALYTICS-16 | Historical comparison               | Should Have |
| ANALYTICS-17 | Individual student deep-dive        | Must Have   |

#### 7.8.4 Personal Analytics (Student)

| ID           | Requirement                 | Priority    |
| ------------ | --------------------------- | ----------- |
| ANALYTICS-18 | Performance by subject      | Must Have   |
| ANALYTICS-19 | Score trends over time      | Must Have   |
| ANALYTICS-20 | Strengths and weaknesses    | Should Have |
| ANALYTICS-21 | Practice module progress    | Should Have |
| ANALYTICS-22 | Comparison to class average | Could Have  |

### 7.9 File Management (Cloudflare R2)

| ID      | Requirement                          | Priority    |
| ------- | ------------------------------------ | ----------- |
| FILE-01 | Profile picture upload (max 2MB)     | Must Have   |
| FILE-02 | Image compression before upload      | Should Have |
| FILE-03 | Image resizing (thumbnails)          | Should Have |
| FILE-04 | Question image uploads               | Should Have |
| FILE-05 | School logo upload                   | Must Have   |
| FILE-06 | Secure signed URLs for private files | Must Have   |
| FILE-07 | CDN delivery for fast loading        | Should Have |

### 7.10 Notifications

| ID       | Requirement                                                | Priority    |
| -------- | ---------------------------------------------------------- | ----------- |
| NOTIF-01 | In-app notification system                                 | Must Have   |
| NOTIF-02 | Email notifications via ZeptoMail (exam assigned, results) | Must Have   |
| NOTIF-03 | Push notifications (PWA)                                   | Could Have  |
| NOTIF-04 | SMS notifications (critical only)                          | Could Have  |
| NOTIF-05 | Notification preferences per user                          | Should Have |

---

## 8. Non-Functional Requirements

### 8.1 Performance

| Requirement                         | Target      |
| ----------------------------------- | ----------- |
| Page load time (online)             | < 2 seconds |
| API response time (95th percentile) | < 500ms     |
| Exam start time                     | < 3 seconds |
| AI question generation              | < 5 seconds |
| AI feedback generation              | < 3 seconds |
| Concurrent users per school         | 500+        |
| Total platform concurrent users     | 10,000+     |
| Offline exam load                   | < 1 second  |
| Sync time (100 answers)             | < 5 seconds |

### 8.2 Scalability

| Requirement               | Target               |
| ------------------------- | -------------------- |
| Schools supported         | 1,000+               |
| Students per school       | 5,000+               |
| Total platform students   | 500,000+             |
| Exams per school per year | 10,000+              |
| Questions in database     | 1,000,000+           |
| Horizontal scaling        | Auto-scale on demand |

### 8.3 Availability

| Requirement                  | Target               |
| ---------------------------- | -------------------- |
| Uptime SLA                   | 99.5%                |
| Scheduled maintenance window | Sundays 2-4 AM WAT   |
| Disaster recovery RTO        | 4 hours              |
| Disaster recovery RPO        | 1 hour               |
| Offline functionality        | 100% exam completion |

### 8.4 Compatibility

| Requirement         | Target                                        |
| ------------------- | --------------------------------------------- |
| Desktop browsers    | Chrome 90+, Firefox 90+, Safari 14+, Edge 90+ |
| Mobile browsers     | Chrome Mobile, Safari Mobile                  |
| Minimum screen size | 320px width                                   |
| Offline storage     | IndexedDB (50MB per exam)                     |
| PWA support         | Installable on mobile                         |

### 8.5 Accessibility

| Requirement           | Target         |
| --------------------- | -------------- |
| WCAG compliance       | Level AA       |
| Keyboard navigation   | Full support   |
| Screen reader support | Major elements |
| Color contrast        | 4.5:1 minimum  |
| Font scaling          | 100% - 200%    |

### 8.6 Localization

| Requirement      | Target                 |
| ---------------- | ---------------------- |
| Primary language | English                |
| Date format      | DD/MM/YYYY             |
| Time zone        | West Africa Time (WAT) |
| Currency         | Nigerian Naira (₦)     |

---

## 9. Offline-First Architecture

### 9.1 Overview

Given the connectivity challenges in Northern Nigeria, offline capability is not an afterthought but a core architectural principle. The system is designed to work offline-first, with online sync as an enhancement.

### 9.2 Technology Stack for Offline

| Component           | Technology                   | Purpose                  |
| ------------------- | ---------------------------- | ------------------------ |
| Service Worker      | Workbox                      | Caching, background sync |
| Local Database      | IndexedDB (Dexie.js)         | Structured data storage  |
| State Management    | Zustand Persist              | State persistence        |
| Sync Queue          | Custom implementation        | Queued operations        |
| Conflict Resolution | Last-write-wins + timestamps | Data consistency         |

### 9.3 Offline Data Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                     STUDENT DEVICE                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐       │
│  │   Next.js    │───▶│ Zustand      │───▶│  IndexedDB   │       │
│  │   UI         │    │ Store        │    │  (Dexie.js)  │       │
│  └──────────────┘    └──────────────┘    └──────────────┘       │
│         │                   ▲                    │               │
│         ▼                   │                    ▼               │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐       │
│  │ Service      │    │ Background   │◀───│ Sync Queue   │       │
│  │ Worker       │───▶│ Sync         │    │              │       │
│  └──────────────┘    └──────────────┘    └──────────────┘       │
│                             │                                    │
└─────────────────────────────│────────────────────────────────────┘
                              │
                    ┌─────────▼─────────┐
                    │   INTERNET        │
                    │   (when available)│
                    └─────────┬─────────┘
                              │
┌─────────────────────────────▼────────────────────────────────────┐
│                     BACKEND SERVER                                │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐       │
│  │   Express    │───▶│   MongoDB    │    │   Redis      │       │
│  │   API        │    │   Atlas      │    │   (Upstash)  │       │
│  └──────────────┘    └──────────────┘    └──────────────┘       │
└──────────────────────────────────────────────────────────────────┘
```

### 9.4 Offline Exam Flow

#### Phase 1: Exam Download (Online Required)

```
1. Student opens available exam
2. Click "Download for Offline"
3. System downloads:
   - Exam metadata (title, time limit, instructions)
   - All questions with images
   - Answer structure template
4. Store in IndexedDB with exam ID as key
5. Show "Ready for Offline" badge
```

#### Phase 2: Exam Taking (Works Offline)

```
1. Student starts exam (offline or online)
2. Timer starts using local device time
3. Each answer saved to IndexedDB immediately
4. Progress tracked locally
5. On timeout or submit:
   - Mark exam as "pending_sync"
   - Record completion timestamp
   - Calculate local score (if auto-gradable)
```

#### Phase 3: Sync (When Online)

```
1. Service worker detects connectivity
2. Background sync triggered
3. For each pending exam:
   - Upload answers with timestamps
   - Receive server confirmation
   - Update local status to "synced"
4. Handle conflicts:
   - If server has newer data, merge
   - If duplicate submission, reject gracefully
```

### 9.5 Anti-Cheating Measures (Offline)

| Measure                 | Implementation                        |
| ----------------------- | ------------------------------------- |
| Timestamp validation    | Client timestamp + server validation  |
| Exam lock               | Once started, no pause/resume         |
| Full-screen enforcement | Exit warning (cannot prevent offline) |
| Answer encryption       | AES encryption with exam-specific key |
| Device fingerprinting   | Track device ID for anomalies         |

---

## 10. AI Integration

### 10.1 Overview

Exzams integrates AI capabilities to provide two key features:

1. **Question Generation** - Help teachers create quality questions quickly
2. **Feedback Analysis** - Give students intelligent insights on their mistakes

The AI integration is provider-agnostic, allowing flexibility to use different AI providers based on cost, performance, and availability.

### 10.2 AI Question Generation

#### 10.2.1 User Flow

```
Teacher Flow:
┌──────────────────────────────────────────────────────────────────┐
│  1. Teacher opens "Create Exam"                                   │
│  2. Clicks "Generate with AI"                                     │
│  3. Fills form:                                                   │
│     - Subject: Mathematics                                        │
│     - Topic: Quadratic Equations                                  │
│     - Grade: SSS 2                                                │
│     - Difficulty: Medium                                          │
│     - Question Type: MCQ                                          │
│     - Number: 10 questions                                        │
│  4. Click "Generate"                                              │
│  5. AI returns 10 questions with options and answers              │
│  6. Teacher reviews, edits, approves each question                │
│  7. Approved questions added to exam                              │
└──────────────────────────────────────────────────────────────────┘
```

#### 10.2.2 Prompt Template

```javascript
// Example prompt template for question generation
const generateQuestionPrompt = ({
  subject,
  topic,
  gradeLevel,
  difficulty,
  questionType,
  count,
  curriculum = "Nigerian",
}) => `
You are an expert ${subject} teacher in Nigeria creating exam questions.

Generate ${count} ${difficulty} ${questionType} questions on "${topic}" 
for ${gradeLevel} students following the ${curriculum} curriculum.

Requirements:
- Age-appropriate language for ${gradeLevel}
- Aligned with Nigerian educational standards
- Clear, unambiguous questions
- For MCQ: 4 options (A, B, C, D) with one correct answer
- Include brief explanation for the correct answer

Return as JSON array:
[
  {
    "question": "question text",
    "options": ["A. option", "B. option", "C. option", "D. option"],
    "correctAnswer": "A",
    "explanation": "why A is correct",
    "difficulty": "${difficulty}",
    "topic": "${topic}"
  }
]
`;
```

### 10.3 AI Feedback Analysis

#### 10.3.1 Feedback Prompt Template

```javascript
const generateFeedbackPrompt = ({
  question,
  studentAnswer,
  correctAnswer,
  topic,
  gradeLevel,
}) => `
A ${gradeLevel} student answered this question incorrectly:

Question: ${question}
Student's Answer: ${studentAnswer}
Correct Answer: ${correctAnswer}
Topic: ${topic}

Provide helpful feedback:
1. Explain why their answer is incorrect (be kind and encouraging)
2. Explain why the correct answer is right
3. Give a helpful tip to remember this concept
4. Suggest related topics to review

Keep language appropriate for ${gradeLevel} level.
Be encouraging and supportive in tone.
`;
```

### 10.4 AI Cost Management

| Control          | Implementation                          |
| ---------------- | --------------------------------------- |
| Rate limiting    | Max 50 generations per teacher per day  |
| Caching          | Cache similar question requests         |
| Token limits     | Cap response length                     |
| Batch processing | Queue requests during peak              |
| Fallback         | Graceful degradation if API unavailable |

---

## 11. System Architecture

### 11.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              CLIENTS                                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   Desktop   │  │   Tablet    │  │   Mobile    │  │     PWA     │        │
│  │   Browser   │  │   Browser   │  │   Browser   │  │  (Offline)  │        │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘        │
│         │                │                │                │                │
│         └────────────────┴────────────────┴────────────────┘                │
│                                   │                                          │
└───────────────────────────────────│──────────────────────────────────────────┘
                                    │ HTTPS
                                    ▼
┌───────────────────────────────────────────────────────────────────────────────┐
│                           LOAD BALANCER (Cloudflare)                          │
└───────────────────────────────────┬───────────────────────────────────────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    ▼                               ▼
┌─────────────────────────────────┐   ┌─────────────────────────────────┐
│         NEXT.JS FRONTEND        │   │         EXPRESS API             │
│  ┌───────────────────────────┐  │   │  ┌───────────────────────────┐  │
│  │   Server Components       │  │   │  │   Route Handlers          │  │
│  │   Client Components       │  │   │  │   Middleware              │  │
│  │   API Routes (BFF)        │  │   │  │   Controllers             │  │
│  │   Static Assets           │  │   │  │   Services                │  │
│  └───────────────────────────┘  │   │  │   Models (Mongoose)       │  │
│                                  │   │  └───────────────────────────┘  │
│         Vercel                  │   │         Railway / Render        │
└─────────────────────────────────┘   └───────────────┬─────────────────┘
                                                      │
                    ┌─────────────────────────────────┴──────────────────┐
                    │                                                     │
                    ▼                                                     ▼
┌─────────────────────────────────┐   ┌─────────────────────────────────────────┐
│          MONGODB ATLAS          │   │            EXTERNAL SERVICES            │
│  ┌───────────────────────────┐  │   │  ┌─────────────┐  ┌─────────────┐      │
│  │   Schools Collection      │  │   │  │ AI Provider │  │ Cloudflare  │      │
│  │   Users Collection        │  │   │  │             │  │ R2 (Files)  │      │
│  │   Exams Collection        │  │   │  └─────────────┘  └─────────────┘      │
│  │   Results Collection      │  │   │                                         │
│  │   Questions Collection    │  │   │  ┌─────────────┐  ┌─────────────┐      │
│  └───────────────────────────┘  │   │  │ Redis       │  │ ZeptoMail   │      │
│                                  │   │  │ (Upstash)   │  │ (Email)     │      │
│         Primary + Replicas      │   │  └─────────────┘  └─────────────┘      │
└─────────────────────────────────┘   └─────────────────────────────────────────┘
```

### 11.2 Frontend Architecture (Next.js 16+ App Router)

```
/app
├── (auth)/
│   ├── login/
│   ├── register/
│   ├── forgot-password/
│   └── reset-password/
├── (platform)/
│   ├── super-admin/
│   │   ├── dashboard/
│   │   ├── schools/
│   │   ├── billing/
│   │   └── settings/
│   ├── school/
│   │   ├── dashboard/
│   │   ├── teachers/
│   │   ├── students/
│   │   ├── classes/
│   │   └── settings/
│   ├── teacher/
│   │   ├── dashboard/
│   │   ├── exams/
│   │   ├── questions/
│   │   ├── results/
│   │   └── ai-generator/
│   ├── student/
│   │   ├── dashboard/
│   │   ├── exams/
│   │   ├── results/
│   │   ├── practice/
│   │   └── profile/
│   └── parent/
│       ├── dashboard/
│       └── children/
├── (exam)/
│   └── take/[examId]/      # Full-screen exam interface
├── (practice)/
│   ├── common-entrance/
│   ├── nabteb/
│   ├── waec/
│   ├── neco/
│   └── jamb/
└── api/                     # API routes (BFF)
```

### 11.3 Backend Architecture (Express + TypeScript)

```
/src
├── config/
│   ├── database.ts          # MongoDB connection
│   ├── redis.ts             # Redis connection
│   ├── cloudflare.ts        # R2 configuration
│   ├── ai.ts                # AI provider setup
│   └── email.ts             # ZeptoMail configuration
├── middleware/
│   ├── auth.ts              # JWT verification
│   ├── tenantIsolation.ts   # Multi-tenant data isolation
│   ├── rateLimiter.ts       # Rate limiting
│   ├── errorHandler.ts      # Global error handling
│   └── validators/          # Request validation (Zod)
├── models/
│   ├── School.ts
│   ├── User.ts
│   ├── Class.ts
│   ├── Subject.ts
│   ├── Exam.ts
│   ├── Question.ts
│   ├── ExamAttempt.ts
│   └── Notification.ts
├── controllers/
│   ├── authController.ts
│   ├── schoolController.ts
│   ├── userController.ts
│   ├── examController.ts
│   ├── questionController.ts
│   ├── resultController.ts
│   ├── aiController.ts
│   ├── uploadController.ts
│   └── analyticsController.ts
├── services/
│   ├── authService.ts
│   ├── examService.ts
│   ├── gradingService.ts
│   ├── aiService.ts         # AI integration
│   ├── uploadService.ts     # R2 integration
│   ├── syncService.ts       # Offline sync
│   ├── emailService.ts      # ZeptoMail integration
│   └── notificationService.ts
├── routes/
│   ├── v1/
│   │   ├── auth.routes.ts
│   │   ├── schools.routes.ts
│   │   ├── users.routes.ts
│   │   ├── exams.routes.ts
│   │   ├── questions.routes.ts
│   │   ├── results.routes.ts
│   │   ├── ai.routes.ts
│   │   ├── uploads.routes.ts
│   │   └── analytics.routes.ts
│   └── index.ts
├── jobs/
│   ├── syncProcessor.ts     # Background sync jobs
│   ├── emailSender.ts       # Email queue processor
│   └── reportGenerator.ts
├── utils/
│   ├── encryption.ts
│   ├── tokenGenerator.ts
│   ├── pagination.ts
│   └── helpers.ts
├── app.ts
└── server.ts
```

### 11.4 Multi-Tenant Data Isolation

```typescript
// Middleware for tenant isolation
const tenantIsolation = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const user = req.user;

  // Super Admin has access to all schools
  if (user.role === "super_admin") {
    req.schoolFilter = {}; // No filter
    return next();
  }

  // All other users are scoped to their school
  if (!user.schoolId) {
    return res.status(403).json({ error: "No school associated" });
  }

  req.schoolFilter = { schoolId: user.schoolId };
  req.schoolId = user.schoolId;
  next();
};
```

---

## 12. Database Schema

### 12.1 Entity Relationship Diagram

```
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│     SCHOOL      │       │      USER       │       │      CLASS      │
├─────────────────┤       ├─────────────────┤       ├─────────────────┤
│ _id             │◄──────│ schoolId        │       │ _id             │
│ name            │       │ _id             │◄──┐   │ schoolId        │
│ subdomain       │       │ email           │   │   │ name            │
│ logo            │       │ password        │   │   │ gradeLevel      │
│ address         │       │ role            │   │   │ academicYear    │
│ subscription    │       │ firstName       │   │   │ teacherId       │
│ settings        │       │ lastName        │   └───│ studentIds[]    │
│ createdAt       │       │ profilePicture  │       │ subjects[]      │
└─────────────────┘       │ parentOf[]      │       └─────────────────┘
                          │ createdAt       │
                          └─────────────────┘
                                  │
                                  │
┌─────────────────┐       ┌──────┴──────────┐       ┌─────────────────┐
│    QUESTION     │       │      EXAM       │       │   EXAM_ATTEMPT  │
├─────────────────┤       ├─────────────────┤       ├─────────────────┤
│ _id             │◄──────│ questionIds[]   │       │ _id             │
│ schoolId        │       │ _id             │◄──────│ examId          │
│ type            │       │ schoolId        │       │ studentId       │
│ text            │       │ title           │       │ startedAt       │
│ options[]       │       │ subject         │       │ submittedAt     │
│ correctAnswer   │       │ classIds[]      │       │ answers[]       │
│ points          │       │ createdBy       │       │ score           │
│ difficulty      │       │ timeLimit       │       │ status          │
│ topic           │       │ startDate       │       │ syncStatus      │
│ aiGenerated     │       │ endDate         │       │ offlineData     │
│ createdAt       │       │ offlineEnabled  │       │ aiFeedback      │
└─────────────────┘       │ settings        │       │ createdAt       │
                          │ createdAt       │       └─────────────────┘
                          └─────────────────┘
```

---

## 13. API Specification

### 13.1 API Overview

| Aspect         | Specification               |
| -------------- | --------------------------- |
| Base URL       | `https://api.exzams.com/v1` |
| Protocol       | HTTPS only                  |
| Format         | JSON                        |
| Authentication | Bearer JWT                  |
| Rate Limiting  | 100 req/min per user        |
| Versioning     | URL path (`/v1/`)           |

### 13.2 Key Endpoints

- **Authentication:** `/auth/login`, `/auth/register`, `/auth/refresh`, `/auth/forgot-password`
- **Schools:** `/schools` (CRUD)
- **Users:** `/users` (CRUD, bulk import)
- **Exams:** `/exams` (CRUD, publish, download)
- **Exam Taking:** `/exams/:id/start`, `/exams/:id/submit`, `/exams/:id/sync`
- **AI:** `/ai/generate-questions`, `/ai/feedback`
- **Uploads:** `/uploads/profile-picture`, `/uploads/question-image`
- **Analytics:** `/analytics/platform`, `/analytics/school`, `/analytics/class/:id`
- **Practice:** `/practice/exams`, `/practice/exams/:examType`

---

## 14. UI/UX Requirements

### 14.1 Design Principles

| Principle               | Implementation                            |
| ----------------------- | ----------------------------------------- |
| **Mobile-First**        | Design for smartphones first, scale up    |
| **Offline-Aware**       | Clear indicators of online/offline status |
| **Low-Data**            | Optimize images, minimize data usage      |
| **Simple Navigation**   | Max 3 taps to any feature                 |
| **Large Touch Targets** | Min 44px touch targets for all buttons    |
| **Age-Appropriate**     | Simpler UI for primary students           |

### 14.2 Design System

#### Colors

| Purpose      | Color                   | Hex     |
| ------------ | ----------------------- | ------- |
| Primary      | Green (Growth, Nigeria) | #059669 |
| Secondary    | Blue (Trust)            | #2563EB |
| Accent       | Amber (Energy)          | #F59E0B |
| Success      | Green                   | #10B981 |
| Warning      | Orange                  | #F97316 |
| Error        | Red                     | #EF4444 |
| Background   | Light Gray              | #F9FAFB |
| Text Primary | Dark Gray               | #111827 |

---

## 15. Security Requirements

### 15.1 Authentication Security

| Requirement           | Implementation                              |
| --------------------- | ------------------------------------------- |
| Password hashing      | bcrypt with cost factor 12                  |
| JWT expiry            | Access: 1 hour, Refresh: 7 days             |
| Token storage         | HttpOnly cookies (refresh), memory (access) |
| Account lockout       | After 5 failed attempts, 15 min lock        |
| Password requirements | Min 8 chars, mixed case, number             |

### 15.2 Multi-Tenant Security

| Requirement         | Implementation          |
| ------------------- | ----------------------- |
| Data isolation      | schoolId in all queries |
| Cross-tenant access | Middleware enforcement  |
| API rate limiting   | Per-tenant limits       |

---

## 16. Exam Practice Modules

### 16.1 Supported Examination Boards

| Exam            | Full Name                                          | Target               | Grade     |
| --------------- | -------------------------------------------------- | -------------------- | --------- |
| Common Entrance | National Common Entrance                           | Admission to JSS1    | Primary 6 |
| NABTEB          | National Business and Technical Examinations Board | Technical students   | SSS 3     |
| WAEC            | West African Examinations Council                  | SSS completion       | SSS 3     |
| NECO            | National Examinations Council                      | SSS completion       | SSS 3     |
| JAMB            | Joint Admissions and Matriculation Board           | University admission | SSS 3     |

---

## 17. Success Metrics

### 17.1 Business Metrics

| Metric                    | Target (Year 1) | Target (Year 2) |
| ------------------------- | --------------- | --------------- |
| Schools Onboarded         | 50              | 200             |
| Active Students           | 25,000          | 100,000         |
| Monthly Recurring Revenue | ₦5M             | ₦25M            |
| Churn Rate                | < 10%           | < 5%            |

---

## 18. Timeline & Milestones

### 18.1 Phase 1: Foundation (Months 1-3)

- Project setup, authentication, user management
- School management, multi-tenancy
- Basic exam creation and taking (online only)

### 18.2 Phase 2: Offline & AI (Months 4-6)

- Offline architecture (Service Worker, IndexedDB)
- Sync mechanism
- AI integration
- Profile picture uploads (R2)

### 18.3 Phase 3: Practice & Polish (Months 7-9)

- Practice module framework
- National exam question banks
- Analytics dashboards
- Parent portal

### 18.4 Phase 4: Launch (Months 10-12)

- Beta testing with pilot schools
- Bug fixes and optimization
- Marketing and onboarding

---

## 19. Technical Stack

### 19.1 Frontend

| Category   | Technology               |
| ---------- | ------------------------ |
| Framework  | Next.js 16+ (App Router) |
| Language   | TypeScript               |
| Styling    | TailwindCSS              |
| Components | shadcn/ui                |
| State      | Zustand                  |
| Forms      | React Hook Form + Zod    |
| Charts     | Recharts                 |
| Offline    | Workbox + Dexie.js       |
| PWA        | next-pwa                 |

### 19.2 Backend

| Category   | Technology      |
| ---------- | --------------- |
| Runtime    | Node.js 22+     |
| Framework  | Express.js      |
| Language   | TypeScript      |
| Database   | MongoDB Atlas   |
| ODM        | Mongoose        |
| Cache      | Redis (Upstash) |
| Queue      | BullMQ          |
| Validation | Zod             |

### 19.3 Infrastructure

| Category         | Technology       |
| ---------------- | ---------------- |
| Frontend Hosting | Vercel           |
| Backend Hosting  | Railway / Render |
| File Storage     | Cloudflare R2    |
| CDN              | Cloudflare       |
| Email            | ZeptoMail        |
| Monitoring       | Sentry           |
| Analytics        | PostHog          |

### 19.4 AI

| Category    | Technology                       |
| ----------- | -------------------------------- |
| AI Provider | Provider-agnostic (configurable) |
| Fallback    | Multiple provider support        |

---

## 20. Risks & Mitigations

| Risk                                | Mitigation                                     |
| ----------------------------------- | ---------------------------------------------- |
| Offline sync failures               | Robust conflict resolution, manual sync option |
| AI API downtime                     | Fallback to manual, cached responses           |
| School adoption resistance          | Free trial, training support                   |
| Payment collection challenges       | Multiple payment options, flexible billing     |
| Internet infrastructure limitations | Offline-first architecture                     |

---

## 21. Future Enhancements

### Short-Term (6-12 months)

- Native Android app
- Voice questions for primary students
- SMS results for parents
- WhatsApp integration

### Long-Term (2+ years)

- Pan-African expansion
- University module
- AI tutor assistant

---

## Appendix: Pricing Model

| Plan       | Monthly  | Students  | Teachers  |
| ---------- | -------- | --------- | --------- |
| Trial      | Free     | 50        | 5         |
| Basic      | ₦25,000  | 200       | 10        |
| Standard   | ₦50,000  | 500       | 25        |
| Premium    | ₦100,000 | 2000      | 100       |
| Enterprise | Custom   | Unlimited | Unlimited |

---

**Document Control:**

| Version | Date        | Author   | Changes                                                |
| ------- | ----------- | -------- | ------------------------------------------------------ |
| 1.0     | Feb 2, 2026 | Muhammad | Initial PRD for university exam system                 |
| 2.0     | Feb 2, 2026 | Muhammad | Complete rewrite for K-12 CBT platform                 |
| 2.1     | Feb 2, 2026 | Muhammad | Rebrand to Exzams, AI-agnostic, ZeptoMail, Next.js 16+ |

---

_This PRD is a living document and will be updated as requirements evolve._
