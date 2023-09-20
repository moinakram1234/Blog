import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Select, MenuItem, FormControl, Button, Grid, Box, IconButton, Dialog, DialogContent, DialogTitle, DialogActions,useMediaQuery } from '@material-ui/core';
import { Switch } from '@material-ui/core';
import { Translate } from '@material-ui/icons';

const Translation = (props) => {
  const [inputText, setInputText] = useState('');
  const [inputLanguage, setInputLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('es');
  const [translationResult, setTranslationResult] = useState('');
  const [isToggle, setIsToggle] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const translatecolor = props.changetheme ? 'white' : 'blue';
  const ismobile = useMediaQuery('(max-width:600px)');
  const REACT_APP_URL = process.env.REACT_APP_URL;
  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
      setShowPopup(false);
      setInputText('');
      setTranslationResult('');
  };

   useEffect(() => {
    // Perform translation when inputText or targetLanguage changes
    if (inputText.trim() !== '') {
      const requestBody = {
        text: inputText,
        inputLanguage:  inputLanguage,
        targetLanguage: targetLanguage,
      };

      axios.post(`${REACT_APP_URL}/translate`, requestBody)
        .then(response => {
          setTranslationResult(response.data.translatedText);
        })
        .catch(error => {
          console.error('Translation error:', error);
        });
    } else {
      setTranslationResult('');
    }
  }, [inputText, inputLanguage, targetLanguage, isToggle]);

 const handleLanguageSwitch = () => {
  // Using a timer to differentiate between single and double clicks
  const delay = 300; // Adjust this value as needed
  setIsToggle(true); // Set to true for the first click

  setTimeout(() => {
    if (isToggle) {
      // If isToggle is still true, it means this is a single click
      setIsToggle(false); // Reset the toggle
    } else {
      // If isToggle is false, it means this is a double click
      setIsToggle(false); // Reset the toggle
      setInputText(translationResult);
      setInputLanguage(targetLanguage);
      setTargetLanguage(inputLanguage);
    }
  }, delay);
};


  return (
    <div>
      <Button style={{ position: 'fixed', marginTop:ismobile?'85%': '33%', marginLeft:ismobile?'35%': '40%', color: translatecolor }} onClick={handleButtonClick}>
        <Translate />
      </Button>
      <Dialog open={showPopup} onClose={handlePopupClose} fullWidth maxWidth="md">
        <DialogTitle>
        </DialogTitle>
        <DialogContent>
      
  <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={5}>
        <Box textAlign="center" mb={2}>
       
          <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
           
            <Select value={inputLanguage} onChange={(e) => setInputLanguage(e.target.value)}>
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="es">Spanish</MenuItem>
              <MenuItem value="fr">French</MenuItem>
              <MenuItem value="de">German</MenuItem>
              <MenuItem value="zh">Chinese</MenuItem>
              <MenuItem value="ja">Japanese </MenuItem>
              <MenuItem value="ru">Russian</MenuItem>
              <MenuItem value="ar">Arabic</MenuItem>
              <MenuItem value="hi">Hindi</MenuItem>
              <MenuItem value="pt">Portuguese</MenuItem>
              <MenuItem value="bn">Bengali</MenuItem>
              <MenuItem value="ur">Urdu </MenuItem>
              <MenuItem value="it">Italian</MenuItem>
              <MenuItem value="ko">Korean</MenuItem>
              <MenuItem value="tr">Turkish</MenuItem>
              <MenuItem value="nl">Dutch</MenuItem>
              <MenuItem value="vi">Vietnamese</MenuItem>
              <MenuItem value="pl">Polish </MenuItem>
              <MenuItem value="th">Thai</MenuItem>
              <MenuItem value="id">Indonesian</MenuItem>
              {/* Add more language options as needed */}
            </Select>
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <TextField
              multiline
              rows={6}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text to translate..."
              variant="outlined"
            />
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={12} md={1}>
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
          <IconButton onClick={handleLanguageSwitch}>
            <Switch />
          </IconButton>
        </Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box textAlign="center" mb={2}>
         
          <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
            
            <Select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}>
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="es">Spanish</MenuItem>
              <MenuItem value="fr">French</MenuItem>
              <MenuItem value="de">German</MenuItem>
              <MenuItem value="zh">Chinese</MenuItem>
              <MenuItem value="ja">Japanese </MenuItem>
              <MenuItem value="ru">Russian</MenuItem>
              <MenuItem value="ar">Arabic</MenuItem>
              <MenuItem value="hi">Hindi</MenuItem>
              <MenuItem value="pt">Portuguese</MenuItem>
              <MenuItem value="bn">Bengali</MenuItem>
              <MenuItem value="ur">Urdu </MenuItem>
              <MenuItem value="it">Italian</MenuItem>
              <MenuItem value="ko">Korean</MenuItem>
              <MenuItem value="tr">Turkish</MenuItem>
              <MenuItem value="nl">Dutch</MenuItem>
              <MenuItem value="vi">Vietnamese</MenuItem>
              <MenuItem value="pl">Polish </MenuItem>
              <MenuItem value="th">Thai</MenuItem>
              <MenuItem value="id">Indonesian</MenuItem>
              {/* Add more language options as needed */}
            </Select>
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <TextField
              multiline
              rows={6}
              value={translationResult}
              placeholder="Translation will appear here..."
              variant="outlined"
              readOnly
            />
          </FormControl>
        </Box>
      </Grid>
    </Grid>
        </DialogContent>
        <DialogActions>
          {/* Add any actions or buttons here if needed */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Translation;
