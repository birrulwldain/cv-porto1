/**
 * @file features/digital-garden/components/Section.jsx
 * @description Individual section component dalam Digital Garden
 */

import React from 'react';
import PropTypes from 'prop-types';
import { markdownToJSX } from '../../../shared/utils/markdownRenderer.jsx';
import '../styles/digital-garden-container.css';

/**
 * Section Component
 * @component
 * Represents one scrollable section dalam Digital Garden
 */
const Section = ({ 
  sectionId, 
  content, 
  notes = [], 
  onNoteOpen,
  onNoteClose,
  sampleNotes = {}
}) => {
  const hasNotes = notes.length > 0;
  const markdownJSX = markdownToJSX(content);

  return (
    <div className="digital-garden__section">
      <div className="digital-garden__scroll-area">
        {!hasNotes ? (
          <div className="digital-garden__empty-state">
            {markdownJSX}
          </div>
        ) : (
          <div className="digital-garden__notes-stack">
            {notes.map((noteId) => {
              const note = sampleNotes[noteId];
              if (!note) return null;

              return (
                <article key={noteId} className="note-card">
                  <header className="note-card__header">
                    <h3 className="note-card__title">{note.title}</h3>
                    <button
                      className="note-card__close"
                      onClick={() => onNoteClose(sectionId, noteId)}
                      aria-label={`Close note: ${note.title}`}
                    >
                      ✕
                    </button>
                  </header>

                  <div className="note-card__content">
                    {note.content}
                  </div>

                  {note.links && note.links.length > 0 && (
                    <footer className="note-card__links">
                      {note.links.map((linkId) => (
                        <button
                          key={linkId}
                          className="note-card__link"
                          onClick={() => onNoteOpen(sectionId, linkId)}
                          title={sampleNotes[linkId]?.title}
                        >
                          → {sampleNotes[linkId]?.title.substring(0, 15)}
                        </button>
                      ))}
                    </footer>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

Section.propTypes = {
  /** Section identifier */
  sectionId: PropTypes.number.isRequired,
  /** Markdown content untuk section */
  content: PropTypes.string.isRequired,
  /** Array of open note IDs */
  notes: PropTypes.arrayOf(PropTypes.string),
  /** Callback untuk open note */
  onNoteOpen: PropTypes.func.isRequired,
  /** Callback untuk close note */
  onNoteClose: PropTypes.func.isRequired,
  /** Sample notes data */
  sampleNotes: PropTypes.object,
};

Section.defaultProps = {
  notes: [],
  sampleNotes: {},
};

export default Section;
