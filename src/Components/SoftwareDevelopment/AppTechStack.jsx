import React, { useState } from 'react';
import {
  Box, Circle, Text, VStack, Icon, HStack, Flex, Tooltip, useBreakpointValue
} from '@chakra-ui/react';
import {
  FaJava, FaSwift, FaAndroid, FaApple,
  FaGooglePlay, FaAppStoreIos,
  FaFire, FaFingerprint, FaNodeJs, FaExchangeAlt
} from 'react-icons/fa';
import {
  SiKotlin, SiFlutter, SiSqlite, SiRealm,
  SiGradle, SiGithubactions
} from 'react-icons/si';
import { motion } from "framer-motion";

const items = [
  {
    id: 'ui_ux_frameworks',
    name: ['UI/UX', 'Frameworks'],
    description: 'Crafting intuitive user interfaces and experiences for mobile.',
    icons: [
      { as: FaAndroid, color: '#A4C639' },
      { as: FaApple, color: '#000000' },
      { as: SiFlutter, color: '#02569B' }
    ],
  },
  {
    id: 'deployment',
    name: 'Deployment',
    description: 'Streamlined processes for releasing applications to app stores.',
    icons: [
      { as: FaGooglePlay, color: '#4885ED' },
      { as: FaAppStoreIos, color: '#555555' }
    ],
  },
  {
    id: 'database',
    name: 'Database',
    description: 'Implementing robust and efficient mobile database solutions.',
    icons: [
      { as: SiSqlite, color: '#003B57' },
      { as: FaFire, color: '#FFCA28' },
      { as: SiRealm, color: '#394B73' }
    ],
  },
  {
    id: 'auth_security',
    name: ['Authentication', '& Security'],
    description: 'Ensuring secure user authentication and data protection in mobile apps.',
    icons: [
      { as: FaFire, color: '#FFCA28' },
      { as: FaFingerprint, color: '#4CAF50' }
    ],
  },
  {
    id: 'programming_languages',
    name: ['Programming', 'Languages'],
    description: 'Utilizing powerful languages for native and cross-platform mobile development.',
    icons: [
      { as: FaJava, color: '#007396' },
      { as: FaSwift, color: '#F05138' },
      { as: SiKotlin, color: '#7F52FF' },
    ],
  },
  {
    id: 'backend_api',
    name: ['Backend', '& API'],
    description: 'Building robust server-side infrastructure and APIs for mobile applications.',
    icons: [
      { as: FaFire, color: '#FFCA28' },
      { as: FaNodeJs, color: '#6DAE4B' },
      { as: FaExchangeAlt, color: '#4A5568' }
    ],
  },
  {
    id: 'devops_build_tools',
    name: ['DevOps/', 'Build Tools'],
    description: 'Automating build, test, and release cycles for mobile applications.',
    icons: [
      { as: SiGradle, color: '#02303A' },
      { as: SiGithubactions, color: '#2088FF' }
    ],
  },
];

// Motion components
const MotionVStack = motion(VStack);

