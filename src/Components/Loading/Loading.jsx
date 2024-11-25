import React from "react";
import { Center, VStack, CircularProgress, Text } from "@chakra-ui/react";

const Loading = ({ message = "Loading...", bgOpacity = 0.8, loadHeight = "100vh" }) => {
  return (
    <Center
      height={loadHeight}
      bg={`rgba(255, 255, 255, ${bgOpacity})`}
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
