import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/About"
import Projects from "../pages/Projects/Projects"
import Workshop from "../pages/Workshops/Workshop";
import Mainlayout from "../Layouts/MainLayout/Mainlayout";
import Footer from "../Components/Footer/Footer";
import Workshopsinglepage from "../pages/Workshops/Workshopsinglepage"
const Allrouts = () => {
    return(
        <>
        <Routes>
            <Route element={<Mainlayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/workshop' element={<Workshop/>}/>   
            <Route path='/footer' element={<Footer/>}/>
            <Route path ='/singlepage' element={<Workshopsinglepage/>}/>
            <Route path='*' element={<h1>Page not found</h1>}/>
            </Route>
        </Routes>
        </>
    )
    
}
export default Allrouts;