import React from 'react';
import './NotePane.css';

function NotePane({ 
  id, 
  title, 
  content, 
  onClose, 
  isActive = false 
}) {
  return (
    <div className={`note-pane ${isActive ? 'active' : ''}`}>
      {/* Header dengan tombol close */}
      <div className="note-pane-header">
        <h3 className="note-pane-title">{title}</h3>
        <button 
          className="note-pane-close"
          onClick={() => onClose(id)}
          aria-label="Close note"
          title="Close this note and all to the right"
        >
          ×
        </button>
      </div>

      {/* Content area */}
      <div className="note-pane-content">
        {typeof content === 'string' ? (
          <p>{content}</p>
        ) : (
          content
        )}
      </div>

      {/* Footer optional */}
      <div className="note-pane-footer">
        <span className="note-id">{id}</span>
      </div>
    </div>
  );
}

export default NotePane;
