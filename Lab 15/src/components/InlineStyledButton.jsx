import React from 'react'

const InlineStyledButton = ({ children }) => {
  // Inline CSS styling defined as a JavaScript object
  const buttonStyle = {
    backgroundColor: '#4f46e5',
    color: 'white',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }

  const hoverStyle = {
    backgroundColor: '#3730a3',
  }

  return (
    <button 
      style={buttonStyle}
      onMouseOver={(e) => {
        Object.assign(e.target.style, hoverStyle);
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = buttonStyle.backgroundColor;
      }}
    >
      {children}
    </button>
  )
}

export default InlineStyledButton