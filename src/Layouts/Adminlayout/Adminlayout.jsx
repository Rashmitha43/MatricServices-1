// AdminLayout/adminlayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';  
import { Flex, Box } from '@chakra-ui/react';
import AdminNavbar from '../../Components/Admin/AdminNavbar';

const AdminLayout = () => {
  return (
    <Flex h="auto" bg="gray.100">
      <Box w="250px" bg="gray.800" color="white" p={5}>
        <AdminNavbar />
      </Box>

      <Box flex="1" p={5}>
        <Outlet />
      </Box>
    </Flex>
  );
};

export default AdminLayout;
