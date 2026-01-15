# Abidors Website Test Plan

## 1. Test Plan Overview

**Application Name:** Abidors Website  
**Application URL:** https://abidors.com/  
**Application Type:** Public-facing business website  

### Objective
The objective of this test plan is to evaluate the **functional correctness, usability, accessibility, API behavior (where applicable), and basic performance characteristics** of the Abidors website in order to identify defects, usability issues, and quality risks that could impact end users.

---

## 2. Scope

### In Scope
- Website navigation and page rendering  
- Core user interactions (forms, buttons, links)  
- Content consistency and error handling  
- Responsive behavior across screen sizes  
- API requests supporting UI functionality (as observed via network activity)  
- Accessibility compliance checks based on WCAG 2.1 guidelines  
- Basic performance indicators such as page load time and responsiveness  

### Out of Scope
- Penetration testing or vulnerability exploitation  
- Load or stress testing at scale  
- Backend infrastructure validation  
- Third-party services not owned or controlled by the application  

---

## 3. Test Strategy

### 3.1 Manual Functional Testing
Manual testing will be conducted to validate:
- Primary user flows  
- Positive and negative scenarios  
- Input validation and error messages  
- Edge cases and unexpected user behavior  

Exploratory testing will be used to identify issues not covered by predefined scenarios.

---

### 3.2 Automation Testing (Playwright + JavaScript)
Automation testing will focus on:
- Smoke and regression test coverage for critical user flows  
- Navigation and UI interaction validation  
- Assertions on visible content and UI state  

Automation tests will be implemented using **Playwright with JavaScript**, with an emphasis on stable selectors and maintainable test structure.

---

### 3.3 API Testing
Where applicable, API behavior will be evaluated by:
- Observing network requests triggered by UI actions  
- Validating response status codes and payload structure  
- Identifying error responses and handling behavior  

**Tools used:** Postman, Newman

---

### 3.4 Accessibility Testing
Accessibility testing will include:
- Keyboard-only navigation  
- Focus management and visibility  
- Semantic HTML structure and ARIA attributes  
- Color contrast and text readability  

Accessibility checks will align with **WCAG 2.1** guidelines and be documented with findings and recommendations.

---

### 3.5 Performance Testing (Lightweight)
Basic performance evaluation will be performed to assess:
- Initial page load time  
- Responsiveness during navigation  
- Network request size and behavior  

Browser developer tools and Lighthouse audits may be used for analysis.

---

## 4. Test Environment

- **Browsers:** Chrome, Firefox  
- **Devices:** Desktop and mobile (responsive testing)  
- **Operating System:** Windows  
- **Test Data:** Publicly available and non-production data  

---

## 5. Entry and Exit Criteria

### Entry Criteria
- Website is accessible and stable  
- Test environment is available  
- Test plan approved for execution  

### Exit Criteria
- Planned test scenarios executed  
- Critical and high-severity defects documented  
- Test findings summarized and reported  

---

## 6. Risks and Mitigation

| Risk | Mitigation |
|----|-----------|
| No staging environment | Conduct careful testing in production with minimal disruption |
| Limited API documentation | Infer API behavior using browser network tools |
| UI changes during testing | Focus on stable and high-impact user flows |

---

## 7. Deliverables
- Test Plan  
- Manual Test Cases  
- Automation Test Scripts  
- Bug Reports  

