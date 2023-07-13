import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
const useStyles = makeStyles((theme) => ({
  // Existing styles...

  // New styles
  socialButton: {
    marginTop: theme.spacing(2),
    backgroundColor: '#DB4437',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#C33228',
    },
  },
}));

const Signup = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    // Add your password validation logic here
    return password.length >= 6;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate email
    if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      return;
    }

    // Validate password
    if (!validatePassword(password)) {
      setPasswordError('Password should be at least 6 characters long');
      return;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }

    // Make server request to http://localhost:5000/signup with email, password, firstName, and lastName
    fetch('http://localhost:5000/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password, firstName, lastName }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle signup success or failure
        alert(data.message);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleGoogleSignup = () => {
    // Implement Google signup logic here
    alert('Signup with Google');
  };

  return (
    <div>
      <Container className={classes.container} maxWidth="xs">
        <Typography className={classes.title} variant="h4" component="h1" align="center">
          Signup
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            className={classes.textField}
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={handleFirstNameChange}
            fullWidth
            margin="normal"
          />
          <TextField
            className={classes.textField}
            label="Last Name"
            variant="outlined"
            value={lastName}
            onChange={handleLastNameChange}
            fullWidth
            margin="normal"
          />
          <TextField
            className={classes.textField}
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            fullWidth
            margin="normal"
            error={emailError !== ''}
            helperText={emailError}
          />
          <TextField
            className={classes.textField}
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            fullWidth
            margin="normal"
            error={passwordError !== ''}
            helperText={passwordError}
          />
          <TextField
            className={classes.textField}
            label="Confirm Password"
            variant="outlined"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            fullWidth
            margin="normal"
            error={confirmPasswordError !== ''}
            helperText={confirmPasswordError}
          />
          <Button
            className={classes.button}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Signup
          </Button>
          <Button
            className={classes.socialButton}
            variant="contained"
            fullWidth
            onClick={handleGoogleSignup}
          >
            Signup with Google
          </Button>
          <Typography className={classes.loginLink} align="center">
            Already have an account?{' '}
            <Link component={RouterLink} to="/login">
              Login
            </Link>
          </Typography>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
