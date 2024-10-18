import { Box, Text, useColorModeValue } from "@chakra-ui/react";

const AdminHome = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      mx="auto"
    >
      <Text
        fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
        fontWeight="bold"
        textAlign="center"
      >
        Welcome to Matric Services
      </Text>
    </Box>
  );
};

export default AdminHome;
