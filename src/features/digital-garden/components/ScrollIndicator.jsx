/**
 * @file features/digital-garden/components/ScrollIndicator.jsx
 * @description Progress indicator for horizontal scrolling
 */

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/scroll-indicator.css';

/**
 * ScrollIndicator Component
 * @component
 * Displays a progress bar at the bottom showing scroll position
 * Auto-hides after inactivity
 */
const ScrollIndicator = ({ isVisible, progress }) => {
  return (
    <div className={`scroll-indicator ${isVisible ? 'scroll-indicator--active' : ''}`}>
      <div 
        className="scroll-indicator__progress"
        style={{ width: `${progress}%` }}
        aria-label={`Scroll progress: ${Math.round(progress)}%`}
      />
    </div>
  );
};

ScrollIndicator.propTypes = {
  /** Whether indicator should be visible */
  isVisible: PropTypes.bool.isRequired,
  /** Scroll progress percentage (0-100) */
  progress: PropTypes.number.isRequired,
};

ScrollIndicator.defaultProps = {
  isVisible: false,
  progress: 0,
};

export default ScrollIndicator;
