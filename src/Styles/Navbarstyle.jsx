import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  a: {
    textDecoration: "none",
    color:'white'
    },
    btnhver: {
           marginLeft:'20px',
  
  },
    menuPosition: {
  position: 'absolute'
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

