import React from 'react';
import AdminNavbar from '../../Components/Admin/AdminNavbar';
import { Outlet } from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/react';

const AdminLayoutPage = () => {
  return (
    <Flex minHeight="100vh">
      <Box width="300px" bg="gray.800" color="white" p={2}>
        <AdminNavbar />
      </Box>

      <Box flex="1" p={4}>
        <Outlet />
      </Box>
    </Flex>
  );
};

export default AdminLayoutPage;
