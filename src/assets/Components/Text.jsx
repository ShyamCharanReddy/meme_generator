import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import { FaTimesCircle } from 'react-icons/fa'; // Import the icon

// Accept the new id and onRemove props
const Text = ({ id, color, onRemove }) => {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double Click to Edit");
  const nodeRef = useRef(null);

  return (
    <Draggable bounds="parent" nodeRef={nodeRef} defaultPosition={{ x: 100, y: 100 }}>
      <div 
        ref={nodeRef} 
        style={{ 
          display: 'inline-block', 
          cursor: 'grab', 
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 100,
          padding: '10px' // Increased padding slightly to make room for the button
        }}
      > 
        {/* The Delete Button (Hidden from html2canvas!) */}
        <div 
          data-html2canvas-ignore="true" 
          onClick={() => onRemove(id)}
          title="Remove text"
          style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            cursor: 'pointer',
            color: '#ff4d4d', // Bright red
            backgroundColor: '#fff', // White circle behind it
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            zIndex: 101,
            boxShadow: '0 2px 5px rgba(0,0,0,0.5)'
          }}
        >
          <FaTimesCircle />
        </div>

        {editMode ? (
          <input
            onBlur={() => setEditMode(false)}
            value={val}
            onChange={(e) => setVal(e.target.value)}
            autoFocus
            style={{
              background: "rgba(0,0,0,0.7)",
              border: "2px dashed #00d4ff",
              color: color || "#ffffff",
              fontSize: "1.8rem",
              fontWeight: "900",
              textAlign: "center",
              outline: "none",
              borderRadius: "8px",
              padding: "5px 10px",
              minWidth: "150px" // Prevents input from collapsing if empty
            }}
          />
        ) : (
          <h1
            onDoubleClick={() => setEditMode(true)}
            style={{
              color: color || "#ffffff",
              margin: 0,
              fontSize: "1.8rem",
              fontWeight: "900",
              textShadow: "2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
              userSelect: "none",
              whiteSpace: "nowrap"
            }}
          >
            {val}
          </h1>
        )}
      </div>
    </Draggable>
  );
};

export default Text;