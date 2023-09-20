import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Container,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Paper,
  makeStyles,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PaymentIcon from '@material-ui/icons/Payment';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ImageCompressor from 'image-compressor.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the default styles
import Navbar from '../pages/Navbar';
import Contactus from '../pages/contactus'
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
  },
  colorscheme: {
    color: theme.palette.success.main,
  },
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paymentContainer: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  paymentScreenshotInput: {
    marginTop: theme.spacing(2),
  },
  buyButton: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor:"gray"
    }
  },
}));

const CheckoutPage = () => {
  const classes = useStyles();
  const history = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selecteditem = queryParams.get('selecteditem'); // Get the selecteditem query parameter

  // Parse the selectedItem to JSON
  const selectedItem = JSON.parse(decodeURIComponent(selecteditem)) || [];

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);


const handleimage = async (event) => {
        try {
           const file =event.target.files[0]
      const compressedFile = await new ImageCompressor(file, {
        quality: 0.8,
        maxWidth: 800,
        maxHeight: 600,
        success(result) {
          const reader = new FileReader();
          reader.readAsDataURL(result);
          reader.onloadend = () => {
              setPaymentScreenshot(reader.result);
          };
        },
        error(e) {
          console.log('Image compression failed:', e.message);
        },
      });
    } catch (e) {
      console.log('Image compression failed:', e.message);
    }
    
  };
 
  const handlePaymentComplete = () => {
    // Create an object with the order details
 const order = {
    items: selectedItem,
    name,
    phone,
    address,
    paymentMethod: selectedPaymentMethod,
    paymentScreenshot: paymentScreenshot,
  };
  
  
    // Send the order data to a localhost server (replace with your server URL)
    fetch('http://localhost:5000/submit-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server (e.g., display a confirmation message)
        console.log('Order submitted successfully:', data);
        toast.success('Order submitted successfully');
        setName('');
        setPhone('');
        setAddress('');
        setSelectedPaymentMethod('');
        setPaymentScreenshot(null)
      })
      .catch((error) => {
        console.error('Error submitting order:', error);
      });
  };

  return (<div>
    <Navbar/>
    <Container maxWidth="md" className={classes.container}>
      <Paper elevation={3} className={classes.paper}>
        <Typography className={classes.colorscheme} variant="h4" gutterBottom>
          <ShoppingCartIcon fontSize="large" /> Checkout
        </Typography>
        <TextField
          style={{ width: '50%' }}
          variant="outlined"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          style={{ width: '50%' }}
          variant="outlined"
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment>
              <PhoneIcon/>
              </InputAdornment>
          )
        }}
        />
        <TextField
          style={{ width: '50%' }}
          variant="outlined"
          label="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HomeIcon />
              </InputAdornment>
            ),
          }}
        />
        <FormControl component="fieldset" margin="normal">
          <FormLabel className={classes.colorscheme} component="legend">
            <PaymentIcon /> Select Payment Method
          </FormLabel>
          <RadioGroup
            aria-label="payment-method"
            value={selectedPaymentMethod}
            onChange={(e) => setSelectedPaymentMethod(e.target.value)}
          >
            <FormControlLabel value="cash on delivery" control={<Radio />} label={<span><AttachMoneyIcon /> cash on delivery</span>} />
            <FormControlLabel value="easypaisa" control={<Radio />} label={<span><AttachMoneyIcon /> Easypaisa</span>} />
            <FormControlLabel value="jazzcash" control={<Radio />} label={<span><AttachMoneyIcon /> Jazz Cash</span>} />
            <FormControlLabel value="bank" control={<Radio />} label={<span><AttachMoneyIcon /> Bank Transfer</span>} />
          </RadioGroup>
        </FormControl>
      </Paper>
      {selectedPaymentMethod && (
        <Paper elevation={3} className={`${classes.paperbuy} ${classes.paymentContainer}`}>
         
          {selectedPaymentMethod === 'easypaisa' && (
            <div>
               <Typography className={classes.colorscheme} variant="h6" gutterBottom>
            <AttachMoneyIcon /> Payment Instructions
              </Typography>
               <Typography variant="body1" paragraph>
              Transfer the total amount to the provided Easypaisa number: 03088581199
              Once payment is complete, upload a screenshot and click the "Buy" button below.
            </Typography>
            </div>
           
          )}
          {selectedPaymentMethod === 'jazzcash' && (
             <div>
               <Typography className={classes.colorscheme} variant="h6" gutterBottom>
            <AttachMoneyIcon /> Payment Instructions
              </Typography>
            <Typography variant="body1" paragraph>
              Transfer the total amount to the provided Jazz Cash number: 03088581199
              Once payment is complete, upload a screenshot and click the "Buy" button below.
            </Typography></div>
          )}
          {selectedPaymentMethod === 'bank' && (
             <div>
               <Typography className={classes.colorscheme} variant="h6" gutterBottom>
            <AttachMoneyIcon /> Payment Instructions
              </Typography>
            <Typography variant="body1" paragraph>
                Make a bank transfer to the provided bank account details.
                AccountID: 20384777282748
              Once payment is complete, upload a screenshot and click the "Buy" button below.
            </Typography></div>
          )}
          {
            selectedPaymentMethod !== 'cash on delivery' && (
              <div>
                 <InputLabel htmlFor="payment-screenshot" className={classes.paymentScreenshotInput}>
            <CloudUploadIcon /> Payment Screenshot
          </InputLabel>
          <input style={{display:'none'}}
            type="file"
            id="payment-screenshot"
            accept="image/*"
            onChange={handleimage}
          />
              </div>
            )
         }
          <Button
            variant="contained"
            color="primary"
            onClick={handlePaymentComplete}
            className={classes.buyButton}
          >
            <ShoppingCartIcon />
            Buy
          </Button>
        </Paper>
      )}
       <ToastContainer position="top-center" />
    </Container>
    <Contactus/>
  </div>
  );
};

export default CheckoutPage;
