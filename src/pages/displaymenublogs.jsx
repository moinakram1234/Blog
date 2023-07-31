import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, makeStyles } from '@material-ui/core';
import Navbar from './Navbar';
import Contactus from './contactus';
import { useLocation } from 'react-router-dom';
import  {useNavigate}  from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
 card: {
    height: '100%',
    display: 'flex',
    borderRadius: '20px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '1px 1px 1px 1px rgba(0.8, 0.6, 1, 0.3)',
     '&:hover': {
      boxShadow: '-10px 10px 5px 2px rgba(0.8, 0.6, 1, 0.6)' /* Change the box-shadow on hover */
    }
  },
  cardImage: {
    paddingTop: '60.25%', // 16:9 aspect ratio (adjust as needed)
  },
  cardDescription: {
    display: '-webkit-box',
    '-webkit-line-clamp': 5,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color:'gray'
  },
  centeredCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
     parentCard: {
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Adjust the shadow properties as needed
    borderRadius: '10px', // Adjust the border radius as needed
    padding: theme.spacing(2), // Adjust the padding as needed
  },
}));

const Displayblogswithselectedcategories = () => {
   const REACT_APP_URL = process.env.REACT_APP_URL;
   const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');
  const [productData, setProductData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
 
    fetch(`${REACT_APP_URL}/individualcategory`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ selectcategory: category }), // Pass 'category' directly
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Received data:', data);
        setProductData(data);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  const handleClick = (name) => {
    
navigate(`/articledetails/${encodeURIComponent(name)}`);
  };

   return (
    <div>
      <div>
        <Navbar />
      </div>
      
 
        <div style={{ marginTop:'6%' }}>
             <Card className={classes.parentCard}>
          <Grid container spacing={3} alignItems="stretch" justify="center">
            {productData.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.title} className={index === 4 ? classes.centeredCard : ''}>
            
                    <Card className={classes.card}  onClick={() => handleClick(product.name)}>
                  <CardMedia
  className={classes.cardImage}
  image={product.image}
  alt={product.title}
 
/>

                  <CardContent>
                    <Typography >
                 
                        {product.title}
                     
                    </Typography>
                    <Typography variant="body2" component="p" className={classes.cardDescription}>
                      {product.description}
                    </Typography>
                  </CardContent>
                </Card>
              
              </Grid>
            ))}
            </Grid>
            </Card>
        </div>

      <div>
        <h1>Contact US</h1>
      </div>
      <div>
        <Contactus />
      </div>
    </div>
  );
};

export default Displayblogswithselectedcategories;
