# N7 Landing Page

A modern responsive React + Tailwind CSS landing page built for the N7 / CB7 banking platform ecosystem.

The project focuses on clean frontend architecture, reusable section-based components, smooth interactions, and scalable UI implementation while keeping abstractions lightweight and maintainable.

---

## Tech Stack

* React
* Vite
* Tailwind CSS
* Framer Motion

---

## Getting Started

### Install dependencies

```bash id="jlwmby"
npm install
```

### Run development server

```bash id="phnlr5"
npm run dev
```

### Build for production

```bash id="kq10e7"
npm run build
```

### Preview production build

```bash id="72glca"
npm run preview
```

### Run linting

```bash id="uvj0vz"
npm run lint
```

---

## Project Structure

```txt id="2t1e9j"
src/
├── assets/
│   ├── icons/
│   └── images/
│
├── components/
│   ├── common/
│   ├── sections/
│   └── ui/
│
├── pages/
│
├── App.jsx
└── main.jsx
```

---

## Sections

The landing page is organized into modular section components under:

```txt id="7xj6ht"
src/components/sections
```

Current sections include:

* Hero
* SolutionsSection
* CB7Section
* N7Section
* InsightsSection
* CaseStudySection
* CTA Sections
* Footer

---

## Architecture Approach

The project intentionally keeps abstractions lightweight.

Reusable components are introduced only where:

* UI patterns repeat
* interactions are shared
* duplicated JSX becomes difficult to maintain

Section-specific layout and styling remain close to the component that owns them, making visual iteration faster and easier while keeping the codebase maintainable.

The architecture prioritizes:

* readability
* scalability
* responsiveness
* maintainability
* clean frontend practices

---

## Performance Considerations

* Optimized responsive layouts
* Transform-based animations
* Reusable rendering patterns
* SVG asset usage
* Minimal frontend overhead
* Production-ready build optimization

---

## Deployment

This project is optimized for deployment on:

* Vercel
* Netlify

### Recommended Workflow

* Push repository to GitHub
* Connect repository to Vercel
* Enable automatic deployments through Git integration

---

## Future Improvements

Potential future enhancements:

* CDN integration for image delivery
* CMS integration
* Advanced accessibility auditing
* Motion preference handling
* Component documentation / Storybook
* Asset optimization pipeline

---

