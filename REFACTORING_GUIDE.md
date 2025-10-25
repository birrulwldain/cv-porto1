# CV Portfolio - Refactored Structure 🚀

[![Code Quality](https://img.shields.io/badge/Code%20Quality-Professional-brightgreen)]()
[![Architecture](https://img.shields.io/badge/Architecture-Feature--Based-blue)]()
[![CSS](https://img.shields.io/badge/Styling-BEM%20Methodology-orange)]()

Professional portfolio website built with **React**, **Vite**, and modern development best practices.

## 📋 Project Overview

This project consists of three main pages:
- **Home**: Landing page with portfolio overview
- **Digital Garden**: Interactive note-taking system dengan horizontal scrolling
- **Predictor**: ML model prediction interface

## 🎯 Recent Refactoring

Seluruh project telah di-refactor mengikuti prinsip-prinsip **professional developer** modern:

### ✨ Key Improvements

#### 1. **Feature-Based Architecture**
```
src/features/
├── digital-garden/     # Self-contained Digital Garden feature
│   ├── components/     # React components
│   ├── hooks/         # Custom hooks
│   ├── constants/     # Static data
│   └── styles/        # Feature styles
├── predictor/         # Predictor feature
└── home/              # Home feature

src/shared/            # Reusable across features
├── components/
├── hooks/
├── utils/
├── constants/
└── styles/
```

#### 2. **Separation of Concerns**
- **Components**: Pure UI, no business logic
- **Hooks**: Business logic & side effects
- **Utils**: Pure, testable functions
- **Constants**: Centralized configuration
- **Styles**: Scoped, organized with BEM

#### 3. **Professional CSS Methodology**
- **BEM** (Block Element Modifier) naming
- **CSS Variables** untuk design tokens
- **Mobile-first** responsive approach
- **Modular** style organization

#### 4. **Code Quality Standards**
- ✅ **ESLint** configuration
- ✅ **Prettier** code formatting
- ✅ **PropTypes** validation
- ✅ **JSDoc** documentation
- ✅ **Conventional commits** (Husky + CommitLint)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm atau yarn

### Installation

```bash
# Clone repository
git clone <repository-url>
cd cv-porto1

# Install dependencies
npm install

# Setup Git hooks (optional)
npm run prepare
```

### Development

```bash
# Start development server
npm run dev
# Open http://localhost:5173

# Run linter
npm run lint

# Format code
npm run format
```

### Build & Deploy

```bash
# Build untuk production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
cv-porto1/
├── src/
│   ├── features/                    # Feature modules
│   │   ├── digital-garden/
│   │   │   ├── components/
│   │   │   │   ├── DigitalGardenContainer.jsx
│   │   │   │   ├── Section.jsx
│   │   │   │   ├── ScrollIndicator.jsx
│   │   │   │   └── index.js
│   │   │   ├── constants/
│   │   │   │   └── notes.js
│   │   │   ├── styles/
│   │   │   │   ├── variables.css
│   │   │   │   ├── digital-garden-container.css
│   │   │   │   ├── markdown-typography.css
│   │   │   │   ├── note-card.css
│   │   │   │   └── scroll-indicator.css
│   │   │   └── index.js
│   │   ├── predictor/
│   │   └── home/
│   ├── shared/                      # Shared modules
│   │   ├── components/
│   │   ├── hooks/
│   │   │   ├── useScrollProgress.js
│   │   │   ├── useResponsive.js
│   │   │   └── index.js
│   │   ├── utils/
│   │   │   ├── classNameUtils.js
│   │   │   ├── scrollUtils.js
│   │   │   ├── markdownUtils.js
│   │   │   ├── markdownRenderer.js
│   │   │   ├── validationUtils.js
│   │   │   └── index.js
│   │   ├── constants/
│   │   │   └── index.js
│   │   └── styles/
│   ├── config/                      # Configuration
│   ├── types/                       # Global types
│   ├── App.jsx
│   └── main.jsx
├── public/                          # Static assets
├── ARCHITECTURE.md                  # Architecture guide
├── .eslintrc.cjs                   # ESLint config
├── .prettierrc.json                # Prettier config
├── vite.config.js
├── package.json
└── README.md
```

## 🛠️ Technology Stack

### Core
- **React** 19.0.0 - UI library
- **Vite** 6.2.0 - Build tool
- **React Router** 7.6.3 - Routing

### Styling
- **SCSS/Sass** 1.86.3 - CSS preprocessing
- **Tailwind CSS** 4.1.3 - Utility-first CSS
- **CSS Variables** - Design tokens

### Development Tools
- **ESLint** 9.21.0 - Code linting
- **Prettier** - Code formatting
- **Husky** 9.1.7 - Git hooks
- **CommitLint** 19.8.0 - Commit validation

### Optional Libraries
- **Framer Motion** 12.20.1 - Animations
- **MUI** 7.2.0 - Component library
- **Ant Design** 5.26.3 - UI components
- **Plotly.js** 3.0.1 - Data visualization

## 🎨 Design System

### Colors
```css
--color-primary: #FF4500;           /* Orange */
--color-primary-light: #FF6B1A;     /* Light Orange */
--color-white: #FAFAFA;             /* Off White */
--color-black: #333333;             /* Dark Grey */
```

### Typography
```css
--font-primary: 'SpecialGothic', sans-serif;
--font-weight-regular: 400;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Spacing Scale
```css
--spacing-xs: 0.25rem;  /* 4px */
--spacing-sm: 0.5rem;   /* 8px */
--spacing-md: 1rem;     /* 16px */
--spacing-lg: 1.5rem;   /* 24px */
--spacing-xl: 2rem;     /* 32px */
```

## 📖 Component Documentation

### Digital Garden
Main component untuk interactive note-taking dengan horizontal scrolling.

#### Features
- ✅ 5 horizontal sections
- ✅ Smooth horizontal scrolling
- ✅ Auto-hiding scroll indicator
- ✅ Responsive design (mobile: vertical stack)
- ✅ Note linking system
- ✅ Markdown typography

#### Usage
```jsx
import { DigitalGardenContainer } from '@/features/digital-garden/components';

function Page() {
  return <DigitalGardenContainer />;
}
```

### Scroll Progress Hook
Custom hook untuk track scroll position dengan auto-hide functionality.

```jsx
import { useScrollProgress } from '@/shared/hooks';

function Component() {
  const { isScrolling, scrollProgress, handleScroll } = useScrollProgress(2000);
  
  return (
    <div onScroll={handleScroll}>
      {isScrolling && <ProgressBar value={scrollProgress} />}
    </div>
  );
}
```

## 🧠 Custom Hooks

### `useScrollProgress`
Track horizontal scroll position dengan auto-hide indicator.

```javascript
const { isScrolling, scrollProgress, handleScroll } = useScrollProgress(hideDelay);
```

**Parameters:**
- `hideDelay` (number): Delay sebelum indicator hilang (default: 2000ms)

**Returns:**
- `isScrolling` (boolean): Apakah sedang scroll
- `scrollProgress` (number): Progress 0-100
- `handleScroll` (function): Scroll event handler

### `useResponsive`
Detect current breakpoint untuk responsive behavior.

```javascript
const { isMobile, isTablet, isDesktop, breakpoint } = useResponsive();
```

**Returns:**
- `isMobile` (boolean)
- `isTablet` (boolean)
- `isDesktop` (boolean)
- `breakpoint` (string): 'mobile' | 'tablet' | 'desktop' | 'wide'

## 🛣️ Naming Conventions

### Files
| Type | Pattern | Example |
|------|---------|---------|
| Components | PascalCase | `DigitalGardenContainer.jsx` |
| Hooks | `use` + PascalCase | `useScrollProgress.js` |
| Utils | camelCase | `classNameUtils.js` |
| Constants | camelCase | `colors.js` |
| Styles | kebab-case | `digital-garden.css` |

### CSS Classes (BEM)
```css
/* Block */
.digital-garden-container { }

/* Element */
.digital-garden-container__section { }
.digital-garden-container__scroll-area { }

/* Modifier */
.scroll-indicator--active { }
.button--primary { }
```

## 🧪 Code Quality

### Running Linter
```bash
npm run lint
```

### Format Code
```bash
npm run format
```

### Make Commit
```bash
npm run commit
# atau
git commit -m "message"  # Will be checked by commitlint
```

## 📚 Additional Documentation

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Detailed architecture guide
- **[JSDoc Comments](./src)** - Inline documentation di source code
- **[Component Examples](./src/features/digital-garden/components)** - Real-world examples

## 🔗 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [BEM Methodology](http://bem.info)
- [ESLint Rules](https://eslint.org/docs/latest/rules/)
- [CSS Variables Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

## 📝 Git Workflow

### Branch Naming
```
feature/add-component-name
bugfix/description
docs/update-readme
```

### Commit Messages
```
feat: add new feature
fix: fix bug description
docs: update documentation
refactor: reorganize code
style: improve styling
test: add tests
```

### Pre-commit Hooks
Automatically run ESLint dan Prettier pada staged files.

```bash
# Manual trigger
npm run prepare
```

## 🚀 Performance Optimization

- ✅ Code splitting per route
- ✅ Lazy component loading
- ✅ CSS variables untuk faster DOM updates
- ✅ Optimized animations (transform, opacity)
- ✅ Tree-shaking untuk unused code elimination

## 🤝 Contributing

1. Create feature branch dari `master`
2. Make changes mengikuti conventions
3. Run `npm run lint` dan `npm run format`
4. Create meaningful commits
5. Push dan create Pull Request

## 📄 License

MIT License - feel free to use untuk personal projects

## 👨‍💻 Author

**Created by:** GitHub Copilot  
**Last Updated:** October 24, 2025  
**Version:** 2.0 (Refactored)

---

### Refactoring Checklist ✅

- ✅ Feature-based folder structure
- ✅ Separation of concerns
- ✅ Custom hooks (useScrollProgress, useResponsive)
- ✅ Utility functions (classNameUtils, scrollUtils, markdown)
- ✅ Design tokens (CSS variables)
- ✅ BEM CSS methodology
- ✅ PropTypes validation
- ✅ JSDoc documentation
- ✅ ESLint configuration
- ✅ Prettier configuration
- ✅ Architecture documentation
- ✅ This comprehensive README

**Status:** Production-Ready 🎉
