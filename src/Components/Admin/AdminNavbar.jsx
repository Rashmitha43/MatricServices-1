// components/admin/adminnavbar.jsx
import React from 'react';
import { VStack, Text, Link, HStack } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { RiFunctionAddFill } from "react-icons/ri";
import { FaTableList } from "react-icons/fa6";

const AdminNavbar = () => {
  return (
    <VStack spacing={6} align="stretch">
      <Text fontSize="3xl" fontWeight="bold">MATRIC SERVICES</Text>


      <NavLink to="/admin/addworkshop">
      <HStack ><RiFunctionAddFill fontSize={'2rem'} /><Text fontSize="2xl">Add Workshop</Text></HStack>
      </NavLink>

      <NavLink to="/admin/addproduct">
      <HStack ><RiFunctionAddFill fontSize={'2rem'} /><Text fontSize="2xl">Add Product</Text></HStack>
      </NavLink>

      <NavLink to="/admin/workshoptable">
      <HStack ><FaTableList fontSize={'2rem'} /><Text fontSize="2xl">Workshop Table</Text></HStack>
      </NavLink>

      <NavLink to="/admin/producttable">
      <HStack ><FaTableList fontSize={'2rem'} /><Text fontSize="2xl">Product Table</Text></HStack>
      </NavLink>

    </VStack>
  );
};

export default AdminNavbar;
