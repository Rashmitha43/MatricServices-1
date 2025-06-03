import React, { useState } from 'react';
import {
  Box, Circle, Text, VStack, Icon, HStack, Flex, Tooltip, useBreakpointValue
} from '@chakra-ui/react';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaExchangeAlt,
  FaNodeJs, FaPython, FaDocker, FaLock, FaShieldAlt
} from 'react-icons/fa';
import {
  SiExpress, SiMongodb, SiGraphql, SiJest,
  SiSelenium, SiGit, SiVercel, SiJsonwebtokens
} from 'react-icons/si';
import { motion } from 'framer-motion';

const items = [
  {
    id: 'frontend',
    name: 'Frontend',
    description: 'Building user interfaces with modern web technologies.',
    icons: [
      { as: FaHtml5, color: '#E34F26' },
      { as: FaCss3Alt, color: '#1572B6' },
      { as: FaJsSquare, color: '#F7DF1E' }
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    description: 'Developing server-side logic and application programming interfaces.',
    icons: [
      { as: FaNodeJs, color: '#339933' },
      { as: SiExpress, color: '#000000' },
      { as: FaPython, color: '#3776AB' }
    ],
  },
  {
    id: 'apis',
    name: 'APIs',
    description: 'Designing and integrating secure and scalable application programming interfaces.',
    icons: [
      { as: FaExchangeAlt, color: '#336699' },
      { as: SiGraphql, color: '#E10098' }
    ],
  },
  {
    id: 'database',
    name: 'Database',
    description: 'Implementing robust and efficient database solutions for data storage.',
    icons: [
      { as: SiMongodb, color: '#47A248' },
      { as: FaDatabase, color: '#4DB33D' }
    ],
  },
  {
    id: 'auth_security',
    name: ['Authentication', '& Security'],
    description: 'Ensuring secure user authentication and protecting data integrity.',
    icons: [
      { as: SiJsonwebtokens, color: '#000000' },
      { as: FaLock, color: '#DD4B39' },
      { as: FaShieldAlt, color: '#555555' }
    ],
  },
  {
    id: 'testing',
    name: 'Testing',
    description: 'Implementing comprehensive testing strategies for reliable software.',
    icons: [
      { as: SiJest, color: '#C21325' },
      { as: SiSelenium, color: '#43B02A' }
    ],
  },
  {
    id: 'devops_deployment',
    name: ['DevOps', 'Deployment'],
    description: 'Automating development, deployment, and operational processes.',
    icons: [
      { as: SiGit, color: '#F1502F' },
      { as: FaDocker, color: '#2496ED' },
      { as: SiVercel, color: '#000000' }
    ],
  },
];

export default function WebTechStack() {
  const [hovered, setHovered] = useState(null);

  const centerSize = useBreakpointValue({ base: 120, md: 150 });
  const itemSize = useBreakpointValue({ base: 68, md: 86 });
  const containerSize = useBreakpointValue({ base: 320, md: 420 });
  const radius = useBreakpointValue({ base: 110, md: 155 });
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
        width={`${containerSize}px`}
        height={`${containerSize}px`}
        borderRadius="full"
        bg="rgba(255,255,255,0.88)"
        borderWidth="2.5px"
        borderColor="#444444"
        boxShadow="0 2px 12px rgba(68, 68, 68, 0.3)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexShrink={0}
        sx={{ backdropFilter: "blur(10px)" }}
      >
        <Circle
          size={`${centerSize}px`}
          bg="whiteAlpha.900"
          borderWidth="2.5px"
          borderColor="#444444"
          boxShadow="0 2px 24px rgba(153,153,153,0.6)"
          fontWeight="bold"
          fontSize={{ base: "md", md: "lg" }}
          zIndex={2}
          textAlign="center"
          p={2}
          color="#111111"
        >
          Web Tech Stack
        </Circle>

        {items.map((item, i) => {
          const angle = (i / num) * 2 * Math.PI;
          const left = (containerSize / 2) + (radius * Math.sin(angle)) - (itemSize / 2);
          const top = (containerSize / 2) - (radius * Math.cos(angle)) - (itemSize / 2);

          return (
            <Box
              key={item.id}
              position="absolute"
              left={`${left}px`}
              top={`${top}px`}
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
                bg="whiteAlpha.900"
                color="#111111"
                boxShadow="0 4px 16px rgba(0, 0, 0, 0.15)"
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
                      {item.icons.map((iconData, idx) => (
                        <Icon
                          key={idx}
                          as={iconData.as}
                          boxSize={{ base: "16px", md: "22px" }}
                          color={iconData.color}
                          transition="color 0.2s"
                        />
                      ))}
                    </HStack>
                    {Array.isArray(item.name)
                      ? item.name.map((line, j) => (
                          <Text
                            key={j}
                            fontSize={{ base: "0.62rem", md: "0.8rem" }}
                            color="#111111"
                            fontWeight="semibold"
                            lineHeight="1.2"
                            opacity={0.9}
                          >
                            {line}
                          </Text>
                        ))
                      : (
                        <Text
                          fontSize={{ base: "0.62rem", md: "0.8rem" }}
                          color="#111111"
                          fontWeight="semibold"
                          opacity={0.9}
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

      <VStack
        align={{ base: "center", md: "flex-start" }}
        textAlign={{ base: "center", md: "left" }}
        maxW={{ base: "full", md: "md" }}
        spacing={4}
      >
        <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="#111111">
          Crafting Robust Web Experiences
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} color="#333333">
          Our Web Development expertise spans cutting-edge frontend technologies like React, Vue, and Angular, paired with powerful backend frameworks such as Node.js, Python/Django, and PHP. We ensure secure authentication, scalable databases (SQL/NoSQL), comprehensive testing, and seamless DevOps for optimal performance.
        </Text>
        <Text fontSize={{ base: "sm", md: "md" }} color="#8B5E3C">
          *Explore the detailed technologies by hovering over the circles*
        </Text>
      </VStack>
    </Flex>
  );
}