import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import  {YouTube,Facebook,Twitter,LinkedIn,Instagram,Email}  from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 1200, // Increase the maximum width
    maxHeight: 300, // Increase the maximum height
    margin: '0 auto',
    boxShadow: '0 4px 6px gray',
    backgroundColor: 'lightgray',
  },
  content: {
    padding: theme.spacing(2),
  },
  title: {
      fontWeight: 'bold',
      margin:theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  description: {
    color: '#888',
    },
    icon: {
        marginLeft: theme.spacing(3)
  }
}));

const MyCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography variant="h6" className={classes.title}>
                  <div> 
                      <Facebook className={classes.icon} />
                      <Twitter  className={classes.icon} />
                      <YouTube  className={classes.icon} />
                      <LinkedIn  className={classes.icon}  />
                      <Instagram className={classes.icon}/>
                      <Email className={classes.icon}/>
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
