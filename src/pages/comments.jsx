import React, { useState } from 'react';
import {Card, Typography, TextField, Button, makeStyles, Grid } from '@material-ui/core';
import { Height } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    commentinput: {
        width: '20%',
        marginLeft: theme.spacing(100)
    },
    username: {
         marginRight:theme.spacing(130),
         marginTop: theme.spacing(10)
    },
    buttonstyle: {
        //marginTop: theme.spacing(11),
        marginLeft:theme.spacing(5)
    },
    cardstyle: {
        width: theme.spacing(100),
        height: theme.spacing(20),
          margin:'auto',
      

    }
}))


const CommentSection = () => {
    const classes = useStyles();
  // State to store user comments
  const [userComment, setUserComment] = useState('');
  const [comments, setComments] = useState([]);

  // Function to handle user comment submission
  const handleSubmitComment = () => {
    if (userComment.trim() !== '') {
      const newComment = {
        text: userComment,
        timestamp: new Date().toLocaleString(), // Store the current timestamp
      };
      setComments([...comments, newComment]);
      setUserComment('');
    }
  };

  return (
    <div>
      {/* Comments Section */}
          <Typography variant="h6" className={classes.username}>
        User Comments:
      </Typography>
      {/* Display existing comments */}
    
      {/* Input for user to add a new comment */}
          <TextField
              className={classes.commentinput}
        label="Leave a comment"
       
        value={userComment}
        onChange={(e) => setUserComment(e.target.value)}
      />
      {/* Button to submit the comment */}
      <Button className={classes.buttonstyle}  color="primary" onClick={handleSubmitComment}>
        Submit Comment
          </Button>
                <Card className={classes.cardstyle}>
             {comments.map((comment, index) => (
        <Grid container key={index} justifyContent="space-between">
          <Grid style={{marginTop:'30px'}} item>
          
            <Typography variant="body2">
              {comment.text}
            </Typography>
          </Grid>
          <Grid style={{marginTop:'30px'}} item>
            <Typography variant="caption" color="textSecondary">
              {comment.timestamp}
            </Typography>
          </Grid>
        </Grid>
      ))}
     </Card>
    </div>
  );
};

export default CommentSection;
