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
              h="100%"
              display={{ base: "none", lg: "flex" }}
              alignItems={"center"}
              justifyContent={"space-between"}
              fontWeight={"700"}
              textTransform={"uppercase"}
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
                bg={theme.colors.ten}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                gap="5px"
                _hover={{
                  backgroundColor: theme.colors.thirty,
                  color: "white",
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
