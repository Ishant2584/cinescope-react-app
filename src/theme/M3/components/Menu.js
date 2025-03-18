export const getMenu = (theme) => {
  const { palette } = theme;
  return {
    MuiMenu: {
      defaultProps: { color: 'default' },
      styleOverrides: {
        root: {},
        paper: {
          backgroundColor: palette.surfaceContainerLow.main,
          boxShadow: theme.shadows[3],
          color: palette.onSurface.main,
        },
      },
    },
  };
};
