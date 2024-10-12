import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import theme from "../../theme";
import ov from "../../assets/ourvision.jpg"; // Use your correct path for assets

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionImage = motion(Image);

const Aboutsec2 = () => {
  // Control animations when sections are in view
  const { ref: visionRef, inView: visionInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  
  const visionControls = useAnimation();
  const missionControls = useAnimation();

  // Trigger animations when sections come into view
  useEffect(() => {
    if (visionInView) {
      visionControls.start({ opacity: 1, y: 0 });
    }
    if (missionInView) {
      missionControls.start({ opacity: 1, y: 0 });
    }
  }, [visionInView, missionInView, visionControls, missionControls]);

  return (
    <Box
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mx="auto"
      my={{ base: "3rem", md: "4rem", lg: "5rem" }}
      fontFamily={theme.fonts.body}
    >
      {/* Our Vision Section */}
      <MotionBox
        ref={visionRef} // Tied to the Intersection Observer
        w="80%"
        bgGradient="linear(to-r, #ededed, #f7f7f7)"
        p={{ base: "1.5rem", md: "3rem", lg: "4rem" }}
        borderRadius="20px"
        mb={{ base: "2rem", md: "3rem", lg: "5rem" }}
        initial={{ opacity: 0, y: 50 }}
        animate={visionControls} // Controls animation based on scrolling
        transition={{ duration: 0.8 }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          gap={{ base: "10px", md: "20px", lg: "30px" }}
        >
          <MotionBox
            w={{ base: "100%", md: "50%" }}
            whileHover={{ scale: 1.05 }} // Hover effect
            transition={{ duration: 0.3 }}
          >
            <MotionImage
              src={ov} // Use your own image path
              alt="Our Vision"
              borderRadius="15px"
              objectFit="cover"
              w="100%"
              h={{ base: "180px", md: "250px", lg: "300px" }}
              whileHover={{ scale: 1.02 }} // Slight zoom on hover
              transition={{ duration: 0.5 }}
            />
          </MotionBox>

          <Box w={{ base: "100%", md: "45%" }}>
            <MotionText
              fontSize={{ base: "1.4rem", md: "1.8rem", lg: "2.5rem" }}
              fontWeight="bold"
              mb="1rem"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Our Vision
            </MotionText>
            <MotionText
              fontSize={{ base: "0.9rem", md: "1rem", lg: "1.2rem" }}
              color={theme.colors.ten}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              We collaborate with industrial experts from around the globe,
              ensuring that our solutions are at the forefront of technological
              advancements. Whether it’s hands-on workshops, guided research
              projects, or fully customized solutions, we deliver our expertise
              with the goal of making technology accessible and impactful for
              everyone.
            </MotionText>
          </Box>
        </Flex>
      </MotionBox>

      {/* Our Mission Section */}
      <MotionBox
        ref={missionRef} // Intersection Observer for the Mission section
        w="80%"
        bgGradient="linear(to-l, #f7f7f7, #ededed)"
        p={{ base: "1.5rem", md: "3rem", lg: "4rem" }}
        borderRadius="20px"
        initial={{ opacity: 0, y: 50 }}
        animate={missionControls}
        transition={{ duration: 0.8 }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          gap={{ base: "10px", md: "20px", lg: "30px" }}
        >
          <Box w={{ base: "100%", md: "45%" }}>
            <MotionText
              fontSize={{ base: "1.4rem", md: "1.8rem", lg: "2.5rem" }}
              fontWeight="bold"
              mb="1rem"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Our Mission
            </MotionText>
            <MotionText
              fontSize={{ base: "0.9rem", md: "1rem", lg: "1.2rem" }}
              color={theme.colors.ten}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              What sets us apart is our dedication to offering these services at
              minimal costs, prioritizing the benefit of society over profit. At
              Matric Services, we believe in using technology to create a
              better, more connected world—one solution at a time.
            </MotionText>
          </Box>

          <MotionBox
            w={{ base: "100%", md: "50%" }}
            whileHover={{ scale: 1.05 }} // Hover effect for the image
            transition={{ duration: 0.3 }}
          >
            <MotionImage
              src="./images/Homegallery/galleryimg9.jpeg" // Use your own image path
              alt="Our Mission"
              borderRadius="15px"
              objectFit="cover"
              w="100%"
              h={{ base: "180px", md: "250px", lg: "300px" }}
              whileHover={{ scale: 1.02 }} // Slight zoom on hover
              transition={{ duration: 0.5 }}
            />
          </MotionBox>
        </Flex>
      </MotionBox>
    </Box>
  );
};

export default Aboutsec2;
