// Index.js
import ArticleList from './Listofarticles';
import Contactus from './contactus';
import Navbar from './Navbar';
import {
  useMediaQuery,
} from '@material-ui/core';
const Categories = () => {
 const isMobile=useMediaQuery('(max-width:600px)');
  return (
    <div>
          <div>
              <Navbar/>
          </div>
          <div style={{marginTop:'5%'}}>
        <ArticleList/>
          </div>
          <div  style={{position:'absolute',marginTop:isMobile?'110%':'35%',fontSize:isMobile?'8px':'14px',textAlign:'center',backgroundColor:'red',width:'100%'}}>
            <h1>Contact US</h1>
      </div>
    <div style={{position:'absolute',marginTop:isMobile?'120%':'40%',fontSize:isMobile?'8px':'14px',textAlign:'center',backgroundColor:'red',width:'100%'}}>
      <Contactus/>
      </div>
    </div>
  );
};

export default Categories;
