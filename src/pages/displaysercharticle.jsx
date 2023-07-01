import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Contactus from './contactus';
import ArticleDetails from './articledetails';
const Displaysearcharticle = () => {
  const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
  const _id = queryParams.get('data');
  const [serverRes, setServerRes] = useState(null);

  useEffect(() => {
    fetch('https://gmblog.onrender.com/singlearticle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: _id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Article details response:', data);
        // const { title, description, image } = data;
        setServerRes(data);
      })
      .catch((error) => {
        console.error('Error requesting article details:', error);
      });
  }, []);

  return (
      <div>
          <div>
        <Navbar />
      </div>
      <h1>Single Article</h1>
      {/* Display the fetched data here */}
      {serverRes && (
        <div style={{margin:'10%'}}><ArticleDetails {...serverRes} /></div>
          )}
            <div>
        <h1>Contact US</h1>
      </div>
      <div>
        <Contactus />
      </div>
    </div>
  );
};

export default Displaysearcharticle;
