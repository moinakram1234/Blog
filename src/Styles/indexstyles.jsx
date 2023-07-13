import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
 
 wlcm: {
    backgroundSize: 'cover',
      height: '20%',
    width: '100%',
  color: 'white',
 
      //marginLeft:'10%'
  },
  categoryTitle:{color:'white'},
 wlcminner: {color:'white',
  marginTop: theme.spacing(3), // default margin top value
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(8), // adjust the margin top value for small screens
      fontSize: "30px",

   },

},
p: {
  color: '#bd90b3',
},

 mainContainer: {
    position: 'absolute',
    margin: '40% 0px 0px 17%',
    boxShadow: '1px 1px 1px 3px gray',
    width: '70%',
    height: '70%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  conchild: {
    boxShadow: '2px 0px 0px 1px gray',
    width: '50%',
    height: '50%',
    boxSizing: 'border-box',
  },
  lrgconchild: {
    width: '100%',
    marginTop:'-15px',
    height: '55%', 
    
  },
}));

export default useStyles;
