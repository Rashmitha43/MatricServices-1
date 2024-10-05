import React, { useState } from "react";
import theme from "../../theme";
import logo from "../../assets/MS.png";
import { Box, Image } from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {
  Flex,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  VStack,
} from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [Nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!Nav);
  };
  return (
    <>
      <Box boxShadow={"md"}>
        <Box
          fontFamily={theme.fonts.body}
          w="95%"
          maxW={"1200px"}
          mx="auto"
          h="70px"
          p={1}
        >
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
            w={{ base: "100%", md: "100%", lg: "100%" }}
            h="100%"
          >
            <Box
              w={{ base: "40%", md: "30%", lg: "15%" }}
              h={{ base: "60%", md: "80%" }}
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
              onClick={handleClick}
            >
              <IoMdMenu />
            </Box>
            {Nav && <></>}
            {/* fordesktop */}
            <Box
              w="40%"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              fontWeight="700"
              textTransform="uppercase"
            >
              <NavLink
                to="./"
                style={({ isActive, isPending, isTransitioning }) => {
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
                style={({ isActive, isPending, isTransitioning }) => {
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
                style={({ isActive, isPending, isTransitioning }) => {
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
                style={({ isActive, isPending, isTransitioning }) => {
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
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                gap="5px"
                color='white'
                _hover={{
                  backgroundColor: theme.colors.ten,
                 
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
                <NavLink to="/" style={navLinkStyle} onClick={toggleNav}>
                  <Box _hover={{ cursor: "pointer" }}>Home</Box>
                </NavLink>
                <NavLink to="/about" style={navLinkStyle} onClick={toggleNav}>
                  <Box _hover={{ cursor: "pointer" }}>About Us</Box>
                </NavLink>
                <NavLink
                  to="/projects"
                  style={navLinkStyle}
                  onClick={toggleNav}
                >
                  <Box _hover={{ cursor: "pointer" }}>Projects</Box>
                </NavLink>
                <NavLink
                  to="/workshop"
                  style={navLinkStyle}
                  onClick={toggleNav}
                >
                  <Box _hover={{ cursor: "pointer" }}>Workshops</Box>
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
                  _hover={{
                    backgroundColor: theme.colors.thirty,
                    color: "white",
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
