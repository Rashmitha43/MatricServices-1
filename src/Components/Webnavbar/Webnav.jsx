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
   Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
} from "@chakra-ui/react";

import { ChevronDownIcon ,ChevronRightIcon} from "@chakra-ui/icons";
import { IoMdMenu } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import theme from "../../theme";
import logo from "../../assets/logo.png";
import { ImCross } from "react-icons/im";



// Import specific icons for services
import {
  FaTools, // For Workshops
  FaProjectDiagram, // For Projects
  FaLaptop,
  FaPlus,
  FaMinus, // For Software Development
} from "react-icons/fa";

const Webnav = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  const toggleNav = () => {
    setOpen((prev) => !prev);
    document.body.style.overflowY = open ? "scroll" : "hidden";
  };

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? theme.colors.ten : "black",
    borderBottom: isActive ? `2px solid ${theme.colors.ten}` : "none",
    paddingBottom: "3px",
  });

   const navTextStyle = {
    fontSize: "1.3rem",
    fontWeight: "500",
    color: "black",
  };

  const serviceItems = [
  {
    label: "Workshops",
    path: "/workshop",
    icon: FaTools,
  },
  {
    label: "Projects",
    path: "/projects",
    icon: FaProjectDiagram,
  },
  {
    label: "Software Development",
    path: "/softwaredevelopment",
    icon: FaLaptop,
  },
];


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
          <HStack
            display={{ base: "flex", lg: "none" }}
            w="full"
            justifyContent="space-between"
          >
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
          <Box
            display={{ base: "none", lg: "flex" }}
            w="full"
            justifyContent="space-between"
          >
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

              {/* Desktop Hover Dropdown with controlled Menu */}
              <Menu
                isLazy
                isOpen={servicesMenuOpen}
                onClose={() => setServicesMenuOpen(false)}
              >
                <Box
                  onMouseEnter={() => setServicesMenuOpen(true)}
                  onMouseLeave={() => setServicesMenuOpen(false)}
                  position="relative"
                  zIndex="1000"
                >
                  <MenuButton
  as={Box}
  fontWeight="700"
  textTransform="uppercase"
  fontSize="0.8rem"
  _hover={{ color: theme.colors.ten, cursor: "pointer" }}
  display="flex"
  alignItems="center"
  gap="4px"
  lineHeight="1"
>
  Services
  <ChevronDownIcon
    boxSize={5}               // Restore visibility with a decent size
    color="gray.800"
    alignSelf="center"        // Ensure proper vertical alignment
    style={{ marginTop: "1px" }} // Slight adjustment to line up with text
  />
</MenuButton>
                  <MenuList
  bg="white"
  color="black"
  minW="260px"
  py={2}
  borderRadius="md"
  boxShadow="lg"
  p={2}
>
  {serviceItems.map((item) => (
    <MenuItem
      key={item.label}
      p={0}
      bg="transparent" // ensure no hover bg
      _hover={{ bg: "transparent" }} // disable default hover background
    >
      <NavLink
        to={item.path}
        style={{ width: "100%", textDecoration: "none" }}
        onClick={() => setServicesMenuOpen(false)}
      >
        <Flex
          w="full"
          align="center"
          justify="space-between"
          px={3}
          py={2}
          transition="all 0.2s"
          _hover={{ color: "blue.600" }}
        >
          {/* Left section: + symbol and label */}
          <HStack spacing={3} align="center">
            <Box fontSize="lg" color="inherit" transition="color 0.2s">+</Box>
            <Text
              fontSize="0.97rem"
              fontWeight="semibold"
              color="inherit"
              transition="color 0.2s"
            >
              {item.label}
            </Text>
          </HStack>

          {/* Right section: icon */}
          {item.icon && (
            <Box
              as={item.icon}
              boxSize="18px"
              color="inherit"
              transition="color 0.2s"
            />
          )}
        </Flex>
      </NavLink>
    </MenuItem>
  ))}
</MenuList>


                </Box>
              </Menu>

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
    h="100%"
    top="0"
    display="flex"
    flexDirection="column"
    alignItems="flex-start"
    bg="white"
    zIndex={99999}
    px={5}
    py={6}
    overflowY="auto"
  >
    {/* Logo */}
    <Box w="150px" h="150px">
      <NavLink to="/">
        <Image
          w="100%"
          h="100%"
          src={logo}
          alt="Logo"
          objectFit="contain"
        />
      </NavLink>
    </Box>

    {/* Close Button */}
    <Box
      color="black"
      fontSize="1.2rem"
      onClick={toggleNav}
      position="absolute"
      right="5%"
      top="5%"
      cursor="pointer"
    >
      <ImCross />
    </Box>


{/* Home */}
<NavLink to="/"  onClick={toggleNav}>
  <Box display="flex" alignItems="center" gap={2} px={4} py={2}>
    <ChevronRightIcon boxSize={5} color="gray.800"  />
    <Text {...navTextStyle}>Home</Text>
  </Box>
</NavLink>

{/* About us */}
<NavLink to="/about"  onClick={toggleNav}>
  <Box display="flex" alignItems="center" gap={2} px={4} py={2}>
    <ChevronRightIcon boxSize={5} color="gray.800"  />
    <Text {...navTextStyle}>About us</Text>
  </Box>
</NavLink>

<Accordion allowToggle w="100%">
  <AccordionItem border="none">
    {({ isExpanded }) => (
      <>
        <AccordionButton
  px={4}
  py={2}
  display="flex"
  alignItems="center"
  justifyContent="space-between"
>
  {/* Left side: Arrow and Text */}
  <Box display="flex" alignItems="center">
    <Box
      as={ChevronRightIcon}
      boxSize={5}
      color="gray.800"
      transform={isExpanded ? "rotate(90deg)" : "rotate(0deg)"}
      transition="transform 0.2s"
      mr={3}
    />
    <Text {...navTextStyle}>Services</Text>
  </Box>

  {/* Right side: + or - icon, slightly closer but not too close */}
  <Box
    w="22px"
    h="22px"
    borderRadius="full"
    bg="blue.100"
    color="black"
    display="flex"
    alignItems="center"
    justifyContent="center"
    ml={4}  // Medium gap from the text
    mr={1}  // Small right margin to keep spacing clean on mobile
    transition="all 0.2s"
  >
    {isExpanded ? <FaMinus size={10} /> : <FaPlus size={10} />}
  </Box>
</AccordionButton>


        <AccordionPanel pb={4} pl={10}>
          {serviceItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <NavLink
                key={index}
                to={item.path}
                style={{ textDecoration: "none", width: "100%" }}
                onClick={toggleNav}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  py={2}
                  px={2}
                  _hover={{ color: "blue.600", cursor: "pointer" }}
                >
                  <Box as={IconComponent} boxSize={5} mr={2} />
                  <Text {...navTextStyle}>{item.label}</Text>
                </Box>
              </NavLink>
            );
          })}
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>

{/* Products */}
<NavLink to="/products"  onClick={toggleNav}>
  <Box display="flex" alignItems="center" gap={2} px={4} py={2}>
    <ChevronRightIcon  boxSize={5} color="gray.800"  />
    <Text {...navTextStyle}>Products</Text>
  </Box>
</NavLink>

</Box>
   )}
    </>
  );
};

export default Webnav;          
