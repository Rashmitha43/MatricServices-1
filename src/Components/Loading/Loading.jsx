import React from "react";
import { Center, VStack, Text, Box, Image } from "@chakra-ui/react";
import loading from "../../assets/loading.gif";

const toCamelCase = (str) => {
  return str
    .split(" ")
    .map((word, index) =>
      index === 0
        ? word.charAt(0).toUpperCase() + word.slice(1) 
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() 
    )
    .join(" "); 
};


const Loading = ({ message = "LOADING...", bgOpacity = 0.8, loadHeight = "100vh" }) => {
  return (
    <Center
      height={loadHeight}
      bg={`rgba(255, 255, 255, ${bgOpacity})`}
    >
      <VStack spacing={6}>
        <Box
          width="170px"
          height="150px"
        >
          <Image src={loading} alt="Loading animation" boxSize="100%"/>
        </Box>

        <Text fontSize="2xl" fontWeight="bold" color="black">
          {toCamelCase(message)}
        </Text>
      </VStack>
    </Center>
  );
};

export default Loading;
