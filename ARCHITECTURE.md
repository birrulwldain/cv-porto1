# Project Architecture & Best Practices

## 📁 Folder Structure (Feature-Based)

```
src/
├── features/                 # Feature-based modules
│   ├── digital-garden/      # Digital Garden feature
│   │   ├── components/      # React components
│   │   │   ├── DigitalGardenContainer.jsx
│   │   │   ├── Section.jsx
│   │   │   ├── ScrollIndicator.jsx
│   │   │   └── index.js
│   │   ├── hooks/           # Feature-specific hooks
│   │   ├── constants/       # Feature constants & data
│   │   │   └── notes.js
│   │   ├── types/           # TypeScript types (future)
│   │   ├── styles/          # Feature styles
│   │   │   ├── variables.css
│   │   │   ├── digital-garden-container.css
│   │   │   ├── markdown-typography.css
│   │   │   ├── note-card.css
│   │   │   └── scroll-indicator.css
│   │   └── index.js         # Feature exports
│   ├── predictor/          # Predictor feature
│   ├── home/               # Home feature
│   └── ...
├── shared/                 # Shared modules (reusable)
│   ├── components/         # Generic components
│   ├── hooks/              # Custom hooks
│   │   ├── useScrollProgress.js
│   │   ├── useResponsive.js
│   │   └── index.js
│   ├── utils/              # Utility functions
│   │   ├── classNameUtils.js
│   │   ├── scrollUtils.js
│   │   ├── markdownUtils.js
│   │   ├── markdownRenderer.js
│   │   ├── validationUtils.js
│   │   └── index.js
│   ├── constants/          # Shared constants
│   │   └── index.js
│   └── styles/             # Global styles
├── config/                 # Application configuration
├── types/                  # Global TypeScript types
├── App.jsx                 # Main app component
└── main.jsx               # Entry point
```

## 🎯 Key Principles

### 1. Feature-Based Architecture
- Setiap fitur berdiri sendiri dengan folder-nya sendiri
- Mudah untuk maintain, test, dan scale
- Setiap feature export melalui `index.js`

### 2. Separation of Concerns
- **Components**: Pure UI, menerima props, render JSX
- **Hooks**: Business logic dan side effects
- **Utils**: Pure functions tanpa side effects
- **Constants**: Data statics dan configuration
- **Styles**: Scoped per feature

### 3. Naming Conventions

#### Files
- **Components**: PascalCase (`DigitalGardenContainer.jsx`)
- **Hooks**: camelCase dengan prefix `use` (`useScrollProgress.js`)
- **Utils**: camelCase (`classNameUtils.js`)
- **Styles**: kebab-case (`digital-garden-container.css`)
- **Constants**: camelCase atau UPPER_CASE (`notes.js`, `DIGITAL_GARDEN`)

#### CSS Classes (BEM)
```css
/* Block */
.digital-garden-container { }

/* Block__Element */
.digital-garden-container__section { }
.digital-garden-container__scroll-area { }

/* Block--Modifier */
.scroll-indicator--active { }
.note-card__link:hover { }

/* Abbreviations allowed for specificity */
.md-h1, .md-p, .md-bullet
```

### 4. Component Structure

```jsx
/**
 * @file path/to/Component.jsx
 * @description Brief description of what component does
 */

import React from 'react';
import PropTypes from 'prop-types';
import './component.css';

/**
 * ComponentName - Brief description
 * @component
 * Longer description of what it does and why
 */
const ComponentName = ({ prop1, prop2 }) => {
  return (
    <div className="component-name">
      Content
    </div>
  );
};

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};

ComponentName.defaultProps = {
  prop2: 0,
};

export default ComponentName;
```

### 5. CSS Methodology

#### Variables (Design Tokens)
```css
:root {
  --color-primary: #FF4500;
  --font-size-base: 1rem;
  --spacing-md: 1rem;
  --duration-base: 200ms;
}
```

#### BEM Structure
```css
/* Block - top level */
.button { }

/* Element - child of block */
.button__icon { }

/* Modifier - variation */
.button--primary { }
.button__icon--small { }

/* States */
.button:hover { }
.button:active { }
.button:disabled { }
```

