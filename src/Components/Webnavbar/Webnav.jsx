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
  useDisclosure, // Import useDisclosure
} from "@chakra-ui/react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import theme from "../../theme";
import logo from "../../assets/logo.png";

const Webnav = () => {
    const [isScrolled, setIsScrolled] = useState(false); 
    const { isOpen, onOpen, onClose } = useDisclosure(); 
    const [scrollPosition, setScrollPosition] = useState(0);

    const toggleNav = () => {
        if (isOpen) {
          onClose();
        } else {
          setScrollPosition(window.scrollY); // Save current scroll position when opening the drawer
          onOpen();
        }
      };

      // Function to handle scroll and toggle the 'isScrolled' state
  const handleScroll = () => {
    const scrollTop = window.scrollY; // Get vertical scroll position
    setIsScrolled(scrollTop > 0); // Set state to true if scrolled down
  };

  // Restore scroll position when closing the drawer
  const handleClose = () => {
    onClose();
    window.scrollTo(0, scrollPosition); // Restore scroll position
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


 return(
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
        display={isOpen ? "none" : "block"} // Hide navbar when drawer is open
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
                icon={isOpen ? <IoMdClose /> : <IoMdMenu />}
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
              color='white'
              cursor="pointer" // Change cursor to pointer
            
            >
              <a
                href="https://wa.me/919390555433"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HStack spacing={2} alignItems="center">
                  <FaWhatsapp cursor="pointer" />
                  <Text>Chat Now</Text>
                </HStack>
              </a>
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
              fontSize={'0.8rem'}
            >
              <NavLink to="/" style={navLinkStyle}>
                <Box _hover={{ cursor: "pointer" }}>Home</Box>
              </NavLink>
              <NavLink to="/about" style={navLinkStyle}>
                <Box _hover={{ cursor: "pointer" }}>About Us</Box>
              </NavLink>
              <NavLink to="/workshop" style={navLinkStyle}>
                <Box _hover={{ cursor: "pointer" }}>Workshops</Box>
              </NavLink>
              <NavLink to="/projects" style={navLinkStyle}>
                <Box _hover={{ cursor: "pointer" }}>Projects</Box>
              </NavLink>
              <NavLink to="/products" style={navLinkStyle}>
                <Box _hover={{ cursor: "pointer" }}>Products</Box>
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
                color="white"
                
              >
                <a
                  href="https://wa.me/919390555433"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HStack spacing={2} alignItems="center">
                    <FaWhatsapp cursor="pointer" />
                    <Text>Chat Now</Text>
                  </HStack>
                </a>
              </Box>
            </Box>
          </Box>
        </HStack>
      </Box>

       {/* Drawer Menu for Mobile */}
       <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={handleClose} // Use handleClose to restore scroll position
        trapFocus={true} // Ensure focus is trapped inside the drawer
        lockFocusAcrossFrames={true} // Lock focus to drawer
        closeOnOverlayClick={false} // Disable closing when clicking outside
        zIndex="1000"
      >
        <DrawerOverlay />
        <DrawerContent bg="#fff">
          <DrawerHeader>
            {/* Flexbox to align logo and close button in a row */}
            <Flex
              justifyContent="space-between"
              alignItems="center"
              w="100%"
              mb={0}
            >
              <Box
                w={{ base: "50%", md: "25%", lg: "15%" }}
                h={{ base: "100%", md: "80%" }}
                ml="0px"
              >
                <NavLink to="/">
                  <Image w="100%" h="100%" src={logo} alt="Logo" />
                </NavLink>
              </Box>
              <DrawerCloseButton position="relative" p="10px" />
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
              mt={0}
              p={4}
            >
              <NavLink to="/" style={navLinkStyle} onClick={handleClose}>
                <Box _hover={{ cursor: "pointer" }}>Home</Box>
              </NavLink>
              <NavLink to="/about" style={navLinkStyle} onClick={handleClose}>
                <Box _hover={{ cursor: "pointer" }}>About Us</Box>
              </NavLink>
              <NavLink
                to="/workshop"
                style={navLinkStyle}
                onClick={handleClose}
              >
                <Box _hover={{ cursor: "pointer" }}>Workshops</Box>
              </NavLink>
              <NavLink
                to="/projects"
                style={navLinkStyle}
                onClick={handleClose}
              >
                <Box _hover={{ cursor: "pointer" }}>Projects</Box>
              </NavLink>
              <NavLink
                to="/products"
                style={navLinkStyle}
                onClick={handleClose}
              >
                <Box _hover={{ cursor: "pointer" }}>Products</Box>
              </NavLink>
              
              <Box
                w="max-content"
                borderRadius="30px"
                p="5px 15px"
                bg={theme.colors.ten}
                display={{ base: "flex", lg: "none" }} // Show only in mobile menu
                alignItems="center"
                justifyContent="center"
                gap="5px"
                color="white"
              
              >
                <a
                  href="https://wa.me/919390555433"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HStack spacing={2} alignItems="center">
                    <FaWhatsapp cursor="pointer" />
                    <Text>Chat Now</Text>
                  </HStack>
                </a>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      

    </>
 )
}

export default Webnav