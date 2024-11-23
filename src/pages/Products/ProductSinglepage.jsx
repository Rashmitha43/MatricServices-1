import React, { useEffect, useState } from "react";
import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import dummyimg from "../../assets/Sliderimage1.png";
import theme from "../../theme";
import { useParams } from "react-router-dom";
import { getProductsbyId } from "../../Redux/app/action";
import { useDispatch, useSelector } from "react-redux";
const ProductSinglepage = () => {
  const dispatch = useDispatch();
  const id = useParams();
  const { productsingledata } = useSelector((state) => state.app);
  const [index,setIndex]=useState(0)
  useEffect(() => {
    console.log(id)
    dispatch(getProductsbyId(id.id))
      .then((res) => {
        console.log(res.payload);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  }, [dispatch, id.id]);
  console.log(productsingledata)

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
          padding={'20px'}
        >
          <Box
            w={{ base: "100%", md: "50%", lg: "49%" }}
            h={{ base: "300px", md: "400px", lg: "500px" }}
            position="relative"
            display={{ base: "flex", md: "column" }}
            justifyContent={{ base: "space-between", md: "none" }}
            
          >
            <VStack
              w="18%"
              display={{ base: "flex", md: "none" }}
              align="space-evenly"
              h="100%"
            >
              
              {productsingledata?.img?.map((img,ind) => (
                <>
                  <Box h={{ base: "100%" }} onClick={()=>setIndex(ind)} border={index===ind?'1px solid black':'none'} p='2px'>
                    <Image
                      w="100%"
                      h="100%"
                      src={img}
                      objectFit={"contain"}
                      cursor={'pointer'}
                    />
                  </Box>
                </>
              ))}
            </VStack>
            {productsingledata?.img && productsingledata?.img.length > 0 ? (
              <Image
                w={{base:'80%',md:'100%'}}
                h="100%"
                src={productsingledata.img[index]}
                objectFit={'contain'}
              />):(<Text>No images available</Text>)}
          </Box>
          <Box w={{ base: "100%", md: "40%", lg: "50%" }}>
            <VStack align={"stretch"} spacing={5} w="100%">
              <Text fontSize={{ base: "1.2rem", md: "2rem" }}>{productsingledata.title}</Text>
              <Text fontSize={{ base: "0.9rem", md: "1rem" }}>{productsingledata.desc}</Text>
              <Text fontSize={{ base: "1.2rem", md: "2rem" }} color="green">
                {productsingledata.price}/-
              </Text>
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
              {productsingledata?.img?.map((img,ind) => (
                <>
                    <Box h={{ base: "0px", md: "80px", lg: "100px", xl: "120px" }} onClick={()=>setIndex(ind)} border={index===ind?'1px solid black':'none'} p='2px'>
                  <Image w="100%" h="100%" src={img} cursor={'pointer'} objectFit={'contain'}/>
                </Box>
                </>
              ))}
              
             
              </HStack>
            </VStack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default ProductSinglepage;
