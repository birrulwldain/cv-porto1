/**
 * @file features/digital-garden/components/DigitalGardenContainer.jsx
 * @description Main container untuk Digital Garden dengan horizontal scroll
 */

import React, { useState, useRef } from 'react';
import { useScrollProgress } from '../../../shared/hooks';
import Section from './Section';
import ScrollIndicator from './ScrollIndicator';
import { SAMPLE_NOTES, SECTION_CONTENTS, INITIAL_OPEN_NOTES } from '../constants/notes';
import '../styles/digital-garden-container.css';

/**
 * DigitalGardenContainer Component
 * @component
 * Main container untuk Digital Garden dengan horizontal scroll
 */
const DigitalGardenContainer = () => {
  const [openNotes, setOpenNotes] = useState(INITIAL_OPEN_NOTES);
  const { isScrolling, scrollProgress, handleScroll } = useScrollProgress();
  const containerRef = useRef(null);

  /**
   * Handler untuk open note dalam section
   */
  const handleOpenNote = (sectionId, noteId) => {
    setOpenNotes((prev) => ({
      ...prev,
      [sectionId]: [...new Set([...prev[sectionId], noteId])]
    }));
  };

  /**
   * Handler untuk close note dalam section
   */
  const handleCloseNote = (sectionId, noteId) => {
    setOpenNotes((prev) => ({
      ...prev,
      [sectionId]: prev[sectionId].filter((id) => id !== noteId)
    }));
  };

  const sections = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="digital-garden-wrapper">
      <div 
        className="digital-garden-container"
        ref={containerRef}
        onScroll={handleScroll}
      >
        {sections.map((sectionId) => (
          <Section
            key={sectionId}
            sectionId={sectionId}
            content={SECTION_CONTENTS[sectionId] || ''}
            notes={openNotes[sectionId] || []}
            onNoteOpen={handleOpenNote}
            onNoteClose={handleCloseNote}
            sampleNotes={SAMPLE_NOTES}
          />
        ))}

        <ScrollIndicator isVisible={isScrolling} progress={scrollProgress} />
      </div>
    </div>
  );
};

export default DigitalGardenContainer;
