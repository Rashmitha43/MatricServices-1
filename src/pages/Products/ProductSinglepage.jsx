import React, { useState } from "react";
import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import dummyimg from "../../assets/Sliderimage1.png";
import theme from "../../theme";
const ProductSinglepage = () => {

  return (
    <>
      <Box
        maxW={"1000px"}
        width={"95%"}
        mx="auto"
        my={{ base: "3rem", md: "5rem" }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          w="100%"
          boxShadow={"lg"}
          align="center"
          spacing={5}
        >
          <Box
            w={{ base: "100%", md: "50%", lg: "40%" }}
            h={{ base: "300px", md: "400px", lg: "500px" }}
            position="relative"
            display={{base:'flex',md:'column'}}
            justifyContent={{base:'space-between',md:'none'}}
          
          >
              <VStack w='18%' display={{base:'flex',md:'none'}} align='space-evenly' h='100%'>
              <Box h={{ base: '100%'}}>
                <Image w="100%" h="100%" src={dummyimg} objectFit={'cover'}/>
              </Box>
              <Box h={{ base: '100%' }}>
                <Image w="100%" h="100%" src={dummyimg} objectFit={'cover'}/>
              </Box>
              <Box h={{ base: '100%' }}>
                <Image w="100%" h="100%" src={dummyimg} objectFit={'cover'}/>
              </Box>
            </VStack>
            <Image w={{base:'80%',md:'100%'}} h="100%" src={dummyimg} objectFit={"cover"} />
          
          </Box>
          <Box w={{ base: "100%", md: "40%", lg: "50%" }}>
            <VStack align={"stretch"} spacing={5} w="100%">
              <Text fontSize={{ base: "1.2rem", md: "2rem" }}>Name</Text>
              <Text fontSize={{ base: "0.9rem", md: "1rem" }}>description</Text>
              <Text fontSize={{ base: "1.2rem", md: "2rem" }} color="green">
                price
              </Text>
              <Text>Quantity</Text>
              <Box
                w="100%"
                letterSpacing={"2px"}
                bg="black"
                color="white"
                p="10px 20px"
                textAlign={"center"}
              >
                Place Order
              </Box>
              <HStack w="100%" Spacing={3} mt="auto">
                <Box h={{ base: "0px", md: "80px", lg: "100px", xl: "120px" }}>
                  <Image w="100%" h="100%" src={dummyimg} />
                </Box>
                <Box h={{ base: "0px", md: "80px", lg: "100px", xl: "120px" }}>
                  <Image w="100%" h="100%" src={dummyimg} />
                </Box>
                <Box h={{ base: "0px", md: "80px", lg: "100px", xl: "120px" }}>
                  <Image w="100%" h="100%" src={dummyimg} />
                </Box>
              </HStack>
            </VStack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default ProductSinglepage;
