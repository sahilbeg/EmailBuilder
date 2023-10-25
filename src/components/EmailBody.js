import React, { useState, useRef, useEffect } from 'react';

const MyComponent = () => {
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef(null);
  const targetRef = useRef(null);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenuPosition({ x: e.clientX, y: e.clientY });
    setContextMenuVisible(true);
  };

  const handleDeleteClick = () => {
    // Handle delete action here
    if (targetRef.current) {
      targetRef.current.remove();
    }
    setContextMenuVisible(false);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setContextMenuVisible(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [setContextMenuVisible, menuRef]);

  return (
    <div onContextMenu={handleContextMenu} ref={targetRef}>
      <p>Right-click to open context menu</p>
      {contextMenuVisible && (
        <div
          ref={menuRef}
          style={{ position: 'absolute', left: contextMenuPosition.x, top: contextMenuPosition.y }}
        >
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
