import React, { useState } from "react";
import {
  Box,
  VStack,
  Text,
  Icon,
  HStack,
  Flex,
  Heading,
  Image,
  IconButton,
  Tooltip,
  Divider,
  Badge,
} from "@chakra-ui/react";
import {
  FaChevronRight,
  FaChevronLeft,
  FaLaptopCode,
  FaMobileAlt,
  FaCheckCircle,
  FaMagic,
} from "react-icons/fa";

const webImg =
  "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=600&q=80";
const appImg =
  "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&w=600&q=80";

const COLORS = {
  shadowLight: "rgba(165, 165, 165, 0.2)",
  shadowStrongRight: "rgba(0, 0, 0, 0.25)",
  shadowStrongBottom: "rgba(0, 0, 0, 0.35)",
  border: "#ededed",
  accent: "#a5a5a5",
};

const webData = {
  image: webImg,
  icon: FaLaptopCode,
  alt: "Web development workspace",
  heading: "Web Development",
  badge: "Website & Web Apps",
  description: (
    <>
      <Text as="span" fontWeight="bold" color="black">
        Modern, Responsive, SEO-Ready
      </Text>
      <Text as="span" ml={2} color="black">
        — We build blazing fast, scalable web solutions with pixel-perfect
        design.
      </Text>
      <br />
      <Text as="span" color="black">
        Using leading frameworks, our codebase is <b>secure</b> <br /> and{" "}
        <b>maintainable</b>.
      </Text>
    </>
  ),
  bullets: [
    "Responsive & accessible frontend",
    "SEO & performance optimized",
    "Modern frameworks (React, Next.js)",
    "Secure, maintainable codebase",
  ],
};

const appData = {
  image: appImg,
  icon: FaMobileAlt,
  alt: "App development workspace",
  heading: "App Development",
  badge: "iOS / Android Mobile",
  description: (
    <>
      <Text as="span" fontWeight="bold" color="black">
        Robust, Native & Cross-Platform
      </Text>
      <Text as="span" ml={2} color="black">
        — Seamlessly performant, beautiful apps leveraging device power.
      </Text>
      <br />
      <Text as="span" color="black">
        <b>User-centric</b> and <b>store-ready</b> for global deployments.
      </Text>
    </>
  ),
  bullets: [
    "Native & cross-platform solutions",
    "Push notifications & device APIs",
    "App Store/Play Store deployment",
    "User-centric, intuitive design",
  ],
};

