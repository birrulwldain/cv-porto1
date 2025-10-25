/**
 * @file shared/utils/scrollUtils.js
 * @description Utility functions untuk scroll behavior handling
 */

/**
 * Calculate scroll progress percentage
 * @param {HTMLElement} element - Scrollable element
 * @returns {number} Progress percentage (0-100)
 */
export const calculateScrollProgress = (element) => {
  if (!element) return 0;
  
  const scrollLeft = element.scrollLeft;
  const scrollWidth = element.scrollWidth - element.clientWidth;
  
  if (scrollWidth <= 0) return 0;
  
  return (scrollLeft / scrollWidth) * 100;
};

/**
 * Determine if element is at scroll start
 * @param {HTMLElement} element - Scrollable element
 * @returns {boolean} True if at start
 */
export const isScrollStart = (element) => {
  return element?.scrollLeft === 0;
};

/**
 * Determine if element is at scroll end
 * @param {HTMLElement} element - Scrollable element
 * @returns {boolean} True if at end
 */
export const isScrollEnd = (element) => {
  if (!element) return false;
  
  const scrollLeft = element.scrollLeft;
  const scrollWidth = element.scrollWidth;
  const clientWidth = element.clientWidth;
  
  return Math.abs(scrollLeft + clientWidth - scrollWidth) < 1;
};

/**
 * Smooth scroll to specific position
 * @param {HTMLElement} element - Element to scroll
 * @param {number} targetScroll - Target scroll position
 * @param {number} duration - Animation duration in ms
 */
export const smoothScrollTo = (element, targetScroll, duration = 300) => {
  if (!element) return;
  
  const startScroll = element.scrollLeft;
  const distance = targetScroll - startScroll;
  const startTime = Date.now();
  
  const animate = () => {
    const now = Date.now();
    const progress = Math.min((now - startTime) / duration, 1);
    
    element.scrollLeft = startScroll + distance * easeInOutCubic(progress);
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };
  
  animate();
};

/**
 * Easing function - cubic-bezier
 * @param {number} t - Progress (0-1)
 * @returns {number} Eased value
 */
const easeInOutCubic = (t) => {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};
