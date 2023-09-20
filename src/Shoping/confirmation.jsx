import React from 'react';
import { Container, Typography } from '@material-ui/core';

const ConfirmationPage = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Order Confirmation
      </Typography>
      <Typography variant="body1">
        Thank you for your order! Your payment has been successfully processed.
      </Typography>
      <Typography variant="body1">
        We will process your order and send it to the provided address.
      </Typography>
    </Container>
  );
};

export default ConfirmationPage;
