// Simple markdown renderer for typography hierarchy
export const renderMarkdownContent = (text) => {
  const lines = text.split('\n');
  return lines.map((line, idx) => {
    // H1 - # 
    if (line.startsWith('# ')) {
      return { type: 'h1', content: line.slice(2), key: idx };
    }
    // H2 - ##
    if (line.startsWith('## ')) {
      return { type: 'h2', content: line.slice(3), key: idx };
    }
    // H3 - ###
    if (line.startsWith('### ')) {
      return { type: 'h3', content: line.slice(4), key: idx };
    }
    // H4 - ####
    if (line.startsWith('#### ')) {
      return { type: 'h4', content: line.slice(5), key: idx };
    }
    // Horizontal rule - ---
    if (line.trim() === '---') {
      return { type: 'hr', key: idx };
    }
    // Bullet points - •
    if (line.startsWith('•')) {
      return { type: 'bullet', content: line.slice(1).trim(), key: idx };
    }
    // Ordered list - 1., 2., etc
    if (line.match(/^\d+\./)) {
      return { type: 'ordered', content: line, key: idx };
    }
    // Dashes list - -
    if (line.startsWith('- ')) {
      return { type: 'dash', content: line.slice(2), key: idx };
    }
    // Empty line
    if (line.trim() === '') {
      return { type: 'spacer', key: idx };
    }
    // Regular paragraph
    return { type: 'p', content: line, key: idx };
  });
};

// Render JSX from markdown objects
export const renderMarkdownAsJSX = (markdownObjects) => {
  return markdownObjects.map((item) => {
    const key = item.key;
    
    switch (item.type) {
      case 'h1':
        return <h1 key={key} className="md-h1">{item.content}</h1>;
      case 'h2':
        return <h2 key={key} className="md-h2">{item.content}</h2>;
      case 'h3':
        return <h3 key={key} className="md-h3">{item.content}</h3>;
      case 'h4':
        return <h4 key={key} className="md-h4">{item.content}</h4>;
      case 'hr':
        return <hr key={key} className="md-hr" />;
      case 'bullet':
        return <div key={key} className="md-bullet">{item.content}</div>;
      case 'ordered':
        return <div key={key} className="md-ordered">{item.content}</div>;
      case 'dash':
        return <div key={key} className="md-dash">{item.content}</div>;
      case 'spacer':
        return <div key={key} className="md-spacer"></div>;
      case 'p':
        return <p key={key} className="md-p">{item.content}</p>;
      default:
        return null;
    }
  });
};
