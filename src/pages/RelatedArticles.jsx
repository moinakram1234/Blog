import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, makeStyles } from '@material-ui/core';
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
    paddingTop: '50%', // Adjust the aspect ratio as needed
  },
  cardDescription: {
    display: '-webkit-box',
    '-webkit-line-clamp': 3, // Limit the description to 3 lines
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: 'gray'
  },

  parentCard: {
    
    padding: theme.spacing(2), // Adjust the padding as needed
  },
}));

const RelatedArticles = ({ productData,changetheme  }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = (name) => {
      navigate(`/articledetails/${encodeURIComponent(name)}`);
      
  };

  return (
    <div style={{ marginTop:'6%' }}>
      <div className={classes.parentCard} style={{backgroundColor:changetheme?'#333333':''}}>
        <Grid container spacing={3} alignItems="stretch" justify="center">
          {productData.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.title} className={index === 4 ? classes.centeredCard : ''}>
              <Card className={classes.card} onClick={() => handleClick(product.name)} style={{backgroundColor:changetheme?'#333333':'',color:changetheme?'#ffffff':''}}>
                <CardMedia
                  className={classes.cardImage}
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography style={{  color:'green',}}>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" component="p" className={classes.cardDescription} >
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default RelatedArticles;
