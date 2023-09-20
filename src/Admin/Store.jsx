import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DisplayDataComponent from './Showorder';
import  Amazonlinkstore from './add-amazon-link'
import AddDataComponent from './addproducts';
import {
  AddCircleOutline as AddCircleOutlineIcon,
  Update as UpdateIcon,
  DeleteForever as DeleteForeverIcon,
   Fastfood as FastfoodIcon,
  LocalHospital as LocalHospitalIcon,
  Business as BusinessIcon,
  Code as CodeIcon,
   FlightTakeoff as FlightTakeoffIcon,
} from '@material-ui/icons';

import { Card, CardContent, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainBar: {
    width: '100%',
    height: '70px',
    background: 'linear-gradient(to right, #4b79a1, #283e51)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
  },
 scrollableContainer: {
    marginTop: theme.spacing(2),
    maxHeight: 'calc(100vh - 100px)', // Adjust the maxHeight to your desired value
    overflowY: 'auto', // Enable vertical scrolling
    backgroundColor: 'white',
   marginRight:theme.spacing(140),
    borderRadius: '10px',
    display: 'flex',
    flexWrap: 'wrap',
   
    padding: theme.spacing(2),
  },
  cardRoot: {
    marginTop: '10%',
    margin: theme.spacing(1),
    textAlign: 'center',
    padding: theme.spacing(1),
    width: '85%',
 
  },

  deleteButton: {
    background: 'linear-gradient(to right, #FF0000, #B22222)',
    width:'100%',
    color: '#FFF',
    '&:hover': {
      background: 'linear-gradient(to right, #B22222, #FF0000)',
    },
  },

   dashButton: {
    background: 'black',
    width:'100%',
    color: 'white',
    '&:hover': {
      background: 'linear-gradient(to right, #B22222, #FF0000)',
    },
  },
  displayCardButton: {
  
    marginTop: theme.spacing(2),
    background: 'linear-gradient(to right, #FFD700, #FFA500)',
    color: '#FFF',
    '&:hover': {
      background: 'linear-gradient(to right, #FFA500, #FFD700)',
    },
    
  },
 
}));

const Store = () => {
  const classes = useStyles();
  const [displayCard, setDisplayCard] = useState(false);
  const [selectedPage, setseleclpage] = useState('Show orders');
  const handleButtonClick = (action) => {
    // Handle button click based on the action
    switch (action) {
       case 'Show orders':
        setseleclpage(action);
        break;
        case 'Add products':
            setseleclpage(action);
        break;
       case 'amazon':
            setseleclpage(action);
            break;
      default:
        break;
    }
  };

  const handleDisplayCardButtonClick = () => {
    setDisplayCard(!displayCard);
  };

  return (
    <div style={{ overflow: 'hidden',}}>
   

      {(
          <div className={classes.scrollableContainer}>
         <Card className={classes.cardRoot}>
            <Button onClick={() => handleButtonClick('Add products')} className={`${classes.adminButton} ${classes.dashButton}`}>
              <AddCircleOutlineIcon style={{marginLeft:'-20px'}} />
              <div style={{marginLeft:'20px'}}>Add Products</div>
            </Button>
          </Card>
          <Card className={classes.cardRoot}>
            <Button onClick={() => handleButtonClick('Show orders')} className={classes.adminButton}>
              <AddCircleOutlineIcon style={{marginLeft:'-20px'}} />
              <div style={{marginLeft:'20px'}}>Show Orders</div>
            </Button>
          </Card>
           <Card className={classes.cardRoot}>
            <Button onClick={() => handleButtonClick('amazon')} className={classes.adminButton}>
              <AddCircleOutlineIcon style={{marginLeft:'-20px'}} />
              <div style={{marginLeft:'20px'}}>add amazon Affiliate link</div>
            </Button>
          </Card>
        </div>
      )}

    {selectedPage === 'Add products' && (
  <div className={classes.pieChartContainer}>
    <AddDataComponent />
  </div>
      )
      }
      
          {selectedPage === 'Show orders' && (
  <div className={classes.pieChartContainer}>
    <DisplayDataComponent/>
  </div>
      )
      }
   {selectedPage === 'amazon' && (
  <div className={classes.pieChartContainer}>
    <Amazonlinkstore/>
  </div>
      )
      }
      
    </div>
  );
};

export default Store;
