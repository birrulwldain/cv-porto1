/**
 * @file shared/utils/markdownRenderer.jsx
 * @description Professional markdown parsing utility dengan JSX rendering
 */

import React from 'react';
import { 
  parseHeadingLevel, 
  cleanHeadingText, 
  isMarkdownHeading,
  isMarkdownRule 
} from './markdownUtils';

/**
 * Parse markdown text ke structured objects
 * @param {string} text - Raw markdown text
 * @returns {Array<Object>} Parsed markdown objects
 */
export const parseMarkdown = (text) => {
  if (!text || typeof text !== 'string') return [];

  const lines = text.split('\n');
  const result = [];
  
  lines.forEach((line, idx) => {
    // Skip empty lines pada akhir
    if (line.trim() === '' && idx === lines.length - 1) return;

    // Heading detection
    if (isMarkdownHeading(line)) {
      const level = parseHeadingLevel(line);
      const content = cleanHeadingText(line);
      result.push({
        type: `h${level}`,
        content,
        key: `${line}-${idx}`,
      });
      return;
    }

    // Horizontal rule
    if (isMarkdownRule(line)) {
      result.push({
        type: 'hr',
        key: `hr-${idx}`,
      });
      return;
    }

    // List items - bullet points (• or -)
    if (line.startsWith('•') || line.match(/^\s*-\s+/)) {
      const content = line.replace(/^[•-]\s*/, '').trim();
      result.push({
        type: 'bullet',
        content,
        key: `bullet-${idx}`,
      });
      return;
    }

    // Ordered list
    if (line.match(/^\d+\.\s+/)) {
      result.push({
        type: 'ordered',
        content: line.trim(),
        key: `ordered-${idx}`,
      });
      return;
    }

    // Empty line - spacer
    if (line.trim() === '') {
      result.push({
        type: 'spacer',
        key: `spacer-${idx}`,
      });
      return;
    }

    // Regular paragraph
    result.push({
      type: 'p',
      content: line.trim(),
      key: `p-${idx}`,
    });
  });

  return result;
};

/**
 * Render markdown objects ke JSX components
 * @param {Array<Object>} markdownObjects - Parsed markdown objects
 * @returns {Array<React.ReactElement>} Rendered JSX elements
 */
export const renderMarkdownToJSX = (markdownObjects) => {
  if (!Array.isArray(markdownObjects)) return [];

  return markdownObjects.map((item) => {
    const { type, content, key } = item;

    switch (type) {
      case 'h1':
        return (
          <h1 key={key} className="md-h1">
            {content}
          </h1>
        );

      case 'h2':
        return (
          <h2 key={key} className="md-h2">
            {content}
          </h2>
        );

      case 'h3':
        return (
          <h3 key={key} className="md-h3">
            {content}
          </h3>
        );

      case 'h4':
        return (
          <h4 key={key} className="md-h4">
            {content}
          </h4>
        );

      case 'hr':
        return <hr key={key} className="md-hr" />;

      case 'bullet':
        return (
          <div key={key} className="md-bullet">
            {content}
          </div>
        );

      case 'ordered':
        return (
          <div key={key} className="md-ordered">
            {content}
          </div>
        );

      case 'spacer':
        return <div key={key} className="md-spacer" />;

      case 'p':
        return (
          <p key={key} className="md-p">
            {content}
          </p>
        );

      default:
        return null;
    }
  });
};

/**
 * Convenience function - parse dan render dalam satu step
 * @param {string} text - Raw markdown text
 * @returns {Array<React.ReactElement>} Rendered JSX elements
 */
export const markdownToJSX = (text) => {
  const parsed = parseMarkdown(text);
  return renderMarkdownToJSX(parsed);
};

export default {
  parseMarkdown,
  renderMarkdownToJSX,
  markdownToJSX,
};