export default function AppTechStack() {
  const [hovered, setHovered] = useState(null);

  const centerSize = useBreakpointValue({ base: 120, md: 150 });
  const itemSize = useBreakpointValue({ base: 68, md: 86 });
  const containerSize = useBreakpointValue({ base: 320, md: 420 });
  const baseRadius = useBreakpointValue({ base: 110, md: 155 });
  const num = items.length;

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      gap={{ base: 22, md: 44 }}
      p={6}
      w="full"
      sx={{ userSelect: "none" }}
    >
      <Box
        position="relative"
        width={containerSize}
        height={containerSize}
        borderRadius="full"
        bg="rgba(255,255,255,0.88)"       // transparent white
        border="2.5px solid #444444"       // dark gray border
        boxShadow="0 2px 12px rgba(68,68,68,0.3)" // subtle dark gray shadow
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexShrink={0}
        sx={{
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Center Circle */}
        <Circle
          size={centerSize}
          bg="whiteAlpha.900"    // transparent white
          border="2.5px solid #444444"
          boxShadow="0 2px 24px rgba(153,153,153,0.6)"
          fontWeight="bold"
          fontSize={{ base: "md", md: "lg" }}
          zIndex={2}
          textAlign="center"
          p={2}
          color="#111111"
        >
          App Tech Stack
        </Circle>

        {/* Circular Items */}
        {items.map((item, i) => {
          const angle = ((i / num) * 2 * Math.PI) - Math.PI / 2;
          const extraOffset = i === 0 ? 9.5 : 0;
          const radius = baseRadius + extraOffset;
          const left = (containerSize / 2) + radius * Math.cos(angle) - (itemSize / 2);
          const top = (containerSize / 2) + radius * Math.sin(angle) - (itemSize / 2);

          return (
            <Box
              key={item.id}
              position="absolute"
              left={left}
              top={top}
              zIndex={3}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <Tooltip
                label={
                  <Box>
                    <Text fontWeight="bold" fontSize="sm" mb={1}>
                      {Array.isArray(item.name) ? item.name.join(' ') : item.name}
                    </Text>
                    <Text fontSize="xs">{item.description}</Text>
                  </Box>
                }
                hasArrow
                isOpen={hovered === i}
                placement="top"
                bg="whiteAlpha.900"                // slightly transparent white
                color="#111111"
                boxShadow="0 4px 16px rgba(0,0,0,0.15)"   // subtle dark shadow
                borderRadius="lg"
                p={3}
                fontSize="sm"
                maxW="220px"
              >
                <motion.div whileHover={{ scale: 1.12, rotate: -5 }}>
                  <VStack
                    width={`${itemSize}px`}
                    height={`${itemSize}px`}
                    borderRadius="full"
                    bg="white"
                    borderWidth="2.5px"
                    borderColor="#e0e0e0"
                    boxShadow="0 2px 10px rgba(0,0,0,0.15)"
                    justify="center"
                    textAlign="center"
                    spacing={0.5}
                    p={1}
                    cursor="pointer"
                  >
                    <HStack spacing={1}>
                      {item.icons.map((icon, idx) => (
                        <Icon
                          key={idx}
                          as={icon.as}
                          boxSize={{ base: "16px", md: "22px" }}
                          color={icon.color}
                          transition="color 0.22s"
                        />
                      ))}
                    </HStack>
                    {Array.isArray(item.name)
                      ? item.name.map((line, j) => (
                        <Text
                          key={j}
                          fontSize={{ base: "0.62rem", md: "0.8rem" }}
                          color="#3E2F1C"
                          fontWeight="semibold"
                          lineHeight="1.2"
                          opacity={0.90}
                        >
                          {line}
                        </Text>
                      ))
                      : (
                        <Text
                          fontSize={{ base: "0.62rem", md: "0.8rem" }}
                          color="#3E2F1C"
                          fontWeight="semibold"
                          opacity={0.90}
                        >
                          {item.name}
                        </Text>
                      )}
                  </VStack>
                </motion.div>
              </Tooltip>
            </Box>
          );
        })}
      </Box>

      {/* Info Section */}
      <VStack
        align={{ base: "center", md: "flex-start" }}
        textAlign={{ base: "center", md: "left" }}
        maxW={{ base: "full", md: "md" }}
        spacing={4}
      >
        <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color="#111111">
          Innovating Mobile Applications
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} color="#333333">
          Our Mobile App Development is powered by native frameworks like Swift/Kotlin, cross-platform solutions like Flutter, and robust backend services including Firebase and Node.js. We prioritize seamless UI/UX, secure authentication with biometrics, efficient database management (SQLite, Realm), and streamlined DevOps for rapid deployment to app stores.
        </Text>
        <Text fontSize={{ base: "sm", md: "md" }} color="#8B5E3C">
          *Explore the detailed technologies by hovering over the circles*
        </Text>
      </VStack>
    </Flex>
  );
}
