# ABD-002 - Property Listing Form Rejects Invalid Location Without Validation Feedback

## Desription
When creating a new property listing, the form allows entry of an invalid location (e.g. random letters). Upon submission, the form fails silently with **no validation message or indication of which field is incorrect**, preventing the user from completing the listing.

---

## Application Details
- **Application Name:** Abidors Website
- **URL:** https://abidors.com/
- **Environment:** Production
- **Browser:** Microsoft Edge (Desktop)
- **OS:** Windows 11

---

## Severity
**Medium**

---

## Priority
**High**

---

## Description
While creating a new property listing on the Abidors website, the **location field accepts invalid input**, such as random letters or nonsensical values. When the user attempts to submit the form, the submission fails, but the system provides **no validation message, error indicator, or field-level feedback**.

The user is not informed:
- That the location input is invalid
- Which field caused the failure
- How to correct the issue

This results in a blocked user flow and a confusing user experience.

---

## Preconditions
- User is logged in as seller
- User navigates to the **Create New Property Listing** form
- Internet connection is available

---

## Steps to Reproduce
1. Navigate to the property listing creation form on `https://abidors.com/seller/post-an-add/information`
2. Fill in all required fields with valid data
3. In the **Location** field, enter an invalid value (e.g. `asdfghj`)
4. Click the **Submit** button

---

## Expected Result
- The form submission should be blocked
- A clear validation message should indicate the location input is invalid
- The invalid field should be highlighted
- User should be guided on how to correct the error

---

## Actual Result
- Form submission fails
- No validation message is displayed
- No visual indication of the invalid field
- User receives no feedback explaining the failure

---

## Impact
- Users are unable to create property listings
- Accessibility violation (WCAG 2.1 – Error Identification)

---

## Related Test Case
- **TC-08** - Submit property listing form with invalid input  
- **TC-09** - Validate location field input rules

---

## Notes
- Issue is consistently reproducible
- Affects both usability and accessibility
- No client-side or visible server-side validation feedback observed

---

## Attachments
- Screenshots
- <img width="1912" height="697" alt="image" src="https://github.com/user-attachments/assets/2ef70e65-aacc-4b45-913c-f273b7018e74" />

