import React from "react";
import { Center, VStack, Text, Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react"; // Correct import for keyframes

// Keyframes for rotating the dotted circle
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loading = ({ message = "LOADING...", bgOpacity = 0.8, loadHeight = "100vh" }) => {
  const animation = `${rotate} 1.5s linear infinite`;

  return (
    <Center
      height={loadHeight}
      bg={`rgba(255, 255, 255, ${bgOpacity})`}
    >
      <VStack spacing={6}>
        <Box
          position="relative"
          width="120px"
          height="120px"
          borderRadius="full"
          animation={animation}
        >
          {Array(12).fill("").map((_, index) => (
            <Box
              key={index}
              position="absolute"
              width="12px"
              height="12px"
              bg="gray.500"
              borderRadius="full"
              top="50%"
              left="50%"
              transform={`translate(-50%, -50%) rotate(${index * 30}deg) translate(50px)`}
            />
          ))}
        </Box>
        <Text fontSize="2xl" fontWeight="bold" color="black">
          {message.toUpperCase()}
        </Text>
      </VStack>
    </Center>
  );
};

export default Loading;
