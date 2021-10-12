import { createTheme } from '@mui/material';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#929292',
      light: '#dadada',
    },
  },
  breakpoints: {
    values: {
      xl: 1536,
      lg: 1200,
      md: 900,
      sm: 600,
      xs: 0,
    },
  },
});

export default Theme;