### 6. Utility Functions

```javascript
// ✅ Good - Pure function
export const calculateScrollProgress = (element) => {
  const scrollLeft = element.scrollLeft;
  const scrollWidth = element.scrollWidth - element.clientWidth;
  return scrollWidth > 0 ? (scrollLeft / scrollWidth) * 100 : 0;
};

// ✅ Good - Descriptive naming
export const cx = (...classes) => classes.flat().filter(Boolean).join(' ');

// ❌ Bad - Side effects dalam utility
export const fetchData = () => {
  fetch('/api/data'); // Side effect - use hooks instead
};
```

### 7. Custom Hooks

```javascript
// ✅ Good - Reusable logic
export const useScrollProgress = (hideDelay = 2000) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  // ... logic
  return { isScrolling, scrollProgress, handleScroll };
};

// ✅ Good - Cleanup
useEffect(() => {
  return () => {
    // cleanup code
  };
}, []);
```

### 8. Props Validation

```javascript
ComponentName.propTypes = {
  // Required
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  
  // Optional dengan default
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.object),
};

ComponentName.defaultProps = {
  isActive: false,
  items: [],
};
```

## 📝 Documentation Standards

### JSDoc Comments
```javascript
/**
 * Calculate scroll progress percentage
 * @param {HTMLElement} element - Scrollable element
 * @returns {number} Progress percentage (0-100)
 * @example
 * const progress = calculateScrollProgress(scrollContainer);
 */
export const calculateScrollProgress = (element) => {
  // ...
};
```

### Component Documentation
```jsx
/**
 * ScrollIndicator - Shows scroll position
 * @component
 * Displays a progress bar indicating horizontal scroll position.
 * Auto-hides after 2 seconds of inactivity.
 * 
 * @example
 * <ScrollIndicator isVisible={true} progress={45} />
 */
```

## 🎨 Styling Best Practices

### 1. CSS Variables (Tokens)
- Centralize dalam `variables.css`
- Semantic naming: `--color-primary`, `--spacing-md`
- Responsive overrides dalam media queries

### 2. Mobile-First Approach
```css
/* Mobile default */
.component {
  width: 100%;
  padding: var(--spacing-md);
}

/* Tablet & up */
@media (min-width: 768px) {
  .component {
    width: 50%;
    padding: var(--spacing-lg);
  }
}
```

### 3. Performance
- Minimize transitions/animations
- Use `transform` dan `opacity` untuk animations
- Avoid expensive operations dalam render

## 🧪 Testing Preparation

### Unit Tests
```javascript
// Example test structure (untuk future implementation)
describe('calculateScrollProgress', () => {
  it('should return 0 when not scrolled', () => {
    // Test logic
  });
});
```

### Component Tests
```javascript
describe('ScrollIndicator', () => {
  it('should be visible when isVisible prop is true', () => {
    // Snapshot/render test
  });
});
```

## 🚀 Performance Optimization

1. **Code Splitting** - Route-based imports
2. **Lazy Loading** - React.lazy() untuk features
3. **Memoization** - React.memo untuk expensive components
4. **Tree Shaking** - Named exports untuk unused code elimination
5. **CSS Optimization** - Purge unused CSS di production

## 🔍 Code Quality Tools

### Setup (Sudah ada di project)
- **ESLint** - Code quality
- **Prettier** - Code formatting  
- **Husky** - Pre-commit hooks
- **lint-staged** - Run linters on staged files
- **CommitLint** - Conventional commits

### Commands
```bash
npm run lint              # Run ESLint
npm run format            # Format dengan Prettier
npm run build             # Build untuk production
npm run preview           # Preview production build
```

## 📚 Resources

- React Best Practices: https://react.dev/reference
- CSS Variables: https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- BEM Naming: http://bem.info/
- Web Accessibility: https://www.w3.org/WAI/

---

**Last Updated:** October 24, 2025
**Author:** GitHub Copilot
**Version:** 1.0
