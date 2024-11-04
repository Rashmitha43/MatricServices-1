import React from 'react'
import Webnav from '../../Components/Webnavbar/Webnav';
import Footer from "../../Components/Footer/Footer"
import { Outlet } from 'react-router-dom'
const Mainlayout = () => {
  return (
    <>
    <Webnav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Mainlayout