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


      <NavLink to="/admin/addproject">
      <HStack ><RiFunctionAddFill fontSize={'2rem'} /><Text fontSize="3xl">Add Projects</Text></HStack>
      </NavLink>

      <NavLink to="/admin/projecttable">
      <HStack ><FaTableList fontSize={'2rem'} /><Text fontSize="3xl">Project Table</Text></HStack>
      </NavLink>
    </VStack>
  );
};

export default AdminNavbar;
