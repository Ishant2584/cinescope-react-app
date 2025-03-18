import { StateLayer, getStateLayerColor } from '../utils/getStayeLayerColor';

export const getToggleButtonGroup = (theme) => {
  const { palette } = theme;
  return {
    MuiToggleButtonGroup: {
      styleOverrides: {
        grouped: {
          borderRadius: '50px',
          borderColor: palette.outline.main,
          '&:not(:first-of-type)': {
            marginLeft: 0,
            borderLeft: 0,
          },
          '&:hover': {
            background: getStateLayerColor(
              StateLayer.Hover,
              palette.surface.main,
              palette.primary.main
            ),
          },
          '&.Mui-selected:hover': {
            background: getStateLayerColor(
              StateLayer.Hover,
              palette.secondaryContainer.main,
              palette.onSecondaryContainer.main
            ),
          },
        },
      },
    },
  };
};
