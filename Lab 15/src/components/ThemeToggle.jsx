import React from 'react'
import { useTheme } from '../context/ThemeContext'

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>9. Context Hooks (useContext)</h3>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  )
}

export default ThemeToggler