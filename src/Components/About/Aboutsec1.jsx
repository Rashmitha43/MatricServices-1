import { Box, Heading, Text, Image, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import aboutimg from "../../assets/Aboutsec1.jpg.jpg";
import theme from "../../theme";

const Aboutsec1 = () => {
  // Define whether to apply the sliding animation based on screen size
  const shouldAnimate = useBreakpointValue({ base: false, lg: true });

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: ["column", "column", "row"],
        alignItems: "center",
        justifyContent: "center",
        pt: "40px", // increased padding for more breathing room
        pb: "40px",

      }}
    >
      <Box
        display="flex"
        flexDirection={["column", "column", "row"]}
        alignItems="center"
        justifyContent="space-between"
        p={[6, 8, 12]}
        width={["95%", "90%", "80%"]}
        bgColor={theme.colors.white}
        position="relative"
        boxShadow="2xl" // More prominent shadow for a professional feel
        borderRadius="xl" // Softer corners
        overflow="hidden" // Ensure smooth clipping on animations
        _hover={{
          transform: "scale(1.02)", // Slight hover effect on the container
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Box flex="1.2" pr={[0, 0, 16]} mb={[6, 6, 0]}>
          <Box position="relative" display="inline-block" textAlign={["center", "center", "left"]}>
            <motion.div
              style={{ position: "absolute", top: "-10px", right: "-32px" }}
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Box fontSize={["28px", "34px"]} color={theme.colors.yellow}>
                ✨
              </Box>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Heading
                fontSize={["2xl", "3xl", "4xl"]} // Increased heading size
                fontWeight="bold"
                mb={4}
                fontFamily={theme.fonts.body}
                display="inline-block"
              >
                Matrix{" "}
                <Box as="span" color={theme.colors.ten}>
                  Services
                </Box>
              </Heading>
            </motion.div>
          </Box>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }} // Delayed for stagger effect
          >
            <Heading
              fontSize={["lg", "xl", "2xl"]}
              fontWeight="medium"
              mb={4}
              fontFamily={theme.fonts.body}
              textAlign={"left"}
              color={theme.colors.ten}
            >
              An initiative towards practicality of knowledge.
            </Heading>
            <Text mb={4} fontSize={["md", "lg"]} textAlign={"left"} lineHeight="1.8">
              Welcome to Engineer's Planet, where we redefine engineering education by connecting
              students with experienced mentors worldwide. Our mission is to bridge knowledge gaps
              and upgrade research and development quality.
            </Text>
            <Text fontSize={["md", "lg"]} textAlign={"left"} lineHeight="1.8">
              At Engineer’s Planet (EP), we are establishing a streamlined platform tailored to the
              distinct requirements of engineering students and researchers across all disciplines.
            </Text>
          </motion.div>
        </Box>

        <Box flex="1.5" order={[1, 1, 2]} position="relative">
          <motion.div
            initial={shouldAnimate ? { x: 1000 } : {}}
            animate={shouldAnimate ? { x: 0 } : {}}
            transition={{ duration: 1.5, type: "spring" }}
            whileHover={{ scale: 1.05, rotate: [0, 5, -5, 0] }} // Hover effects for image
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Image
              src={aboutimg}
              alt="Engineers Illustration"
              objectFit="cover"
              height={["250px", "350px", "400px"]}
              width={["250px", "350px", "450px"]}
              borderRadius="2xl"
              boxShadow="2xl"
              transform="rotate(-2deg)" // Initial slight rotation
            />
          </motion.div>

          {/* Add an animated overlay effect */}
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "2xl",
              background: `linear-gradient(145deg, rgba(255,255,255,0.2), transparent)`,
              opacity: 0,
            }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Aboutsec1;
