import React, { useState } from 'react';
import { TextField, List, ListItem, ListItemText } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

const SearchBar = () => {
   const REACT_APP_URL = process.env.REACT_APP_URL;
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (event, value) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    try {
      const response = await fetch(`${REACT_APP_URL}/suggestions?query=${encodeURIComponent(inputValue)}`);
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const data = await response.json();
      console.log(data); // Check the response data in the console
      setSuggestions(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Autocomplete style={{width:'200px'}}
        options={suggestions}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            value={query}
            onChange={handleInputChange}
          />
        )}
        renderOption={(option) => (
          <ListItem
            component="a"
            href={`/articledetails/${option.name}`} style={{ color: 'green' }}
           
          >
            <ListItemText primary={option.title} />
          </ListItem>
        )}
      />
    </div>
  );
};

export default SearchBar;
