import React from "react";
import { Center, VStack, CircularProgress, Text } from "@chakra-ui/react";

const Loading = ({ message = "Loading...", bgOpacity = 0.8 }) => {
  return (
    <Center
      height="100vh"
      bg={`rgba(255, 255, 255, ${bgOpacity})`}
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={1000}
    >
      <VStack spacing={6}>
        <CircularProgress
          size="120px"
          thickness="6px"
          isIndeterminate
          color="blue.400"
          trackColor="gray.200"
        />
        <Text fontSize="2xl" fontWeight="bold" color="blue.500">
          {message}
        </Text>
      </VStack>
    </Center>
  );
};

export default Loading;
