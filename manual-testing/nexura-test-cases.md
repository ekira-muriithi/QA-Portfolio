# Nexura Login Page - Manual Test Scenarios & Test Cases

## Application Details
- **Application Name:** Nexura
- **URL:** https://nexuraafrica.shop/login
- **Page:** Sign In
- **Testing Type:** Manual Functional, Usability, Accessibility
- **Environment:** Production

---

## 🔹 Test Scenarios

### TS-01 — Login Page UI and Content Validation
Validate that all UI elements on the login page are displayed correctly and are usable.

### TS-02 — Email Field Validation
Validate accepted and rejected inputs for the email field.

### TS-03 — Password Field Validation
Validate password masking, visibility toggle, and input handling.

### TS-04 — Login Functionality
Validate successful and unsuccessful login attempts.

### TS-05 — One-Time Code Login Option
Validate switching between Password and One-Time Code login methods.

### TS-06 — Remember Me Functionality
Validate persistence of login session.

### TS-07 — Forgot Password Flow
Validate password recovery navigation.

### TS-08 — Accessibility and Keyboard Navigation
Validate basic accessibility compliance and keyboard usage.

---

## 🔹 Test Cases

### TS-01: Login Page UI and Content Validation

#### TC-01 — Verify login page loads successfully
- **Steps**
  1. Navigate to the Nexura login page
- **Expected Result**
  - Login page loads without errors
  - Sign In header is visible
  - Email and Password fields are displayed

---

#### TC-02 — Verify branding and informational cards are visible
- **Steps**
  1. Observe the left-side feature cards
- **Expected Result**
  - Cards such as *Sell tickets & products*, *Manage payments*, *Track sales & analytics* are visible
  - Text is readable and not cut off

---

### TS-02: Email Field Validation

#### TC-03 — Verify email field accepts valid email format
- **Steps**
  1. Enter a valid email address (e.g. `user@test.com`)
- **Expected Result**
  - Email is accepted
  - No validation error displayed

---

#### TC-04 — Verify invalid email format is rejected
- **Steps**
  1. Enter an invalid email (e.g. `abc123`)
  2. Attempt to log in
- **Expected Result**
  - Validation message displayed
  - User is informed of invalid email format

---

### TS-03: Password Field Validation

#### TC-05 — Verify password is masked by default
- **Steps**
  1. Enter any password
- **Expected Result**
  - Password characters are hidden

---

#### TC-06 — Verify password visibility toggle
- **Steps**
  1. Enter password
  2. Click the eye icon
- **Expected Result**
  - Password becomes visible
  - Clicking again hides password

---

### TS-04: Login Functionality

#### TC-07 — Login with valid credentials
- **Steps**
  1. Enter valid email
  2. Enter valid password
  3. Click **Sign In**
- **Expected Result**
  - User is successfully logged in
  - User is redirected to dashboard/home page

---

#### TC-08 — Login with invalid credentials
- **Steps**
  1. Enter valid email
  2. Enter incorrect password
  3. Click **Sign In**
- **Expected Result**
  - Error message displayed
  - User remains on login page

---

### TS-05: One-Time Code Login Option

#### TC-09 — Switch to One-Time Code login
- **Steps**
  1. Click **One-Time Code** tab
- **Expected Result**
  - Password field is replaced or hidden
  - UI updates to reflect OTP login method

---

### TS-06: Remember Me Functionality

#### TC-10 — Verify Remember Me checkbox selection
- **Steps**
  1. Check **Remember me**
  2. Log in successfully
  3. Close and reopen browser
- **Expected Result**
  - User remains logged in or session is remembered

---

### TS-07: Forgot Password Flow

#### TC-11 — Verify Forgot Password navigation
- **Steps**
  1. Click **Forgot password?**
- **Expected Result**
  - User is redirected to password recovery page

---

### TS-08: Accessibility and Keyboard Navigation

#### TC-12 — Keyboard-only navigation
- **Steps**
  1. Use Tab key to navigate through fields
- **Expected Result**
  - Focus moves logically between elements
  - All interactive elements are reachable

---

#### TC-13 — Verify form labels and placeholders
- **Steps**
  1. Inspect Email and Password fields
- **Expected Result**
  - Fields have visible labels
  - Screen readers can identify input purpose

