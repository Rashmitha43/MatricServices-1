import React, { useState } from "react";
import theme from "../../theme";
import logo from "../../assets/logo.png";
import { Box, Button, Image } from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Navbar = () => {

  return (
    <>
      <Box boxShadow={"1px 1px 1px 1px rgb(0,0,0)"}  w='100%' mb={'4.5rem'} >
        <Box
          bg={theme.colors.sixty}
          fontFamily={theme.fonts.body}
          w="100%"
          right={0}
          left='0'
          mx="auto"
          h="70px"
          p={1}
          top={0} 
          position={'fixed'}
          boxShadow={'lg'}
          zIndex={1000}
        
        >
          <Box
            maxW={'1200px'}
            mx='auto'
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
            w={{ base: "100%", md: "100%", lg: "100%" }}
            h="100%"
          >
            <Box
              w={{ base: "40%", md: "30%", lg: "25%" }}
              h={{ base: "100%" }}
            >
              <NavLink to="./">
                <Image w="100%" h="100%" src={logo} />
              </NavLink>
            </Box>

            {/* forsmallscreens */}

            <Box
              w="20%"
              h="100%"
              display={{ base: "flex", lg: "none" }}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize="1.5rem"
              color={theme.colors.thirty}
              order="1"
            >
              <IoMdMenu />
            </Box>
            {/* fordesktop */}
            <Box
              w="40%"
              h="100%"
              display={{ base: "none", lg: "flex" }}
              alignItems={"center"}
              justifyContent={"space-between"}
              fontWeight={"700"}
              textTransform={"uppercase"}
            >
              <NavLink
                to="./"
                style={({ isActive }) => {
                  return {
                    color: isActive ? theme.colors.thirty : "black",
                    borderBottom: isActive
                      ? `2px solid ${theme.colors.thirty}`
                      : "none",
                    paddingBottom: "3px",
                  };
                }}
              >
                <Box _hover={{ cursor: "pointer" }}>Home</Box>
              </NavLink>
              <NavLink
                to="./about"
                style={({ isActive }) => {
                  return {
                    color: isActive ? theme.colors.thirty : "black",
                    borderBottom: isActive
                      ? `2px solid ${theme.colors.thirty}`
                      : "none",
                    paddingBottom: "3px",
                  };
                }}
              >
                <Box _hover={{ cursor: "pointer" }}>AboutUs</Box>
              </NavLink>
              <NavLink
                to="./projects"
                style={({ isActive }) => {
                  return {
                    color: isActive ? theme.colors.thirty : "black",
                    borderBottom: isActive
                      ? `2px solid ${theme.colors.thirty}`
                      : "none",
                    paddingBottom: "3px",
                  };
                }}
              >
                <Box _hover={{ cursor: "pointer" }}>Projects</Box>
              </NavLink>
              <NavLink
                to="./workshop"
                style={({ isActive }) => {
                  return {
                    color: isActive ? theme.colors.thirty : "black",
                    borderBottom: isActive
                      ? `2px solid ${theme.colors.thirty}`
                      : "none",
                    paddingBottom: "3px",
                  };
                }}
              >
                <Box _hover={{ cursor: "pointer" }}>Workshops</Box>
              </NavLink>
            </Box>

            <Box
              w={"20%"}
              display={{ base: "none", lg: "flex" }}
              alignItems={"center"}
              justifyContent={"center"}
              gap="20px"
            >
              <Box
                w="max-content"
                borderRadius={"30px"}
                p="5px 15px"
                bg={theme.colors.thirty}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                cursor={'pointer'}
                gap="5px"
                color='white'
                _hover={{
                  backgroundColor: theme.colors.ten,
                 
                }}
              >
                <FaWhatsapp /> chatnow
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
