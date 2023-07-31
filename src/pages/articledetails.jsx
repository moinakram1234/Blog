import {React,useEffect,useState} from 'react';
import { Typography, makeStyles, Card, CardContent, CardMedia,useMediaQuery } from '@material-ui/core';
import DarkIcon from '@material-ui/icons/Brightness4'
import WbSunnyIcon from '@material-ui/icons/WbSunny'; 
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Contactus from './contactus'
import Navbar from './Navbar';
import Translation from './translater';
const useStyles = makeStyles((theme) => ({
  root: {
    margin: '5% auto',
    width: '90%',
    maxWidth: '800px',
  },
  //dark root
    rootdart: {
    margin: '5% auto',
    width: '90%',
      maxWidth: '800px',
     backgroundColor: '#333333',
    color: '#ffffff',
  },
    
  section: {
    marginBottom: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    
  },
  //dark section
  sectiondark: {
    marginBottom: '20px',
    boxShadow: '0px 10px 18px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
       backgroundColor: '#333333',
    color: '#ffffff',
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
    fontSize: '12px',
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
  //dark summary
   summarydark: {
     fontSize: '16px',
  boxShadow: '0px 10px 18px rgba(0, 0, 0, 0.1)',
    textAlign: 'justify',
    whiteSpace: 'pre-line',
    marginTop: '20px',
    padding: '10px 20px',
    background: '#f3f3f3',
     borderRadius: '10px',
         backgroundColor: '#333333',
    color: '#ffffff',
  },
  quillEditor: {

    border: 'none',
    borderRadius: '10px',
    marginBottom: '20px',
    padding: '10px',
    width: '100%', // Set the editor width to 100%
    maxWidth: '800px', // Limit the maximum width of the editor
    '& .ql-editor': {
     
      
      color: 'black',
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
  //dark mode
  quillEditordark: {
    backgroundColor: '#333333',
   
    border: 'none',
    borderRadius: '10px',
    marginBottom: '20px',
    padding: '10px',
    width: '100%', // Set the editor width to 100%
    maxWidth: '800px', // Limit the maximum width of the editor
    '& .ql-editor': {
     
      
       color: '#ffffff',
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

   lightTheme: {
    backgroundColor: '#ffffff',
    color: '#333333',
  },

  // Dark theme
  darkTheme: {
    backgroundColor: '#333333',
    color: '#ffffff',
  },
}));
 
const ArticleDetails = () => {
 
  const classes = useStyles();
   const REACT_APP_URL = process.env.REACT_APP_URL;
  const [articleData, setArticleData] = useState({});
  const [changetheme, setTheme] = useState(false);
  const { name } = useParams();
  const ismobile = useMediaQuery('(max-width:600px)');
  useEffect(() => {
    
    fetch(`${REACT_APP_URL}/singlearticle`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Article details response:', data);
        setArticleData(data);
      })
      .catch((error) => {
        console.error('Error requesting article details:', error);
      });
  }, [name]); // Only re-run the effect if _id changes

const handleThemeToggle = () => {
    setTheme((prevState) => !prevState);
  };

  return (
  <div className={changetheme ? classes.darkTheme : classes.lightTheme}>
      <Navbar />
      <div style={{marginTop: '30px'}}>
        <Translation changetheme={changetheme} />
     </div>
      <div className={changetheme ? classes.rootdart : classes.root}>
         <button style={{marginLeft:ismobile?'80%':'116%',marginTop:ismobile?'20%':'5%'}} onClick={handleThemeToggle}>
          {changetheme ?<WbSunnyIcon/>:<DarkIcon/> }
        </button>
      <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: '10px' }}>
        {articleData.title}
      </Typography>

      <Card className={changetheme?classes.sectiondark:classes.section}>
        <CardMedia
          component="img"
          src={articleData.image}
          alt={articleData.title}
          className={classes.image}
        />
        <CardContent className={classes.sectionContent}>
          {/* Use the react-quill editor for the description */}
            <Typography className={classes.description}>
               {articleData.description}
          </Typography>
        </CardContent>
      </Card>

      {/* Other sections (heading1, heading2, etc.) go here */}
      {articleData.heading1 && (
        <div className={changetheme?classes.sectiondark:classes.section}>
          <Typography variant="h3" className={classes.sectionHeading}>
            {articleData.heading1}
          </Typography>
          <Card className={changetheme?classes.sectiondark:classes.section}>
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
                className={changetheme?classes.quillEditordark:classes.quillEditor}
                modules={{ toolbar: false }} // Disable the toolbar for the description
              theme='bubble'
              />
            </CardContent>
          </Card>
        </div>
      )}

      {articleData.heading2 && (
        <div className={changetheme?classes.sectiondark:classes.section}>
          <Typography variant="h3" className={classes.sectionHeading}>
            {articleData.heading2}
          </Typography>
          <Card className={changetheme?classes.sectiondark:classes.section}>
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
                className={changetheme?classes.quillEditordark:classes.quillEditor}
                modules={{ toolbar: false }} // Disable the toolbar for the description
              theme='bubble'
              />
            </CardContent>
          </Card>
        </div>
      )}

   {articleData.heading23 && (
        <div className={changetheme?classes.sectiondark:classes.section}>
          <Typography variant="h3" className={classes.sectionHeading}>
            {articleData.heading3}
          </Typography>
          <Card className={changetheme?classes.sectiondark:classes.section}>
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
                className={changetheme?classes.quillEditordark:classes.quillEditor}
                modules={{ toolbar: false }} // Disable the toolbar for the description
              theme='bubble'
              />
            </CardContent>
          </Card>
        </div>
      )}
        {articleData.heading4 && (
        <div className={changetheme?classes.sectiondark:classes.section}>
          <Typography variant="h3" className={classes.sectionHeading}>
            {articleData.heading4}
          </Typography>
          <Card className={changetheme?classes.sectiondark:classes.section}>
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
                className={changetheme?classes.quillEditordark:classes.quillEditor}
             theme={"bubble"}
              />
            </CardContent>
          </Card>
        </div>
      )}


      <Typography variant="body1" className={changetheme?classes.summarydark:classes.summary}>
        <h3>
         Summary:</h3><div>  <ReactQuill
                value={articleData.summary}
                readOnly={true} // Prevent editing for the description
                className={changetheme?classes.quillEditordark:classes.quillEditor}
             theme={"bubble"}
              /></div>
      </Typography>
  
    </div>
       <Contactus/></div>
  );
};

export default ArticleDetails;
