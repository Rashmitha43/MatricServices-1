// App.js
import React from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Input,
  Button,
  VStack,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <ChakraProvider>
      <Flex
        height="100vh"
        alignItems="center"
        justifyContent="center"
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Box
          maxW="400px"
          w="full"
          p={8}
          borderRadius="lg"
          boxShadow="lg"
          bg={useColorModeValue("white", "gray.700")}
        >
          <VStack spacing={6} align="stretch">
            <Heading as="h2" size="lg" textAlign="center" color="teal.400">
              Welcome Back
            </Heading>
            <Text color={useColorModeValue("gray.500", "gray.300")} textAlign="center">
              Please log in to continue
            </Text>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                focusBorderColor="teal.400"
                placeholder="Enter your email"
              />
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  focusBorderColor="teal.400"
                  placeholder="Enter your password"
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button
              colorScheme="teal"
              size="lg"
              width="full"
              borderRadius="md"
              boxShadow="md"
              _hover={{
                bg: "teal.500",
              }}
            >
              Log In
            </Button>
          </VStack>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default LoginPage;
