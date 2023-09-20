import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Phone, Home, CreditCard, Payment } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    container: {
        marginLeft: '16%',
        position:'absolute',
    marginTop: '-15%',
    display: 'flex',
    flexDirection: 'column',
  },
  scrollableContainer: {
    marginTop: theme.spacing(2),
    maxHeight: 'calc(100vh - 100px)', // Adjust the maxHeight to your desired value
    overflowY: 'auto', // Enable vertical scrolling
    backgroundColor: 'white',
    borderRadius: '10px',
    display: 'flex',
    flexWrap: 'wrap',
      padding: theme.spacing(2),
     justifyContent: 'flex-start',
    width: '100%', // Make the container 100% width
  },
  card: {
    marginBottom: theme.spacing(3),
    width: 'calc(50% - 20px)', // Adjust the width of each card
    marginRight: theme.spacing(2),
    boxShadow: '2px 2px 2px 2px gray',
  },
  title: {
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
  },
    icon: {
         float:'left',
    marginRight: theme.spacing(1),
  },
  paymentScreenshot: {
      maxWidth: '100%',
      float:'left',
    marginTop: theme.spacing(1),
  },
 items: {
    marginTop: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
     paddingTop: theme.spacing(2),
  
  
    },
  item: {
      marginBottom: theme.spacing(1),
        float:'left'
  },
}));

const DisplayDataComponent = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/showorders');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Container maxWidth="md" className={classes.container}>
      <div className={classes.scrollableContainer}>
        {data.map((order) => (
          <Card className={classes.card} key={order._id}>
            <CardContent>
              <div className={classes.title}>
                <CreditCard className={classes.icon} />
                <Typography variant="h6" component="h2">
                  Order ID: {order._id}
                </Typography>
              </div>
                    <div className={classes.title}>
                           <Typography color="textSecondary">
                <Home className={classes.icon} />
                Address: {order.address}
              </Typography>
                    </div>
                    <div className={classes.title}>
              <Typography color="textSecondary">
                <Phone className={classes.icon} />
                Phone: {order.phone}
                        </Typography></div>
                    <div className={classes.title}>
              <Typography color="textSecondary">
                <CreditCard className={classes.icon} />
                Payment Method: {order.paymentMethod}
                    </Typography></div>
                     {order.items.map((item) => (
                  <div key={item.id} className={classes.item}>
                    <Typography variant="body2">
                      Item ID: {item.id}
                    </Typography>
                    <Typography variant="body2">
                      Name: {item.name}
                    </Typography>
                    <Typography variant="body2">
                      Price: ${item.price}
                    </Typography>
                    <Typography variant="body2">
                      Quantity: {item.quantity}
                    </Typography>
                  </div>
                     ))}
                     <br /> <br /> <br /> <br /> <br />
                    <Typography color="textSecondary">

                        <Payment className={classes.icon} />
                        
               <div className={classes.icon}> Payment Screenshot:</div>
                        <br />
                {order.paymentScreenshot ? (
                  <img style={{width:'100%'}}
                    src={order.paymentScreenshot}
                    alt="Payment Screenshot"
                    className={classes.paymentScreenshot}
                  />
                ) : (
                  'No payment screenshot available'
                )}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default DisplayDataComponent;
