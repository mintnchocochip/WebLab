import React from 'react'

const InternalStyledButton = ({ children }) => {
  // Internal styling using a style tag within the component
  return (
    <>
      <style>
        {`
          .internal-styled-button {
            background-color: #10b981;
            color: white;
            padding: 12px 24px;
            font-size: 16px;
            font-weight: bold;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          
          .internal-styled-button:hover {
            background-color: #059669;
          }
        `}
      </style>
      <button className="internal-styled-button">
        {children}
      </button>
    </>
  )
}

export default InternalStyledButton