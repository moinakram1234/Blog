import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  useMediaQuery,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import useStyles from '../Styles/Navbarstyle';
import SearchBar from './seachbar';
function Navbar() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [anchorEl, setAnchorEl] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);
  const [searchText, setSearchText] = useState('');

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


 const handleMenuClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleMenuClose2 = () => {
    setAnchorEl2(null);
  };


  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <AppBar style={{ width: '100%' }}>
        <Toolbar>
          <div>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              style={{ maxHeight: '50%', width: '250px' }} // Adjust the width and height as per your requirement
            >
              <MenuItem onClick={handleMenuClose}>
                 <Link  style={{ color: 'black' }} className={classes.a} to="/blogs?category=health">
                Health
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                  <Link style={{ color: 'black' }}  className={classes.a} to="/blogs?category=business">
                Business
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link  style={{ color: 'black' }} className={classes.a} to="/blogs?category=technology">
                Technologies
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                  <Link  style={{ color: 'black' }} className={classes.a} to="/blogs?category=sport">
                Sports
                </Link>
              </MenuItem>
               <MenuItem onClick={handleMenuClose}>
                  <Link  style={{ color: 'black' }} className={classes.a} to="/blogs?category=skin">
                Skin cares
                </Link>
              </MenuItem>
            </Menu>
          </div>

          {isMobile ? (
            <div style={{ flexGrow: 1 }}>
            <SearchBar/>
            </div>
          ) : (
           <SearchBar/>
          )}

          {isMobile ? (
            <>
            
                 <Button color="inherit" onClick={handleMenuClick2} style={{ marginLeft: 'auto' }}>
              Menu
            </Button>
             <Menu
              anchorEl={anchorEl2}
              open={Boolean(anchorEl2)}
              onClose={handleMenuClose2}
              style={{ maxHeight: '50%', width: '250px' }} // Adjust the width and height as per your requirement
            >
              <MenuItem onClick={handleMenuClose} >
               <Link className={classes.a} to="/" style={{ color: 'black' }}>
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                 <Link className={classes.a} to="/categories" style={{ color: 'black' }}>
                  Categories
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
              <Link className={classes.a} to="/aboutus" style={{ color: 'black' }}>
                  About
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link className={classes.a} to="/articles" style={{ color: 'black' }}>
                  Articles
                </Link>
                </MenuItem>
                 <MenuItem onClick={handleMenuClose}>
                <Link className={classes.a} to="/login" style={{ color: 'black' }}>
                  Login
                </Link>
              </MenuItem>
            </Menu></>
          ) : (
            <>
              <Button className={classes.btnhver} color="inherit">
                <Link className={classes.a} to="/">
                  Home
                </Link>
              </Button>
              <Button className={classes.btnhver} color="inherit">
                <Link className={classes.a} to="/categories">
                  Categories
                </Link>
              </Button>
              <Button className={classes.btnhver} color="inherit">
                <Link className={classes.a} to="/aboutus">
                  About
                </Link>
              </Button>
              <Button className={classes.btnhver} color="inherit">
                <Link className={classes.a} to="/articles">
                Articles
                </Link>
                </Button>
                    <Button className={classes.btnhver} color="inherit">
                <Link className={classes.a} to="/login">
                Login
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
