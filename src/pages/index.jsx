import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import Navbar from './Navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import { Card, CardMedia, CardContent, Typography, useMediaQuery, Grid, makeStyles } from '@material-ui/core';
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
    color:'gray'
  },
  wlcminner: {
    color: 'white',
    color:''
  },
  categoryTitle: {
    color: 'white',
  },
}));

const Index = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const isSmallScreen = useMediaQuery('(max-width:960px)');
  const imageRef = useRef(null);
  const cardMediaRef = useRef(null);

  const [isInView, setIsInView] = useState(false);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            console.log(entry.isIntersecting)
            observer.unobserve(imageRef.current);
          }
        });
      },
      { threshold: 0.5 }
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
      title: 'Business',
    }, {
      name: 'health',
      image: Images.Health,
      title: 'Health',
    },
    {
      name: 'technology',
      image: Images.Technology,
      title: 'Technology',
      description:
        'Technology is the application of scientific knowledge, skills, and resources to invent, develop, and improve systems, tools, machines, and techniques to solve problems and meet human needs. It encompasses a wide range of fields, including computer science, electronics, telecommunications, information technology, robotics, artificial intelligence, and more.'
    },
    {
      name: 'sport',
      image: Images.Sports,
      title: 'Cooking',
    },
    {
      name: 'skin',
      image: Images.Skin,
      title: 'Tourism',
    },
     {
      name: 'muslim',
      image: Images.muslim,
      title: 'Muslim',
    },
    // ... Add the other product data objects
  ]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: isMobile ? 1 : isSmallScreen ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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

      <div style={{ marginLeft:isMobile?'10px':'', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.8)', backgroundImage: `url('${Images.Background}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', paddingBottom: '5%' }}>
        <div>
          <Typography variant="h4" className={classes.wlcminner} style={{ marginTop: isMobile ? '20%' : '0%' }}>
            Welcome
          </Typography>
          <Typography variant="h5" className={classes.categoryTitle} style={{ marginTop: '100px' }}>
            Select Your Interested Articles:
          </Typography>
        </div>

        <div style={{ marginLeft: isMobile ? '20%' : '-3%' }}>
          <Slider {...sliderSettings}>
            {productData.map((product) => (
              <div key={product.name}>
                <Card
                  style={{
                    width: isMobile ? '90%' : isSmallScreen ? '70%' : '40%',
                    height: isMobile ? '200px' : '300px',
                    marginTop: isMobile ? '39px' : '95px',
                    marginLeft: isMobile ? '10px' : '30%',
                    boxShadow: '-5px 5px 1px 1px rgba(0.8, 0.6, 1, 0.3)',
                    borderRadius: '20px',
                  }}
                >
                  <a href={`/blogs?category=${product.name}`}>
                    <CardMedia component="img" height="100%" style={{ width: '100%' }} image={product.image} alt={product.name} />
                  </a>
                  <CardContent>
                    <Typography variant="h5" component="h2"></Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <Bottomarticlescards />

      <Grid container alignItems="center" style={{ marginLeft: '5%', marginTop: '37%' }}>
        <Grid item>
          <a href={`/blogs?category=${productData[2].name}`}>
            <motion.div
              ref={imageRef}
              initial={{ x: -200, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 2 }}
            >
              <CardMedia
                ref={cardMediaRef}
                component="img"
                style={{ width: isMobile ? '80%' : '100%', height: '300px', borderRadius: '30px', boxShadow: '0px 4px 18px gray', marginLeft: isMobile ? '5%' : '4%', marginTop: isMobile ? '13px' : '0px' }}
                image={productData[2].image}
                alt={productData[2].name}
              />
            </motion.div>
          </a>
        </Grid>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 2, delay: 1 }}
        >
          <Card style={{ width: isMobile ? '80%' : '35%', height: isMobile ? '200px' : '300px', marginLeft:isMobile?'7%':'50%', borderRadius: '20px',marginTop:isMobile?'50px':'-290px' }}>
            <Grid item>
              <Typography style={{ fontSize: isMobile ? '17px' : '30px', fontWeight: 'bold', margin: '2%', marginLeft: isMobile ? '10px' : '0px' }} variant="body1">
                {productData[2].title}
              </Typography>
              <Typography variant="body1" className={classes.cardDescription}>
                {productData[2].description}
              </Typography>
            </Grid>
          </Card>
        </motion.div>
      </Grid>

      <div>
        <h1>Contact US</h1>
      </div>
      <div>
        <Contactus />
      </div>
    </div>
  );
};

export default Index;