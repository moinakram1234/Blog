import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import Navbar from './Navbar';
import Contactus from './contactus';
import ArticleDetails from './articledetails';
import { useLocation } from 'react-router-dom';
const Displayblogswithselectedcategories = () => {
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');
  const [productData, setProductData] = useState([]);
  const [serverRes, setServerRes] = useState(null);
  const [selectedcate, setSelectedcate] = useState('');
 
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
       // const { title, description, image } = data;
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
        <div style={{ marginTop: '10%' }}>
          <Grid container spacing={2} alignItems="center" direction="column">
          <Grid item container spacing={2} justify="center" xs={12}>
            {productData.map((product) => (
              <Grid item xs={12} sm={6} md={2} key={product.title}>
                <Card>
                  <CardMedia component="img" height="150" image={product.image} alt={product.title} />
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      <Button
                        onClick={() => handleClick(product._id)}
                        style={{ color: 'black', textDecoration: 'underline' }}
                      >
                        {product.title}
                      </Button>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        </div>
      ) : (
          <div style={{margin:'10%'}}><ArticleDetails {...serverRes} /></div>
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
