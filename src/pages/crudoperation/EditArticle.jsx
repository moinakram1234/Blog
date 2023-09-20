import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const useStyles = makeStyles((theme) => ({
  mainBar: {
    // ... Existing styles for mainBar remains the same
  },
  formContainer: {
    maxWidth: '70%',
    margin: '0 auto',
  },
  // ... Existing styles and other classes remain the same
}));

const EditBlog = () => {
  const classes = useStyles();
  const [name, setname] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [heading1, setHeading1] = useState('');
  const [image1, setImage1] = useState('');
  const [description1, setDescription1] = useState('');
  const [heading2, setHeading2] = useState('');
  const [image2, setImage2] = useState('');
  const [description2, setDescription2] = useState('');
  const [heading3, setHeading3] = useState('');
  const [image3, setImage3] = useState('');
  const [description3, setDescription3] = useState('');
  const [heading4, setHeading4] = useState('');
  const [image4, setImage4] = useState('');
  const [description4, setDescription4] = useState('');
  const [summary, setSummary] = useState('');

  useEffect(() => {
    const articleId = '64c5861a3f1dd0220d54bcdc'; // Replace with the actual ID of the article to be edited

    // Fetch the existing data from the server using the provided ID
    axios
      .get(`http://localhost:5000/getarticle/${articleId}`)
      .then((response) => {
        const { data } = response;
        // Set the states with the existing data received from the API
        setname(data.name);
        setTitle(data.title);
        setDescription(data.description);
        setHeading1(data.heading1);
        setImage1(data.image1);
        setDescription1(data.description1);
        setHeading2(data.heading2);
        setImage2(data.image2);
        setDescription2(data.description2);
        setHeading3(data.heading3);
        setImage3(data.image3);
        setDescription3(data.description3);
        setHeading4(data.heading4);
        setImage4(data.image4);
        setDescription4(data.description4);
        setSummary(data.summary);
      })
      .catch((error) => {
        console.error('Error fetching article data:', error);
      });
  }, []);

  const toolbarOptions = {
    // ... Rest of the existing toolbarOptions remains the same
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Prepare the updated data object to be sent to the server
    const updatedData = {
       // Replace with the actual ID of the article to be edited
      name,
      title,
      description,
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
    };

    // Make an HTTP request to the server to update the data
    axios
      .post('http://localhost:5000/editarticle', updatedData)
      .then((response) => {
        // Handle successful response
        console.log('Article updated successfully:', response.data);
        // You can redirect to a success page or do something else here
      })
      .catch((error) => {
        // Handle error
        console.error('Error updating article:', error);
      });
  };

  return (
    <div
      className="container"
      style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zUhvJROxV6FnpsaCSC9p7jZ_2U4Nz8ei9w&usqp=CAU")', backgroundSize: 'cover', height: '100%' }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Edit Article</h1>
      <form onSubmit={handleSubmit} className={classes.formContainer}>
        {/* Add form fields */}
        <div style={{ marginBottom: '20px' }}>
          <TextField
            label="Enter router name"
            variant="outlined"
            value={name}
            onChange={(event) => setname(event.target.value)}
            fullWidth
            required
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <TextField
            label="Title"
            variant="outlined"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            fullWidth
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <input
            accept="image/*"
            id="image"
            type="file"
            // Add appropriate onChange function to handle image changes
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
            onChange={(event) => setDescription(event.target.value)}
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
        {/* Add the fields for image1 */}
        <div style={{ marginBottom: '20px' }}>
          <ReactQuill
            value={description1}
            onChange={(value) => setDescription1(value)}
            modules={toolbarOptions}
            formats={['header', 'bold', 'italic', 'underline', 'strike', 'link', 'image', 'video', 'list', 'align', 'color', 'background', 'font', 'size']}
            style={{ height: '200px' }}
          />
        </div>
{/* Add the fields for heading2, image2, description2 */}
<div style={{ marginTop: isMobile ? '150px' : '100px' }}>
  <TextField
    label="Heading 2"
    variant="outlined"
    value={heading2}
    onChange={(event) => setHeading2(event.target.value)}
    fullWidth
  />
</div>
<div style={{ marginTop: '20px' }}>
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
  <ReactQuill
    value={description2}
    onChange={(value) => setDescription2(value)}
    modules={toolbarOptions}
    formats={['header', 'bold', 'italic', 'underline', 'strike', 'link', 'image', 'video', 'list', 'align', 'color', 'background', 'font', 'size']}
    style={{ height: '200px' }}
  />
</div>

{/* Add the fields for heading3, image3, description3 */}
<div style={{ marginTop: isMobile ? '150px' : '100px' }}>
  <TextField
    label="Heading 3"
    variant="outlined"
    value={heading3}
    onChange={(event) => setHeading3(event.target.value)}
    fullWidth
  />
</div>
<div style={{ marginTop: '20px' }}>
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
    <Button style={{ marginBottom: '10px' }} variant="contained" color="primary" component="span" fullWidth>
      Upload Image 3
    </Button>
  </label>
</div>
<div style={{ marginBottom: '20px' }}>
  <ReactQuill
    value={description3}
    onChange={(value) => setDescription3(value)}
    modules={toolbarOptions}
    formats={['header', 'bold', 'italic', 'underline', 'strike', 'link', 'image', 'video', 'list', 'align', 'color', 'background', 'font', 'size']}
    style={{ height: '200px' }}
  />
</div>

{/* Add the fields for heading4, image4, description4 */}
<div style={{ marginTop: isMobile ? '150px' : '100px' }}>
  <TextField
    label="Heading 4"
    variant="outlined"
    value={heading4}
    onChange={(event) => setHeading4(event.target.value)}
    fullWidth
  />
</div>
<div style={{ marginTop: '20px' }}>
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
  <ReactQuill
    value={description4}
    onChange={(value) => setDescription4(value)}
    modules={toolbarOptions}
    formats={['header', 'bold', 'italic', 'underline', 'strike', 'link', 'image', 'video', 'list', 'align', 'color', 'background', 'font', 'size']}
    style={{ height: '200px' }}
  />
</div>

        <div style={{ marginBottom: '20px' }}>
          <ReactQuill
            value={summary}
            onChange={(value) => setSummary(value)}
            modules={toolbarOptions}
            formats={['header', 'bold', 'italic', 'underline', 'strike', 'link', 'image', 'video', 'list', 'align', 'color', 'background', 'font', 'size']}
            style={{ height: '200px' }}
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

export default EditBlog;
