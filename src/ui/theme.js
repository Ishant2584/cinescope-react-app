import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
    unit: 'px',
  },
  direction: 'ltr',
  components: {
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
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow:
            '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
          border: '0px solid #404943',
          color: '#e1e3df',
          backgroundColor: '#373a37',
          '&:before': {
            backgroundColor: '#373a37',
            display: 'none',
          },
          '&.Mui-disabled': {
            backgroundColor: '#2e312e',
            color: '#e1e3df',
            border: '0px solid #404943',
          },
          '& .MuiAccordionSummary-root > .MuiAccordionSummary-expandIconWrapper ':
            {
              color: '#e1e3df',
            },
        },
      },
    },
    MuiAlert: {
      defaultProps: {
        variant: 'standard',
      },
      styleOverrides: {
        root: {
          borderRadius: '20px',
        },
        standardError: {
          background: '#93000a',
          color: '#ffdad6',
        },
        standardInfo: {
          background: '#004d67',
          color: '#c2e8ff',
        },
        standardWarning: {
          background: '#5b4300',
          color: '#ffdf9f',
        },
        standardSuccess: {
          background: '#005227',
          color: '#92f8ab',
        },
        filledError: {
          background: '#ffb4ab',
          color: '#690005',
        },
        filledInfo: {
          background: '#75d1ff',
          color: '#003548',
        },
        filledWarning: {
          background: '#f8bd26',
          color: '#402d00',
        },
        filledSuccess: {
          background: '#76db91',
          color: '#003919',
        },
        outlinedError: {
          color: '#ffb4ab',
        },
        outlinedInfo: {
          color: '#75d1ff',
        },
        outlinedWarning: {
          color: '#f8bd26',
        },
        outlinedSuccess: {
          color: '#76db91',
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        color: '#fff',
      },
      styleOverrides: {
        colorDefault: {
          background: '#1d201e',
          color: '#e1e3df',
        },
        colorPrimary: {
          background: '#111412',
          color: '#e1e3df',
        },
      },
    },
    MuiBadge: {
      defaultProps: {
        color: '#fff',
      },
      variants: [
        {
          props: {
            color: '#fff',
          },
          style: {
            '.MuiBadge-badge': {
              backgroundColor: '#ffb4ab',
              color: '#690005',
            },
          },
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
          textTransform: 'none',
          fontWeight: 'bold',
          '&:has(>svg)': {
            padding: '8px',
            borderRadius: '50%',
            minWidth: '1em',
            minHeight: '1em',
          },
        },
      },
      variants: [
        {
          props: {
            variant: 'elevated',
          },
          style: {
            boxShadow:
              '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
            backgroundColor: '#191c1a',
            color: '#73daa4',
            '&:hover': {
              background: '#232a26',
              boxShadow:
                '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
            },
            '&:focus': {
              background: '#28302b',
            },
            '&:active': {
              background: '#28302b',
            },
            '&.Mui-disabled': {
              backgroundColor: 'rgba(225, 227, 223, 0.12)',
              color: 'rgba(225, 227, 223, 0.38)',
              boxShadow: 'none',
            },
          },
        },
        {
          props: {
            variant: 'filled',
          },
          style: {
            backgroundColor: '#73daa4',
            color: '#003822',
            boxShadow: 'none',
            '&.Mui-disabled': {
              backgroundColor: 'rgba(225, 227, 223, 0.12)',
              color: 'rgba(225, 227, 223, 0.38)',
              boxShadow: 'none',
            },
            '&:hover': {
              backgroundColor: '#69cb98',
              boxShadow:
                '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
            },
            '&:focus': {
              backgroundColor: '#65c492',
              boxShadow: 'none',
            },
            '&:active': {
              backgroundColor: '#65c492',
              boxShadow: 'none',
            },
          },
        },
        {
          props: {
            variant: 'tonal',
          },
          style: {
            backgroundColor: '#364b3e',
            color: '#d0e8d7',
            boxShadow: 'none',
            '&.Mui-disabled': {
              backgroundColor: 'rgba(225, 227, 223, 0.12)',
              color: 'rgba(225, 227, 223, 0.38)',
              boxShadow: 'none',
            },
            '&:hover': {
              backgroundColor: '#415649',
              boxShadow:
                '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
            },
            '&:focus': {
              backgroundColor: '#465c4e',
              boxShadow: 'none',
            },
            '&:active': {
              backgroundColor: '#465c4e',
              boxShadow: 'none',
            },
          },
        },
        {
          props: {
            variant: 'outlined',
          },
          style: {
            color: '#73daa4',
            borderColor: '#8a938b',
            borderWidth: '1px',
            boxShadow: 'none',
            '&.Mui-disabled': {
              borderColor: 'rgba(225, 227, 223, 0.12)',
              color: 'rgba(225, 227, 223, 0.38)',
            },
            '&:hover': {
              backgroundColor: '#1c231f',
              borderColor: '#8b988d',
            },
            '&:focus': {
              backgroundColor: '#222a25',
              borderColor: '#73daa4',
            },
            '&:active': {
              backgroundColor: '#222a25',
              borderColor: '#8b9a8f',
            },
          },
        },
        {
          props: {
            variant: 'text',
          },
          style: {
            backgroundColor: 'transparent',
            color: '#73daa4',
            boxShadow: 'none',
            padding: '5px 15px',
            '&.Mui-disabled': {
              color: 'rgba(225, 227, 223, 0.38)',
            },
            '&:hover': {
              backgroundColor: '#1c231f',
            },
            '&:focus': {
              backgroundColor: '#222a25',
            },
            '&:active': {
              backgroundColor: '#222a25',
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          padding: '10px 6px',
        },
      },
      variants: [
        {
          props: {
            variant: 'elevation',
          },
          style: {
            boxShadow:
              '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
            backgroundColor: '#191c1a',
            transition:
              'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            '&:hover': {
              background: '#232a26',
              boxShadow:
                '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
            },
            '&:focus': {
              boxShadow:
                '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
              background: '#28302b',
            },
            '&:active': {
              boxShadow:
                '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
              background: '#28302b',
            },
            '&.Mui-disabled': {
              backgroundColor: 'rgba(25, 28, 26, 0.38)',
              color: '#404943',
              boxShadow: 'none',
            },
          },
        },
        {
          props: {
            variant: 'filled',
          },
          style: {
            boxShadow: 'none',
            backgroundColor: '#323633',
            transition:
              'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            '&:hover': {
              background: '#3a413c',
              boxShadow:
                '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
            },
            '&:focus': {
              boxShadow: 'none',
              background: '#3e4741',
            },
            '&:active': {
              boxShadow:
                '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
              background: '#3e4741',
            },
            '&.Mui-disabled': {
              backgroundColor: 'rgba(50, 54, 51, 0.38)',
              color: '#404943',
              boxShadow:
                '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
            },
          },
        },
        {
          props: {
            variant: 'outlined',
          },
          style: {
            boxShadow: 'none',
            backgroundColor: '#111412',
            borderColor: '#8a938b',
            transition:
              'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            '&:hover': {
              background: '#1c231f',
              boxShadow:
                '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
            },
            '&:focus': {
              boxShadow: 'none',
              background: '#222a25',
            },
            '&:active': {
              boxShadow:
                '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
              background: '#3e4741',
            },
            '&.Mui-disabled': {
              borderColor: 'rgba(50, 54, 51, 0.12)',
              boxShadow: 'none',
            },
          },
        },
      ],
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: '0px',
          background: '#1d201e',
          color: '#c0c9c0',
        },
      },
    },
    MuiFab: {
      defaultProps: {
        color: 'secondary',
      },
      styleOverrides: {
        root: {
          boxShadow:
            '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
          borderRadius: '18px',
        },
      },
      variants: [
        {
          props: {
            color: 'primary',
          },
          style: {
            backgroundColor: '#005233',
            color: '#90f7bf',
            '&:hover': {
              background: '#105e3d',
              boxShadow:
                '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
            },
            '&:focus': {
              background: '#176342',
              boxShadow:
                '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
            },
            '&:active': {
              background: '#176342',
              boxShadow:
                '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
            },
          },
        },
        {
          props: {
            color: 'secondary',
          },
          style: {
            backgroundColor: '#364b3e',
            color: '#d0e8d7',
            '&:hover': {
              background: '#415649',
              boxShadow:
                '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
            },
            '&:focus': {
              background: '#465c4e',
              boxShadow:
                '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
            },
            '&:active': {
              background: '#465c4e',
              boxShadow:
                '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
            },
          },
        },
        {
          props: {
            color: 'surface',
          },
          style: {
            backgroundColor: '#1d201e',
            color: '#73daa4',
            '&:hover': {
              background: '#272d29',
              boxShadow:
                '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
            },
            '&:focus': {
              background: '#2c342f',
              boxShadow:
                '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
            },
            '&:active': {
              background: '#2c342f',
              boxShadow:
                '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
            },
          },
        },
        {
          props: {
            color: 'tertiary',
          },
          style: {
            backgroundColor: '#234c59',
            color: '#bfe9f9',
            '&:hover': {
              background: '#2f5764',
              boxShadow:
                '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
            },
            '&:focus': {
              background: '#355d6a',
              boxShadow:
                '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
            },
            '&:active': {
              background: '#355d6a',
              boxShadow:
                '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
            },
          },
        },
      ],
    },
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
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          color: '#c0c9c0',
          '&:hover': {
            backgroundColor: '#282b29',
            color: '#c3cbc2',
          },
          '&:active': {
            backgroundColor: '#2e322f',
            color: '#c4ccc4',
          },
          '&.Mui-selected': {
            color: '#d0e8d7',
            background: '#364b3e',
            '& > .MuiListItemText-root > .MuiTypography-root': {
              fontWeight: 'bold',
            },
            '&:hover': {
              backgroundColor: '#415649',
              color: '#c1d9c8',
            },
            '&:active': {
              backgroundColor: '#465c4e',
              color: '#bad2c1',
            },
          },
        },
      },
    },
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
    MuiMenu: {
      defaultProps: {
        color: '#fff',
      },
      styleOverrides: {
        root: {},
        paper: {
          backgroundColor: '#191c1a',
          boxShadow:
            '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
          color: '#e1e3df',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 42,
          height: 26,
          padding: 0,
          marginLeft: 12,
          marginRight: 8,
          borderColor: '#8a938b',
          '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 7,
            transitionDuration: '100ms',
            '&.Mui-checked': {
              transform: 'translateX(16px)',
              margin: 4,
              '& + .MuiSwitch-track': {
                backgroundColor: '#73daa4',
                opacity: 1,
                border: 0,
              },
              '& .MuiSwitch-thumb': {
                color: '#003822',
                width: 18,
                height: 18,
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                backgroundColor: 'rgba(225, 227, 223, 0.1)',
              },
              '&.Mui-disabled .MuiSwitch-thumb': {
                color: 'rgba(17, 20, 18, 0.8)',
              },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
              color: '#73daa4',
              border: '6px solid #003822',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
              color: 'rgba(225, 227, 223, 0.3)',
            },
          },
          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            color: '#8a938b',
            width: 12,
            height: 12,
            '&:before': {
              content: "''",
              position: 'absolute',
              width: '100%',
              height: '100%',
              left: 0,
              top: 0,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            },
          },
          '& .MuiSwitch-track': {
            borderRadius: 20,
            border: '2px solid #8a938b',
            backgroundColor: '#323633',
            opacity: 1,
            transition: 'background .2s',
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'none',
          color: '#e1e3df',
          '&.Mui-selected': {
            color: '#d0e8d7',
            backgroundColor: '#364b3e',
          },
          '&.MuiToggleButton-primary': {
            borderColor: 'transparent',
          },
          '&.MuiToggleButton-primary.Mui-selected': {
            color: '#003822',
            backgroundColor: '#73daa4',
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        grouped: {
          borderRadius: '50px',
          borderColor: '#8a938b',
          '&:not(:first-of-type)': {
            marginLeft: 0,
            borderLeft: 0,
          },
          '&:hover': {
            background: '#1c231f',
          },
          '&.Mui-selected:hover': {
            background: '#415649',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: '#e1e3df',
          color: '#2e312e',
        },
      },
    },
  },
  palette: {
    mode: 'light',
    themeMode: 'dark',
    primary: {
      main: '#73daa4',
      contrastText: '#003822',
      light: 'rgb(143, 225, 182)',
      dark: 'rgb(80, 152, 114)',
    },
    onPrimary: {
      main: '#003822',
      contrastText: '#73daa4',
    },
    primaryContainer: {
      main: '#005233',
      contrastText: '#90f7bf',
    },
    onPrimaryContainer: {
      main: '#90f7bf',
      contrastText: '#005233',
    },
    secondary: {
      main: '#b4ccbb',
      contrastText: '#203529',
      light: 'rgb(195, 214, 200)',
      dark: 'rgb(125, 142, 130)',
    },
    onSecondary: {
      main: '#203529',
      contrastText: '#b4ccbb',
    },
    secondaryContainer: {
      main: '#364b3e',
      contrastText: '#d0e8d7',
    },
    onSecondaryContainer: {
      main: '#d0e8d7',
      contrastText: '#364b3e',
    },
    tertiary: {
      main: '#a4cddd',
      contrastText: '#043542',
    },
    onTertiary: {
      main: '#043542',
      contrastText: '#a4cddd',
    },
    tertiaryContainer: {
      main: '#234c59',
      contrastText: '#bfe9f9',
    },
    onTertiaryContainer: {
      main: '#bfe9f9',
      contrastText: '#234c59',
    },
    error: {
      main: '#ffb4ab',
      contrastText: '#690005',
      light: 'rgb(255, 195, 187)',
      dark: 'rgb(178, 125, 119)',
    },
    onError: {
      main: '#690005',
      contrastText: '#ffb4ab',
    },
    errorContainer: {
      main: '#93000a',
      contrastText: '#ffdad6',
    },
    onErrorContainer: {
      main: '#ffdad6',
      contrastText: '#93000a',
    },
    primaryFixed: {
      main: '#90f7bf',
    },
    primaryFixedDim: {
      main: '#73daa4',
    },
    onPrimaryFixed: {
      main: '#002112',
    },
    onPrimaryFixedVariant: {
      main: '#005233',
    },
    secondaryFixed: {
      main: '#d0e8d7',
    },
    secondaryFixedDim: {
      main: '#b4ccbb',
    },
    onSecondaryFixed: {
      main: '#0b1f15',
    },
    onSecondaryFixedVariant: {
      main: '#364b3e',
    },
    tertiaryFixed: {
      main: '#bfe9f9',
    },
    tertiaryFixedDim: {
      main: '#a4cddd',
    },
    onTertiaryFixed: {
      main: '#001f28',
    },
    onTertiaryFixedVariant: {
      main: '#234c59',
    },
    surface: {
      main: '#111412',
      contrastText: '#e1e3df',
    },
    onSurface: {
      main: '#e1e3df',
      contrastText: '#111412',
    },
    surfaceDim: {
      main: '#111412',
    },
    surfaceBright: {
      main: '#373a37',
    },
    surfaceContainerLowest: {
      main: '#0c0f0d',
    },
    surfaceContainerLow: {
      main: '#191c1a',
    },
    surfaceContainer: {
      main: '#1d201e',
    },
    surfaceContainerHigh: {
      main: '#282b28',
    },
    surfaceContainerHighest: {
      main: '#323633',
    },
    surfaceVariant: {
      main: '#404943',
      contrastText: '#c0c9c0',
    },
    onSurfaceVariant: {
      main: '#c0c9c0',
      contrastText: '#404943',
    },
    outline: {
      main: '#8a938b',
    },
    outlineVariant: {
      main: '#404943',
    },
    inversePrimary: {
      main: '#006c45',
      contrastText: '',
    },
    inverseOnPrimary: {
      main: '#006c45',
      contrastText: '#006c45',
    },
    inverseSurface: {
      main: '#e1e3df',
      contrastText: '#e1e3df',
    },
    inverseOnSurface: {
      main: '#2e312e',
      contrastText: '#e1e3df',
    },
    shadow: {
      main: '#000000',
    },
    scrim: {
      main: '#000000',
    },
    surfaceTintColor: {
      main: '#73daa4',
    },
    background: {
      default: '#1d201e',
      paper: '#111412',
    },
    onBackground: {
      main: '#e1e3df',
    },
    common: {
      white: '#111412',
      black: '#e1e3df',
    },
    text: {
      primary: '#e1e3df',
      secondary: '#d0e8d7',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    info: {
      main: '#75d1ff',
      contrastText: '#003548',
      light: 'rgb(144, 218, 255)',
      dark: 'rgb(81, 146, 178)',
    },
    onInfo: {
      main: '#003548',
      contrastText: '#75d1ff',
    },
    infoContainer: {
      main: '#004d67',
      contrastText: '#c2e8ff',
    },
    onInfoContainer: {
      main: '#c2e8ff',
      contrastText: '#004d67',
    },
    success: {
      main: '#76db91',
      contrastText: '#003919',
      light: 'rgb(145, 226, 167)',
      dark: 'rgb(82, 153, 101)',
    },
    onSuccess: {
      main: '#003919',
      contrastText: '#76db91',
    },
    successContainer: {
      main: '#005227',
      contrastText: '#92f8ab',
    },
    onSuccessContainer: {
      main: '#92f8ab',
      contrastText: '#005227',
    },
    warning: {
      main: '#f8bd26',
      contrastText: '#402d00',
      light: 'rgb(249, 202, 81)',
      dark: 'rgb(173, 132, 26)',
    },
    onWarning: {
      main: '#402d00',
      contrastText: '#f8bd26',
    },
    warningContainer: {
      main: '#5b4300',
      contrastText: '#ffdf9f',
    },
    onWarningContainer: {
      main: '#ffdf9f',
      contrastText: '#5b4300',
    },
    divider: '#8a938b',
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#f5f5f5',
      A200: '#eeeeee',
      A400: '#bdbdbd',
      A700: '#616161',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  shape: {
    borderRadius: 4,
  },
  tones: {
    primary: {
      0: '#000000',
      4: '#001208',
      6: '#00180c',
      10: '#002112',
      12: '#002515',
      17: '#00311d',
      20: '#003822',
      22: '#003d25',
      24: '#004229',
      30: '#005233',
      40: '#006c45',
      50: '#108859',
      60: '#38a371',
      70: '#57be8a',
      80: '#73daa4',
      87: '#87eeb7',
      90: '#90f7bf',
      92: '#95fdc4',
      94: '#b0ffd0',
      95: '#c0ffd8',
      96: '#ceffdf',
      98: '#e8ffee',
      99: '#f4fff5',
      100: '#ffffff',
    },
    secondary: {
      0: '#000000',
      4: '#011208',
      6: '#04170d',
      10: '#0b1f15',
      12: '#0f2419',
      17: '#1a2e23',
      20: '#203529',
      22: '#25392d',
      24: '#293e31',
      30: '#364b3e',
      40: '#4e6355',
      50: '#667c6e',
      60: '#7f9687',
      70: '#9ab1a1',
      80: '#b4ccbb',
      87: '#c8e0ce',
      90: '#d0e8d7',
      92: '#d6eedc',
      94: '#dcf4e2',
      95: '#def7e5',
      96: '#e1fae8',
      98: '#e8ffee',
      99: '#f4fff5',
      100: '#ffffff',
    },
    tertiary: {
      0: '#000000',
      4: '#001016',
      6: '#00161d',
      10: '#001f28',
      12: '#00232d',
      17: '#002f3a',
      20: '#043542',
      22: '#0b3a46',
      24: '#123e4b',
      30: '#234c59',
      40: '#3c6472',
      50: '#557d8b',
      60: '#6f97a5',
      70: '#89b1c1',
      80: '#a4cddd',
      87: '#b7e1f1',
      90: '#bfe9f9',
      92: '#c5efff',
      94: '#d4f3ff',
      95: '#dcf5ff',
      96: '#e3f7ff',
      98: '#f2fbff',
      99: '#f9fdff',
      100: '#ffffff',
    },
    neutral: {
      0: '#000000',
      4: '#0c0f0d',
      6: '#111412',
      10: '#191c1a',
      12: '#1d201e',
      17: '#282b28',
      20: '#2e312e',
      22: '#323633',
      24: '#373a37',
      30: '#444844',
      40: '#5c5f5c',
      50: '#757874',
      60: '#8f918e',
      70: '#a9aca8',
      80: '#c5c7c3',
      87: '#d9dbd6',
      90: '#e1e3df',
      92: '#e7e9e4',
      94: '#edeeea',
      95: '#eff1ed',
      96: '#f2f4f0',
      98: '#f8faf5',
      99: '#fbfdf8',
      100: '#ffffff',
    },
    neutralVariant: {
      0: '#000000',
      4: '#08100b',
      6: '#0d1510',
      10: '#151d18',
      12: '#19211c',
      17: '#242c26',
      20: '#2a322d',
      22: '#2e3731',
      24: '#333b35',
      30: '#404943',
      40: '#58605a',
      50: '#707972',
      60: '#8a938b',
      70: '#a5ada6',
      80: '#c0c9c0',
      87: '#d3dcd4',
      90: '#dce5dc',
      92: '#e2eae2',
      94: '#e7f0e7',
      95: '#eaf3ea',
      96: '#edf6ed',
      98: '#f3fcf3',
      99: '#f6fff6',
      100: '#ffffff',
    },
    error: {
      0: '#000000',
      4: '#280001',
      6: '#310001',
      10: '#410002',
      12: '#490002',
      17: '#5c0004',
      20: '#690005',
      22: '#710005',
      24: '#790006',
      30: '#93000a',
      40: '#ba1a1a',
      50: '#de3730',
      60: '#ff5449',
      70: '#ff897d',
      80: '#ffb4ab',
      87: '#ffcfc9',
      90: '#ffdad6',
      92: '#ffe2de',
      94: '#ffe9e6',
      95: '#ffedea',
      96: '#fff0ee',
      98: '#fff8f7',
      99: '#fffbff',
      100: '#ffffff',
    },
  },
  unstable_sxConfig: {
    border: {
      themeKey: 'borders',
    },
    borderTop: {
      themeKey: 'borders',
    },
    borderRight: {
      themeKey: 'borders',
    },
    borderBottom: {
      themeKey: 'borders',
    },
    borderLeft: {
      themeKey: 'borders',
    },
    borderColor: {
      themeKey: 'palette',
    },
    borderTopColor: {
      themeKey: 'palette',
    },
    borderRightColor: {
      themeKey: 'palette',
    },
    borderBottomColor: {
      themeKey: 'palette',
    },
    borderLeftColor: {
      themeKey: 'palette',
    },
    borderRadius: {
      themeKey: 'shape.borderRadius',
    },
    color: {
      themeKey: 'palette',
    },
    bgcolor: {
      themeKey: 'palette',
      cssProperty: 'backgroundColor',
    },
    backgroundColor: {
      themeKey: 'palette',
    },
    p: {},
    pt: {},
    pr: {},
    pb: {},
    pl: {},
    px: {},
    py: {},
    padding: {},
    paddingTop: {},
    paddingRight: {},
    paddingBottom: {},
    paddingLeft: {},
    paddingX: {},
    paddingY: {},
    paddingInline: {},
    paddingInlineStart: {},
    paddingInlineEnd: {},
    paddingBlock: {},
    paddingBlockStart: {},
    paddingBlockEnd: {},
    m: {},
    mt: {},
    mr: {},
    mb: {},
    ml: {},
    mx: {},
    my: {},
    margin: {},
    marginTop: {},
    marginRight: {},
    marginBottom: {},
    marginLeft: {},
    marginX: {},
    marginY: {},
    marginInline: {},
    marginInlineStart: {},
    marginInlineEnd: {},
    marginBlock: {},
    marginBlockStart: {},
    marginBlockEnd: {},
    displayPrint: {
      cssProperty: false,
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: {},
    rowGap: {},
    columnGap: {},
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: {
      themeKey: 'zIndex',
    },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: {
      themeKey: 'shadows',
    },
    width: {},
    maxWidth: {},
    minWidth: {},
    height: {},
    maxHeight: {},
    minHeight: {},
    boxSizing: {},
    fontFamily: {
      themeKey: 'typography',
    },
    fontSize: {
      themeKey: 'typography',
    },
    fontStyle: {
      themeKey: 'typography',
    },
    fontWeight: {
      themeKey: 'typography',
    },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: {
      cssProperty: false,
      themeKey: 'typography',
    },
  },
  mixins: {
    toolbar: {
      minHeight: 56,
      '@media (min-width:0px)': {
        '@media (orientation: landscape)': {
          minHeight: 48,
        },
      },
      '@media (min-width:600px)': {
        minHeight: 64,
      },
    },
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
    '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
    '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
    '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
    '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
    '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
    '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
    '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
    '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
    '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
    '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
  ],
  typography: {
    htmlFontSize: 16,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: '6rem',
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: '3.75rem',
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '3rem',
      lineHeight: 1.167,
      letterSpacing: '0em',
    },
    h4: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '2.125rem',
      lineHeight: 1.235,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: 1.334,
      letterSpacing: '0em',
    },
    h6: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
    subtitle1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.75,
      letterSpacing: '0.00938em',
    },
    subtitle2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
    },
    body1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
    },
    button: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'uppercase',
    },
    caption: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.66,
      letterSpacing: '0.03333em',
    },
    overline: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase',
    },
    inherit: {
      fontFamily: 'inherit',
      fontWeight: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      letterSpacing: 'inherit',
    },
  },
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
});

export default theme;
