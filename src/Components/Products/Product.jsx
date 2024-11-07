import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import theme from "../../theme";

const products = [
  {
    name: "name",
    quantity: 1,
    price: 400,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, natus.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },

  {
    name: "name",
    quantity: 1,
    price: 400,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, natus.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },

  {
    name: "name",
    quantity: 1,
    price: 400,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, natus.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },

  {
    name: "name",
    quantity: 1,
    price: 400,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, natus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, natus.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
];

const Product = () => {
  return (
    <>
      <Box
        maxW="1200px"
        w="95%"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        fontFamily={theme.fonts.body}
        mx="auto"
        my={{ base: "2rem", md: "3rem", lg: "5rem" }}
      >
        <Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight={"700"}>
          Our Products
        </Text>
        <Box
        w="80px"
        h="3px"
        bg={theme.colors.ten}
        borderRadius={"20px"}
      ></Box>
        <Box  h="auto" mx='auto'>
          <SimpleGrid columns={[1, 2, 3, 3]} spacing={{base:'2',md:'3',lg:'5'}} mt={10} >
            {products.map((details) => (
              <>
                <Card
                  maxW="sm"
                  bg={theme.colors.thirty}
                  borderRadius="lg"
                  fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                >
                  <CardBody w="100%">
                    <Image
                      src={details.image}
                      alt="Green double couch with wooden legs"
                      w="100%"
                      borderRadius="lg"
                      borderBottomRadius={"0px"}
                    />
                    <VStack
                      mt={{base:'2',md:'4',lg:'6'}}
                      spacing={{ base: "1", md: "2", lg: "3" }}
                      align={"stretch"}
                      px={{ base: "5px", md: "20px" }}
                    >
                      <Heading fontSize={{ base: "1.2rem", md: "2rem" }}>
                        {details.name.length > 18
                          ? `${details.name.substring(0, 14)}...`
                          : details.name}
                      </Heading>
                      <Text>
                        {details.description.length > 50
                          ? `${details.description.substring(0, 50)}...`
                          : details.description}
                      </Text>
                      <Text fontSize={{ base: "md", md: "xl" }} color="green">
                        Rs:{details.price}/-
                      </Text>
                    </VStack>
                  </CardBody>
                  <Divider />

                  <HStack spacing="2" p={{ base: "5px", md: "20px" }} w="100%">
                    <Box
                      p={{ base: "5px 10px", md: "7px 14px", lg: "8px 16px" }}
                      border="1px solid black"
                      borderRadius={"5px"}
                      color="black"
                      textAlign={"center"}
                      letterSpacing="1px"
                      w="50%"
                      fontSize={{ base: "0.7rem", md: "0.8rem", lg: "0.8rem" }}
                      _hover={{ cursor: "pointer" }}
                    >
                      View
                    </Box>
                    <Box
                      bg={theme.colors.ten}
                      color="white"
                      p={{ base: "5px 10px", md: "7px 14px", lg: "8px 16px" }}
                      borderRadius={"5px"}
                      w="50%"
                      textAlign={"center"}
                      _hover={{ cursor: "pointer" }}
                      fontSize={{ base: "0.7rem", md: "0.8rem", lg: "0.8rem" }}
                    >
                      Buy now
                    </Box>
                  </HStack>
                </Card>
              </>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default Product;
