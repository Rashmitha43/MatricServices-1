// components/admin/adminnavbar.jsx
import React from 'react';
import { VStack, Text, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <VStack spacing={6} align="start">
      <Text fontSize="2xl" fontWeight="bold">Admin Panel</Text>


      <NavLink to="/admin/addproject">
        <Text>Add Project</Text>
      </NavLink>

      <NavLink to="/admin/projecttable">
        <Text>Project Table</Text>
      </NavLink>
    </VStack>
  );
};

export default AdminNavbar;
