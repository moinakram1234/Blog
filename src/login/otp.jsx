import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Typography,
  Container,
  Grid,
  TextField,
  makeStyles,
  Button
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  heading: {
    marginBottom: theme.spacing(4),
  },
  inputField: {
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(1),
  },
  message: {
    marginBottom: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
    resendLink: {
      marginLeft: theme.spacing(40),
      marginTop:theme.spacing(-5),
     backgroundColor: 'white',
    color: 'blue',
    padding: '2px 2px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px',
    cursor: 'pointer',
  },
}));

const OTP = () => {
  const classes = useStyles();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const data = queryParams.get('email');
  const [email, setEmail] = useState(data);
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [resendTimeout, setResendTimeout] = useState(null);

  const sendOTP = async () => {
    try {
      // Send the email to the server
      const response = await fetch('http://localhost:5000/sendOTP', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('OTP sent successfully');
        // Clear the previous timeout if exists
        // Set a new timeout to send OTP after 30 seconds
      } else {
        setMessage('Error sending OTP');
      }
    } catch (error) {
      console.error(error);
      setMessage('Error sending OTP');
    }
  };

  const handleVerifyOTP = async () => {
    try {
      // Verify the OTP on the server
      const response = await fetch('http://localhost:5000/verifyOTP', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });
      
      if (response.ok) {
        setMessage('OTP verified successfully');
         window.location.href = `./admin`;
      } else {
        setMessage('Invalid OTP');
      }
    } catch (error) {
      console.error(error);
      setMessage('Error verifying OTP');
    }
  };
 const handleResendOTP = () => {
    sendOTP();
  };
  return (
    <Container maxWidth="xs" className={classes.container}>
      <Typography variant="h4" component="h1" className={classes.heading}>
        OTP Verification
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Email"
            type="email"
            value={email}
            disabled
            fullWidth
            className={classes.inputField}
          />
        </Grid>
         <button
            className={classes.resendLink}
            onClick={handleResendOTP}
          >
            Resend OTP
          </button>
        <Grid item xs={12}>
          <TextField
            label="OTP"
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            fullWidth
            className={classes.inputField}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className={classes.message}>
            {message}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleVerifyOTP}
            fullWidth
          >
            Verify OTP
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OTP;
