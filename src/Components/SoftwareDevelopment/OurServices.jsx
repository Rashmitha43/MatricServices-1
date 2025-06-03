import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaCogs,
  FaShieldAlt,
  FaSearch,
} from "react-icons/fa";

const services = [
  {
    icon: FaLaptopCode,
    title: "Web Development",
    desc: "High-performance websites with modern frameworks and best UX practices.",
  },
  {
    icon: FaMobileAlt,
    title: "App Development",
    desc: "Cross-platform and native mobile apps for iOS, Android, and beyond.",
  },
  {
    icon: FaPaintBrush,
    title: "UI/UX Design",
    desc: "User-centered interface design and prototyping.",
  },
  {
    icon: FaCogs,
    title: "Automation & Integration",
    desc: "Automated workflows and seamless API integrations.",
  },
  {
    icon: FaShieldAlt,
    title: "Security Consulting",
    desc: "End-to-end app security and compliance solutions.",
  },
  {
    icon: FaSearch,
    title: "SEO & Analytics",
    desc: "Boost your online presence and gain actionable insights.",
  },
];

const OurServices = () => {
  const midGray = "#a5a5a5";
  const lightGray = "#ededed";
  const black = "#000000";
  const white = "#ffffff";

  return (
    <Box w="100%" pt={{ base: 10, md: 14 }} pb={{ base: 4, md: 6 }} px={0}>
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
        <Heading
          textAlign="center"
          mb={8}
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="extrabold"
          letterSpacing="wide"
          fontFamily="'Poppins', sans-serif"
          color={black}
        >
          OUR SERVICES
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 6, md: 10 }}>
          {services.map((svc, index) => {
            const isEven = index % 2 === 0;

            // Alternate backgrounds: even index -> midGray, odd index -> lightGray
            const baseBg = isEven ? midGray : lightGray;

            // Text colors: on midGray bg use white, on lightGray bg use black
            const titleColor = isEven ? white : black;
            const descColor = isEven ? white : black;

            // Icon color is always black for visibility
            const iconColor = black;

            // Border color subtle: darker on light bg, lighter on dark bg
            const borderColor = isEven ? lightGray : midGray;

            return (
              <VStack
                key={svc.title}
                bg={baseBg}
                borderRadius="xl"
                p={8}
                spacing={6}
                align="center"
                textAlign="center"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-6px) scale(1.03)",
                  boxShadow: "lg",
                }}
                role="group"
                border="1px solid"
                borderColor={borderColor}
                minH={{ base: "260px", md: "320px" }}
              >
                <Box
                  bg={baseBg}
                  p={5}
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  transition="all 0.3s ease"
                  _groupHover={{
                    transform: "scale(1.2)",
                    boxShadow: `0 0 20px rgba(0,0,0,0.2)`,
                  }}
                >
                  <Icon
                    as={svc.icon}
                    color={iconColor}
                    boxSize={8}
                  />
                </Box>
                <Text
                  fontWeight="bold"
                  fontSize={{ base: "lg", md: "xl" }}
                  fontFamily="'Poppins', sans-serif"
                  color={titleColor}
                >
                  {svc.title}
                </Text>
                <Text
                  fontSize="md"
                  maxW="280px"
                  color={descColor}
                  fontFamily="'Open Sans', sans-serif"
                  lineHeight="1.6"
                >
                  {svc.desc}
                </Text>
              </VStack>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default OurServices;
