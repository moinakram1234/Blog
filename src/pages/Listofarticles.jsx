import { useMediaQuery, Button, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ArticleDetails from './articledetails';

const useStyles = makeStyles((theme) => ({
  articleImage: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
}));

const ArticleList = () => {
  const [productData, setProductData] = useState([]);
  const isMobile = useMediaQuery('(max-width:600px)');
  const [serverRes, setServerRes] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    fetch('http://localhost:5000/allarticles', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
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
      {!serverRes ? (
        <>
          <Grid container spacing={2} style={{ minHeight: '100vh', marginTop: '10%' }}>
            {productData.slice(0, 10).map((article) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={article._id}>
                <Button
                  onClick={() => handleClick(article._id)}
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <img src={article.image} alt={article.title} className={classes.articleImage} />
                  <span style={{ marginTop: 'auto' }}>{article.title}</span>
                </Button>
              </Grid>
            ))}
            {productData.length > 10 && (
              <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  onClick={() => console.log('View more clicked')}
                  style={{
                    color: 'black',
                    textDecoration: 'underline',
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  View More
                </Button>
              </Grid>
            )}
          </Grid>
        </>
      ) : (
        <div style={{ margin: '2%' }}>
          <ArticleDetails
            title={serverRes.title}
            description={serverRes.description}
            image={serverRes.image}
            heading1={serverRes.heading1}
            image1={serverRes.image1}
            description1={serverRes.description1}
            heading2={serverRes.heading2}
            image2={serverRes.image2}
            description2={serverRes.description2}
            heading3={serverRes.heading3}
            image3={serverRes.image3}
            description3={serverRes.description3}
            heading4={serverRes.heading4}
            image4={serverRes.image4}
            description4={serverRes.description4}
            summary={serverRes.summary}
          />
        </div>
      )}
    </div>
  );
};

export default ArticleList;
