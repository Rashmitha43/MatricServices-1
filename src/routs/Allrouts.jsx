import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/About"
import Projects from "../pages/Projects/Projects"
import Workshop from "../pages/Workshops/Workshop";
import Mainlayout from "../Layouts/MainLayout/Mainlayout";
import Footer from "../Components/Footer/Footer";
import Workshopcard from "../Components/Workshops/Workshopcard";
import Workshopsinglepage from "../pages/Workshops/Workshopsinglepage";
import Adminlayoutpage from "../Layouts/AdminLayout/Adminlayoutpage";
import AddWorkshop from "../Components/Admin/AddWorkshop";
import WorkshopTable from "../Components/Admin/WorkshopTable";
import AdminHome from "../Components/Admin/AdminHome";
import Product from "../pages/Products/Product";
import ProductSinglepage from "../pages/Products/ProductSinglepage";
import AddProduct from "../Components/Admin/AddProduct";
import ProductTable from "../Components/Admin/ProductTable";


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

            <Route element={<Adminlayoutpage/>}>
            <Route path="/admin" element={<AdminHome/>}/>
            <Route path="/admin/addworkshop" element={<AddWorkshop/>}/>
            <Route path="/admin/workshoptable" element={<WorkshopTable/>}/>
            <Route path="/admin/addproduct" element={<AddProduct/>}/>
            <Route path="/admin/producttable" element={<ProductTable/>}/>
           </Route>
        </Routes>
        </>
    )
    
}
export default Allrouts;