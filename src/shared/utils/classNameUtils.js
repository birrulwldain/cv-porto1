/**
 * @file shared/utils/classNameUtils.js
 * @description Utility functions untuk class name management
 */

/**
 * Merge multiple class names, filtering out falsy values
 * @param {...any} classes - Class names atau conditions
 * @returns {string} Merged class names
 * @example
 * cx('btn', isActive && 'btn--active', size && `btn--${size}`)
 * // => 'btn btn--active btn--lg'
 */
export const cx = (...classes) => {
  return classes
    .flat()
    .filter(Boolean)
    .join(' ');
};

/**
 * Create BEM class names
 * @param {string} block - Block name
 * @param {string|null} element - Element name
 * @param {string|null} modifier - Modifier name
 * @returns {string} BEM formatted class name
 * @example
 * bem('button', 'icon', 'primary')
 * // => 'button__icon--primary'
 */
export const bem = (block, element = null, modifier = null) => {
  let className = block;
  
  if (element) {
    className += `__${element}`;
  }
  
  if (modifier) {
    className += `--${modifier}`;
  }
  
  return className;
};

/**
 * Create responsive class names based on breakpoint
 * @param {string} baseClass - Base class name
 * @param {string} breakpoint - Breakpoint (mobile, tablet, desktop)
 * @returns {string} Responsive class name
 * @example
 * responsive('container', 'mobile')
 * // => 'container--mobile'
 */
export const responsive = (baseClass, breakpoint) => {
  return `${baseClass}--${breakpoint}`;
};
