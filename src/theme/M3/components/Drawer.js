export const getDrawer = (theme) => {
  const { palette } = theme;
  return {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: '0px',
          background: palette.surfaceContainer.main,
          color: palette.onSurfaceVariant.main,
        },
      },
    },
  };
};
