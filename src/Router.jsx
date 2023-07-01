import React from 'react';
import './App.css';
import Home from "./pages/Home"
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Categories from './pages/Categories';
import AboutUs from './pages/aboutus';
import InsertBlog from './pages/crudoperation/insertBlog';
import Displaybolgs from './pages/displayblogs';
import ProductList from './pages/blogsListCards';
import AdminPanel from './Admin/Adminpannel';
import Insertbusinessblog from './pages/crudoperation/insertbusinessblog';
import Inserthealthblog from './pages/crudoperation/inserthealth';
import Insertskinblog from './pages/crudoperation/insertskin';
import Inserttechnologyblog from './pages/crudoperation/inserttechnology';
import Insertsportblog from './pages/crudoperation/insertsport';
import Displayblogswithselectedcategories from './pages/displayblogs';
import Displaysearcharticle from './pages/displaysercharticle';
function Routerpage() {
return (
	<BrowserRouter>
	<Routes>
		<Route exact  path='/' element={<Home/>} />
			<Route exact path='/categories' element={< Categories />} />
			<Route exact path='/aboutus' element={< AboutUs />} />
			<Route exact path='/blogs' element={<Displaybolgs />} />
			<Route exact path='/articles' element={<ProductList />} />
			<Route exact path='/admin' element={<AdminPanel />} />
			<Route exact path='/addarticles' element={<InsertBlog />} />
			<Route exact path='/insertbusinessblog' element={<Insertbusinessblog />} />
			<Route exact path='/inserthealthblog' element={<Inserthealthblog />} />
			<Route exact path='/insertskinblog' element={<Insertskinblog />} />
			<Route exact path='/inserttechnologyblog' element={<Inserttechnologyblog />} />
			<Route exact path='/insertsportblog' element={<Insertsportblog />} />
			<Route exact path='/blogs' element={<Displayblogswithselectedcategories />} />
			<Route exact path='/displaysearcharticle' element={<Displaysearcharticle />} />
	</Routes>
	</BrowserRouter>
);
}

export default Routerpage;
