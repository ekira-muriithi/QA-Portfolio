# ABD-003 - “Find a Lawyer” Link Cannot Be Opened in a New Tab

## Describtion
The **“Find a Lawyer”** link on the Abidors website cannot be opened in a new tab or window using standard browser actions (right-click or keyboard shortcuts), limiting expected user navigation behavior.

---

## Application Details
- **Application Name:** Abidors Website
- **URL:** https://abidors.com/
- **Environment:** Production
- **Browser:** Edge (Desktop)
- **OS:** Windows 11

---

## Severity
**Low**

---

## Priority
**Low**

---

## Description
The **“Find a Lawyer”** call-to-action appears to be implemented in a way that prevents users from opening the destination in a new tab or window. Standard browser interactions such as **right-click → “Open link in new tab”** or **Ctrl + Click** do not work.

This behavior deviates from common web navigation expectations and negatively impacts usability, especially for users who rely on multi-tab workflows or assistive technologies.

---

## Preconditions
- User is on the Abidors homepage
- Internet connection is available

---

## Steps to Reproduce
1. Navigate to `https://abidors.com/buyer`
2. Locate the **“Find a Lawyer”** link or button
3. Right-click on the element
4. Attempt to select **“Open link in new tab”**

---

## Expected Result
- The browser context menu should appear
- User should be able to open the link in a new tab or window

---

## Actual Result
- Right-click context menu does not offer standard link options
- Link cannot be opened in a new tab or window

---

## Impact
- Limits standard user navigation behavior
- Reduces usability for power users
- Potential accessibility concern for keyboard and assistive technology users

---

## Related Test Case
- **TC-04** — Verify navigation links

---

## Notes
- Issue is consistently reproducible
- Likely caused by the element being implemented as a non-semantic clickable element (e.g. `div` instead of `a` tag)
- May impact accessibility and SEO

---

## Attachments
- Screenshot
  <img width="1835" height="710" alt="image" src="https://github.com/user-attachments/assets/c163ff9d-4d75-4b9f-874d-be941718951f" />

