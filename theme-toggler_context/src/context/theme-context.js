import { createContext, useContext, useEffect, useState } from "react";

export const Themecontext = createContext("");

const useTheme = () => {
  return useContext(Themecontext);
};
const ThemeProvider = ({ children }) => {
  const [isdarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };
  const theme = isdarkMode ? "dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isdarkMode]);

  return (
    <Themecontext.Provider
      value={{
        isdarkMode,
        toggleTheme,
      }}
    >
      {children}
    </Themecontext.Provider>
  );
};

export default ThemeProvider;
