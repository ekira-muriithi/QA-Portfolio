# Nexura Africa Test Plan

## 1. Test Plan Overview

**Application Name:** Nexura Africa Login  
**Application URL:** https://nexuraafrica.shop/login  
**Application Type:** Authentication (E-commerce platform)

### Objective
The objective of this test plan is to evaluate the **functional correctness, usability, accessibility, API behavior, and basic performance** of the Nexura Africa login feature to identify defects and quality risks that may impact end users.

---

## 2. Scope

### In Scope
- Login form UI and behavior
- Valid and invalid credential handling
- Error messages and validation
- Password masking / visibility behavior
- Session handling (login persistence, logout)
- API requests supporting authentication
- Accessibility checks (WCAG 2.1)
- Basic performance indicators (load time, response time)

### Out of Scope
- Account registration (if not part of login flow)
- Advanced security or penetration testing
- Load or stress testing
- Backend infrastructure validation
- Third-party authentication services

---

## 3. Test Strategy

### 3.1 Manual Functional Testing
Manual testing will validate:
- Positive and negative login scenarios
- Field-level validation
- Error handling and messaging
- Navigation to related flows (e.g., forgot password)

Exploratory testing will be used to identify unexpected issues.

---

### 3.2 Automation Testing (Playwright + JavaScript)
Automation will focus on:
- Successful login with valid credentials
- Failed login with invalid credentials
- UI assertions for error messages
- Page navigation after login

Automation will be implemented using **Playwright with JavaScript**, emphasizing stable selectors and maintainable test structure.

---

### 3.3 API Testing
API testing will include:
- Observing authentication API calls via browser dev tools
- Validating response status codes and payloads
- Verifying error responses for invalid credentials

**Tools:** Postman, Newman

---

### 3.4 Accessibility Testing
Accessibility testing will cover:
- Keyboard-only navigation
- Focus order and visibility
- Labeling of form inputs
- Screen reader compatibility
- Color contrast compliance

Standards referenced: **WCAG 2.1**

---

### 3.5 Performance Testing (Lightweight)
Basic performance evaluation will assess:
- Login page load time
- Response time after form submission
- UI responsiveness during authentication

Tools may include browser developer tools and Lighthouse.

---

## 4. Test Environment

- **Browsers:** Chrome, Firefox  
- **Devices:** Desktop and mobile (responsive testing)  
- **Operating System:** Windows  
- **Test Data:** Valid and invalid user credentials (non-production)

---

## 5. Entry and Exit Criteria

### Entry Criteria
- Login page is accessible
- Test environment available
- Test cases prepared

### Exit Criteria
- All planned test cases executed
- Critical and high-severity defects logged
- Test results summarized

---

## 6. Risks and Mitigation

| Risk | Mitigation |
|-----|-----------|
| No test credentials available | Use permitted test accounts |
| Limited API documentation | Infer behavior via network inspection |
| UI changes during testing | Focus on stable, high-risk flows |

---

## 7. Deliverables

- Test Plan  
- Manual Test Cases  
- Automation Test Scripts  
- API Test Evidence  
- Bug Reports

