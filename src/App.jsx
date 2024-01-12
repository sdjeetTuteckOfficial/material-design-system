import { Typography, Button, TextField, Box } from '@mui/material';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import CustomizedTextBox from './components/TextField';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1" color="danger.main">
        Whereas recognition of the inherent dignity
      </Typography>
      <Typography variant="h2" color="grey.600">
        Whereas recognition of the inherent dignity
      </Typography>
      <Typography variant="h3">
        Whereas recognition of the inherent dignity
      </Typography>
      <Typography variant="h4">
        Whereas recognition of the inherent dignity
      </Typography>
      <Typography variant="h5">
        Whereas recognition of the inherent dignity
      </Typography>
      <Typography variant="h6">
        Whereas recognition of the inherent dignity
      </Typography>
      <Typography variant="p">
        Whereas recognition of the inherent dignity
      </Typography>
      <Typography variant="body1">
        Whereas recognition of the inherent dignity
      </Typography>
      <Typography variant="body2">
        Whereas recognition of the inherent dignity
      </Typography>
      <Button variant="contained">Button</Button>
      <Button variant="outlined">Button</Button>
      <Button variant="outlined" disabled={true}>
        Button
      </Button>
      <Box m={2}>
        <TextField label={null} variant="outlined" />
        <CustomizedTextBox
          onChange={(e) => console.log('hi', e.target.value)}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
