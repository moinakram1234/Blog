import React, { useState, useEffect } from 'react';
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
import SearchBar from '../pages/seachbar';

function NavbarAdmin() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Custom logic here
      event.preventDefault();
      // Returning an empty string is necessary to trigger the browser's default dialog
      event.returnValue = '';
    };

    const logout = () => {
      // Custom logout logic
      // Perform any necessary actions before logging out
    };

    const logoutButtonClick = () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      logout();
    };

    const logoutButton = document.getElementById('logout-button');
    logoutButton.addEventListener('click', logoutButtonClick);

    return () => {
      logoutButton.removeEventListener('click', logoutButtonClick);
    };
  }, []);

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
            
            
          </div>

          {isMobile ? (
            <div style={{ flexGrow: 1 }}>
              <SearchBar />
            </div>
          ) : (
            <SearchBar />
          )}

          {isMobile ? (
            <>
              <Button color="inherit" onClick={handleMenuClick2} style={{ marginLeft: 'auto' }}>
                Menu
              </Button>
          
            </>
          ) : (
            <>
              
              <Button style={{marginLeft:'70%'}} className={classes.btnhver} color="inherit">
                <Link id="logout-button" className={classes.a} to="/">
                  Logout
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavbarAdmin;
