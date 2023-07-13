import React, {useEffect, useState,useRef  } from 'react';
import Slider from 'react-slick';
import Navbar from './Navbar'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion} from 'framer-motion';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  useMediaQuery,
  Grid,
  makeStyles
} from '@material-ui/core';
import { Images } from '../images/images';

import Contactus from './contactus';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Bottomarticlescards from './bottonarticlecards';

const useStyles = makeStyles((theme) => ({
  cardDescription: {
    display: '-webkit-box',
    '-webkit-line-clamp': 5,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

}));
const Index = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const isSmallScreen = useMediaQuery('(max-width:960px)');
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation when the image enters the viewport
            imageRef.current.classList.add('slide-in');
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold value as needed
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);
const [productData, setProductData] = useState([
  {
    name: 'business',
    image: Images.Business,
    title: 'Business Articles',
  },
  {
     name:'health',
    image: Images.Health,
    title: 'Health Articles',
  },
  {
    name:'technology',
    image: Images.Technology,
    title: 'Technology Articles',
    description:'Technology is the application of scientific knowledge, skills, and resources to invent, develop, and improve systems, tools, machines, and techniques to solve problems and meet human needs. It encompasses a wide range of fields, including computer science, electronics, telecommunications, information technology, robotics, artificial intelligence, and more.'
  
  },
  { name:'sports',
    image: Images.Sports,
    title: 'Sports Articles',
  },
  {
    name:'skin',
    image: Images.Skin,
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

     <div  style={{
        backgroundImage: `url('${Images.Background}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingBottom: '5%',
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
                  <a href={`/blogs?category=${product.name}`}>
                
                    <CardMedia
                    component="img"
                    height= "100%"
                    style={{ width: '100%' }}
                    image={product.image}
                    alt={product.name}
                  /></a>
                  <CardContent>
                  <Typography variant="h5" component="h2">
                   </Typography>

                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </div>  
      </div>
      <Bottomarticlescards/>
      <Grid container alignItems="center" style={{ marginLeft:'5%', marginTop: '23%', }}>
      <Grid item>
        <a href={`/blogs?category=${productData[2].name}`}>
          <motion.div
            ref={imageRef}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CardMedia
              component='img'
              style={{ width:isMobile?"80%":'100%', height: '300px', borderRadius: '10%', marginLeft:isMobile?'5%': '4%',marginTop:isMobile?'13px':"0px" }}
              image={productData[2].image}
              alt={productData[2].name}
            />
          </motion.div>
        </a>
        </Grid>
        <Grid item style={{ width:isMobile?'50%': '45%', height:isMobile?'200px':'300px',marginLeft:'15%', marginTop: '5%' }}>
          <Typography style={{fontSize:isMobile?'17px':'30px',fontWeight:'bold',margin:'2%',marginLeft:isMobile?'10px':'0px'}} variant="body1">{productData[2].title}</Typography>
        <Typography  variant="body1" className={classes.cardDescription} >{productData[2].description }</Typography>
      </Grid>
    </Grid>
      <div >
        <h1>Contact US</h1>
      </div>
      <div>
      <Contactus />
    </div>
    </div>
  );
};

export default Index;
