import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const Aboutsec2 = () => {
  return (
    <Box
      height="70vh"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
    <Box
      height="70vh"
      width="80%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      mb="20px"
      mt="10px"
      position="relative"
      overflow="hidden"
    >

      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#000",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      <Box
        width="80%"
        height="70vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        px={4}
        zIndex={2} 
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Box>
            {/* Add staggered text animation */}
            <Heading
              as="h2"
              fontSize={["2xl", "3xl", "4xl"]}
              fontWeight="bold"
              color="white"
              mb={4}
              _hover={{
                color: "yellow.400", // Change color on hover
                transition: "color 0.3s ease",
              }}
            >
              Please Send Us Your{" "}
              <Text as="span" color="yellow.400">
                Questions
              </Text>{" "}
              And
              <br />
              We Can{" "}
              <Text as="span" color="yellow.400">
                Help
              </Text>{" "}
              You Better
            </Heading>

            {/* Button with pulse and hover effects */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  repeatType: "mirror",
                }}
              >
                <Button
                  mt={8}
                  height="35px"
                  bg="yellow.400"
                  color="black"
                  size="xl"
                  px={8}
                  fontWeight="bold"
                  borderRadius="full"
                  _hover={{
                    bg: "yellow.300",
                    boxShadow: "0px 0px 15px rgba(255, 255, 0, 0.7)",
                    transform: "scale(1.05)",
                  }}
                  _active={{
                    bg: "yellow.500",
                    transform: "scale(0.95)",
                  }}
                >
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </Box>
        </motion.div>
      </Box>

      {/* Subtle floating animation for decoration */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          bottom: "-50px",
          right: "10px",
          width: "150px",
          height: "150px",
          background: "rgba(255, 255, 0, 0.1)",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />
    </Box>
    </Box>

  );
};

export default Aboutsec2;
