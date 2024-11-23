import React from 'react'
import { useNavigate } from 'react-router-dom'
const Privateroute = ({children}) => {
 const navigate=useNavigate();
 const token=localStorage.getItem("token")
 if(token){
    return children
 }else{
    navigate('/admin')
    return null
 }
}

export default Privateroute;