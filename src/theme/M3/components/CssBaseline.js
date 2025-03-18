export const getCssBaseline = (_theme) => {
  return {
    MuiCssBaseline: {
      defaultProps: {
        enableColorScheme: true,
      },
      styleOverrides: {
        '*::-webkit-scrollbar': {
          display: 'none',
        },
      },
    },
  };
};
