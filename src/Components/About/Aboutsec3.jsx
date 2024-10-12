import { Box, Button, Text, useBreakpointValue, Fade, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import theme from "../../theme";

const Aboutsec3 = () => {
  const padding = useBreakpointValue({ base: 4, md: 6, lg: 8 });
  const buttonSize = useBreakpointValue({ base: "md", lg: "lg" });

  // Animations Variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const buttonHover = {
    scale: [1, 1.05, 1],
    transition: { duration: 0.5, repeat: Infinity, repeatType: "mirror" },
  };

  const floatEffect = {
    hidden: { y: 10 },
    visible: {
      y: [10, -10],
      transition: { y: { yoyo: Infinity, duration: 2, ease: "easeInOut" } },
    },
  };

  const backgroundGradient = {
    hidden: { opacity: 0.8 },
    visible: {
      opacity: 1,
      background: "linear-gradient(135deg, #ffd700, #ff7e00)",
      transition: { duration: 3, repeat: Infinity, repeatType: "mirror" },
    },
  };

  return (
    <Fade in={true} transition={{ enter: { duration: 0.5 } }}>
      <Box
        width="100%"
        display="flex"
        flexDirection={["column", "column", "row"]}
        alignItems="center"
        justifyContent="center"
        pt="20px"
        pb="20px"
        overflow="hidden"
      >
        {/* Box Wrapper */}
        <Box
          display="flex"
          flexDirection={["column", "column", "row"]}
          alignItems="center"
          justifyContent="space-between"
          p={padding}
          width={["95%", "90%", "80%"]}
          position="relative"
          gap={[4, 4, 4]}
        >
          {/* First Box with Animation */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            style={{ flex: 1, width: "100%", position: "relative" }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              borderRadius="20px"
              overflow="hidden"
              bgColor={theme.colors.thirty}
              p={5}
              textAlign="center"
              boxShadow="md"
              position="relative"
            >
              <Heading
                as="h2"
                fontSize={["lg", "xl"]}
                fontWeight="bold"
                color="#000"
                mb={2}
                textShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
              >
                Are You Ready?
              </Heading>
              <Text as="h3" fontSize={["xl", "2xl"]} fontWeight="semibold" color="#000" mb={4}>
                Start a New Project
              </Text>
              <motion.div whileHover={buttonHover}>
                <Button
                  colorScheme="whiteAlpha"
                  size={buttonSize}
                  leftIcon={<FaWhatsapp />}
                  p={4}
                  bgColor="white"
                  color="black"
                  borderRadius="10px"
                  boxShadow="md"
                  _hover={{
                    bg: "gray.200",
                    transform: "scale(1.05)",
                    boxShadow: "lg",
                  }}
                  _active={{
                    bg: "gray.300",
                    transform: "scale(0.98)",
                  }}
                  aria-label="Contact us via WhatsApp"
                >
                  WhatsApp
                </Button>
              </motion.div>
              {/* Floating Background Effect */}
              <motion.div
                variants={floatEffect}
                initial="hidden"
                animate="visible"
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  right: "-30px",
                  width: "100px",
                  height: "100px",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                  zIndex: 0,
                }}
              />
            </Box>
          </motion.div>

          {/* Second Box with Animation */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            style={{ flex: 1, width: "100%", position: "relative" }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              borderRadius="20px"
              overflow="hidden"
              bgColor={theme.colors.ten}
              p={5}
              textAlign="center"
              boxShadow="md"
              position="relative"
            >
              <Heading
                as="h2"
                fontSize={["xl", "2xl"]}
                fontWeight="semibold"
                color="#fff"
                mb={2}
                textShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
              >
                What Are You Waiting for?
              </Heading>
              <Text as="p" fontSize={["md", "lg"]} color="#fff" mb={4}>
                Let's Talk About Work
              </Text>
              <motion.div whileHover={buttonHover}>
                <Button
                  colorScheme="blackAlpha"
                  size={buttonSize}
                  p={4}
                  bgColor="gray"
                  color="white"
                  borderRadius="10px"
                  rightIcon={<FaArrowRight />}
                  boxShadow="md"
                  _hover={{
                    bg: "gray.700",
                    transform: "scale(1.05)",
                    boxShadow: "lg",
                  }}
                  _active={{
                    bg: "gray.800",
                    transform: "scale(0.98)",
                  }}
                  aria-label="Start Now"
                >
                  Start Now
                </Button>
              </motion.div>
              {/* Floating Background Effect */}
              <motion.div
                variants={floatEffect}
                initial="hidden"
                animate="visible"
                style={{
                  position: "absolute",
                  top: "-30px",
                  left: "-30px",
                  width: "100px",
                  height: "100px",
                  background: "rgba(0, 0, 0, 0.1)",
                  borderRadius: "50%",
                  zIndex: 0,
                }}
              />
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Fade>
  );
};

export default Aboutsec3;
