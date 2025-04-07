import React from 'react'
import '../styles/ExternalStyledButton.css'

const ExternalStyledButton = ({ children }) => {
  // Using external CSS by importing the stylesheet
  return (
    <button className="external-styled-button">
      {children}
    </button>
  )
}

export default ExternalStyledButton