import React, { useState, useEffect } from "react";
import {
  Box,
  Image,
  IconButton,
  VStack,
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import theme from "../../theme";
import logo from "../../assets/logo.png";
import { ImCross } from "react-icons/im";

const Webnav = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const toggleNav = () => {
    setOpen((prev) => !prev);
    document.body.style.overflowY = open ? "scroll" : "hidden";
  };

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? theme.colors.ten : "black",
    borderBottom: isActive ? `2px solid ${theme.colors.ten}` : "none",
    paddingBottom: "3px",
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Box
        boxShadow="md"
        bg="white"
        position={isScrolled ? "fixed" : "static"}
        w="100%"
        top="0"
        zIndex="100"
        display={open ? "none" : "block"}
      >
        <HStack
          fontFamily={theme.fonts.body}
          w="95%"
          maxW="1200px"
          mx="auto"
          h="70px"
          p={1}
          justifyContent="space-between"
          alignItems="center"
          position="relative"
          zIndex="100"
        >
          {/* Mobile Header */}
          <HStack display={{ base: "flex", lg: "none" }} w="full" justifyContent="space-between">
            <HStack>
              <IconButton
                icon={<IoMdMenu />}
                aria-label="Toggle navigation"
                fontSize="2rem"
                onClick={toggleNav}
                borderColor="#000"
                borderWidth="1px"
                borderRadius="6px"
                _hover={{
                  backgroundColor: "gray.100",
                  transform: "scale(1.05)",
                  transition: "all 0.2s ease",
                }}
              />
              <Box w="150px" h="150px" ml="0px" mt="6px" p="0px">
                <NavLink to="/">
                  <Image w="100%" h="100%" src={logo} alt="Logo" />
                </NavLink>
              </Box>
            </HStack>

            <Box
              w="max-content"
              borderRadius="30px"
              p="5px 15px"
              bg="#25D366"
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="5px"
              color="white"
              cursor="pointer"
            >
              <a
                href="https://wa.me/919390555433"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HStack spacing={2} alignItems="center">
                  <FaWhatsapp />
                  <Text>Chat Now</Text>
                </HStack>
              </a>
            </Box>
          </HStack>

          {/* Desktop Header */}
          <Box display={{ base: "none", lg: "flex" }} w="full" justifyContent="space-between">
            <Box w="15%" h="100%">
              <NavLink to="/">
                <Image w="100%" h="100%" src={logo} alt="Logo" />
              </NavLink>
            </Box>

            <Box
              w="40%"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              fontWeight="700"
              textTransform="uppercase"
              fontSize="0.8rem"
              position="relative"
              zIndex="100"
            >
              <NavLink to="/" style={navLinkStyle}>
                <Box _hover={{ cursor: "pointer" }}>Home</Box>
              </NavLink>

              <NavLink to="/about" style={navLinkStyle}>
                <Box _hover={{ cursor: "pointer" }}>About Us</Box>
              </NavLink>

              {/* Desktop Hover Dropdown */}
              <Box position="relative" zIndex="1000">
                <Menu isLazy>
                  <MenuButton
                    as={Box}
                    fontWeight="700"
                    textTransform="uppercase"
                    fontSize="0.8rem"
                    _hover={{ color: theme.colors.ten }}
                    cursor="pointer"
                  >
                    Services
                  </MenuButton>
                  <MenuList
                    bg={theme.colors.ten}
                    color="white"
                    zIndex="1000"
                    position="absolute"
                  >
                    <MenuItem as={NavLink} to="/workshop" _hover={{ bg: "gray.700" }}>
                      Workshops
                    </MenuItem>
                    <MenuItem as={NavLink} to="/projects" _hover={{ bg: "gray.700" }}>
                      Projects
                    </MenuItem>
                    <MenuItem as={NavLink} to="/software-development" _hover={{ bg: "gray.700" }}>
                      Software Development
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>

              <NavLink to="/products" style={navLinkStyle}>
                <Box _hover={{ cursor: "pointer" }}>Products</Box>
              </NavLink>
            </Box>

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
                bg="#25D366"
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
                    <FaWhatsapp />
                    <Text>Chat Now</Text>
                  </HStack>
                </a>
              </Box>
            </Box>
          </Box>
        </HStack>
      </Box>

      {/* Mobile Drawer */}
      {open && (
        <Box
          position="fixed"
          w="100%"
          height="100%"
          top="0"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          bg="white"
          zIndex={99999}
        >
          <Box w="150px" h="150px">
            <NavLink to="/">
              <Image w="100%" h="100%" src={logo} alt="Logo" objectFit="contain" />
            </NavLink>
          </Box>
          <Box
            color="black"
            fontSize="1.2rem"
            onClick={toggleNav}
            position="absolute"
            right="5%"
            top="9%"
          >
            <ImCross />
          </Box>
          <VStack
            w="100%"
            align="center"
            mt={8}
            fontSize="1.2rem"
            fontWeight={500}
            spacing={2}
          >
            <NavLink to="/" style={navLinkStyle} onClick={toggleNav}>
              <Box _hover={{ cursor: "pointer" }}>Home</Box>
            </NavLink>
            <NavLink to="/about" style={navLinkStyle} onClick={toggleNav}>
              <Box _hover={{ cursor: "pointer" }}>About Us</Box>
            </NavLink>

            {/* Mobile Dropdown: Click-based */}
            <Menu isLazy>
              <MenuButton
                fontWeight="500"
                fontSize="1.2rem"
                w="100%"
                textAlign="center"
                _hover={{ color: theme.colors.ten }}
              >
                Services
              </MenuButton>
              <MenuList bg={theme.colors.ten} color="white">
                <MenuItem as={NavLink} to="/workshop" onClick={toggleNav} _hover={{ bg: "gray.700" }}>
                  Workshops
                </MenuItem>
                <MenuItem as={NavLink} to="/projects" onClick={toggleNav} _hover={{ bg: "gray.700" }}>
                  Projects
                </MenuItem>
                <MenuItem as={NavLink} to="/software-development" onClick={toggleNav} _hover={{ bg: "gray.700" }}>
                  Software Development
                </MenuItem>
              </MenuList>
            </Menu>

            <NavLink to="/products" style={navLinkStyle} onClick={toggleNav}>
              <Box _hover={{ cursor: "pointer" }}>Products</Box>
            </NavLink>
          </VStack>
        </Box>
      )}
    </>
  );
};

export default Webnav;
