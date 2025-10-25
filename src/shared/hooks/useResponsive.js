/**
 * @file shared/hooks/useResponsive.js
 * @description Hook untuk detect responsive breakpoint
 */

import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '../constants';

/**
 * Custom hook untuk track current breakpoint
 * @returns {Object} Current breakpoint info
 * @example
 * const { isMobile, isTablet, isDesktop, breakpoint } = useResponsive();
 */
export const useResponsive = () => {
  const [breakpoint, setBreakpoint] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width <= BREAKPOINTS.mobile) {
        setBreakpoint('mobile');
      } else if (width <= BREAKPOINTS.tablet) {
        setBreakpoint('tablet');
      } else if (width <= BREAKPOINTS.desktop) {
        setBreakpoint('desktop');
      } else {
        setBreakpoint('wide');
      }
    };

    // Set initial breakpoint
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isMobile: breakpoint === 'mobile',
    isTablet: breakpoint === 'tablet',
    isDesktop: breakpoint === 'desktop',
    isWide: breakpoint === 'wide',
    breakpoint,
  };
};

export default useResponsive;
