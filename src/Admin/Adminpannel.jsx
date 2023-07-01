import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { color } from 'framer-motion';
const useStyles = makeStyles((theme) => ({
  adminButton: {
    marginRight: theme.spacing(1),
    background: 'linear-gradient(to right, #FFD700, #FFA500)',
    color: '#FFF',
    '&:hover': {
      background: 'linear-gradient(to right, #FFA500, #FFD700)',
    },
  },
  deleteButton: {
    background: 'linear-gradient(to right, #FF0000, #B22222)',
    color: '#FFF',
    '&:hover': {
      background: 'linear-gradient(to right, #B22222, #FF0000)',
      },

  },
  pageContainer: {
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zUhvJROxV6FnpsaCSC9p7jZ_2U4Nz8ei9w&usqp=CAU")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const AdminPanel = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleButtonClick = (action) => {
    // Handle button click based on the action
    switch (action) {
      case 'insert-blog':
        // Logic for inserting a blog
        break;
      case 'update-blog-news':
            
        break;
      case 'insert-business-blog':
        // Logic for inserting a business blog
        break;
      case 'insert-health-blog':
        // Logic for inserting a health blog
        break;
      case 'insert-technology-blog':
        // Logic for inserting a technology blog
        break;
      case 'insert-sport-blog':
        // Logic for inserting a sport blog
        break;
      case 'insert-skin-care-blog':
        // Logic for inserting a skin care blog
        break;
      case 'delete-blog':
        // Logic for deleting a blog
        break;
      default:
        break;
    }
    setAnchorEl(null);
  };

  return (
     <div className={classes.pageContainer}>
          <h1 style={{marginTop:'-30%',marginLeft:'0%',position:'absolute'}}>Admin Panel</h1>
      <Button 
        aria-controls="insert-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.adminButton}
      >
        Insert
      </Button>
      <Menu
        id="insert-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link style={{textDecoration:'none', color:'black'}} to="/addarticles"><MenuItem>Blog</MenuItem></Link>
        <Link style={{textDecoration:'none', color:'black'}} to="/insertbusinessblog"><MenuItem>Business Blog</MenuItem></Link>
        <Link style={{textDecoration:'none', color:'black'}} to="/inserthealthblog"><MenuItem>Health Blog</MenuItem></Link>
        <Link style={{textDecoration:'none', color:'black'}} to="/inserttechnologyblog"><MenuItem >Technology Blog</MenuItem></Link>
        <Link style={{textDecoration:'none', color:'black'}} to="/insertsportblog"><MenuItem>Sport Blog</MenuItem></Link>
        <Link style={{textDecoration:'none', color:'black'}} to="/insertskinblog"><MenuItem>Skin Care Blog</MenuItem></Link>
      </Menu>
      <Button className={classes.adminButton}>
        <Link style={{textDecoration:'none',color:'white'}} to="/updatecard">Update Blog News</Link>
      </Button>
      <Button onClick={() => handleButtonClick('delete-blog')} className={`${classes.adminButton} ${classes.deleteButton}`}>
        Delete Blog
      </Button>
    </div>
  );
};

export default AdminPanel;
