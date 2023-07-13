import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, makeStyles } from '@material-ui/core';
import Navbar from './Navbar';
import Contactus from './contactus';
import ArticleDetails from './articledetails';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardImage: {
    paddingTop: '56.25%', // 16:9 aspect ratio (adjust as needed)
  },
  cardDescription: {
    display: '-webkit-box',
    '-webkit-line-clamp': 5,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  centeredCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Displayblogswithselectedcategories = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');
  const [productData, setProductData] = useState([]);
  const [serverRes, setServerRes] = useState(null);
  const [selectedcate, setSelectedcate] = useState('');
  const classes = useStyles();

  useEffect(() => {
    setSelectedcate(category);
    fetch('http://localhost:5000/individualcategory', {
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

  const handleClick = (_id) => {
    fetch('http://localhost:5000/singlearticle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: _id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Article details response:', data);
        setServerRes(data);
      })
      .catch((error) => {
        console.error('Error requesting article details:', error);
      });
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      
      {!serverRes ? (
        <div style={{ marginTop: '6%' }}>
          <Grid container spacing={3} alignItems="stretch" justify="center">
            {productData.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.title} className={index === 4 ? classes.centeredCard : ''}>
                <Card className={classes.card}>
                  <CardMedia
  className={classes.cardImage}
  image={product.image}
  alt={product.title}
  onClick={() => handleClick(product._id)}
/>

                  <CardContent>
                    <Typography variant="h5" component="h2">
                 
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
        </div>
      ) : (
        <div style={{ margin: '10%' }}>
          <ArticleDetails {...serverRes} />
        </div>
      )}

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
