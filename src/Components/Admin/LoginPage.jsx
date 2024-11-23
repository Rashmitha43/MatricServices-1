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
import { Infinity } from "lucide-react";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const init={
    name:"",
    email:"",
    password:""
  }
  const [formdata,setFormData]=useState(init)
  const handleInputChange=(e)=>{
    const {name,value}=e.target
    setFormData((prev)=>({
      ...prev,
      [name]:value
    }))
  }
  const handleSubmit=(e)=>{
         e.preventDefault()
         setFormData(init)
  }

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

            <FormControl id="name">
              <FormLabel>Email address</FormLabel>
              <Input
                type="text"
                name="name"
                value={formdata.name}
                focusBorderColor="teal.400"
                placeholder="Enter your email"
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={formdata.email}
                focusBorderColor="teal.400"
                placeholder="Enter your email"
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  name="password"
                  value={formdata.password}
                  type={showPassword ? "text" : "password"}
                  focusBorderColor="teal.400"
                  placeholder="Enter your password"
                  onChange={handleInputChange}
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
              type='submit'
              colorScheme="teal"
              size="lg"
              width="full"
              borderRadius="md"
              boxShadow="md"
              _hover={{
                bg: "teal.500",
              }}
              onClick={handleSubmit }
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
