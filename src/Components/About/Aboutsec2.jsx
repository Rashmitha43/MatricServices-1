import { Box, Button, Heading, Text, Icon } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaQuestionCircle, FaRegCommentDots } from "react-icons/fa";

const Aboutsec2 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation Variants
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  const iconVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [1, 0.6, 1],
      transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
    },
  };

  const floatingCircleVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeInOut" } },
  };

  const backgroundVariant = {
    hidden: { scale: 1.1 },
    visible: { scale: 1, transition: { duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" } },
  };

  return (
    <Box
      height="80vh"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      ref={ref}
      position="relative"
      backgroundColor="transparent" // Rest of the page is transparent
    >
      {/* Black Container for 80% of Width */}
      <Box
        width="80%" // Black container takes up 80% of the viewport width
        height="100%"
        backgroundColor="black" // Black background for the container
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        zIndex={1}
      >
        {/* Animated Background */}
        <motion.div
          variants={backgroundVariant}
          backgroundColor="#000"
          initial="hidden"
          animate="visible"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />

        {/* Main Content */}
        <Box
          width="80%"
          height="80vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          px={4}
          zIndex={2}
          position="relative"
        >
          <motion.div variants={textVariant} initial="hidden" animate={controls}>
            <Box>
              {/* Heading with Blinking Icons */}
              <Heading
                as="h2"
                fontSize={["2xl", "3xl", "4xl"]}
                fontWeight="bold"
                color="white"
                mb={4}
                letterSpacing="wider"
                _hover={{ color: "yellow.400", transition: "color 0.3s ease" }}
              >
                {/* Blinking question mark icon next to text */}
                <motion.span
                  variants={iconVariant}
                  initial="hidden"
                  animate="visible"
                  style={{ display: "inline-block", marginRight: "10px" }}
                >
                  <Icon as={FaQuestionCircle} color="yellow.400" boxSize="1.5em" />
                </motion.span>
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
              <motion.div variants={buttonVariant} initial="hidden" animate={controls}>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5, repeatType: "mirror" }}
                >
                  <Button
                    mt={8}
                    height="45px"
                    bg="yellow.400"
                    color="black"
                    px={8}
                    fontWeight="bold"
                    borderRadius="full"
                    boxShadow="md"
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

        {/* Floating icons with subtle animations */}
        <motion.div
          variants={floatingCircleVariant}
          initial="hidden"
          animate={controls}
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

        {/* Additional blinking icon (Comment Icon for interaction) */}
        <motion.div
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
          }}
        >
          <Icon as={FaRegCommentDots} color="yellow.400" boxSize="2em" />
        </motion.div>
      </Box>
    </Box>
  );
};

export default Aboutsec2;
