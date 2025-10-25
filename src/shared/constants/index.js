/**
 * @file shared/constants/index.js
 * @description Centralized constants untuk entire application
 */

// ============================================================================
// DESIGN TOKENS & THEME
// ============================================================================

export const COLORS = {
  // Primary
  primary: '#FF4500',
  primaryLight: '#FF6B1A',
  
  // Neutral
  white: '#FAFAFA',
  black: '#333333',
  gray100: '#F5F5F5',
  gray200: '#EEEEEE',
  gray300: '#DDDDDD',
  gray600: '#555555',
  gray900: '#222222',
  
  // Background
  bgDark: '#000000',
  bgLight: '#FAFAFA',
  
  // Semantic
  error: '#FF4757',
  success: '#26C485',
  warning: '#FFA502',
  info: '#3498DB',
};

export const TYPOGRAPHY = {
  // Font families
  fontFamily: {
    primary: "'SpecialGothic', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  
  // Font weights
  fontWeight: {
    regular: 400,
    semibold: 600,
    bold: 700,
  },
  
  // Font sizes
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
  },
};

export const SPACING = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
};

export const BREAKPOINTS = {
  mobile: 480,      // <= 480px
  tablet: 768,      // <= 768px
  desktop: 1024,    // <= 1024px
  wide: 1440,       // <= 1440px
};

export const Z_INDEX = {
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  tooltip: 60,
};

// ============================================================================
// ANIMATION & TRANSITIONS
// ============================================================================

export const ANIMATIONS = {
  duration: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  
  easing: {
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

// ============================================================================
// ROUTES
// ============================================================================

export const ROUTES = {
  root: '/',
  home: '/',
  predictor: '/predictor',
  garden: '/garden',
  about: '/about',
  contact: '/contact',
};

// ============================================================================
// SCROLL BEHAVIOR
// ============================================================================

export const SCROLL = {
  hideDelay: 2000,      // 2 seconds
  scrollIndicatorHeight: 3, // pixels
};

// ============================================================================
// DIGITAL GARDEN CONFIG
// ============================================================================

export const DIGITAL_GARDEN = {
  sectionCount: 5,
  sectionWidth: '30vw',
  mobileWidth: '100vw',
  responsiveBreakpoint: 768,
  titles: ['Pengenalan', 'Spektroskopi', 'ML & Physics', 'Deep Learning', 'Plasma'],
};

// ============================================================================
// FONT PATHS
// ============================================================================

export const FONT_PATHS = {
  specialGothicRegular: '/fonts/SpecialGothic-Regular.ttf',
  specialGothicSemibold: '/fonts/SpecialGothic-SemiBold.ttf',
  specialGothicBold: '/fonts/SpecialGothic-Bold.ttf',
};
