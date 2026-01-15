# Abidors Website 
# Test Scenarios & Test Cases

**Application Name:** Abidors Website  
**Application URL:** https://abidors.com/  
**Testing Type:** Manual Functional, Usability, Accessibility, Basic Performance  

---

### TS-01: Website Access & Availability

#### TC-01: Verify website loads successfully
**Preconditions:** Internet connection available  

**Steps:**
1. Open a supported browser
2. Navigate to `https://abidors.com/`

**Expected Result:**
- Website loads successfully without errors
- No broken layout or missing assets

---

#### TC-02: Verify HTTPS and security warning absence
**Steps:**
1. Observe the URL in the browser address bar

**Expected Result:**
- Website uses HTTPS
- No browser security warnings are displayed

---

### TS-02: Navigation & Page Structure

#### TC-03: Verify main navigation links
**Steps:**
1. Click each item in the main navigation menu

**Expected Result:**
- Each link navigates to the correct page
- No broken or misdirected links

---

#### TC-04: Verify logo redirects to homepage
**Steps:**
1. Navigate to an internal page
2. Click the website logo

**Expected Result:**
- User is redirected to the homepage

---

### TS-03: Content Display & Consistency

#### TC-05: Verify text readability and layout
**Steps:**
1. Review headings, paragraphs, and labels

**Expected Result:**
- Text is readable
- No overlapping or truncated content

---

#### TC-06: Verify images load correctly
**Steps:**
1. Scroll through pages containing images

**Expected Result:**
- Images load correctly
- No broken image placeholders

---

### TS-04: Forms & Input Validation

#### TC-07: Submit form with valid input
**Steps:**
1. Fill all required fields with valid data
2. Submit the form

**Expected Result:**
- Form is submitted successfully
- Confirmation message is displayed

---

#### TC-08: Submit form with missing required fields
**Steps:**
1. Leave required fields empty
2. Submit the form

**Expected Result:**
- Submission is blocked
- Validation messages are displayed

---

#### TC-09: Validate email field format
**Steps:**
1. Enter an invalid email format
2. Submit the form

**Expected Result:**
- Error message indicates invalid email format

---

### TS-05: Responsiveness & Cross-Device Compatibility

#### TC-10: Verify mobile layout responsiveness
**Steps:**
1. Resize browser window to mobile view

**Expected Result:**
- Layout adapts correctly
- No horizontal scrolling

---

#### TC-11: Verify navigation on small screens
**Steps:**
1. Open navigation menu in mobile view

**Expected Result:**
- Menu opens and closes correctly
- All links are accessible

---

### TS-06: Accessibility Compliance (WCAG 2.1)

#### TC-12: Verify keyboard-only navigation
**Steps:**
1. Navigate through the page using the Tab key

**Expected Result:**
- All interactive elements are reachable
- Visible focus indicator is present

---

#### TC-13: Verify image alternative text
**Steps:**
1. Inspect images using assistive technology or dev tools

**Expected Result:**
- Meaningful images contain descriptive alt text

---

#### TC-14: Verify color contrast compliance
**Steps:**
1. Review text against background colors

**Expected Result:**
- Text meets WCAG 2.1 minimum contrast requirements

---

### TS-07: Error Handling & Edge Cases

#### TC-15: Verify handling of invalid URL
**Steps:**
1. Navigate to a non-existent URL (e.g. `/invalidpage`)

**Expected Result:**
- User sees a friendly 404 page
- No server error is exposed

---

#### TC-16: Refresh page during form interaction
**Steps:**
1. Begin filling a form
2. Refresh the page

**Expected Result:**
- Page refreshes gracefully
- No application crash occurs

---

### TS-08: Basic Performance & Responsiveness

#### TC-17: Verify initial page load time
**Steps:**
1. Load the homepage
2. Observe load time via browser dev tools

**Expected Result:**
- Page loads within acceptable time (≤ 3 seconds)

---

#### TC-18: Verify smooth navigation between pages
**Steps:**
1. Navigate between pages repeatedly

**Expected Result:**
- Pages load smoothly
- No noticeable lag or freezing

---

