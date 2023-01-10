import { useState } from "react";
import themeContext from "../context/themeContext";
const ThemeState = (props) => {

  // dark mode by default
  let darkModeDefault = false;
  if (window.matchMedia) {
    darkModeDefault = !window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  const [darkMode, setDarkMode] = useState(darkModeDefault);
  return (
    <themeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {props.children}
    </themeContext.Provider>
  );
};

export default ThemeState;
