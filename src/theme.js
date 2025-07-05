import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3182ce', // A shade of blue
    },
    secondary: {
      main: '#4a5568', // A shade of gray
    },
    error: {
      main: '#c53030', // A shade of red
    },
    background: {
      default: '#f0f2f5', // Light gray background
      paper: '#ffffff', // White for cards/panels
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.9rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevent uppercase text
          borderRadius: '8px', // Rounded corners for buttons
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px', // Rounded corners for text fields
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Rounded corners for Paper components
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backdropFilter: 'blur(5px)', // Apply blur to the dialog itself
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent background
        },
        container: {
          backdropFilter: 'blur(3px)', // Apply blur to the container behind the dialog
        },
      },
    },
  },
});

export default theme;
