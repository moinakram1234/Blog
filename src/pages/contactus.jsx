import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import { YouTube, Facebook, Twitter, LinkedIn, Instagram, Email } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 1200,
    maxHeight: 300,
    margin: '0 auto',
    boxShadow: '0 4px 6px gray',
    backgroundColor: 'lightgray',
  },
  content: {
    padding: theme.spacing(2),
  },
  title: {
    fontWeight: 'bold',
    margin: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  description: {
    color: '#888',
  },
  icon: {
    marginLeft: theme.spacing(3),
    color:'#0091f0',
    borderRadius:'10px',
    cursor: 'pointer', // Add a cursor to indicate that the icon is clickable
     '&:hover': {
      boxShadow: '-5px 5px 5px 2px rgba(0.8, 0.6, 1, 0.6)' /* Change the box-shadow on hover */
    ,backgroundColor:'white'
     }
  },
}));

const MyCard = () => {
   const URL = process.env.URL;
  const classes = useStyles();
  const emailLink = 'mailto:noorsyen@gmail.com'; // Use mailto: to open the default email client

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography variant="h6" className={classes.title}>
          <div> 
            <Facebook className={classes.icon} />
            <Twitter className={classes.icon} />
            <YouTube className={classes.icon} />
            <LinkedIn className={classes.icon}  />
            <Instagram className={classes.icon} />
            <a href={emailLink}>
              <Email className={classes.icon} />
            </a>
          </div>
        </Typography>
        <Typography variant="body2" className={classes.description}>
          This is a sample card description. You can customize it as per your needs.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MyCard;
