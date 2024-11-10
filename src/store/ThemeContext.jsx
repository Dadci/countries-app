// ThemeContext.js
import React, { createContext, useContext } from 'react';
import { useSelector } from 'react-redux';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const darkMode = useSelector(state => state.theme.darkMode);

  return (
    <ThemeContext.Provider value={darkMode}>
      <div className={darkMode ? 'dark' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);