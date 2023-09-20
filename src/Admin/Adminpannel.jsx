import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Insertblog from '../pages/crudoperation/insertBlog'
import Insertmuslim from '../pages/crudoperation/insertmuslimblog'
import Insertbusiness from '../pages/crudoperation/insertbusinessblog'
import Inserthealth from '../pages/crudoperation/inserthealth'
import InsertTourism from '../pages/crudoperation/insertskin'
import Insertcooking from '../pages/crudoperation/insertsport'
import Inserttechnology from '../pages/crudoperation/inserttechnology'
import Store from './Store';
import PieActiveArc from './piechart';
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
    justifyContent: 'start',
    alignItems: 'center',
    padding: '0 50px',
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
    pieChartContainer: {

    maxHeight: 'calc(100vh - 100px)', // Adjust the maxHeight to your desired value
    overflowY: 'auto', // Enable vertical scrolling
    backgroundColor: 'white',
    position:'absolute',
      marginTop: '-40%',
      marginLeft:'20%',
        borderRadius: '10px',
      display: 'flex',
      flexWrap: 'wrap',
      
  },
}));

const AdminPanel = () => {
  const classes = useStyles();
  const [displayCard, setDisplayCard] = useState(false);
  const [selectedPage, setseleclpage] = useState('dashboard');
   const [SwitchToggle, setSwitchToggle] = useState('Admin');
  const handleButtonClick = (action) => {
    // Handle button click based on the action
    switch (action) {
       case 'dashboard':
        setseleclpage(action);
        break;
      case 'insert-Article':
        setseleclpage(action);
        break;
      case 'insert-muslim-Article':
       setseleclpage(action);
        break;
      case 'insert-business-Article':
       setseleclpage(action);
        break;
      case 'insert-health-Article':
    setseleclpage(action);
        break;
      case 'insert-technology-Article':
        setseleclpage(action);
        break;
      case 'insert-tourism-Article':
       setseleclpage(action);
        break;
      case 'insert-cooking-Article':
        setseleclpage(action);
        break;
      case 'manage':
      setseleclpage(action);
        break;
      default:
        break;
    }
  };

  const handleDisplayCardButtonClick = () => {
    setDisplayCard(!displayCard);
  };
  const HandleStore = () => {
  setSwitchToggle('store')
  }
    const HandleAdmin = () => {
  setSwitchToggle('Admin')
}

  return (
    <div>

       <div className={classes.mainBar}>
        <Button onClick={HandleAdmin} style={{ color: 'white',fontSize:'20px' }}> Admin Panel</Button>
        <Button onClick={HandleStore} style={{color:'white',marginLeft:'50px'}}>Oders</Button>
      </div>

      
      {SwitchToggle==='Admin'&&(<div style={{ overflow: 'hidden',}}>
      {(
          <div className={classes.scrollableContainer}>
         <Card className={classes.cardRoot}>
            <Button onClick={() => handleButtonClick('manage')} className={`${classes.adminButton} ${classes.dashButton}`}>
              <AddCircleOutlineIcon style={{marginLeft:'-20px'}} />
              <div style={{marginLeft:'20px'}}>DashBoard</div>
            </Button>
          </Card>
          <Card className={classes.cardRoot}>
            <Button onClick={() => handleButtonClick('insert-Article')} className={classes.adminButton}>
              <AddCircleOutlineIcon style={{marginLeft:'-20px'}} />
              <div style={{marginLeft:'20px'}}>Insert Article</div>
            </Button>
          </Card>
          <Card className={classes.cardRoot}>
            <Button onClick={() => handleButtonClick('insert-business-Article')} className={classes.adminButton}>
              <BusinessIcon style={{marginLeft:'-20px'}} />
              <div style={{marginLeft:'20px'}}>Business Article</div>
            </Button>
          </Card>
          <Card className={classes.cardRoot}>
            <Button onClick={() => handleButtonClick('insert-health-Article')} className={classes.adminButton}>
              <LocalHospitalIcon style={{marginLeft:'-20px'}}/>
              <div style={{marginLeft:'20px'}}>Health Article</div>
            </Button>
          </Card>
          <Card className={classes.cardRoot}>
            <Button onClick={() => handleButtonClick('insert-technology-Article')} className={classes.adminButton}>
              <CodeIcon />
              <div>Technology Article</div>
            </Button>
          </Card>
          <Card className={classes.cardRoot}>
            <Button onClick={() => handleButtonClick('insert-cooking-Article')} className={classes.adminButton}>
              <FastfoodIcon style={{marginLeft:'-20px'}}/>
              <div style={{marginLeft:'20px'}}>Cooking Article</div>
            </Button>
          </Card>
          <Card className={classes.cardRoot}>
            <Button onClick={() => handleButtonClick('insert-tourism-Article')} className={classes.adminButton}>
              <FlightTakeoffIcon style={{marginLeft:'-20px'}}/>
              <div style={{marginLeft:'20px'}}>Tourism Article</div>
            </Button>
          </Card>
          <Card className={classes.cardRoot}>
            <Button onClick={() => handleButtonClick('insert-muslim-Article')} className={classes.adminButton}>
              <FlightTakeoffIcon style={{marginLeft:'-20px'}}/>
              <div style={{marginLeft:'20px'}}>life of a muslim</div>
            </Button>
          </Card>
            <Card className={classes.cardRoot}>
            <Button onClick={() => handleButtonClick('manage')} className={`${classes.adminButton} ${classes.deleteButton}`}>
              <DeleteForeverIcon style={{marginLeft:'-20px'}}/>
              <div style={{marginLeft:'20px'}}>Manage Article</div>
            </Button>
          </Card>
        </div>
      )}

    {selectedPage === 'dashboard' && (
  <div className={classes.pieChartContainer}>
    <PieActiveArc />
  </div>
      )
      }
      
          {selectedPage === 'insert-Article' && (
  <div className={classes.pieChartContainer}>
    <Insertblog />
  </div>
      )
      }
          {selectedPage === 'insert-muslim-Article' && (
  <div className={classes.pieChartContainer}>
    <Insertmuslim />
  </div>
      )
      }
          {selectedPage === 'insert-business-Article' && (
  <div className={classes.pieChartContainer}>
    <Insertbusiness />
  </div>
      )
      }
          {selectedPage === 'insert-health-Article' && (
  <div className={classes.pieChartContainer}>
    <Inserthealth />
  </div>
      )
      }
          {selectedPage === 'insert-technology-Article' && (
  <div className={classes.pieChartContainer}>
    <Inserttechnology />
  </div>
      )
      }
        {selectedPage === 'insert-tourism-Article' && (
  <div className={classes.pieChartContainer}>
    <InsertTourism />
  </div>
      )
      }
        {selectedPage === 'insert-cooking-Article' && (
  <div className={classes.pieChartContainer}>
    <Insertcooking />
  </div>
      )
      }
        {selectedPage === 'manage' && (
  <div className={classes.pieChartContainer}>
    <PieActiveArc />
  </div>
      )
      }
      
      </div>)}
      {/* Store */}
      {SwitchToggle === 'store' && (
        <Store/>
      )}
 </div>
  );
};

export default AdminPanel;
