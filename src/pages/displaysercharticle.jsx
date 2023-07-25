import React, { useEffect, useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
const Displaysearcharticle = () => {
  const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
  const _id = queryParams.get('data');
   const navigate = useNavigate();
  useEffect(() => {
    fetch('http://localhost:5000/singlearticle', {
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
         navigate('/articledetails', { state: { articleData: data } });
      })
      .catch((error) => {
        console.error('Error requesting article details:', error);
      });
  }, []);

  return (
      <div>
        </div>
  );
};

export default Displaysearcharticle;
