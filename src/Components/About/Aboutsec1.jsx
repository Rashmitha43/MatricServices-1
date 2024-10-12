import { Box, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import aboutimg from "../../assets/Aboutsec1.png";
import theme from "../../theme";

const Aboutsec1 = () => {
  // Define the responsive animation based on screen size
  const shouldAnimate = useBreakpointValue({ base: false, lg: true });

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh", // Full viewport height
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        bgColor: theme.colors.black, // Fallback color
      }}
    >
      {/* Background image box */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundImage={aboutimg}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        zIndex="1"
      />

      {/* Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark transparent overlay
        }}
      />

      {/* Text Content with animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Final animation state
        transition={{ duration: 1.5, delay: 0.5 }} // Slight delay for smooth entrance
        style={{ zIndex: 3, width: "100%" }}
      >
        <Box
          width={["90%", "80%", "60%"]}
          textAlign={["center", "center", "left"]} // Centered on small screens, aligned left on larger
          color={theme.colors.white}
          p={[0, 0, "5%"]} // Padding on larger screens for alignment
        >
          <Heading
            fontSize={["3xl", "4xl", "5xl"]}
            fontWeight="bold"
            mb={4}
            fontFamily={theme.fonts.body}
          >
            Matric <Box as="span" color={theme.colors.ten}>Services</Box>
          </Heading>
          <Heading
            fontSize={["lg", "xl", "2xl"]}
            fontWeight="medium"
            mb={6}
            color={theme.colors.ten}
          >
            An initiative towards practicality of knowledge.
          </Heading>
          <Text fontSize={["md", "lg"]} lineHeight="1.6">
            At Matric Services, we are driven by passion, love, and a deep
            commitment to societal progress. We offer a wide range of
            technology-related services, from organizing specialized workshops
            to providing academic project assistance and custom solutions. Our
            services empower innovation and research at every level.
          </Text>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Aboutsec1;
