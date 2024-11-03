import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/About"
import Projects from "../pages/Projects/Projects"
import Workshop from "../pages/Workshops/Workshop";
import Mainlayout from "../Layouts/MainLayout/Mainlayout";
import AdminLayout from "../Layouts/Adminlayout/AdminLayout";
import Footer from "../Components/Footer/Footer";
import Workshopcard from "../Components/Workshops/Workshopcard";
import Workshopsinglepage from "../pages/Workshops/Workshopsinglepage";
import AddProject from "../Components/Admin/Addproject";
import ProjectTable from "../Components/Admin/ProjectTable";
import AdminHome from "../Components/Admin/AdminHome";
import Product from "../pages/Products/Product";
import ProductSinglepage from "../pages/Products/ProductSinglepage";


const Allrouts = () => {
    return(
        <>
        <Routes>
            <Route element={<Mainlayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/workshop' element={<Workshop/>}/>
            <Route path="/workshopcard" element={<Workshopcard/>}/>  
            <Route path='/footer' element={<Footer/>}/>
            <Route path ='/singlepage' element={<Workshopsinglepage/>}/>
            <Route path='/products' element={<Product/>}/>
            <Route path='/productsinglepage' element={<ProductSinglepage/>}/>
            <Route path='*' element={<h1>Page not found</h1>}/>
            </Route>

            <Route element={<AdminLayout/>}>
            <Route path="/admin" element={<AdminHome/>}/>
            <Route path="/admin/Addproject" element={<AddProject/>}/>
            <Route path="/admin/projecttable" element={<ProjectTable/>}/>
            </Route>
        </Routes>
        </>
    )
    
}
export default Allrouts;