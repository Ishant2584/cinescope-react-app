export const getListItem = (_theme) => {
  //const { palette } = theme;
  return {
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingTop: 1,
          paddingBottom: 1,
          '& .MuiListItemButton-root': {
            paddingTop: 8,
            paddingBottom: 8,
          },
        },
      },
    },
  };
};
