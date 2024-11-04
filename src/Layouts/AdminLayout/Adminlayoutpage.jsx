import React from 'react'
import AdminNavbar from '../../Components/Admin/AdminNavbar'
import { Outlet } from 'react-router-dom'
import { HStack } from '@chakra-ui/react'
const Adminlayoutpage = () => {
  return (
    <>
    <HStack align='start'>
    <AdminNavbar/>
    <Outlet/>
    </HStack>
    </>
  )
}

export default Adminlayoutpage