import React from "react";
import { useTheme } from '../../context/ThemeContext';

const SectionHeading = ({ children, className = "" }) => {
     const { theme } = useTheme();
  return(
    <h2 className={`text-2xl font-bold mb-4 px-4 py-2 ${className}`} style={{
      background: theme.background,
      color: theme.color,
    }}>
    {children}
  </h2>
          )
}

export default SectionHeading;
