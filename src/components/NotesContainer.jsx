import React from 'react';
import './NotesContainer.css';

function NotesContainer({ notes, onOpenNote, onCloseNote, openNoteIds }) {
  const containerRef = React.useRef(null);

  // Auto-scroll ke pane terakhir ketika ada note baru
  React.useEffect(() => {
    if (containerRef.current && openNoteIds.length > 0) {
      setTimeout(() => {
        containerRef.current.scrollLeft = containerRef.current.scrollWidth;
      }, 100);
    }
  }, [openNoteIds.length]);

  const handleCloseNote = (noteId) => {
    onCloseNote(noteId);
  };

  const handleWikilinkClick = (linkedNoteId) => {
    onOpenNote(linkedNoteId);
  };

  return (
    <div className="notes-container">
      {/* Status bar */}
      <div className="notes-status-bar">
        <div className="status-left">
          <span className="status-label">Open Notes:</span>
          <span className="status-count">{openNoteIds.length}</span>
        </div>
        <div className="status-right">
          <button 
            className="btn-close-all"
            onClick={() => {
              openNoteIds.forEach(id => onCloseNote(id));
            }}
            disabled={openNoteIds.length === 0}
          >
            Close All
          </button>
        </div>
      </div>

      {/* Panes container */}
      <div className="panes-scroll-container" ref={containerRef}>
        <div className="panes-wrapper">
          {openNoteIds.map((noteId, index) => {
            const note = notes[noteId];
            if (!note) return null;

            return (
              <div key={noteId} className="pane-item">
                <div className="note-pane">
                  {/* Header */}
                  <div className="note-pane-header">
                    <h3 className="note-pane-title">{note.title}</h3>
                    <button 
                      className="note-pane-close"
                      onClick={() => handleCloseNote(noteId)}
                      aria-label="Close note"
                      title="Close this note and all to the right"
                    >
                      ×
                    </button>
                  </div>

                  {/* Content */}
                  <div className="note-pane-content">
                    {note.content}
                  </div>

                  {/* Links */}
                  {note.links && note.links.length > 0 && (
                    <div className="note-pane-links">
                      <div className="links-label">Related:</div>
                      <div className="links-list">
                        {note.links.map(linkId => (
                          <button
                            key={linkId}
                            className="wikilink"
                            onClick={() => handleWikilinkClick(linkId)}
                          >
                            [[{notes[linkId]?.title || linkId}]]
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Footer */}
                  <div className="note-pane-footer">
                    <span className="note-id">{noteId}</span>
                    <span className="note-position">({index + 1}/{openNoteIds.length})</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Empty state */}
      {openNoteIds.length === 0 && (
        <div className="empty-state">
          <div className="empty-state-content">
            <h2>Digital Garden</h2>
            <p>Buka catatan dari sidebar untuk memulai</p>
            <p style={{ fontSize: '0.85rem', color: '#999', marginTop: '1rem' }}>
              💡 Tip: Klik tautan untuk membuka catatan di panel baru
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotesContainer;
