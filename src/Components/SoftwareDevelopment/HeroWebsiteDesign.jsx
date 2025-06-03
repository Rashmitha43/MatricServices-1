import React from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  Icon,
  Image,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { FaCheckCircle, FaLaptop, FaWhatsapp } from "react-icons/fa";

const slideInFromBottom = keyframes`
  from { transform: translateY(100px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const fadeInSlideFromLeft = keyframes`
  from { transform: translateX(-50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const HeroWebsiteDesign = () => {
  const bulletPoints = [
    {
      text: "Better User Experience – Easy-to-navigate and responsive websites.",
      icon: FaCheckCircle,
    },
    {
      text: "Stronger Brand Trust – Clean design that builds credibility.",
      icon: FaCheckCircle,
    },
    {
      text: "Higher Search Rankings – SEO-optimized sites for better visibility on Google.",
      icon: FaCheckCircle,
    },
  ];

  return (
    <Box bg="#ededed" w="100%" py={12}>
      {/* Sub-section inside main section */}
      <Box
        maxW="7xl"
        mx="auto"
        bg="#d3d3d3"
        px={{ base: 6, md: 10 }}
        py={{ base: 10, md: 16 }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={10}
        >
          {/* Text Section */}
          <VStack
            flex="1"
            align="start"
            spacing={6}
            animation={`${fadeInSlideFromLeft} 1.2s ease-out forwards`}
          >
            <Heading
              fontFamily="'Poppins', sans-serif"
              fontWeight="extrabold"
              fontSize={{ base: "2.4rem", md: "3rem" }}
              lineHeight="1.2"
              color="black"
            >
              Website Design &amp; Development{" "}
              <Box as="span" color="black">
                <Icon as={FaLaptop} boxSize={8} ml={1} />
              </Box>
            </Heading>

            <Text
              color="black"
              fontFamily="'Open Sans', sans-serif"
              fontWeight="semibold"
              fontSize={{ base: "1.05rem", md: "1.2rem" }}
              lineHeight="1.8"
              maxW="580px"
            >
              <Text as="span" fontWeight="bold">
                Enhance your online presence
              </Text>{" "}
              with our expert website design and development services. We build
              clean, user-friendly websites that are{" "}
              <Text as="span" textDecoration="underline">
                mobile-responsive
              </Text>{" "}
              and optimized for search engines. Our designs improve user
              experience, build trust, and help your business grow.
            </Text>

            <VStack align="start" spacing={3}>
              {bulletPoints.map((bp) => (
                <HStack key={bp.text}>
                  <Icon as={bp.icon} color="black" boxSize={5} />
                  <Text color="black" fontWeight="semibold" fontSize="md">
                    {bp.text}
                  </Text>
                </HStack>
              ))}
            </VStack>

            <Button
              as="a"
              href="https://wa.me/919390555433"
              target="_blank"
              rel="noopener noreferrer"
              mt={6}
              size="lg"
              leftIcon={<FaWhatsapp />}
              bg="white"
              color="black"
              _hover={{
                bg: "black",
                color: "white",
                transform: "scale(1.07)",
              }}
              fontWeight="bold"
              borderRadius="xl"
              px={10}
              py={6}
              fontSize="lg"
              fontFamily="'Poppins', sans-serif"
              transition="all 0.25s ease-in-out"
            >
              Let’s Build Together
            </Button>
          </VStack>

          {/* Image Section */}
          <Box
            flex="1"
            animation={`${slideInFromBottom} 1.2s ease-out forwards`}
            textAlign="center"
          >
            <Image
              src="/3d-software-hero.png"
              alt="3D developer working on laptop"
              borderRadius="2xl"
              w={{ base: "85vw", md: "340px" }}
              mx="auto"
              draggable={false}
              transition="transform 0.23s"
              _hover={{ transform: "scale(1.04) rotate(2deg)" }}
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default HeroWebsiteDesign;
