# Frontend Development Tracker

## 1. Project Setup

- [x] Create new React project using Vite
- [x] Set up routing with React Router
- [x] Install necessary dependencies (TailwindCSS, Shadcn UI)
- [x] Set up folder structure (components, pages, services, etc.)

## 2. User Authentication Components

### 2.1 Login Page

- [x] Create Login component
- [x] Email/Student ID input field
- [x] Password input field
- [x] User type toggle (Student/Instructor)
- [x] "Login" button
- [x] "Forgot Password" link
- [x] Error handling for invalid credentials
- [ ] Loading state during authentication
- [ ] Redirect to appropriate dashboard on successful login

### 2.2 Registration Page

- [ ] Create Registration component
- [ ] Full Name input field
- [ ] Email input field
- [ ] Password input field
- [ ] Confirm Password input field
- [ ] User Type selection (Student/Instructor)
- [ ] "Register" button
- [ ] Form validation (password strength, email format, etc.)
- [ ] Error handling for registration failures
- [ ] Success message and redirect on successful registration

### 2.3 Password Reset Page

- [x] Create Password Reset component
- [x] Email input field for reset request
- [x] "Send Reset Link" button
- [ ] Confirmation message for reset link sent
- [x] New Password input field (after clicking reset link)
- [ ] Confirm New Password input field
- [] "Reset Password" button
- [ ] Error handling for reset failures
- [ ] Success message and redirect on successful reset

## 3. Dashboard Components

### 3.1 Student Dashboard

- [ ] Create Student Dashboard component
- [ ] Welcome message with student's name
- [ ] "Available Exams" button
- [ ] "Past Exams" button
- [ ] "Profile Settings" button
- [ ] Display of upcoming exam schedule
- [ ] Quick stats (e.g., average score, exams taken)

### 3.2 Instructor Dashboard

- [ ] Create Instructor Dashboard component
- [ ] Welcome message with instructor's name
- [ ] "Create Exam" button
- [ ] "My Exams" button
- [ ] "Student Results" button
- [ ] "Profile Settings" button
- [ ] Display of recently created exams
- [ ] Quick stats (e.g., number of exams, average student performance)

## 4. Exam Management Components

### 4.1 Instructor: Create New Exam Form

- [ ] Create Exam Form component
- [ ] Exam title input field
- [ ] Exam description textarea
- [ ] Duration input (hours/minutes)
- [ ] Passing score input
- [ ] Exam availability datetime pickers (start and end)
- [ ] "Add Question" button
- [ ] Question list display
- [ ] "Save Exam" button
- [ ] Form validation
- [ ] Error handling for save failures
- [ ] Success message on exam creation

### 4.2 Instructor: Add/Edit Questions Interface

- [ ] Create Question Form component
- [ ] Question type selector (multiple choice, true/false, short answer)
- [ ] Question text input
- [ ] Answer options inputs (for multiple choice)
- [ ] Correct answer selector
- [ ] Points assignment input
- [ ] "Add Question" button
- [ ] "Update Question" button
- [ ] "Delete Question" button
- [ ] Error handling for question operations
- [ ] Confirmation modal for delete action

### 4.3 Student: Exam Taking Interface

- [ ] Create Exam Interface component
- [ ] Display of exam title and description
- [ ] Timer component showing remaining time
- [ ] Current question display
- [ ] Answer input/selection based on question type
- [ ] Question navigation buttons (Next/Previous)
- [ ] "Flag for Review" checkbox
- [ ] "Submit Exam" button
- [ ] Confirmation modal for exam submission
- [ ] Auto-submit when time expires

### 4.4 Student: Question Navigation

- [ ] Create Question Navigation component
- [ ] Display all question numbers
- [ ] Indicate answered questions
- [ ] Indicate flagged questions
- [ ] Allow jumping to any question
- [ ] Update current question display when navigating

## 5. Results Components

### 5.1 Individual Exam Result View

- [ ] Create Exam Result component
- [ ] Display exam score
- [ ] Display passing score
- [ ] Pass/Fail indicator
- [ ] Breakdown of correct/incorrect answers
- [ ] List of all questions with:
  - [ ] Question text
  - [ ] Student's answer
  - [ ] Correct answer
  - [ ] Points earned
- [ ] Total score calculation

### 5.2 Overall Performance Analytics

- [ ] Create Performance Analytics component
- [ ] Graph of performance over time
- [ ] Calculation of strongest subjects
- [ ] Calculation of weakest subjects
- [ ] Display of class average comparison (if applicable)
- [ ] Overall statistics (total exams taken, average score, etc.)

## 6. Shared Components

### 6.1 Navigation Bar

- [ ] Create Navigation component
- [ ] Logo/Home link
- [ ] Dashboard link
- [ ] Profile link
- [ ] Logout button
- [ ] Conditional rendering based on user type
- [ ] Mobile-responsive design

### 6.2 Footer

- [ ] Create Footer component
- [ ] Copyright information
- [ ] Terms of Service link
- [ ] Privacy Policy link

### 6.3 Loading Spinner

- [ ] Create Loading Spinner component
- [ ] Implement in all areas with potential loading states

### 6.4 Error Messages

- [ ] Create Error Message component
- [ ] Implement for form validations
- [ ] Implement for API call failures
- [ ] Styled consistently across the application

### 6.5 Confirmation Modals

- [ ] Create Confirmation Modal component
- [ ] Implement for exam submission
- [ ] Implement for question deletion
- [ ] Implement for logging out

## 7. State Management and API Integration

- [ ] Set up global state management (Context API or Redux)
- [ ] Create services for API calls
- [ ] Implement authentication token storage and management
- [ ] Create hooks for data fetching and caching

## 8. Styling and Responsiveness

- [ ] Implement consistent color scheme
- [ ] Create and apply custom Material-UI theme
- [ ] Ensure responsive design for all components
- [ ] Implement dark mode toggle (optional)

## 9. Testing and Optimization

- [ ] Write unit tests for key components
- [ ] Perform cross-browser testing
- [ ] Optimize performance (lazy loading, code splitting)
- [ ] Conduct accessibility audit and improvements

## 10. Final Review and Documentation

- [ ] Review all components for consistency
- [ ] Ensure all planned features are implemented
- [ ] Write README.md with setup and run instructions
- [ ] Document any known issues or future improvements
