import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  a: {
    textDecoration: "none",
    color:'white'
    },
    btnhver: {
           marginLeft:'20px',
     '&:hover': {
      animation: '$ripple 4s ease-out'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(2.5)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 0
    }
    },
  desktopOnly: {
      
       [theme.breakpoints.down('xs')]: {
     desktopOnly: {
    display: 'block'
  }
    },
    
}   
}));

export default useStyles;

