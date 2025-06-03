import React, { useState } from "react";
import { Box, VStack, HStack, Button, Text, Icon } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLaptopCode, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import WebTechStack from "./WebTechStack";
import AppTechStack from "./AppTechStack";

const MotionBox = motion(Box);

const COLORS = {
  background: "#ededed", // light gray background
  textPrimary: "#000000", // black text for high contrast
  textSecondary: "#a5a5a5", // medium gray for less prominent text
  buttonBg: "#a5a5a5",
  buttonHoverBg: "#888888",
  buttonActiveBg: "#6b6b6b",
};

const TechStackCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = 3;

  const handleNext = () => {
    if (currentPage < pageCount - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Box
      w="100vw"
      minH="auto"
      bg={COLORS.background}
      px={0}
      py={{ base: 4, md: 8 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        width="100vw"
        maxW="1600px"
        mx="auto"
        px={{ base: 4, md: 12 }}
        py={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
        minH="auto"
      >
        <AnimatePresence mode="wait">
          <MotionBox
            key={currentPage}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            w="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            minH="auto"
            bg="transparent"
            borderRadius="none"
            boxShadow="none"
            border="none"
            p={{ base: 0, md: 0 }}
          >
            {(() => {
              switch (currentPage) {
                case 0:
                  return (
                    <VStack
                      spacing={6}
                      textAlign="center"
                      w="full"
                      maxW="1000px"
                      mx="auto"
                      h="full"
                      justifyContent="center"
                    >
                      <Box
                        bg="transparent"
                        p={6}
                        mb={1}
                        display="inline-flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Icon
                          as={FaLaptopCode}
                          boxSize={{ base: "20", md: "24" }}
                          color={COLORS.textPrimary}
                        />
                      </Box>
                      <Text
                        fontSize={{ base: "2xl", md: "3xl" }}
                        fontWeight="extrabold"
                        color={COLORS.textPrimary}
                        letterSpacing="tight"
                      >
                        Our Comprehensive Tech Stacks
                      </Text>
                      <Text
                        fontSize={{ base: "lg", md: "xl" }}
                        color={COLORS.textPrimary}
                        maxW="2xl"
                        opacity={0.85}
                      >
                        Dive into the powerful technologies and frameworks we
                        leverage to build robust, scalable, and innovative
                        solutions for both web and mobile platforms.
                      </Text>

                      <Button
                        onClick={handleNext}
                        size="md"
                        borderRadius="full"
                        px={8}
                        py={4}
                        boxShadow="none"
                        fontSize="2xl"
                        bg={COLORS.buttonBg}
                        color={COLORS.textPrimary}
                        fontWeight="bold"
                        _hover={{
                          bg: COLORS.buttonHoverBg,
                          transform: "translateY(-3px)",
                        }}
                        _active={{
                          bg: COLORS.buttonActiveBg,
                          transform: "translateY(0)",
                        }}
                        transition="all 0.3s ease-in-out"
                      >
                        Explore Our Web Expertise
                      </Button>
                    </VStack>
                  );
                case 1:
                  return (
                    <VStack
                      spacing={6}
                      w="full"
                      h="auto"
                      justifyContent="space-between"
                    >
                      <Box
                        flex="1"
                        w="full"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minH="auto"
                      >
                        <WebTechStack />
                      </Box>
                      <HStack spacing={6} mt={4} w="full" justifyContent="center">
                        <Button
                          onClick={handlePrevious}
                          isDisabled={currentPage === 0}
                          size="lg"
                          borderRadius="full"
                          aria-label="Previous"
                          iconSpacing={0}
                          px={8}
                          bg={COLORS.buttonBg}
                          color={COLORS.textPrimary}
                          border="1px solid"
                          borderColor={COLORS.textSecondary}
                          boxShadow="none"
                          fontSize="2xl"
                          _hover={{
                            bg: COLORS.buttonHoverBg,
                            transform: "translateY(-1px)",
                            borderColor: "#888888",
                          }}
                          _active={{
                            bg: COLORS.buttonActiveBg,
                            transform: "translateY(0)",
                          }}
                          transition="all 0.2s ease-in-out"
                        >
                          <Icon as={FaArrowLeft} boxSize={8} />
                        </Button>
                        <Text
                          fontSize="xl"
                          color={COLORS.textPrimary}
                          minW="120px"
                          textAlign="center"
                        >
                          {currentPage + 1} of {pageCount}
                        </Text>
                        <Button
                          onClick={handleNext}
                          isDisabled={currentPage === pageCount - 1}
                          size="lg"
                          borderRadius="full"
                          aria-label="Next"
                          iconSpacing={0}
                          px={8}
                          bg={COLORS.buttonBg}
                          color={COLORS.textPrimary}
                          border="1px solid"
                          borderColor={COLORS.textSecondary}
                          boxShadow="none"
                          fontSize="2xl"
                          _hover={{
                            bg: COLORS.buttonHoverBg,
                            transform: "translateY(-1px)",
                            borderColor: "#888888",
                          }}
                          _active={{
                            bg: COLORS.buttonActiveBg,
                            transform: "translateY(0)",
                          }}
                          transition="all 0.2s ease-in-out"
                        >
                          <Icon as={FaArrowRight} boxSize={8} />
                        </Button>
                      </HStack>
                    </VStack>
                  );
                case 2:
                  return (
                    <VStack
                      spacing={6}
                      w="full"
                      h="auto"
                      justifyContent="space-between"
                    >
                      <Box
                        flex="1"
                        w="full"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minH="auto"
                      >
                        <AppTechStack />
                      </Box>
                      <HStack spacing={6} mt={4} w="full" justifyContent="center">
                        <Button
                          onClick={handlePrevious}
                          isDisabled={currentPage === 0}
                          size="lg"
                          borderRadius="full"
                          aria-label="Previous"
                          iconSpacing={0}
                          px={8}
                          bg={COLORS.buttonBg}
                          color={COLORS.textPrimary}
                          border="1px solid"
                          borderColor={COLORS.textSecondary}
                          boxShadow="none"
                          fontSize="2xl"
                          _hover={{
                            bg: COLORS.buttonHoverBg,
                            transform: "translateY(-1px)",
                            borderColor: "#888888",
                          }}
                          _active={{
                            bg: COLORS.buttonActiveBg,
                            transform: "translateY(0)",
                          }}
                          transition="all 0.2s ease-in-out"
                        >
                          <Icon as={FaArrowLeft} boxSize={8} />
                        </Button>
                        <Text
                          fontSize="xl"
                          color={COLORS.textPrimary}
                          minW="120px"
                          textAlign="center"
                        >
                          {currentPage + 1} of {pageCount}
                        </Text>
                      </HStack>
                    </VStack>
                  );
                default:
                  return null;
              }
            })()}
          </MotionBox>
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default TechStackCarousel;
