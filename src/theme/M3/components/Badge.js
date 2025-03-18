export const getBadge = (theme) => {
  const { palette } = theme;
  return {
    MuiBadge: {
      defaultProps: { color: 'default' },
      variants: [
        {
          props: { color: 'default' },
          style: {
            '.MuiBadge-badge': {
              backgroundColor: palette.error.main,
              color: palette.onError.main,
            },
          },
        },
      ],
    },
  };
};