export default function AppWebDevTabCard() {
  const [isWeb, setIsWeb] = useState(true);
  const data = isWeb ? webData : appData;
  const accentColor = COLORS.accent;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      my={{ base: 4, md: 6 }}
      w="100%"
      position="relative"
      py={{ base: 6, md: 10 }}
    >
      <Box
        bg="rgba(255, 255, 255, 0.65)" // Glass effect background
        backdropFilter="blur(12px)" // Blurry glass effect
        maxW="1100px"
        mx="auto"
        borderRadius="2xl"
        overflow="visible"
        py={{ base: 6, md: 10 }}
        px={{ base: 4, md: 8 }}
        position="relative"
        border="1.5px solid"
        borderColor={COLORS.border}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transition="box-shadow 0.25s, border 0.2s, transform 0.2s"
        boxShadow={
          isHovered
            ? `
              8px 8px 15px ${COLORS.shadowStrongRight},
              0 12px 20px ${COLORS.shadowStrongBottom},
              inset 1px 1px 2px ${COLORS.shadowLight}
            `
            : `
              5px 5px 12px ${COLORS.shadowStrongRight},
              0 8px 14px ${COLORS.shadowStrongBottom},
              inset 1px 1px 2px ${COLORS.shadowLight}
            `
        }
        _hover={{
          borderColor: COLORS.accent,
          transform: "scale(1.01)",
        }}
      >
        {/* Floating Magic Icon */}
        <Box
          position="absolute"
          top="-24px"
          left="50%"
          transform="translateX(-50%)"
          zIndex={12}
        >
          <Box
            bg={accentColor}
            borderRadius="full"
            p={2}
            boxShadow="0 2px 8px #0003"
            transition="transform 0.2s"
            transform={isHovered ? "scale(1.14)" : "scale(1)"}
          >
            <FaMagic color="white" size={28} />
          </Box>
        </Box>

        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          gap={{ base: 8, md: 0 }}
        >
          {/* Left: Image */}
          <Box
            flex="1"
            minW="320px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={{ base: 0, md: 8 }}
          >
            <Box
              w={{ base: "90vw", md: "380px" }}
              h={{ base: "220px", md: "300px" }}
              borderRadius="2xl"
              overflow="hidden"
              position="relative"
              transition="transform 0.25s, box-shadow 0.25s"
              boxShadow={
                isHovered
                  ? `
                    8px 8px 16px ${COLORS.shadowStrongRight},
                    0 14px 24px ${COLORS.shadowStrongBottom}
                  `
                  : `
                    4px 4px 12px ${COLORS.shadowStrongRight},
                    0 8px 18px ${COLORS.shadowStrongBottom}
                  `
              }
              _hover={{
                transform: "scale(1.035) rotate(-2deg)",
                boxShadow: `
                  10px 10px 20px ${COLORS.shadowStrongRight},
                  0 18px 32px ${COLORS.shadowStrongBottom}
                `,
              }}
            >
              <Image
                src={data.image}
                alt={data.alt}
                objectFit="cover"
                w="100%"
                h="100%"
                borderRadius="2xl"
                filter={isHovered ? "brightness(1.03) contrast(1.09)" : "none"}
                transition="filter 0.18s"
              />
              {/* Accent border */}
              <Box
                position="absolute"
                bottom={0}
                left={0}
                w="100%"
                h="8px"
                bgGradient={`linear(to-r, ${accentColor}, transparent)`}
                borderBottomRadius="2xl"
                opacity={0.9}
              />
            </Box>
          </Box>

          {/* Right: Text */}
          <Box flex="2" p={{ base: 4, md: 10 }}>
            <VStack align="start" spacing={3} w="100%">
              <HStack align="center" gap={3} mb={1}>
                <Icon
                  as={data.icon}
                  color={accentColor}
                  boxSize={9}
                  filter="drop-shadow(0 1px 6px #0001)"
                />
                <Heading
                  fontSize={{ base: "1.6rem", md: "2.1rem" }}
                  fontWeight="extrabold"
                  bgGradient="linear(to-r, gray.600, gray.800)"
                  bgClip="text"
                  letterSpacing="tight"
                  lineHeight={1}
                  as="h2"
                >
                  {data.heading}
                </Heading>
                <Badge
                  ml={3}
                  colorScheme="gray"
                  variant="outline"
                  fontSize="0.85em"
                  fontWeight="bold"
                  borderRadius="md"
                  px={3}
                  py={1}
                  letterSpacing="tight"
                  color="black"
                  borderColor={COLORS.accent}
                >
                  {data.badge}
                </Badge>
              </HStack>
              <Divider borderColor={COLORS.accent} opacity={0.5} />
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.700"
                opacity={0.95}
                lineHeight={1.75}
                mt={3}
                fontStyle="italic"
              >
                {data.description}
              </Text>
              <VStack align="start" spacing={1} mt={4} w="100%">
                {data.bullets.map((bullet) => (
                  <HStack
                    key={bullet}
                    align="center"
                    spacing={3}
                    w="100%"
                    transition="transform 0.18s"
                    _hover={{
                      transform: "translateX(6px) scale(1.04)",
                    }}
                  >
                    <Icon
                      as={FaCheckCircle}
                      color={accentColor}
                      boxSize={4}
                      mt="2px"
                    />
                    <Tooltip
                      label={bullet}
                      aria-label={bullet}
                      placement="right"
                      bgGradient="linear(to-r, gray.600, gray.800)"
                      color="white"
                      borderRadius="lg"
                      fontSize="md"
                      hasArrow
                      openDelay={100}
                    >
                      <Text fontSize="md" color="black" fontWeight="medium">
                        {bullet}
                      </Text>
                    </Tooltip>
                  </HStack>
                ))}
              </VStack>
              {/* Button to switch */}
              <HStack spacing={3} mt={8} justify="center" w="100%">
                <IconButton
                  aria-label="Select Web Development"
                  icon={<FaChevronLeft />}
                  colorScheme={isWeb ? "gray" : "gray"}
                  variant={isWeb ? "solid" : "ghost"}
                  borderRadius="full"
                  onClick={() => setIsWeb(true)}
                  boxShadow={isWeb ? "0 4px 12px #a5a5a533" : "none"}
                  _hover={{
                    bgGradient: isWeb
                      ? "linear(to-r, gray.600, gray.800)"
                      : "gray.100",
                    color: isWeb ? "white" : "black",
                    transform: "scale(1.12)",
                    boxShadow: "0 6px 20px #a5a5a577",
                  }}
                  transition="all 0.15s"
                />
                <IconButton
                  aria-label="Select App Development"
                  icon={<FaChevronRight />}
                  colorScheme={!isWeb ? "gray" : "gray"}
                  variant={!isWeb ? "solid" : "ghost"}
                  borderRadius="full"
                  onClick={() => setIsWeb(false)}
                  boxShadow={!isWeb ? "0 4px 12px #a5a5a533" : "none"}
                  _hover={{
                    bgGradient: !isWeb
                      ? "linear(to-r, gray.600, gray.800)"
                      : "gray.100",
                    color: !isWeb ? "white" : "black",
                    transform: "scale(1.12)",
                    boxShadow: "0 6px 20px #a5a5a577",
                  }}
                  transition="all 0.15s"
                />
              </HStack>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
