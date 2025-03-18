export const getTooltip = (theme) => {
  const { palette } = theme;
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: palette.inverseSurface.main,
          color: palette.inverseOnSurface.main,
        },
      },
    },
  };
};
