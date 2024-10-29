// AdminLayout/adminlayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';  
import { Flex, Box } from '@chakra-ui/react';
import AdminNavbar from '../../Components/Admin/AdminNavbar';
import theme from '../../theme'

const AdminLayout = () => {
  return (
    <Flex h="auto" bg="gray.100">
      <Box w="25%" bg={theme.colors.ten} color="white" p={8}>
        <AdminNavbar />
      </Box>

      <Box flex="1" >
        <Outlet />
      </Box>
    </Flex>
  );
};

export default AdminLayout;
