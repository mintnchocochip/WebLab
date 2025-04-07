import React, { createContext, useState, useContext } from 'react'

// Create a context with a default value
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
})

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }
  
  // Apply theme class to the body
  React.useEffect(() => {
    document.body.className = theme
  }, [theme])
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app-container ${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext)