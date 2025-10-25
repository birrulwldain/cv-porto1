/**
 * @file shared/utils/validationUtils.js
 * @description Utility functions untuk input validation
 */

/**
 * Validate if value is empty or whitespace only
 * @param {any} value - Value to check
 * @returns {boolean} True if empty
 */
export const isEmpty = (value) => {
  return !value || (typeof value === 'string' && value.trim() === '');
};

/**
 * Validate if value is valid URL
 * @param {string} url - URL string to validate
 * @returns {boolean} True if valid URL
 */
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Validate if value is valid email
 * @param {string} email - Email string to validate
 * @returns {boolean} True if valid email
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate component props
 * @param {Object} props - Component props
 * @param {Object} schema - Validation schema
 * @returns {Object} Validation errors
 */
export const validateProps = (props, schema) => {
  const errors = {};
  
  Object.entries(schema).forEach(([key, validator]) => {
    if (validator(props[key]) === false) {
      errors[key] = `Invalid value for prop: ${key}`;
    }
  });
  
  return errors;
};
