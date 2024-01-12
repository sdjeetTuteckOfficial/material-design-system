import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          padding: '10px 28px',
          fontSize: '14px',
          lineHeight: '125%',
          textTransform: 'capitalize',
          fontFamily: 'DM Sans',
          fontWeight: 700,
        },
        contained: {
          background: '#0B996E',
        },
        outlined: {
          border: '1px solid #AEB4B7',
          color: '#191919',
          ':hover': {
            background: '#E4E6E7',
            border: '1px solid #AEB4B7',
          },
          ':disabled': {
            border: 'none',
          },
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          border: 'none !important',
        },
        input: {
          borderRadius: '100px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          borderRadius: '100px',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#3A97D4',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '2px solid #3A97D4',
          },
        },
        notchedOutline: {
          border: '1px solid #C9CDCF',
        },
        input: {
          padding: '16.5px 27px',
          fontSize: '12px',
          fontWeight: 400,
          lineHeight: '125%',
        },
      },
    },
  },
  typography: {
    fontFamily: 'DM Sans',
    h1: {
      fontSize: '40px',
      fontWeight: '700',
      lineHeight: '52.5px',
    },

    h2: {
      fontSize: '36px',
      fontWeight: '700',
      lineHeight: '45px',
    },

    h3: {
      fontSize: '24px',
      fontWeight: '600',
      lineHeight: '30px',
    },

    h4: {
      fontSize: '20px',
      fontWeight: '600',
      lineHeight: '25px',
    },

    h5: {
      fontSize: '16px',
      fontWeight: '600',
      lineHeight: '20px',
    },

    h6: {
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '17.5px',
    },

    p: {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '20px',
    },

    body1: {
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '16px',
    },

    body2: {
      fontSize: '10px',
      fontWeight: '400',
      lineHeight: '12px',
    },
  },
  palette: {
    primary: {
      main: '#0B996E',
    },
    secondary: {
      main: '#F4FFEE',
    },
    accent: {
      main: '#F0f1fa', /// not in use
    },
    badge: {
      main: '#E5F3FF',
    },
    warning: {
      main: '#BB5504',
      light: '#FCF3DE',
    },
    danger: {
      main: '#CD3D64',
      light: '#FEE8E7',
    },
    success: {
      main: '#09825D',
      light: '#E5FAE4',
    },
    info: {
      main: '#3a97d4',
      dark: '#075996',
      light: '#DFF0FF',
    },
    grey: {
      50: '#fff',
      100: '#C9CDCF',
      200: '#AEB4B7',
      300: '#939B9F',
      400: '#788287',
      500: '#60686C',
      600: '#484E51',
      700: '#303436',
      800: '#1A1A1A',
      900: '#000',
    },
  },
});

export default theme;
