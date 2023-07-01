import React, {useEffect, useState } from 'react';
import Slider from 'react-slick';
import Navbar from './Navbar'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { motion } from 'framer-motion';
import useStyles from '../Styles/indexstyles';
import ArticleList from './Listofarticles';
import { Scrollbars } from 'react-custom-scrollbars';
import Contactus from './contactus';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const Index = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const isSmallScreen = useMediaQuery('(max-width:960px)');
const [productData, setProductData] = useState([
  {
    name: 'business',
    image: 'https://media.istockphoto.com/id/974683580/vector/copywriting.jpg?s=612x612&w=0&k=20&c=tQe7OIK-b4c16EN57Ac-vrrIwtIWxVzyCNBox3I2PlM=',
    title: 'Business Articles',
  },
  {
     name:'health',
    image: 'https://media.istockphoto.com/id/1032637132/photo/a-cup-of-coffee-glasses-and-newspaper-titled-health-medical.jpg?s=612x612&w=0&k=20&c=W52Q_4CXrdJs24wI_5qt4t72Hcs1AzpzkoSzntByUoY=',
    title: 'Health Articles',
  },
  {
    name:'technology',
    image: 'https://media.istockphoto.com/id/1143088863/vector/business-communication-internet-blogging-post-flat-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=jLnOWVvd0VmTFt5I7cNABPY863ruLv3EvoqJ3Q7qRr8=',
    title: 'Technology Articles',
  
  },
  { name:'sport',
    image: 'https://media.istockphoto.com/id/1331554245/photo/golf-glove-colorful-ball-tee-and-gold-club-put-on-green-grass-of-golf-course-this-objects-for.jpg?s=612x612&w=0&k=20&c=nG37Sbx6ROABQiGTG_nD8u809_4rNDquBiO5-_MIue0=',
    title: 'Sports Articles',
  },
  {
    name:'skin',
    image: 'https://media.istockphoto.com/id/1016494284/photo/bathroom-accessories-on-a-green-towel-rubber-ducky-toothbrushes-sea-salt-soap-and-lotion-baby.jpg?s=612x612&w=0&k=20&c=dyVhhxbB3JFQqe8cUnI8U2L_tfzCTqF-lvLx69gmTM8=',
    title: 'Skin Articles',
  },
]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: isMobile ? 1 : isSmallScreen ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set interval to 3 seconds
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <ChevronRightIcon />,
    prevArrow: <ChevronLeftIcon />,
  };


  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div style={{    backgroundImage: 'linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url("images/background.jpg")',paddingBottom:'5%',
  }}>
               <div>
            <Typography variant="h4" className={classes.wlcminner} style={{ marginTop: isMobile ? '20%' : '7%' }}>
      Welcome to our Amazing Blog Site!
    </Typography>
    <Typography variant="h5" className={classes.categoryTitle} style={{ marginTop: '20px' }}>
      Select Your Interested Articles:
    </Typography>
      </div>
      
       <div style={{ marginLeft: isMobile?'20%':'-3%' }}>
          <Slider {...sliderSettings}>
            {productData.map((product) => (
              <div key={product.name}>
                <Card
                  style={{
                    width: isMobile ? '80%' : isSmallScreen ? '70%' : '40%',
                    height:isMobile?'200px':'300px',
                    marginTop: isMobile?'39px':'95px',
                    marginLeft: isMobile ? '10px' : '30%',
                  }}
                >
                  <CardMedia
                    component="img"
                    height= "80%"
                    style={{ width: '100%' }}
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                  <Typography variant="h5" component="h2">
  <a href={`/blogs?category=${product.name}`}>{product.title}</a>
</Typography>

                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </div>  
      </div>
      <div>
        <ArticleList />
      </div>
      <div style={{marginTop:isMobile?'140%':'40%',fontSize:isMobile?'10px':'17px'}}>
        <h1>Contact US</h1>
      </div>
      <div>
      <Contactus />
    </div>
    </div>
  );
};

export default Index;
