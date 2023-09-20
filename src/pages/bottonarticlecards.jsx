import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, makeStyles } from '@material-ui/core';
import ArticleDetails from './articledetails';
import { Images } from '../images/images';
import { color } from 'framer-motion';
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
  a_link:{
    textDecoration: 'none',
    
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

const Bottomarticlescards = () => {
  const classes = useStyles();
    const [Articles, setArticles] = useState([
  {
    name: 'sport',
    image: Images.Sports,
            title: 'Cooking',
     description:"Cooking, cookery, or culinary arts is the art, science and craft of using heat to make food more palatable, digestible, nutritious, or safe. Cooking techniques and ingredients vary widely, from grilling food over an open fire to using electric stoves, to baking in various types of ovens, reflecting local conditions."
  },
  {
     name:'health',
    image: Images.Health,
      title: 'Health',
     description:"Health encompasses a person's physical, mental, and social well-being. It is not merely the absence of disease but also the presence of positive factors that contribute to overall well-being. Maintaining good health involves adopting a balanced lifestyle that includes regular physical activity, a nutritious diet, adequate sleep, stress management, and preventive healthcare measures such as vaccinations and regular check-ups. Promoting health also involves addressing mental health concerns, fostering positive relationships, and creating supportive environments for individuals and communities."
  },
  {
    name:'muslim',
    image: Images.muslim,
    title: 'Life of a Muslim',
   description:"Muslims are monotheistic and worship one, all-knowing God, who in Arabic is known as Allah. Followers of Islam aim to live a life of complete submission to Allah. They believe that nothing can happen without Allah's permission, but humans have free will."
  },
  
  {
    name:'skin',
    image: Images.Skin,
      title: 'Tourism',
    description:"Tourism is a unique type of highly labor-intensive industry. It provides different services that are needed as well as expected by the incoming tourists. Tourism is one of the largest industries in terms of money spent by tourists in the countries they visit."
  },
  
]);
 

  const truncateText = (text, maxLines) => {
    const lines = text.split('\n');
    if (lines.length > maxLines) {
      return lines.slice(0, maxLines).join('\n') + '...';
    }
    return text;
  };
return (
    <div style={{ marginLeft: '1%', marginTop: '2%', float: 'left' }}>
      {/* Add the parent card with shadow */}
      <Card className={classes.parentCard}>
        <Grid container spacing={3} alignItems="stretch" justify="flex-start">
          {Articles.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.title} className={index === 4 ? classes.centeredCard : ''}>
              <a className={classes.a_link} href={`/blogs?category=${product.name}`}>
              <Card className={classes.card}>
               
                  <CardMedia className={classes.cardImage} image={product.image} alt={product.title} />
            
                <CardContent>
                  <Typography variant="h5" component="h2" style={{color:'green'}}>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" component="p" className={classes.cardDescription}>
                    {truncateText(product.description, 5)}
                  </Typography>
                </CardContent>
              </Card></a>
            </Grid>
          ))}
        </Grid>
      </Card>
    </div>
  );
};
export default Bottomarticlescards;
