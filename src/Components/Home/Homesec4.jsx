import React from "react";
import { Box, Text } from "@chakra-ui/react";
import theme from "../../theme";
import bgimage from "../../assets/homeimag6.jpeg";
const Homesec4 = () => {
  return (
    <Box w="95%" maxW="1600px" bg={theme.colors.sixty} boxShadow="lg" mx="auto" my={{base:'3rem',md:'4rem',lg:'5rem'}} fontFamily={theme.fonts.body}>
      <Box
        w="100%"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={{ base: "column", lg: "row" }}
        borderRadius={'10px'}
        gap={{base:'20px',lg:''}}
      >
        <Box
          w={{base:'100%',lg:'50%'}}
          p={{base:'10px 40px',md:'0px 50px'}}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          textAlign={{base:'justify',lg:''}}
          fontSize={{base:'0.9rem',md:'1rem'}}
          position={'relative'}
          gap='20px'
        >
          <Text fontSize='2.5rem' fontWeight={"600"} textAlign={'center'} lineHeight={1.2}>
            We Love What We Do
          </Text>
          <Text mt={{base:'0',md:'2.5rem'}}>
            At Matric Services, we are establishing a streamlined platform
            tailored to the distinct requirements of engineering students and
            researchers across all disciplines. With a team of industry experts
            in every technological domain, we’re committed to turning your
            concepts into executable achievements.
          </Text>
          <Box w={{base:'100%',md:'max-content'}} position={{base:'static',md:'absolute'}} bottom='-50px' right='50px' textAlign={{base:'center'}} fontWeight={'500'} p='10px 20px' bg={theme.colors.thirty} color='white' _hover={{backgroundColor:theme.colors.ten}} borderRadius={'30px'}>LEARN MORE</Box>
        </Box>
        <Box w={{base:'100%',lg:'50%'}} position={"relative"} h="400px"    borderRadius={'10px'}  borderLeftRadius={{base:'10px',lg:'0px'}}>
          <Box
            w="100%"
            h="100%"
            position={"absolute"}
            top="0"
            backgroundImage={bgimage}
            backgroundSize={"cover"}
            backgroundPosition={"top"}
            zIndex={1}
            borderRightRadius={'10px'}
            borderLeftRadius={{base:'10px',lg:'0px'}}
          ></Box>
          <Box
            w="100%"
            h="100%"
            bg={theme.colors.ten}
            opacity={0.9}
            zIndex={2}
            position={"absolute"}
            top="0px"
            borderRightRadius={'10px'}
            borderLeftRadius={{base:'10px',lg:'0px'}}
          ></Box>
          <Box
            position={"absolute"}
            w='100%' 
            h='100%'
            zIndex="3"
            color="white"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            gap='10px'
            fontSize={{base:'1rem',md:'1.5rem'}}
            fontWeight={"300"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <Text fontSize={"3rem"} fontWeight={"500"}>
                100+
              </Text>
              <Text mt="-10px" >
                PROJECTS
              </Text>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              gap="70px"
            >
              <Box
          
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <Text fontSize={"3rem"} fontWeight={"500"}>
                  1000+
                </Text>
                <Text mt="-10px">
                  STUDENTS TRAINED
                </Text>
              </Box>

              <Box
                
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <Text fontSize={"3rem"} fontWeight={"500"}>
                  20+
                </Text>
                <Text mt="-10px" >
                  DOMAIN EXPERTS
                </Text>
              </Box>
            </Box>
            <Box
             
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <Text fontSize={"3rem"} fontWeight={"500"}>
                100%
              </Text>
              <Text mt="-10px">
                SATISFACTION
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Homesec4;
