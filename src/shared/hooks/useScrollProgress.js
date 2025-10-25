/**
 * @file shared/hooks/useScrollProgress.js
 * @description Hook untuk track scroll progress dengan auto-hide
 */

import { useState, useRef, useCallback, useEffect } from 'react';
import { calculateScrollProgress } from '../utils/scrollUtils';
import { SCROLL } from '../constants';

/**
 * Custom hook untuk manage scroll progress dan visibility
 * @param {number} hideDelay - Delay sebelum indicator hilang (ms)
 * @returns {Object} Scroll state dan handlers
 */
export const useScrollProgress = (hideDelay = SCROLL.hideDelay) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timeoutRef = useRef(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleScroll = useCallback((event) => {
    const element = event.target;
    const progress = calculateScrollProgress(element);
    
    setScrollProgress(progress);
    setIsScrolling(true);

    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Auto-hide after delay
    timeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, hideDelay);
  }, [hideDelay]);

  return {
    isScrolling,
    scrollProgress,
    handleScroll,
  };
};

export default useScrollProgress;
