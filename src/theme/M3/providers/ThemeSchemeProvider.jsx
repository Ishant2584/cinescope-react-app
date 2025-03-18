import { createContext, useLayoutEffect, useState } from 'react';
import { ThemeSchemeDefault } from '../types/ThemeScheme';
import { useTonalPalette } from '../hooks/useTonalPalette';
import { generateDesignTokens } from '../utils/generateTokens';

export const ThemeSchemeContext = createContext({
  generateScheme: () => {},
  themeScheme: ThemeSchemeDefault,
});

const ThemeSchemeProvider = ({ children }) => {
  const [tonalPalette, generatePalette] = useTonalPalette();
  const [themeScheme, setThemeScheme] = useState(ThemeSchemeDefault);

  useLayoutEffect(() => {
    const lightTokens = generateDesignTokens('light', tonalPalette);
    const darkTokens = generateDesignTokens('dark', tonalPalette);

    setThemeScheme({
      light: lightTokens,
      dark: darkTokens,
      tones: tonalPalette,
    });
  }, [tonalPalette]);

  const generateScheme = (hexColor) => {
    generatePalette(hexColor);
  };

  return (
    <ThemeSchemeContext.Provider value={{ generateScheme, themeScheme }}>
      {children}
    </ThemeSchemeContext.Provider>
  );
};

export default ThemeSchemeProvider;
