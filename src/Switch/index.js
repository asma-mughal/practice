import "./Styles.css";
import { useTheme } from "../ThemeContext";
import { useState } from "react";

const Switch = () => {
  const { theme, toggle } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
          checked={theme === "light"}
           onChange={toggle}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
