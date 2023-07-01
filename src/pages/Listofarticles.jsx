import { Scrollbars } from 'react-custom-scrollbars';
import { useMediaQuery, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ArticleDetails from './articledetails';
const ArticleList = () => {
  const [productData, setProductData] = useState([]);
  const isMobile = useMediaQuery('(max-width:600px)');
  const [serverRes, setServerRes] = useState(null);

const handleClick = (_id) => {
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
        //const { title, description, image } = data;
        setServerRes(data);
        
      })
      .catch((error) => {
        console.error('Error requesting article details:', error);
      });
  };

  useEffect(() => {
    fetch('https://gmblog.onrender.com/allarticles', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
        
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  const list1 = productData.slice(0, Math.ceil(productData.length / 2));
  const list2 = productData.slice(Math.ceil(productData.length / 2));

  return (
    <div>
      {!serverRes ? (
        <>
          <div style={{ position: 'absolute', marginLeft: '5%', width: '50%', fontSize: isMobile ? '10px' : '16px' }}>
            <h1>Article List 1</h1>
            <div style={{ overflowX: 'auto' }}>
              <Scrollbars style={{ borderRadius: '10px', height: '400px', width: '100%' }}>
                <div>
                  {list1.map((article, index) => (
                   
                    <>
                      <Button
                      key={article._id}
                      onClick={() => handleClick(article._id)}
                      style={{ color: 'black', textDecoration: 'underline' }}
                    >
                      {article.title}
                      </Button>
                      <br></br>
                    </>
                  ))}
                </div>
              </Scrollbars>
            </div>
          </div>

          <div style={{ position: 'absolute', marginLeft: '55%', width: '50%', fontSize: isMobile ? '10px' : '16px' }}>
            <h1>Article List 2</h1>
            <div style={{ overflowX: 'auto' }}>
              <Scrollbars style={{ borderRadius: '10px', height: '400px', width: '100%' }}>
                <div>
                  {list2.map((article, index) => (
                    <>
                      <Button
                      key={article._id}
                      onClick={() => handleClick(article._id)}
                      style={{ color: 'black', textDecoration: 'underline' }}
                    >
                      {article.title}
                    </Button>
                   <br></br>
                    </>
                  ))}
                </div>
              </Scrollbars>
            </div>
          </div>
        </>
      ) : (
          <div style={{ margin: '2%' }}>
          
          <ArticleDetails
  title={serverRes.title}
  description={serverRes.description}
  image={serverRes.image}
  heading1={serverRes.heading1}
  image1={serverRes.image1}
  description1={serverRes.description1}
  heading2={serverRes.heading2}
  image2={serverRes.image2}
  description2={serverRes.description2}
  heading3={serverRes.heading3}
  image3={serverRes.image3}
  description3={serverRes.description3}
  heading4={serverRes.heading4}
  image4={serverRes.image4}
  description4={serverRes.description4}
  summary={serverRes.summary}
/>

        </div>
      )}
    </div>
  );
};

export default ArticleList;
