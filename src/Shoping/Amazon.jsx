import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AmazonLinkList = () => {
  const [amazonLinks, setAmazonLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAmazonLinks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/amazonlink');
        setAmazonLinks(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Amazon links:', error);
        setLoading(false);
      }
    };

    fetchAmazonLinks();
  }, []);

  const extractProductInfo = (amazonAffiliateLink) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(amazonAffiliateLink, 'text/html');
    const productLinkElement = doc.querySelector('a');
    const productImageElement = doc.querySelector('img');

    if (productLinkElement && productImageElement) {
      const productName = productLinkElement.textContent;
      const productImage = productImageElement.getAttribute('src') || '';
      const productLink = productLinkElement.getAttribute('href') || '';

      return { productName, productImage, productLink };
    }

    return null;
  };

  return (
    <div>
      <h2>Amazon Affiliate Links</h2>
      {loading ? (
        <p>Loading...</p>
      ) : amazonLinks.length === 0 ? (
        <p>No Amazon affiliate links to display.</p>
      ) : (
        <ul>
          {amazonLinks.map((link, index) => {
            const productInfo = extractProductInfo(link.amazonAffiliateLink);
            if (productInfo) {
              return (
                <li key={index}>
                  <h3>Product Name: {productInfo.productName}</h3>
                  {/* Display product image */}
                  <a href={productInfo.productLink} target="_blank" rel="noopener noreferrer">
                    <img
                      src={productInfo.productImage}
                      alt={`Product ${index}`}
                      style={{ width: '250px' }}
                    />
                  </a>
                </li>
              );
            } else {
              return null; // Skip invalid entries
            }
          })}
        </ul>
      )}
    </div>
  );
};

export default AmazonLinkList;
