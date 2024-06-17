// ThemedButton.js
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemedButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
};

export default ThemedButton;
