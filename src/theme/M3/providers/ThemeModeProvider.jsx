import { createContext } from 'react';
import { useThemeMode } from '../hooks/useThemeMode';

export const ThemeModeContext = createContext({
  themeMode: 'light',
  toggleTheme: () => {},
  setThemeMode: () => {},
});

const ThemeModeProvider = ({ children }) => {
  const [themeMode, toggleTheme, setThemeMode] = useThemeMode();

  return (
    <ThemeModeContext.Provider value={{ themeMode, toggleTheme, setThemeMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
};

export default ThemeModeProvider;
