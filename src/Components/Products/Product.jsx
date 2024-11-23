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
import React, { useEffect, useState } from "react";
import theme from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/app/action";
import { useNavigate } from "react-router-dom";




const Product = () => {

  const navigate = useNavigate();
 const dispatch=useDispatch();
 const { productadd}=useSelector(state=>state.app)
  useEffect(()=>{
    dispatch(getProducts())
    .then((res)=>{
      console.log(res.payload)
    })
  },[dispatch])
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
        my={{ base: "2rem", md: "3rem" }}
      >
        <Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight={"700"}>
          Our Products
        </Text>
        <Box w="80px" h="3px" bg={theme.colors.ten} borderRadius={"20px"} mt='-2px'></Box>

        <Text
          fontSize={{ base: "0.7rem", md: "1rem", lg: "1.2rem" }}
          textAlign={"justify"}
          mt={3}
        >
          At Matric Services, we provide custom project kits and components
          tailored for both educational and professional needs. We handle small
          and bulk orders, ensuring each kit is high-quality to support
          practical learning. With options for branded customization, our kits
          are crafted to align with your organization’s identity. From
          specialized parts to complete kits, we’re here to bring your vision to
          life—at competitive prices. Contact us to discuss how we can support
          your needs!
        </Text>
        
        <Box h="auto" mx="auto">
          <SimpleGrid
            columns={[1, 2, 3, 3]}
            spacing={{ base: "2", md: "3", lg: "5" }}
            mt={10}
          >
            {productadd?.map((details) => (
              <>
                <Card
                  maxW="sm"
                  bg={theme.colors.thirty}
                  borderRadius="lg"
                  fontSize={{ base: "0.7rem", md: "0.8rem", lg: "1rem" }}
                  key={details._id}
                  boxShadow={'lg'}
                >
                  <CardBody w="100%">
                    <Image
                      src={details.img[0]}
                      alt="Green double couch with wooden legs"
                      w="100%"
                      borderRadius="lg"
                      borderBottomRadius={"0px"}
                      objectFit={'contain'}
                    />
                    <VStack
                      mt={{ base: "2", md: "4", lg: "6" }}
                      spacing={{ base: "1", md: "2", lg: "3" }}
                      align={"stretch"}
                      px={{ base: "5px", md: "20px" }}
                    >
                      <Heading fontSize={{ base: "1.2rem", md: "1.5rem" }}>
                        {details.title.length > 18
                          ? `${details.title.substring(0, 14)}...`
                          : details.title}
                      </Heading>
                      <Text>
                        {details.desc.length > 50
                          ? `${details.desc.substring(0, 50)}...`
                          : details.desc}
                      </Text>
                      <Text fontSize={{ base: "md", md: "xl" }} color="green">
                        Rs:{details.price}/-
                      </Text>
                    </VStack>
                  </CardBody>
                  <Divider />

                    <HStack w='100%' spacing={2} p={5}>
                    <Box
                      p={{ base: "5px 10px", md: "7px 14px", lg: "8px 16px" }}
                      borderRadius={"5px"}
                      color="white"
                      fontWeight={'500'}
                      textAlign={"center"}
                      letterSpacing="2px"
                      w="100%"
                      bg={theme.colors.ten}
                      fontSize='1rem'
                      _hover={{ cursor: "pointer" }}
                      onClick={()=>navigate(`/productsinglepage/${details._id}`)}
                    >
                      View
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
