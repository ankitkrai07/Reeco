import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0F5132', // The main color for primary elements
      light: '#0A5C36', // Lighter version of the primary color
      dark: '#18392B', // Darker version of the primary color
      contrastText: '#fff', // Text color that contrasts with the primary color
    },
    secondary: {
      main: '#ff4081', // The main color for secondary elements
      light: '#ff79b0', // Lighter version of the secondary color
      dark: '#c60055', // Darker version of the secondary color
      contrastText: '#fff', // Text color that contrasts with the secondary color
    },
    error: {
      main: '#f44336', // The main color for error elements
      light: '#e57373', // Lighter version of the error color
      dark: '#d32f2f', // Darker version of the error color
      contrastText: '#fff', // Text color that contrasts with the error color
    },
    warning: {
      main: '#ff9800', // The main color for warning elements
      light: '#ffb74d', // Lighter version of the warning color
      dark: '#f57c00', // Darker version of the warning color
      contrastText: '#fff', // Text color that contrasts with the warning color
    },
    info: {
      main: '#2196f3', // The main color for info elements
      light: '#64b5f6', // Lighter version of the info color
      dark: '#1565c0', // Darker version of the info color
      contrastText: '#fff', // Text color that contrasts with the info color
    },
    success: {
      main: '#4caf50', // The main color for success elements
      light: '#81c784', // Lighter version of the success color
      dark: '#388e3c', // Darker version of the success color
      contrastText: '#fff', // Text color that contrasts with the success color
    },
    text: {
      primary: '#212121', // The default text color
      secondary: '#757575', // The color for secondary text
      disabled: '#bdbdbd', // The color for disabled text
      hint: '#9e9e9e', // The color for hint text
    },
    background: {
      paper: '#fff', // The background color for paper elements
      default: '#f5f5f5', // The default background color
    },
    action: {
      active: '#2196f3', // The color for active elements (e.g., buttons)
      hover: '#e3f2fd', // The color when an element is hovered
      hoverOpacity: 0.08, // The opacity when an element is hovered
      selected: '#e3f2fd', // The color when an element is selected
      selectedOpacity: 0.16, // The opacity when an element is selected
      disabled: '#e0e0e0', // The color for disabled elements
      disabledBackground: '#bdbdbd', // The background color for disabled elements
    },
  },
 
  // other theme options...
});

export default theme;
