import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#45cab6',
      main: '#17BDA4',
      dark: '#108472',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e9887e',
      main: '#E46B5E',
      dark: '#9f4a41',
      contrastText: '#000',
    },
  },
}); export default createMuiTheme ;