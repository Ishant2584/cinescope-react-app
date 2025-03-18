export const getListItemIcon = (_theme) => {
  //const { palette } = theme;
  return {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
          minWidth: 32,
          '&.Mui-selected': {
            fontWeight: 'bold',
          },
        },
      },
    },
  };
};
