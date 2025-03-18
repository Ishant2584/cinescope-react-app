import ThemeModeProvider from './providers/ThemeModeProvider';
import ThemeSchemeProvider from './providers/ThemeSchemeProvider';
import M3Theme from './wrapper/M3Theme';

const M3 = ({ children }) => {
  return (
    // ThemeModeProvider -> ThemeSchemeProvider
    <ThemeModeProvider>
      <ThemeSchemeProvider>
        <M3Theme>{children}</M3Theme>
      </ThemeSchemeProvider>
    </ThemeModeProvider>
  );
};

export default M3;
