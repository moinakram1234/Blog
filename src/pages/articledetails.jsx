import React from 'react';
import { Typography } from '@material-ui/core';

const ArticleDetails = ({
  title,
  description,
  image,
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
  summary
}) => {
  return (
    <div>
      <Typography style={{ fontWeight: 'bold', fontSize: '24px', marginLeft: '-42%', margin: '5%' }}>
        {title}
      </Typography>
      <div style={{ marginBottom: '20px', width: '70%' }}>
        <img src={image} alt={title} style={{ width: '100%', maxWidth: '500px', marginBottom: '20px' }} />
      </div>
      <div style={{ marginBottom: '20px', width: '70%' }}>
        <Typography variant="body1" style={{ fontSize: '16px', textAlign: 'justify', whiteSpace: 'pre-line' }}>
          {description}
        </Typography>
      </div>
      <div style={{ marginBottom: '20px', width: '70%' }}>
        <Typography variant="h3" style={{ fontWeight: 'bold', fontSize: '24px', marginLeft: '-12%', margin: '5%' }}>
          {heading1}
        </Typography>
        <img src={image1} alt={heading1} style={{ width: '100%', maxWidth: '500px', marginBottom: '20px' }} />
        <Typography variant="body1" style={{ fontSize: '16px', textAlign: 'justify', whiteSpace: 'pre-line' }}>
          {description1}
        </Typography>
      </div>
      <div style={{ marginBottom: '20px', width: '70%' }}>
        <Typography variant="h3" style={{ fontWeight: 'bold', fontSize: '24px', marginLeft: '-12%', margin: '5%' }}>
          {heading2}
        </Typography>
        <img src={image2} alt={heading2} style={{ width: '100%', maxWidth: '500px', marginBottom: '20px' }} />
        <Typography variant="body1" style={{ fontSize: '16px', textAlign: 'justify', whiteSpace: 'pre-line' }}>
          {description2}
        </Typography>
      </div>
      <div style={{ marginBottom: '20px', width: '70%' }}>
        <Typography variant="h3" style={{ fontWeight: 'bold', fontSize: '24px', marginLeft: '-12%', margin: '5%' }}>
          {heading3}
        </Typography>
        <img src={image3} alt={heading3} style={{ width: '100%', maxWidth: '500px', marginBottom: '20px' }} />
        <Typography variant="body1" style={{ fontSize: '16px', textAlign: 'justify', whiteSpace: 'pre-line' }}>
          {description3}
        </Typography>
      </div>
      <div style={{ marginBottom: '20px', width: '70%' }}>
        <Typography variant="h3" style={{ fontWeight: 'bold', fontSize: '24px', marginLeft: '-12%', margin: '5%' }}>
          {heading4}
        </Typography>
        <img src={image4} alt={heading4} style={{ width: '100%', maxWidth: '500px', marginBottom: '20px' }} />
        <Typography variant="body1" style={{ fontSize: '16px', textAlign: 'justify', whiteSpace: 'pre-line' }}>
          {description4}
        </Typography>
      </div>
      <Typography variant="body1" style={{ fontSize: '16px', textAlign: 'justify', whiteSpace: 'pre-line' }}>
        Summary: {summary}
      </Typography>
    </div>
  );
};

export default ArticleDetails;
