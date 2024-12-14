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
import Adminlayoutpage from "../Layouts/AdminLayout/Adminlayoutpage"
import AddWorkshop from "../Components/Admin/AddWorkshop";
import WorkshopTable from "../Components/Admin/WorkshopTable";
import AdminHome from "../Components/Admin/AdminHome";
import Product from "../pages/Products/Product";
import ProductSinglepage from "../pages/Products/ProductSinglepage";
import AddProduct from "../Components/Admin/AddProduct";
import ProductTable from "../Components/Admin/ProductTable";
import EditProduct from "../Components/Admin/EditProduct";
import LoginPage from "../Components/Admin/LoginPage";
import EditWorkshop from "../Components/Admin/EditWorkshop";
import Privateroute from "./Privateroute";
import PagenotFound from "../pages/PagenotFound";


const Allrouts = () => {
    return(
        <>
        <Routes>
            <Route element={<Mainlayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/workshop' element={<Workshop/>}/>
            <Route path ='/singlepage/:id' element={<Workshopsinglepage/>}/>
            <Route path="/workshopcard" element={<Workshopcard/>}/>  
            <Route path='/footer' element={<Footer/>}/>
            <Route path='/products' element={<Product/>}/>
            <Route path='/productsinglepage/:id' element={<ProductSinglepage/>}/>
            <Route path='*' element={<PagenotFound/>}/>
            </Route>

            <Route element={<Adminlayoutpage/>}>
            <Route path="/admin" element={<LoginPage/>}/>
            <Route path="/admin/adminhome" element={<Privateroute><AdminHome/></Privateroute>}/>
            <Route path="/admin/addworkshop" element={<Privateroute><AddWorkshop/></Privateroute>}/>
            <Route path="/admin/workshoptable" element={<Privateroute><WorkshopTable/></Privateroute>}/>
            <Route path="/admin/addproduct" element={<Privateroute><AddProduct/></Privateroute>}/>
            <Route path="/admin/producttable" element={<Privateroute><ProductTable/></Privateroute>}/>
            <Route path="/admin/projecttable/editproduct/:productId" element={<Privateroute><EditProduct /></Privateroute>} />
            <Route path="/admin/workshoptable/editworkshop/:workshopId" element={<Privateroute><EditWorkshop /></Privateroute>} />
           </Route>
        </Routes>
        </>
    )
    
}
export default Allrouts;