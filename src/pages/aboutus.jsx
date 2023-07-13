import React from 'react';
import { Typography, Box, useMediaQuery, } from '@material-ui/core';
import Navbar from './Navbar';
import Contactus from './contactus';

const AboutUs = () => {
  const isMobile=useMediaQuery('(max-width:600px)');
  return (
    <div>
      <Navbar />
      <Typography style={{marginTop:isMobile?'15%':'8%'}} variant="h2" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography style={{width:'70%',marginLeft:isMobile?'50px':'200px'}} variant="body1" align="center" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu fringilla turpis. Suspendisse potenti.
        Pellentesque dapibus volutpat tellus, eget dignissim ipsum pharetra at. Curabitur ac placerat est, id porta
        augue. Nam elementum risus et massa pharetra, et vestibulum erat consequat. Mauris rutrum nunc id leo posuere
        iaculis. In non felis at risus ullamcorper rutrum nec eget neque. Sed id mi sagittis, rhoncus lorem vel, dictum
        purus. Sed congue turpis a lacinia rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia curae; Etiam sed lacus ut arcu porta luctus. Duis ac nibh enim. Nullam bibendum suscipit
        tellus, ac vulputate orci consequat nec. Mauris gravida bibendum interdum.
      </Typography>
      <Typography variant="h4" align="center" gutterBottom style={{ marginTop:isMobile?'8%':'18%' }}>
        Follow Us on Social Media
      </Typography>
      <Box style={{marginTop:'0%'}}>
        <Contactus />
      </Box>
    </div>
  );
};

export default AboutUs;
