# Project 2 — Ishana Vastu Website

A responsive React + Vite website for **Ishana Vastu**, built for a calm spiritual and wellness brand experience with booking, inquiry, FAQ, and service pages.

## Overview

This project is a multi-page single-page application built with React Router and deployed on Netlify. The website presents Ishana Vastu's services, team, consultation flow, FAQ, and contact options in a clean, mobile-friendly format.[1][2]

## Features

- Responsive homepage, about, services, FAQ, and contact pages.
- Sticky navbar with logo branding and mobile hamburger menu.
- Scroll-to-top behavior on route change for better page transitions in a React SPA.[3][4]
- Netlify form handling for inquiries.
- Google Calendar booking link integration.
- WhatsApp contact shortcut.
- Netlify-compatible SPA routing setup for React Router paths.[2][5]

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based UI |
| Vite | Development server and production build tooling [1] |
| React Router | Page routing inside the SPA [6] |
| Motion | Page and section animations |
| Netlify | Hosting, deployment, and form handling [7][2] |

## Project Structure

```text
project/
├── public/
│   ├── ishana-vastu.jpeg
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── FAQ.jsx
│   │   ├── Home.jsx
│   │   └── Services.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── netlify.toml
├── package.json
└── README.md
```

## Local Development

Install dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

Vite provides a local development server for building and testing the app during development.[1]

## Production Build

Create a production build with:

```bash
npm run build
```

For Vite projects, the production-ready output is generated in the `dist` directory.[8]

## Deployment

This project is intended for GitHub + Netlify deployment.

### GitHub

Push the project to a GitHub repository using standard git commands for an existing local project.[9][10]

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

### Netlify

Import the repository into Netlify and use these settings:

- Build command: `npm run build`
- Publish directory: `dist`

Vite's static deployment guidance and Netlify setup both use the build output directory `dist` for publishing.[2][8]

## Routing Setup

Because this project uses React Router, Netlify needs SPA fallback routing so direct visits to routes like `/about`, `/faq`, or `/contact` work correctly. A rewrite rule that sends all routes to `index.html` is the standard solution for SPA hosting on Netlify.[5][11]

Example `_redirects` file:

```txt
/* /index.html 200
```

Or with `netlify.toml`:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Form Handling

The contact form is configured to use Netlify Forms instead of an external form relay. Netlify forms in React projects require a detected form name, hidden `form-name` field, and often a matching hidden HTML form in the root `index.html` file for proper build-time detection.[7][12][13]

## Mobile Improvements Included

This project includes a mobile navigation button and route-based scroll reset to improve the small-screen experience. Accessible mobile navigation patterns use a toggle button with proper ARIA attributes, and route-change scroll restoration is a common React Router enhancement.[14][15]

## Pages

- **Home** — landing page with hero, CTA, and brand positioning.
- **About** — overview of the practice and brand story.
- **Services** — healing and consultation offerings.
- **FAQ** — common booking and service questions.
- **Contact** — inquiry form, WhatsApp, booking, and availability details.

## Notes

- Logo asset is served from the `public` folder.
- The site is optimized for both desktop and mobile layouts.
- Form behavior and content are still being tested and may be refined further based on live user feedback.

## Future Improvements

- Add testimonials.
- Add a privacy policy page.
- Improve form success feedback.
- Fine-tune spacing and responsiveness based on real-device testing.
- Add SEO meta tags and social sharing previews.
