import React, { useState,useEffect } from 'react';
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  makeStyles,
  DialogTitle,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import Contactus from '../pages/contactus'
import Navbar from '../pages/Navbar';
import {
  DeleteForever as DeleteForeverIcon,
  ShoppingCart as ShoppingCartIcon,
} from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import ProductList from './Amazon';
const useStyles = makeStyles((theme) => ({
  addToCartButton: {
    backgroundColor: theme.palette.success.light,
    '&:hover': {
      backgroundColor: 'green',
    },
  },
  buy: {
    backgroundColor: theme.palette.success.main,
    color: 'white',
  },
  close: {
    backgroundColor: 'red',
    color: 'white',
  },
}));

const ShoppingComponent = () => {
  const [items, setItems] = useState([ ]);
  useEffect(() => {
    fetch('http://localhost:5000/showstoredata')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching store data:', error));
  }, []);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [existingCartItem, setExistingCartItem] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [quantity, setquantity] = useState(1);
   const [selectedproducts, setselectedproducts] = useState('products');
  const ismobile=useMediaQuery('(max-width:600px)')
  const classes = useStyles();
const history = useNavigate();
  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((cartItem) => {
      const item = items.find((item) => item.id === cartItem.id);
      total += item.price * cartItem.quantity;
    });
    return total;
  };

  const addToCart = (item, quantity) => {
    const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setExistingCartItem(item);
      setShowMessage(true);
      setquantity(1);
    } else {
      const cartItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: quantity,
      };
      setCart([...cart, cartItem]);
      setTotalPrice(calculateTotalPrice());
      setquantity(1);
    }
  };

  const removeFromCart = (cartItem) => {
    const updatedCart = cart.filter((item) => item.id !== cartItem.id);
    setCart(updatedCart);
    setTotalPrice(calculateTotalPrice());
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowMessage(false);
  };
    const products = () => {
      setselectedproducts('product');
  };
  const Amazon = () => {
      setselectedproducts('amazonproduct');
  };
  return (
    <div>
      <Navbar />

           <div    style={{ position: 'fixed', marginLeft:ismobile?'80%': '90%', marginTop:ismobile?'-10px':'0' }}>
        
        <Button
            variant="outlined"
            color="primary"
            onClick={openModal}
          >
            <ShoppingCartIcon />
          </Button>
        </div>
      <Container style={{ marginTop: '100px' }}>
        <div style={{ display: 'flex', marginBottom: '50px', color: 'green' }}>
            <Button style={{ color: 'green' }} onClick={Amazon}>Amazon Products</Button> 
        <Button style={{ color: 'green' }} onClick={products}>Products</Button> 
      </div>
        {selectedproducts === 'product' && (
          <div>
                {showMessage && existingCartItem && (
          <Typography variant="body2" color="error" gutterBottom>
            {`${existingCartItem.name} is already in the cart.`}
          </Typography>
        )}

        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <div>
                <img style={{width:'50%'}} src={item.image} alt={item.name} />
                <Typography variant="h6" gutterBottom>
                  {item.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Price: ${item.price}
                </Typography>
                <TextField
                  type="number"
                  label="Quantity"
                  value={item.quantity}
                  onChange={(e) => {
                    const newQuantity = parseInt(e.target.value);
                   
                      setquantity(newQuantity);
                  }}
                  InputProps={{ inputProps: { min: 1 } }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(item, quantity)}
                  className={classes.addToCartButton}
                >
                  Add to Cart
                </Button>
              </div>
            </Grid>
          ))}
        </Grid>
   
        <Dialog open={isModalOpen} onClose={closeModal} fullWidth maxWidth="sm">
          <DialogTitle>Your Cart</DialogTitle>
          <DialogContent>
            <List>
              {cart.map((cartItem) => {
                const item = items.find((item) => item.id === cartItem.id);
                return (
                  <ListItem key={cartItem.id}>
                    <ListItemText
                      primary={`${item.name} (Quantity: ${cartItem.quantity})`}
                      secondary={`$${item.price}`}
                    />
                    <Button
                      color="primary"
                      onClick={() => removeFromCart(cartItem)}
                    >
                      <DeleteForeverIcon style={{ color: 'red' }} />
                    </Button>
                  </ListItem>
                );
              })}
            </List>
            <Typography variant="h6" gutterBottom>
              Total Price: ${calculateTotalPrice()}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              className={classes.buy}
              variant="outlined"
            onClick={() => history(`/checkout?selecteditem=${JSON.stringify(cart)}`)}

            >
              Buy
            </Button>
            <Button
              className={classes.close}
              onClick={closeModal}
              variant="outlined"
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
          </div>
        )}
        {selectedproducts === 'amazonproduct' && (
          <div>
           <ProductList/>
          </div>
        )}
      </Container>
      <br style={{marginTop:'100px'}}></br>
      <Contactus/>
    </div>
  );
};

export default ShoppingComponent;
