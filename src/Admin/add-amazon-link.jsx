import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the default styles
const AmazonLinkForm = () => {
  const [amazonAffiliateLink, setAmazonAffiliateLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace 'http://localhost:5000/amazonlink' with the actual server endpoint where the product link should be stored.
    axios.post('http://localhost:5000/amazonlink', { amazonAffiliateLink })
      .then((response) => {
        console.log('Product link saved successfully:', response.data);
        // Clear the input field after successful submission
          setAmazonAffiliateLink('');
             toast.success("saved Successfully.");
      })
      .catch((error) => {
        console.error('Error saving product link:', error);
      });
  };

  return (<div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={amazonAffiliateLink}
        onChange={(e) => setAmazonAffiliateLink(e.target.value)}
        placeholder="Enter Amazon Affiliate Link"
      />
      <button type="submit">Submit</button>
      </form><ToastContainer position="top-center" />
      </div>
  );
};

export default AmazonLinkForm;
