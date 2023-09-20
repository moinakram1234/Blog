import React, { useState, useEffect, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import useStyles from '../Styles/Navbarstyle';
import SearchBar from './seachbar';

function Navbar() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [anchorEl, setAnchorEl] = useState(null);
  const [healthArticles, setHealthArticles] = useState([]);
  const [businessArticles, setBusinessArticles] = useState([]);
  const [sportArticles, setSportArticles] = useState([]);
  const [technologyArticles, setTechnologyArticles] = useState([]);
  const [skinArticles, setSkinArticles] = useState([]);
  const [muslimArticles, setMuslimArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const REACT_APP_URL = process.env.REACT_APP_URL;
  const [openHealth, setOpenHealth] = useState(false);
  const [openBusiness, setOpenBusiness] = useState(false);
  const [openTechnology, setOpenTechnology] = useState(false);
  const [openSkin, setOpenSkin] = useState(false);
  const [openSport, setOpenSport] = useState(false);
  const [openMuslim, setOpenMuslim] = useState(false);
  const [healthBtnPosition, setHealthBtnPosition] = useState({});
  const [businessBtnPosition, setBusinessBtnPosition] = useState({});
  const [technologyBtnPosition, setTechnologyBtnPosition] = useState({});
  const [skinBtnPosition, setSkinBtnPosition] = useState({});
  const [sportBtnPosition, setSportBtnPosition] = useState({});
  const [muslimBtnPosition, setMuslimBtnPosition] = useState({});
  const healthButtonRef = useRef({});
  const businessButtonRef = useRef({});
  const technologyButtonRef = useRef({});
  const skinButtonRef = useRef({});
  const sportButtonRef = useRef({});
  const muslimButtonRef = useRef({});
    const [anchorEl2, setAnchorEl2] = useState(null);

  // ... (previous code)

  const handleMenuClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleMenuClose2 = () => {
    setAnchorEl2(null);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const handleCloseMenu = () => {
    switch (selectedCategory) {
      case 'health':
        setOpenHealth(false);
        break;
      case 'business':
        setOpenBusiness(false);
        break;
      case 'technology':
        setOpenTechnology(false);
        break;
      case 'skin':
        setOpenSkin(false);
        break;
      case 'sport':
        setOpenSport(false);
        break;
      case 'muslim':
        setOpenMuslim(false);
        break;
      default:
        break;
    }
  };

  const fetchdata = () => {
    fetch(`${REACT_APP_URL}/separatearticles`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setHealthArticles(data.healthData);
        setBusinessArticles(data.businessData);
        setSportArticles(data.sportData);
        setTechnologyArticles(data.technologyData);
        setSkinArticles(data.skinData);
        setMuslimArticles(data.muslimData);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
const handleCategoryClick = (event, category) => {
  const buttonRefs = {
    health: healthButtonRef,
    business: businessButtonRef,
    technology: technologyButtonRef,
    skin: skinButtonRef,
    sport: sportButtonRef,
    muslim: muslimButtonRef,
  };

  const buttonRef = buttonRefs[category];
  if (buttonRef && buttonRef.current) {
    const buttonRect = buttonRef.current.getBoundingClientRect();
    const newPosition = {
      top: buttonRect.top + buttonRef.current.offsetHeight,
      left: buttonRect.left,
      height: buttonRef.current.offsetHeight,
    };

    setSelectedCategory(category);
    setAnchorEl(null);

 

    // Open the appropriate submenu based on the selected category
    switch (category) {
      case 'health':
        setOpenHealth(true);
        setOpenBusiness(false);
        setOpenTechnology(false);
        setOpenSkin(false);
        setOpenSport(false);
        setOpenMuslim(false);
        setHealthBtnPosition(newPosition);
        break;
      case 'business':
        setOpenHealth(false);
        setOpenBusiness(true);
        setOpenTechnology(false);
        setOpenSkin(false);
        setOpenSport(false);
        setOpenMuslim(false);
        setBusinessBtnPosition(newPosition);
        break;
      case 'technology':
        setOpenHealth(false);
        setOpenBusiness(false);
        setOpenTechnology(true);
        setOpenSkin(false);
        setOpenSport(false);
        setOpenMuslim(false);
        setTechnologyBtnPosition(newPosition);
        break;
      case 'skin':
        setOpenHealth(false);
        setOpenBusiness(false);
        setOpenTechnology(false);
        setOpenSkin(true);
        setOpenSport(false);
        setOpenMuslim(false);
        setSkinBtnPosition(newPosition);
        break;
      case 'sport':
        setOpenHealth(false);
        setOpenBusiness(false);
        setOpenTechnology(false);
        setOpenSkin(false);
        setOpenSport(true);
        setOpenMuslim(false);
        setSportBtnPosition(newPosition);
        break;
      case 'muslim':
        setOpenHealth(false);
        setOpenBusiness(false);
        setOpenTechnology(false);
        setOpenSkin(false);
        setOpenSport(false);
        setOpenMuslim(true);
        setMuslimBtnPosition(newPosition);
        break;
      default:
        // Close all submenus if none of the categories match
        setOpenHealth(false);
        setOpenBusiness(false);
        setOpenTechnology(false);
        setOpenSkin(false);
        setOpenSport(false);
        setOpenMuslim(false);
        break;
    }
  }
};

  return (
    <div>
      <AppBar style={{ width: '100%', backgroundColor: 'white' }}>
        <Toolbar>
          <div>
            <IconButton
              edge="start"
              color="green"
              aria-label="menu"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              style={{ maxHeight: '100%', width: '250px' }}
            >
              <MenuItem onClick={handleMenuClose}>
                <Link
                  style={{ color: 'green' }}
                  className={classes.a}
                  to="/blogs?category=health"
                >
                  Health
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link
                  style={{ color: 'green' }}
                  className={classes.a}
                  to="/blogs?category=business"
                >
                  Business
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link
                  style={{ color: 'green' }}
                  className={classes.a}
                  to="/blogs?category=technology"
                >
                  Technologies
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link
                  style={{ color: 'green' }}
                  className={classes.a}
                  to="/blogs?category=sport"
                >
                  Cooking
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link
                  style={{ color: 'green' }}
                  className={classes.a}
                  to="/blogs?category=skin"
                >
                  Tourism
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link
                  style={{ color: 'green' }}
                  className={classes.a}
                  to="/blogs?category=muslim"
                >
                  life of a muslim
                </Link>
              </MenuItem>
            </Menu>
          </div>

          {isMobile ? (
            <div style={{ flexGrow: 1 }}>
              <SearchBar />
            </div>
          ) : (
            <SearchBar />
          )}

          {isMobile ? (
          <>
  <Button
    color="green"
    onClick={handleMenuClick2}
    style={{ marginLeft: 'auto' }}
  >
    Menu
  </Button>
  <Menu
    anchorEl={anchorEl2}
    open={Boolean(anchorEl2)}
    onClose={handleMenuClose2} 
    style={{position:'fixed', maxHeight: '130%', width: '250px' }}
  >
    <MenuItem onClick={handleMenuClose}>
      <Link className={classes.a} to="/" style={{ color: 'green' }}>
        Home
      </Link>
    </MenuItem>
    <MenuItem
      ref={healthButtonRef} style={{ color: 'green' }}
      onClick={(e) => handleCategoryClick(e, 'health')}
    >
      Health
    </MenuItem>
    <MenuItem
      ref={businessButtonRef} style={{ color: 'green' }}
      onClick={(e) => handleCategoryClick(e, 'business')}
    >
      Business
    </MenuItem>
    <MenuItem
  ref={technologyButtonRef} style={{ color: 'green' }}
  onClick={(e) => handleCategoryClick(e, 'technology')}
>
  Technology
</MenuItem>
<MenuItem
  ref={sportButtonRef} style={{ color: 'green' }}
  onClick={(e) => handleCategoryClick(e, 'sport')}
>
  Cooking
</MenuItem>
<MenuItem
  ref={skinButtonRef} style={{ color: 'green' }}
  onClick={(e) => handleCategoryClick(e, 'skin')}
>
  Tourism
</MenuItem>

    <MenuItem
      ref={muslimButtonRef} style={{ color: 'green' }}
      onClick={(e) => handleCategoryClick(e, 'muslim')}
    >
      Life of a Muslim
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
      <Link
        className={classes.a}
        to="/articles"
        style={{ color: 'green' }}
      >
        Articles
      </Link>
    </MenuItem>
    <MenuItem onClick={handleMenuClose}>
      <Link
        className={classes.a}
        to="/aboutus"
        style={{ color: 'green' }}
      >
        About
      </Link>
    </MenuItem>
    <MenuItem onClick={handleMenuClose}>
      <Link
        className={classes.a}
        to="/shoping"
        style={{ color: 'green' }}
      >
        Shoping
      </Link>
    </MenuItem>
  </Menu>
</>

          ) : (
            <>
              <Button className={classes.btnhver}>
                <Link className={classes.a} to="/" style={{ color: 'green' }}>
                  Home
                </Link>
              </Button>
              <Button className={classes.btnhver}>
                <Link
                  className={classes.a}
                  to="/articles"
                  style={{ color: 'green' }}
                >
                  Articles
                </Link>
              </Button>
              <Button
                ref={healthButtonRef}
                onClick={(e) => handleCategoryClick(e, 'health')}
                className={classes.btnhver}
                style={{ color: 'green' }}
              >
                Health
              </Button>
              <Button
                ref={businessButtonRef}
                onClick={(e) => handleCategoryClick(e, 'business')}
                className={classes.btnhver}
                style={{ color: 'green' }}
              >
                Business
              </Button>
              <Button
                ref={technologyButtonRef}
                onClick={(e) => handleCategoryClick(e, 'technology')}
                className={classes.btnhver}
                style={{ color: 'green' }}
              >
                Technologies
              </Button>
              <Button
                ref={sportButtonRef}
                onClick={(e) => handleCategoryClick(e, 'sport')}
                className={classes.btnhver}
                style={{ color: 'green' }}
              >
                Cooking
              </Button>
              <Button
                ref={skinButtonRef}
                onClick={(e) => handleCategoryClick(e, 'skin')}
                className={classes.btnhver}
                style={{ color: 'green' }}
              >
                Tourism
              </Button>
              <Button
                ref={muslimButtonRef}
                onClick={(e) => handleCategoryClick(e, 'muslim')}
                className={classes.btnhver}
                style={{ color: 'green' }}
              >
              muslim
              </Button>
              <Button className={classes.btnhver}>
                <Link
                  className={classes.a}
                  to="/aboutus"
                  style={{ color: 'green' }}
                >
                  About
                </Link>
                </Button>
                 <Button className={classes.btnhver}>
                <Link
                  className={classes.a}
                  to="/shoping"
                  style={{ color: 'green' }}
                >
                 Shoping
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <div>
     <Menu
  open={openHealth}
  onClose={handleCloseMenu}
  anchorReference="anchorPosition"
  anchorPosition={
    healthBtnPosition.top !== undefined && healthBtnPosition.left !== undefined
      ? { top: healthBtnPosition.top - healthBtnPosition.height, left: healthBtnPosition.left }
      : undefined
  }
  className={classes.menuPosition}
>
  {selectedCategory === 'health' &&
    healthArticles.map((article) => (
      <div key={article.name}>
        <MenuItem
          component={Link}
          to={`/articledetails/${article.name}`}
          style={{ color: 'green' }}
        >
          {article.name}
        </MenuItem>
      </div>
    ))}
</Menu>

<Menu
  open={openBusiness}
  onClose={handleCloseMenu}
  anchorReference="anchorPosition"
  anchorPosition={
    businessBtnPosition.top !== undefined && businessBtnPosition.left !== undefined
      ? { top: businessBtnPosition.top - businessBtnPosition.height, left: businessBtnPosition.left }
      : undefined
  }
  className={classes.menuPosition}
>
  {selectedCategory === 'business' &&
    businessArticles.map((article) => (
      <div key={article.name}>
        <MenuItem
          component={Link}
          to={`/articledetails/${article.name}`} style={{ color: 'green' }}
        >
          {article.name}
        </MenuItem>
      </div>
    ))}
</Menu>

<Menu
  open={openTechnology}
  onClose={handleCloseMenu}
  anchorReference="anchorPosition"
  anchorPosition={
    technologyBtnPosition.top !== undefined && technologyBtnPosition.left !== undefined
      ? { top: technologyBtnPosition.top - technologyBtnPosition.height, left: technologyBtnPosition.left }
      : undefined
  }
  className={classes.menuPosition}
>
  {selectedCategory === 'technology' &&
    technologyArticles.map((article) => (
      <div key={article.name}>
        <MenuItem
          component={Link}
          to={`/articledetails/${article.name}`} style={{ color: 'green' }}
        >
          {article.name}
        </MenuItem>
      </div>
    ))}
</Menu>

<Menu
  open={openSkin}
  onClose={handleCloseMenu}
  anchorReference="anchorPosition"
  anchorPosition={
    skinBtnPosition.top !== undefined && skinBtnPosition.left !== undefined
      ? { top: skinBtnPosition.top - skinBtnPosition.height, left: skinBtnPosition.left }
      : undefined
  }
  className={classes.menuPosition}
>
  {selectedCategory === 'skin' &&
    skinArticles.map((article) => (
      <div key={article.name}>
        <MenuItem
          component={Link}
          to={`/articledetails/${article.name}`} style={{ color: 'green' }}
        >
          {article.name}
        </MenuItem>
      </div>
    ))}
</Menu>

<Menu
  open={openSport}
  onClose={handleCloseMenu}
  anchorReference="anchorPosition"
  anchorPosition={
    sportBtnPosition.top !== undefined && sportBtnPosition.left !== undefined
      ? { top: sportBtnPosition.top - sportBtnPosition.height, left: sportBtnPosition.left }
      : undefined
  }
  className={classes.menuPosition}
>
  {selectedCategory === 'sport' &&
    sportArticles.map((article) => (
      <div key={article.name}>
        <MenuItem
          component={Link}
          to={`/articledetails/${article.name}`} style={{ color: 'green' }}
        >
          {article.name}
        </MenuItem>
      </div>
    ))}
</Menu>

<Menu
  open={openMuslim}
  onClose={handleCloseMenu}
  anchorReference="anchorPosition"
  anchorPosition={
    muslimBtnPosition.top !== undefined && muslimBtnPosition.left !== undefined
      ? { top: muslimBtnPosition.top - muslimBtnPosition.height, left: muslimBtnPosition.left }
      : undefined
  }
  className={classes.menuPosition}
>
  {selectedCategory === 'muslim' &&
    muslimArticles.map((article) => (
      <div key={article.name}>
        <MenuItem
          component={Link}
          to={`/articledetails/${article.name}`} style={{ color: 'green' }}
        >
          {article.name}
        </MenuItem>
      </div>
    ))}
</Menu>

        

      </div>
      
      {/* Repeat the above pattern for other article menus */}
      
    </div>
  );
}

export default Navbar;
