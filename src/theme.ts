import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#3f8e3e',
    },
  },
  typography: {
    fontFamily: 'helvetica neue',
  },
});
theme = responsiveFontSizes(theme);

export default theme;

