import { createContext, useState } from "react";

export const ThemeContext = createContext("Theme");

export function ThemeProvider({ children }) {
  const [isDark, setisDark] = useState(
    JSON.parse(localStorage.getItem("IsDark"))
  );

  return (
    <ThemeContext.Provider value={[isDark, setisDark]}>
      {children}
    </ThemeContext.Provider>
  );
}
