import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#f1f1f1',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#ffffff',
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(4),
    color: '#202124',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: '#1a73e8',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#0c65e5',
    },
  },
  errorText: {
    marginTop: theme.spacing(2),
    color: theme.palette.error.main,
  },
}));

const Login = () => {
   const REACT_APP_URL = process.env.REACT_APP_URL;
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Make server request to http://localhost:5000/login with email and password
    fetch(`${REACT_APP_URL} /login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          // Signin successful, redirect to OTP page
          window.location.href = `./otp?email=${encodeURIComponent(email)}`;
        } else {
          // Signin failed, handle error
          setError('Invalid email or password');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('An error occurred during signin');
      });
  };

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="xs">
        <Typography className={classes.title} variant="h4" component="h1" align="center">
          Login
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          {error && <Typography className={classes.errorText} align="center">{error}</Typography>}
          <TextField
            className={classes.textField}
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            fullWidth
            required
          />
          <TextField
            className={classes.textField}
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            fullWidth
            required
          />
          <Button className={classes.button} type="submit" variant="contained" fullWidth>
            Login
          </Button>
          <Typography align="center" variant="body2" style={{ marginTop: '16px' }}>
            Don't have an account?{' '}
            <Link component={RouterLink} to="/signup">
              Sign up
            </Link>
          </Typography>
        </form>
      </Container>
    </div>
  );
};

export default Login;
