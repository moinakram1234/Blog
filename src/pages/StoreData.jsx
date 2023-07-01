import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const StoreBloginfo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    convertImageToBase64(file);
  };

  const convertImageToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

  
 fetch('https://gmblog.onrender.com/insertblogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title,description,image }),
    })
      .then(function (response) {
   
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the data as JSON
      }).then(function (data) {
        setDescription('');
        setTitle('');
        setImage(null)
  alert(data.message);
})

      .catch(function (err) {
        console.log(err);
      });
 
  };

  return (
  <div className="container" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zUhvJROxV6FnpsaCSC9p7jZ_2U4Nz8ei9w&usqp=CAU")', backgroundSize: 'cover',height: '600px' }}>
    <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Create a Blog</h1>
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', background: 'rgba(255, 255, 255, 0.8)', padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={handleTitleChange}
          fullWidth
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <TextField
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          value={description}
          onChange={handleDescriptionChange}
          fullWidth
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <input
          accept="image/*"
          id="image"
          type="file"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
        <label htmlFor="image">
          <Button variant="contained" color="primary" component="span" fullWidth>
            Upload Image
          </Button>
        </label>
      </div>
      <Button variant="contained" color="primary" type="submit" fullWidth>
        Submit
      </Button>
    </form>
  </div>
);

};

export default StoreBloginfo;
