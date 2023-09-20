import React, { useState } from 'react';
import axios from 'axios';
import ImageCompressor from 'image-compressor.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the default styles
import {
  Container,
  TextField,
  Button,
  Typography,
  makeStyles,
  TextareaAutosize,
  Input,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginLeft: theme.spacing(50),
    width:'30%',
    display: 'flex',
    flexDirection: 'column',
        alignItems: 'center',
      
        position:'absolute',
marginTop:'-12%',
  },
  form: {
     display: 'flex',
    flexDirection: 'column',
      alignItems: 'center',
    
    width:'100%'
  },
}));

const AddDataComponent = () => {
  const classes = useStyles();
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };


    const handleImageChange = async (event) => {
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
              setImage(reader.result);
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
const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await axios.post('http://localhost:5000/adddata', {
      "id":id,
      "name":name,
      "price":price,
      "image":image,
    });
    console.log(response.data); // Display response message
    // Clear the form after successful submission
    toast.success(response.data.message);
    setId(0);
    setName('');
    setPrice(0);
    setImage(null);
  } catch (error) {
    console.error('Error storing item:', error);
  }
};

  return (
    <Container className={classes.formContainer}>
      <Typography variant="h4" gutterBottom>
        Add Item Data
      </Typography>
      <form  onSubmit={handleSubmit}>
              <div className={classes.form}>
                  <TextField variant='outlined' style={{width:'100%', marginTop:'20px'}}
          label="ID"
          type="number"
          value={id}
          onChange={handleIdChange}
        />
        <TextField variant='outlined' style={{width:'100%', marginTop:'20px'}}
          label="Name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <TextField variant='outlined' style={{width:'100%', marginTop:'20px'}}
          label="Price"
          type="number"
          value={price}
          onChange={handlePriceChange}
        />
        <Input    style={{ display: 'none'}}
          accept="image/*"
          id="image"
          type="file"
          onChange={handleImageChange}
         
        />
        </div>
              <div style={{width:'100%', marginTop:'20px'}}>
                    <label htmlFor="image">
          <Button variant="contained"  component="span">
            Upload Image
          </Button>
        </label>
        <Button type="submit" variant="contained" color="primary" style={{ marginLeft:'20px'}}>
          Add Item
        </Button>
      </div>
      </form> <ToastContainer position="top-center" />
    </Container>
  );
};

export default AddDataComponent;
