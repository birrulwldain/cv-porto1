/**
 * @file shared/utils/markdownUtils.js
 * @description Utility functions untuk markdown processing
 */

/**
 * Parse markdown heading level
 * @param {string} heading - Markdown heading (e.g., '### Title')
 * @returns {number} Heading level (1-6)
 */
export const parseHeadingLevel = (heading) => {
  const match = heading.match(/^#+/);
  return match ? match[0].length : 1;
};

/**
 * Extract heading text without markdown symbols
 * @param {string} heading - Markdown heading
 * @returns {string} Cleaned heading text
 */
export const cleanHeadingText = (heading) => {
  return heading.replace(/^#+\s*/, '').trim();
};

/**
 * Detect if line is markdown heading
 * @param {string} line - Text line
 * @returns {boolean} True if is heading
 */
export const isMarkdownHeading = (line) => {
  return /^#+\s+/.test(line);
};

/**
 * Detect if line is markdown list item
 * @param {string} line - Text line
 * @returns {boolean} True if is list item
 */
export const isMarkdownListItem = (line) => {
  return /^\s*[-*+]\s+/.test(line) || /^\s*\d+\.\s+/.test(line);
};

/**
 * Detect if line is markdown horizontal rule
 * @param {string} line - Text line
 * @returns {boolean} True if is horizontal rule
 */
export const isMarkdownRule = (line) => {
  return /^[-_*]{3,}$/.test(line.trim());
};
