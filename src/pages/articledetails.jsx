import React from 'react';
import { Typography, makeStyles, Card, CardContent, CardMedia } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    margin: '5% auto',
    width: '90%',
    maxWidth: '800px',
  },
  section: {
    marginBottom: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  sectionContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '10px 20px',
  },
  sectionHeading: {
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: '5px',
    marginTop:'5%'
  },
  image: {
    width: '100%',
 //   height: '200px', // Adjust the height as needed
    objectFit: 'contain', // Display the entire image within the specified height
    marginBottom: '20px',
    borderRadius: '10px',
    marginTop:'5%'
  },
  description: {
    fontSize: '16px',
    textAlign: 'justify',
    whiteSpace: 'pre-line',
  },
  summary: {
    fontSize: '16px',
    textAlign: 'justify',
    whiteSpace: 'pre-line',
    marginTop: '20px',
    padding: '10px 20px',
    background: '#f3f3f3',
    borderRadius: '10px',
  },
}));

const ArticleDetails = () => {
   const location = useLocation();
  const articleData = location.state?.articleData || null;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '10px', }}>
        {articleData.title}
      </Typography>

      <Card className={classes.section}>
        <CardMedia
          component="img"
          src={articleData.image}
          alt={articleData.title}
          className={classes.image}
        />
        <CardContent className={classes.sectionContent}>
          <Typography variant="body1" className={classes.description}>
            {articleData.description}
          </Typography>
        </CardContent>
      </Card>

      <div className={classes.section}>
        <Typography variant="h3" className={classes.sectionHeading}>
          {articleData.heading1}
        </Typography>
        <Card className={classes.section}>
          <CardMedia
            component="img"
            src={articleData.image1}
            alt={articleData.heading1}
            className={classes.image}
          />
          <CardContent className={classes.sectionContent}>
            <Typography variant="body1" className={classes.description}>
              {articleData.description1}
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div className={classes.section}>
        <Typography variant="h3" className={classes.sectionHeading}>
          {articleData.heading2}
        </Typography>
        <Card className={classes.section}>
          <CardMedia
            component="img"
            src={articleData.image2}
            alt={articleData.heading2}
            className={classes.image}
          />
          <CardContent className={classes.sectionContent}>
            <Typography variant="body1" className={classes.description}>
              {articleData.description2}
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div className={classes.section}>
        <Typography variant="h3" className={classes.sectionHeading}>
          {articleData.heading3}
        </Typography>
        <Card className={classes.section}>
          <CardMedia
            component="img"
            src={articleData.image3}
            alt={articleData.heading3}
            className={classes.image}
          />
          <CardContent className={classes.sectionContent}>
            <Typography variant="body1" className={classes.description}>
              {articleData.description3}
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div className={classes.section}>
        <Typography variant="h3" className={classes.sectionHeading}>
          {articleData.heading4}
        </Typography>
        <Card className={classes.section}>
          <CardMedia
            component="img"
            src={articleData.image4}
            alt={articleData.heading4}
            className={classes.image}
          />
          <CardContent className={classes.sectionContent}>
            <Typography variant="body1" className={classes.description}>
              {articleData.tdescription4}
            </Typography>
          </CardContent>
        </Card>
      </div>

      <Typography variant="body1" className={classes.summary}>
        Summary: {articleData.summary}
      </Typography>
    </div>
  );
};

export default ArticleDetails;
