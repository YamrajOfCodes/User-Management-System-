import React from "react";
import { useTheme } from '../../context/ThemeContext';

const SectionHeading = ({ children, className = "" }) => {
     const { theme } = useTheme();
  return(
    <h2 className={`text-lg sm:text-2xl font-bold mb-4 px-4 ${className}`} style={{
      background: theme.background,
      color: theme.color,
    }}>
    {children}
  </h2>
          )
}

export default SectionHeading;
