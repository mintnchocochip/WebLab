// import React, { useState, createContext, useContext } from "react";

// const ThemeContext = createContext();

// export const useTheme = () => useContext(ThemeContext);

// export const ThemeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const toggleThemeMode = () => setIsDarkMode((prevMode) => !prevMode);

//   return (
//     <ThemeContext.Provider value={{ isDarkMode, toggleThemeMode }}>
//       <div
//         style={{
//           backgroundColor: isDarkMode ? "#121212" : "#ffffff",
//           color: isDarkMode ? "#ffffff" : "#000000",
//           minHeight: "100vh",
//           transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
//         }}
//       >
//         {children}
//       </div>
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeProvider;

import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    background: theme === "light" ? "#eee" : "#333",
    color: theme === "light" ? "#333" : "#eee",
    padding: "20px",
    textAlign: "center",
  };

  return (
    <div style={style}>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};