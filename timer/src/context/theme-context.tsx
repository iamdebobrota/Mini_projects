import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface ThemeContextProps {
  isdarkMode: boolean;
  toggleTheme: (p: string) => typeof p ;
}

export const Themecontext = createContext<ThemeContextProps>({
  isdarkMode: false,
  toggleTheme: (p) => {return p},
} as { isdarkMode: boolean; toggleTheme: (p:string) => typeof p });

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isdarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme: any = () => {
    setIsDarkMode((prev) => !prev);
  };
  const theme: string = isdarkMode ? "dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isdarkMode]);

  const val: ThemeContextProps = {
    isdarkMode,
    toggleTheme,
  };
  return <Themecontext.Provider value={val}>{children}</Themecontext.Provider>;
};

export default ThemeProvider;
