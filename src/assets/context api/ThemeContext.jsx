import React, { Children, useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ Children }) => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={theme}>{Children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
