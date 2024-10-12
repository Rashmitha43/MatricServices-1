import React, { useState, useEffect } from "react";
import {
  Box,
  Image,
  IconButton,
  VStack,
  HStack,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Flex,
} from "@chakra-ui/react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import theme from "../../theme";
import logo from "../../assets/logo.png"; // Replace with your logo path

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State for mobile menu toggle
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position

  // Toggle the mobile navigation menu
  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  // Function to handle scroll and toggle the 'isScrolled' state
  const handleScroll = () => {
    const scrollTop = window.scrollY; // Get vertical scroll position
    setIsScrolled(scrollTop > 0); // Set state to true if scrolled down
  };

  // Effect to add scroll event listener and clean up on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Common styles for navigation links
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? theme.colors.ten : "black",
    borderBottom: isActive ? `2px solid ${theme.colors.ten}` : "none",
    paddingBottom: "3px",
  });

  return (
    <>
      {/* Navbar Container */}
      <Box
        boxShadow="md"
        bg="white"
        position={isScrolled ? "fixed" : "static"} // Position fixed when scrolled
        w="100%"
        top="0"
        zIndex="10"
        transition="position 0.3s ease-in-out"
      >
        {/* Mobile & Desktop Flex Container */}
        <HStack
          fontFamily={theme.fonts.body}
          w="95%"
          maxW="1200px"
          mx="auto"
          h="70px"
          p={1}
          display="flex"
          justifyContent={{ base: "space-between", lg: "space-between" }}
          alignItems="center"
          flexDirection={{ base: "row", lg: "row" }} // Keep items in a row layout
        >
          {/* Mobile View: Menu Toggle, Logo, Chat Button */}
          <HStack
            display={{ base: "flex", lg: "none" }}
            w="full"
            justifyContent="space-between"
            alignItems="center"
          >
            <HStack>
              {/* Hamburger Icon for Small Screens */}
              <IconButton
                icon={isNavOpen ? <IoMdClose /> : <IoMdMenu />}
                variant="outline"
                aria-label="Toggle navigation"
                fontSize="2rem"
                onClick={toggleNav}
                display={{ base: "block", lg: "none" }}
                mr="0px"
                borderColor="#000"
                borderWidth="1px"
                borderRadius="6px"
                _hover={{
                  backgroundColor: "gray.100", // Light background color on hover
                  transform: "scale(1.05)", // Slightly increase the size
                  transition: "all 0.2s ease", // Smooth transition
                }}
              />

              {/* Logo */}
              <Box w="150px" h="150px" ml="0px" mt="6px" p="0px">
                {/* Adjust logo size as needed */}
                <NavLink to="/">
                  <Image w="100%" h="100%" src={logo} alt="Logo" />
                </NavLink>
              </Box>
            </HStack>

            {/* WhatsApp Button */}
            <Box
              w="max-content"
              borderRadius="30px"
              p="5px 15px"
              bg={theme.colors.ten}
              display={{ base: "flex", lg: "flex" }} // Show in both mobile and desktop
              alignItems="center"
              justifyContent="center"
              gap="5px"
              cursor="pointer" // Change cursor to pointer
              _hover={{
                backgroundColor: theme.colors.thirty,
                color: "white",
                transform: "scale(1.05)", // Slightly increase the size
                transition: "all 0.3s ease", // Smooth transition
              }}
            >
              <FaWhatsapp /> <Text>Chat Now</Text>
            </Box>
          </HStack>

          {/* Desktop View */}
          <Box
            display={{ base: "none", lg: "flex" }}
            w="full"
            justifyContent="space-between"
          >
            {/* Logo for Desktop */}
            <Box w="15%" h="100%">
              <NavLink to="/">
                <Image w="100%" h="100%" src={logo} alt="Logo" />
              </NavLink>
            </Box>

            {/* Desktop Navigation Links */}
            <Box
              w="40%"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              fontWeight="700"
              textTransform="uppercase"
            >
              <NavLink to="/" style={navLinkStyle}>
                <Box _hover={{ cursor: "pointer" }}>Home</Box>
              </NavLink>
              <NavLink to="/about" style={navLinkStyle}>
                <Box _hover={{ cursor: "pointer" }}>About Us</Box>
              </NavLink>
              <NavLink to="/projects" style={navLinkStyle}>
                <Box _hover={{ cursor: "pointer" }}>Projects</Box>
              </NavLink>
              <NavLink to="/workshop" style={navLinkStyle}>
                <Box _hover={{ cursor: "pointer" }}>Workshops</Box>
              </NavLink>
            </Box>

            {/* WhatsApp Button for Desktop */}
            <Box
              w="20%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="20px"
            >
              <Box
                w="max-content"
                borderRadius="30px"
                p="5px 15px"
                bg={theme.colors.ten}
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="5px"
                color='white'
                _hover={{
                  backgroundColor: theme.colors.thirty,
                  color:'black'
                 
                }}
              >
                <FaWhatsapp /> Chat Now
              </Box>
            </Box>
          </Box>
        </HStack>

        {/* Drawer Menu for Mobile */}
        <Drawer isOpen={isNavOpen} placement="left" onClose={toggleNav}>
          <DrawerOverlay />
          <DrawerContent bg="#fff">
            <DrawerHeader>
              {/* Flexbox to align logo and close button in a row */}
              <Flex
                justifyContent="space-between"
                alignItems="center"
                w="100%"
                p="10px"
              >
                <Box
                  w={{ base: "50%", md: "30%", lg: "15%" }}
                  h={{ base: "100%", md: "80%" }}
                  ml="0px"
                >
                  <NavLink to="/">
                    <Image w="100%" h="100%" src={logo} alt="Logo" />
                  </NavLink>
                </Box>
                <DrawerCloseButton position="static" />{" "}
                {/* Remove absolute positioning */}
              </Flex>
            </DrawerHeader>

            <DrawerBody>
              {/* Collapsible Menu for Mobile */}
              <VStack
                spacing={4}
                alignItems="flex-start"
                textAlign="left"
                fontWeight="700"
                textTransform="uppercase"
                w="full"
                p={4}
              >
                <NavLink to="/" style={navLinkStyle}  onClick={toggleNav}>
                <Box _hover={{ cursor: "pointer" }}>Home</Box>
              </NavLink>
              <NavLink to="/about" style={navLinkStyle}  onClick={toggleNav}>
                <Box _hover={{ cursor: "pointer" }}>About Us</Box>
              </NavLink>
              <NavLink to="/projects" style={navLinkStyle}  onClick={toggleNav}>
                <Box _hover={{ cursor: "pointer" }}>Projects</Box>
              </NavLink>
              <NavLink to="/workshop" style={navLinkStyle}  onClick={toggleNav}>
                <Box _hover={{ cursor: "pointer" }}>Workshops</Box>
              </NavLink>
                <Box
                  w="max-content"
                  borderRadius="30px"
                  p="5px 15px"
                  bg={theme.colors.thirty}
                  display={{ base: "flex", lg: "none" }} // Show only in mobile menu
                  alignItems="center"
                  justifyContent="center"
                  gap="5px"
                  color='white'
                  _hover={{
                    backgroundColor: theme.colors.ten,
                    
                  }}
                >
                  <FaWhatsapp /> <Text>Chat Now</Text>
                </Box>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
