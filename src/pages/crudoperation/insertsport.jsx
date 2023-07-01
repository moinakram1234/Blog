import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const InsertBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [schemaName, setSchemaName] = useState('sport');
  const [heading1, setHeading1] = useState('');
  const [image1, setImage1] = useState(null);
  const [description1, setDescription1] = useState('');
  const [heading2, setHeading2] = useState('');
  const [image2, setImage2] = useState(null);
  const [description2, setDescription2] = useState('');
  const [heading3, setHeading3] = useState('');
  const [image3, setImage3] = useState(null);
  const [description3, setDescription3] = useState('');
  const [heading4, setHeading4] = useState('');
  const [image4, setImage4] = useState(null);
  const [description4, setDescription4] = useState('');
  const [summary, setSummary] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    convertImageToBase64(file,setImage);
  };

  const convertImageToBase64 = (file,setImagestate) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagestate(reader.result);
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetch('https://gmblog.onrender.com/insertblogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        image,
        schemaName,
        heading1,
        image1,
        description1,
        heading2,
        image2,
        description2,
        heading3,
        image3,
        description3,
        heading4,
        image4,
        description4,
        summary,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the data as JSON
      })
      .then((data) => {
        setDescription('');
        setTitle('');
        setImage(null);
        setHeading1('');
        setImage1(null);
        setDescription1('');
        setHeading2('');
        setImage2(null);
        setDescription2('');
        setHeading3('');
        setImage3(null);
        setDescription3('');
        setHeading4('');
        setImage4(null);
        setDescription4('');
        setSummary('');
        alert(data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
return (
    <div className="container" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zUhvJROxV6FnpsaCSC9p7jZ_2U4Nz8ei9w&usqp=CAU")', backgroundSize: 'cover', height: '100%' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Create a Sport Blog</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '70%', margin: '0 auto' }}>
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
        <div style={{ marginBottom: '20px' }}>
          <TextField
            label="Description"
            variant="outlined"
            multiline
            rows={20}
            value={description}
            onChange={handleDescriptionChange}
            fullWidth
          />
        </div>
        
        {/* Add the fields for heading1, image1, description1, heading2, image2, description2, heading3, image3, description3, heading4, image4, description4, summary */}
        <div style={{ marginBottom: '20px' }}>
          <TextField
            label="Heading 1"
            variant="outlined"
            value={heading1}
            onChange={(event) => setHeading1(event.target.value)}
            fullWidth
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <input
            accept="image/*"
            id="image1"
            type="file"
            onChange={(event) => {
              const file = event.target.files[0];
              convertImageToBase64(file, setImage1);
            }}
            style={{ display: 'none' }}
          />
          <label htmlFor="image1">
            <Button variant="contained" color="primary" component="span" fullWidth>
              Upload Image 1
            </Button>
          </label>
        </div>
        <div>
          <TextField 
            label="Description 1"
            variant="outlined"
            multiline
            rows={20}
            value={description1}
            onChange={(event) => setDescription1(event.target.value)}
            fullWidth
            
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <TextField
            label="Heading 2"
            variant="outlined"
            value={heading2}
            onChange={(event) => setHeading2(event.target.value)}
            fullWidth
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <input
            accept="image/*"
            id="image2"
            type="file"
            onChange={(event) => {
              const file = event.target.files[0];
              convertImageToBase64(file, setImage2);
            }}
            style={{ display: 'none' }}
          />
          <label htmlFor="image2">
            <Button variant="contained" color="primary" component="span" fullWidth>
              Upload Image 2
            </Button>
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <TextField
            label="Description 2"
            variant="outlined"
            multiline
            rows={20}
            value={description2}
            onChange={(event) => setDescription2(event.target.value)}
            fullWidth
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <TextField
            label="Heading 3"
            variant="outlined"
            value={heading3}
            onChange={(event) => setHeading3(event.target.value)}
            fullWidth
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <input
            accept="image/*"
            id="image3"
            type="file"
            onChange={(event) => {
              const file = event.target.files[0];
              convertImageToBase64(file, setImage3);
            }}
            style={{ display: 'none' }}
          />
          <label htmlFor="image3">
            <Button variant="contained" color="primary" component="span" fullWidth>
              Upload Image 3
            </Button>
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <TextField
            label="Description 3"
            variant="outlined"
            multiline
            rows={20}
            value={description3}
            onChange={(event) => setDescription3(event.target.value)}
            fullWidth
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <TextField
            label="Heading 4"
            variant="outlined"
            value={heading4}
            onChange={(event) => setHeading4(event.target.value)}
            fullWidth
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <input
            accept="image/*"
            id="image4"
            type="file"
            onChange={(event) => {
              const file = event.target.files[0];
              convertImageToBase64(file, setImage4);
            }}
            style={{ display: 'none' }}
          />
          <label htmlFor="image4">
            <Button variant="contained" color="primary" component="span" fullWidth>
              Upload Image 4
            </Button>
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <TextField
            label="Description 4"
            variant="outlined"
            multiline
            rows={20}
            value={description4}
            onChange={(event) => setDescription4(event.target.value)}
            fullWidth
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <TextField
            label="Summary"
            variant="outlined"
            multiline
            rows={20}
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
            fullWidth
          />
        </div>
        {/* End of added fields */}
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default InsertBlog;
