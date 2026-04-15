# Hidden Features Log

This file documents which parts of the website are hidden (not deleted) and why.

## Current hidden items

1. Framework page content
- Route: `/framework`
- Status: hidden via configuration
- Behavior: users are redirected to `/main` when framework is hidden
- Code is still present in `client/src/pages/FrameworkPage.jsx`

2. Framework section on Home page
- Location: Home page framework card/section
- Status: hidden via configuration
- Code is still present in `client/src/pages/HomePage.jsx`

## How hiding is controlled

- File: `client/src/config/visibility.js`
- Flags:
  - `frameworkPage`
  - `homeFrameworkSection`

Set a flag to `true` to show that part again.

## Notes

- Nothing was deleted.
- Hiding is reversible by changing visibility flags.
