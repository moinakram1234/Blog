import React from 'react';
import { Typography, makeStyles, Card, CardContent, CardMedia } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Contactus from './contactus'
import Navbar from './Navbar';
const useStyles = makeStyles((theme) => ({
  root: {
    margin: '5% auto',
    width: '90%',
    maxWidth: '800px',
  },
  section: {
    marginBottom: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  sectionContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '10px 20px',
  },
  sectionHeading: {
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: '5px',
    marginTop: '5%',
  },
  image: {
    width: '100%',
    objectFit: 'contain',
    marginBottom: '20px',
    borderRadius: '10px',
    marginTop: '5%',
  },
  description: {
    fontSize: '16px',
    textAlign: 'justify',
    whiteSpace: 'pre-line',
  },
  summary: {
    fontSize: '16px',
    textAlign: 'justify',
    whiteSpace: 'pre-line',
    marginTop: '20px',
    padding: '10px 20px',
    background: '#f3f3f3',
    borderRadius: '10px',
  },
   quillEditor: {
    border: 'none',
    borderRadius: '10px',
    marginBottom: '20px',
    padding: '10px',
    width: '100%', // Set the editor width to 100%
    maxWidth: '800px', // Limit the maximum width of the editor
    '& .ql-editor': {
     
      
      color: '#333',
      '& img': {
        maxWidth: '100%', // Limit the width of images to fit the editor
        height: 'auto', // Maintain the aspect ratio
      },
    },
    '& .ql-toolbar': {
      border: '1px solid #ccc',
      borderRadius: '8px',
      background: '#f3f3f3',
    },
  },
}));

const ArticleDetails = () => {
  const location = useLocation();
  const articleData = location.state?.articleData || null;
  const classes = useStyles();

  return (
    <div> 
      <Navbar/>
    <div className={classes.root}>
      <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '10px' }}>
        {articleData.title}
      </Typography>

      <Card className={classes.section}>
        <CardMedia
          component="img"
          src={articleData.image}
          alt={articleData.title}
          className={classes.image}
        />
        <CardContent className={classes.sectionContent}>
          {/* Use the react-quill editor for the description */}
          <ReactQuill
            value={articleData.description}
            readOnly={true} // Prevent editing for the description
            className={classes.quillEditor}
            modules={{ toolbar: false }} // Disable the toolbar for the description
          theme='bubble'
          />
        </CardContent>
      </Card>

      {/* Other sections (heading1, heading2, etc.) go here */}
      {articleData.heading1 && (
        <div className={classes.section}>
          <Typography variant="h3" className={classes.sectionHeading}>
            {articleData.heading1}
          </Typography>
          <Card className={classes.section}>
            <CardMedia
              component="img"
              src={articleData.image1}
              alt={articleData.heading1}
              className={classes.image}
            />
            <CardContent className={classes.sectionContent}>
              {/* Use the react-quill editor for heading1's description */}
              <ReactQuill
                value={articleData.description1}
                readOnly={true} // Prevent editing for the description
                className={classes.quillEditor}
                modules={{ toolbar: false }} // Disable the toolbar for the description
              theme='bubble'
              />
            </CardContent>
          </Card>
        </div>
      )}

      {articleData.heading2 && (
        <div className={classes.section}>
          <Typography variant="h3" className={classes.sectionHeading}>
            {articleData.heading2}
          </Typography>
          <Card className={classes.section}>
            <CardMedia
              component="img"
              src={articleData.image2}
              alt={articleData.heading2}
              className={classes.image}
            />
            <CardContent className={classes.sectionContent}>
              {/* Use the react-quill editor for heading2's description */}
              <ReactQuill
                value={articleData.description2}
                readOnly={true} // Prevent editing for the description
                className={classes.quillEditor}
                modules={{ toolbar: false }} // Disable the toolbar for the description
              theme='bubble'
              />
            </CardContent>
          </Card>
        </div>
      )}

   {articleData.heading23 && (
        <div className={classes.section}>
          <Typography variant="h3" className={classes.sectionHeading}>
            {articleData.heading3}
          </Typography>
          <Card className={classes.section}>
            <CardMedia
              component="img"
              src={articleData.image3}
              alt={articleData.heading3}
              className={classes.image}
            />
            <CardContent className={classes.sectionContent}>
              {/* Use the react-quill editor for heading2's description */}
              <ReactQuill
                value={articleData.description3}
                readOnly={true} // Prevent editing for the description
                className={classes.quillEditor}
                modules={{ toolbar: false }} // Disable the toolbar for the description
              theme='bubble'
              />
            </CardContent>
          </Card>
        </div>
      )}
        {articleData.heading4 && (
        <div className={classes.section}>
          <Typography variant="h3" className={classes.sectionHeading}>
            {articleData.heading4}
          </Typography>
          <Card className={classes.section}>
            <CardMedia
              component="img"
              src={articleData.image2}
              alt={articleData.heading4}
              className={classes.image}
            />
            <CardContent className={classes.sectionContent}>
              {/* Use the react-quill editor for heading2's description */}
              <ReactQuill
                value={articleData.description4}
                readOnly={true} // Prevent editing for the description
                className={classes.quillEditor}
             theme={"bubble"}
              />
            </CardContent>
          </Card>
        </div>
      )}


      <Typography variant="body1" className={classes.summary}>
        <h3>
         Summary:</h3><div>  <ReactQuill
                value={articleData.summary}
                readOnly={true} // Prevent editing for the description
                className={classes.quillEditor}
             theme={"bubble"}
              /></div>
      </Typography>
  
    </div>
       <Contactus/></div>
  );
};

export default ArticleDetails;
