# React Portfolio - AI Coding Assistant Instructions

## Project Architecture

This is a **React 19 + Vite + React Router** portfolio site with a clean, modern structure:

- **Entry Point**: `src/main.jsx` renders `<Welcome />` (which is `App.jsx`)
- **Routing**: `App.jsx` → `MainRouter.jsx` → individual page components
- **Layout Pattern**: `Layout.jsx` renders outside `<Routes>` for persistent navigation
- **Pages**: All in `src/pages/` with co-located CSS files (`Home.jsx` + `Home.css`)

## File Organization Patterns

```
src/
├── pages/           # Page components with co-located CSS
│   ├── Home.jsx + Home.css
│   ├── About.jsx + About.css
│   └── [Page].jsx + [Page].css
├── components/      # Shared components
│   └── Layout.jsx   # Navigation header
├── assets/          # Images and static resources
└── index.css        # Global styles and navigation CSS
```

## Component Conventions

### Import Patterns
- **Assets**: Use relative imports (`import profilePic from "../assets/profilePic.png"`)
- **CSS**: Co-located CSS imports (`import "./Home.css"`)
- **Router**: Standard React Router v7 patterns

### Styling System
- **Base Colors**: `#fffaf6` (cream background), `rgb(100, 43, 43)` (text)
- **Gradient Text**: `.gradient-text` class uses `linear-gradient(90deg, #a855f7, #ec4899, #f97316)`
- **Navigation**: Styled in `index.css`, mobile-responsive hamburger menu
- **Layout**: Flexbox-based, responsive design

### Component Structure
```jsx
export default function PageName() {
  return (
    <section className="page-name">
      <div className="page-content">
        <h1><span className="gradient-text">Title</span></h1>
        <p>Content...</p>
      </div>
    </section>
  );
}
```

## Development Workflow

### Available Scripts
- `npm run dev` - Start Vite dev server
- `npm run build` - Production build
- `npm run lint` - ESLint with React hooks rules
- `npm run preview` - Preview production build

### Key Dependencies
- **React 19.1.1** with React Router DOM 7.9.1
- **Vite 7.1.2** as build tool
- **ESLint** with React hooks plugin and custom unused vars rule

## Navigation Architecture

The `Layout.jsx` component handles:
- Logo display (left-aligned)
- Responsive hamburger menu for mobile
- Route links that close mobile menu on navigation
- State management for mobile menu toggle

Routes defined in `MainRouter.jsx`:
- `/` → Home
- `/about` → About  
- `/services` → Services
- `/projects` → Projects
- `/contact` → Contact

## Asset Management

Images stored in `src/assets/` and imported as ES modules. Common assets:
- `logoIcon.png` - Navigation logo
- `profilePic.png` - Home page profile image
- `tesneem.png` - About page image

## Code Quality

ESLint configured with:
- React hooks recommended rules
- React refresh for Vite
- Unused vars error with pattern exceptions for constants
- Modern ES2020+ syntax support