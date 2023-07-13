import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, makeStyles } from '@material-ui/core';
import ArticleDetails from './articledetails';

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

const Bottomarticlescards = () => {
  const classes = useStyles();
  const [productData, setProductData] = useState([]);
    const [serverRes, setServerRes] = useState(null);
    const [Articles, setArticles] = useState([
  {
    name: 'business',
    image: 'https://media.istockphoto.com/id/974683580/vector/copywriting.jpg?s=612x612&w=0&k=20&c=tQe7OIK-b4c16EN57Ac-vrrIwtIWxVzyCNBox3I2PlM=',
            title: 'Business Articles',
     description:"Business refers to the activities involved in the production, distribution, and exchange of goods and services to meet the needs and demands of customers. It encompasses various aspects such as entrepreneurship, management, marketing, finance, and operations. Businesses play a significant role in the economy, driving innovation, creating job opportunities, and contributing to economic growth. Successful businesses focus on delivering value to customers, adapting to market dynamics, and maintaining strong ethical standards. Understanding business concepts and strategies is essential for entrepreneurs, managers, and anyone interested in the world of commerce."
  },
  {
     name:'health',
    image: 'https://media.istockphoto.com/id/1032637132/photo/a-cup-of-coffee-glasses-and-newspaper-titled-health-medical.jpg?s=612x612&w=0&k=20&c=W52Q_4CXrdJs24wI_5qt4t72Hcs1AzpzkoSzntByUoY=',
      title: 'Health Articles',
     description:"Health encompasses a person's physical, mental, and social well-being. It is not merely the absence of disease but also the presence of positive factors that contribute to overall well-being. Maintaining good health involves adopting a balanced lifestyle that includes regular physical activity, a nutritious diet, adequate sleep, stress management, and preventive healthcare measures such as vaccinations and regular check-ups. Promoting health also involves addressing mental health concerns, fostering positive relationships, and creating supportive environments for individuals and communities."
  },
  {
    name:'technology',
    image: 'https://media.istockphoto.com/id/1143088863/vector/business-communication-internet-blogging-post-flat-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=jLnOWVvd0VmTFt5I7cNABPY863ruLv3EvoqJ3Q7qRr8=',
    title: 'Technology Articles',
   description:"Technology is the application of scientific knowledge for practical purposes. It encompasses a wide range of tools, techniques, and systems that aim to improve our daily lives. In today's fast-paced world, technology plays a crucial role in various sectors such as communication, transportation, healthcare, entertainment, and more. From smartphones and computers to artificial intelligence and robotics, technology continues to advance rapidly, shaping the way we live, work, and interact with the world."
  },
  
  {
    name:'skin',
    image: 'https://media.istockphoto.com/id/1016494284/photo/bathroom-accessories-on-a-green-towel-rubber-ducky-toothbrushes-sea-salt-soap-and-lotion-baby.jpg?s=612x612&w=0&k=20&c=dyVhhxbB3JFQqe8cUnI8U2L_tfzCTqF-lvLx69gmTM8=',
      title: 'Skin Articles',
    description:"Skin is the largest organ of the human body and serves as a protective barrier between our internal organs and the external environment. It plays a vital role in regulating body temperature, protecting against pathogens, and providing sensory information. Taking care of our skin is important for maintaining its health and appearance. This includes practicing good skincare habits, such as cleansing, moisturizing, and protecting the skin from harmful UV rays. Additionally, understanding common skin conditions and seeking appropriate treatment when necessary is crucial for maintaining healthy skin."
  },
]);
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

  const truncateText = (text, maxLines) => {
    const lines = text.split('\n');
    if (lines.length > maxLines) {
      return lines.slice(0, maxLines).join('\n') + '...';
    }
    return text;
  };

  return (
    <div>
      {!serverRes ? (
        <div style={{marginLeft:'1%', marginTop: '2%', float: 'left' }}>
          <Grid container spacing={3} alignItems="stretch" justify="flex-start">
            {Articles.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.title} className={index === 4 ? classes.centeredCard : ''}>
                <Card className={classes.card}>
                  <a href={`/blogs?category=${product.name}`}><CardMedia className={classes.cardImage} image={product.image} alt={product.title} /></a>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                     
                        {product.title}
                  
                    </Typography>
                    <Typography variant="body2" component="p" className={classes.cardDescription}>
                      {truncateText(product.description, 5)}
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
    </div>
  );
};

export default Bottomarticlescards;
