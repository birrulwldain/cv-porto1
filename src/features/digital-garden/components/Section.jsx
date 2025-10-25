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
      {/* Header dengan logo dan foto untuk section pertama */}
      {sectionId === 0 && (
        <div className="section-header">
          <div className="section-header__logo">
            <svg viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg" width="60" height="25">
              <g fill="#333333">
                {/* First line: birrul */}
                <circle cx="2" cy="2" r="1.2"/>
                <circle cx="2" cy="5" r="1.2"/>
                <circle cx="2" cy="8" r="1.2"/>
                <circle cx="2" cy="11" r="1.2"/>
                <circle cx="5" cy="2" r="1.2"/>
                <circle cx="5" cy="8" r="1.2"/>
                <circle cx="8" cy="2" r="1.2"/>
                <circle cx="8" cy="5" r="1.2"/>
                <circle cx="8" cy="8" r="1.2"/>
                <circle cx="14" cy="5" r="1.2"/>
                <circle cx="14" cy="8" r="1.2"/>
                <circle cx="14" cy="11" r="1.2"/>
                <circle cx="20" cy="2" r="1.2"/>
                <circle cx="20" cy="5" r="1.2"/>
                <circle cx="20" cy="8" r="1.2"/>
                <circle cx="20" cy="11" r="1.2"/>
                <circle cx="23" cy="2" r="1.2"/>
                <circle cx="23" cy="8" r="1.2"/>
                <circle cx="26" cy="2" r="1.2"/>
                <circle cx="26" cy="5" r="1.2"/>
                <circle cx="32" cy="2" r="1.2"/>
                <circle cx="32" cy="5" r="1.2"/>
                <circle cx="32" cy="8" r="1.2"/>
                <circle cx="32" cy="11" r="1.2"/>
                <circle cx="35" cy="2" r="1.2"/>
                <circle cx="35" cy="8" r="1.2"/>
                <circle cx="38" cy="2" r="1.2"/>
                <circle cx="38" cy="5" r="1.2"/>
                <circle cx="44" cy="2" r="1.2"/>
                <circle cx="44" cy="5" r="1.2"/>
                <circle cx="44" cy="8" r="1.2"/>
                <circle cx="47" cy="8" r="1.2"/>
                <circle cx="50" cy="2" r="1.2"/>
                <circle cx="50" cy="5" r="1.2"/>
                <circle cx="50" cy="8" r="1.2"/>
                <circle cx="56" cy="2" r="1.2"/>
                <circle cx="56" cy="5" r="1.2"/>
                <circle cx="56" cy="8" r="1.2"/>
                <circle cx="56" cy="11" r="1.2"/>
              </g>
              <g fill="#333333" transform="translate(0, 14)">
                {/* Second line: wldain */}
                <circle cx="2" cy="2" r="1.2"/>
                <circle cx="2" cy="5" r="1.2"/>
                <circle cx="2" cy="8" r="1.2"/>
                <circle cx="5" cy="8" r="1.2"/>
                <circle cx="8" cy="5" r="1.2"/>
                <circle cx="11" cy="8" r="1.2"/>
                <circle cx="14" cy="2" r="1.2"/>
                <circle cx="14" cy="5" r="1.2"/>
                <circle cx="14" cy="8" r="1.2"/>
                <circle cx="20" cy="2" r="1.2"/>
                <circle cx="20" cy="5" r="1.2"/>
                <circle cx="20" cy="8" r="1.2"/>
                <circle cx="20" cy="11" r="1.2"/>
                <circle cx="26" cy="2" r="1.2"/>
                <circle cx="26" cy="5" r="1.2"/>
                <circle cx="26" cy="8" r="1.2"/>
                <circle cx="26" cy="11" r="1.2"/>
                <circle cx="29" cy="2" r="1.2"/>
                <circle cx="29" cy="8" r="1.2"/>
                <circle cx="32" cy="2" r="1.2"/>
                <circle cx="32" cy="5" r="1.2"/>
                <circle cx="32" cy="8" r="1.2"/>
                <circle cx="38" cy="2" r="1.2"/>
                <circle cx="38" cy="5" r="1.2"/>
                <circle cx="38" cy="8" r="1.2"/>
                <circle cx="41" cy="2" r="1.2"/>
                <circle cx="41" cy="5" r="1.2"/>
                <circle cx="44" cy="2" r="1.2"/>
                <circle cx="44" cy="5" r="1.2"/>
                <circle cx="44" cy="8" r="1.2"/>
                <circle cx="50" cy="5" r="1.2"/>
                <circle cx="50" cy="8" r="1.2"/>
                <circle cx="50" cy="11" r="1.2"/>
                <circle cx="56" cy="2" r="1.2"/>
                <circle cx="56" cy="5" r="1.2"/>
                <circle cx="56" cy="8" r="1.2"/>
                <circle cx="59" cy="2" r="1.2"/>
                <circle cx="62" cy="2" r="1.2"/>
                <circle cx="62" cy="5" r="1.2"/>
                <circle cx="62" cy="8" r="1.2"/>
              </g>
            </svg>
          </div>
          <div className="section-header__profile">
            <img 
              src="/profile.jpg" 
              alt="Birrul Walidain" 
              className="section-header__image"
            />
          </div>
        </div>
      )}
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
