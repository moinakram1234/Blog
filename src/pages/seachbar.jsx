import React, { useState } from 'react';
import { TextField, Typography, List, ListItem, ListItemText, Menu, MenuItem, useMediaQuery } from '@material-ui/core';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleInputChange = async (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    handleMenuClose();
    try {
      const response = await fetch(`http://localhost:5000/suggestions?query=${encodeURIComponent(inputValue)}`);
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const data = await response.json();
      setSuggestions(data);

      if (data.length > 0) {
        handleMenuOpen(event);
      } else {
        handleMenuClose();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

const handleSearch = async (event) => {
  try {
    const response = await fetch(`http://localhost:5000/suggestions?query=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    setSuggestions(data);

    // Show popup box with suggestions
    handleMenuOpen(event);
  } catch (error) {
    console.error('Error:', error);
  }
};


  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);

  return (
    <div>
      <TextField
        label="Search"
        value={query}
        onChange={handleInputChange}
       
        onFocus={handleMenuOpen}
      />

      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {suggestions.length > 0 ? (
          <List>
            {suggestions.map((suggestion) => (
              <MenuItem key={suggestion._id} component="a" href={`/displaysearcharticle?data=${suggestion._id}`}>
                {suggestion.title}
              </MenuItem>
            ))}
          </List>
        ) : (
          <Typography>No suggestions found</Typography>
        )}
      </Menu>
    </div>
  );
};

export default SearchBar;
