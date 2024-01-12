import { TextField, styled } from '@mui/material';

const CustomTextBox = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    // background: theme.palette.primary.main,
    borderRadius: '100px',
    '&:hover': {
      borderColor: '#3A97D4',
    },
    '&.Mui-focused': {
      borderColor: '#3A97D4', // Change to your desired border color for the active state
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'initial', // Reset to the default color
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#3A97D4', // Change to your desired border color for hover state
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#3A97D4', // Change to your desired border color for active state
    },
  },
  '& .MuiOutlinedInput-input': {
    borderRadius: '100px',
    padding: '16.5px 27px',
  },
}));

const CustomizedTextBox = (props) => {
  return (
    <CustomTextBox
      label={null}
      variant="outlined"
      InputProps={{
        style: {
          borderRadius: '100px',
        },
      }}
      {...props}
      // Add more props as needed
    />
  );
};

export default CustomizedTextBox;
