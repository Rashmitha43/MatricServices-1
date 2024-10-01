import { Box, Heading, Image, Text } from "@chakra-ui/react";
import theme from "../../theme";
import image1 from "../../assets/homeimg1.webp";
import iconimage1 from "../../assets/homeimg2.png";
const Homesec3 = () => {
  return (
    <>
      <Box
        maxW={"1200px"}
        mx="auto"
        width={"95%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        fontFamily={theme.fonts.body}
        my="5rem"
      >
        <Box
          display='flex'
          flexDirection={{base:'column',lg:'row'}}
          alignItems={"center"}
          justifyContent={"center"}
          w="100%"
          gap={{base:'15px',lg:'0px'}}
        >
          {/* imagecontainer */}
          <Box
            w={{ base: "100%", lg: "35%" }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Box height={{base:'300px',md:'400px'}} w={{base:'90%',lg:'100%'}}>
              <Image w="100%" h={"100%"} src={image1} />
            </Box>
            <Box
              w="100%"
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              gap="10px"
            >
              <Text
                fontSize={{ base: "1.5rem", lg: "2rem" }}
                fontWeight={"700"}
              >
                How do we Help?
              </Text>
              <Box w="50px" h="1px" bg={theme.colors.thirty}></Box>
              <Text textAlign={"center"} fontSize={"15px"}>
                Do You Struggle With Execution Of Your Ideas? Find The Perfect
                Mentor To Guide You In Your Research.
              </Text>
            </Box>
          </Box>
          <Box
            w={{ base: "100%", lg: "60%" }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            gap="30px"
          >
            <Box
              w="100%"
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              gap='10px'
            >
              <Text fontSize={{base:'1.5rem',lg:'2rem'}} fontWeight={"700"} textAlign={{base:'center'}} >
                Academic Exellence Services
              </Text>
              <Box w="50px" h="1px" bg={theme.colors.thirty}></Box>
              <Text textAlign={{base:'center'}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem, nihil!
              </Text>
            </Box>
            <Box
              w="100%"
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box
                display={"grid"}
                gridTemplateColumns={{base:'repeat(1,90%)',md:'repeat(1,300px)',lg:'repeat(2,300px)'}}
                justifyContent={'center'}
                gap="20px"
              >
                <Box
                  w="100%"
                  height={"150px"}
                  p="8px"
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  boxShadow={`1px 0px 4px 3px rgb(50, 12, 134,0.5) `}
                  borderRadius={"15px"}
                >
                  <Box w="25%" h="80%">
                    <Image w="100%" h="100%" src={iconimage1} />
                  </Box>
                  <Box
                    w="75%"
                    h="100%"
                    display="flex"
                    flexDirection={"column"}
                    justifyContent={"center"}
                  >
                    <Text fontSize={"1.4rem"} fontWeight={"700"}>
                      B.tech|B.E
                    </Text>
                    <Text fontSize={"14px"} fontWeight={"400"} mt="5px">
                      Mentorship Sessions, Project Based Trainings, Guidance in
                      Research & Development
                    </Text>
                  </Box>
                </Box>

                <Box
                  w="100%"
                  height={"150px"}
                  p="8px"
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  boxShadow={`1px 0px 4px 3px rgb(50, 12, 134,0.5) `}
                  borderRadius={"15px"}
                >
                  <Box w="25%" h="80%">
                    <Image w="100%" h="100%" src={iconimage1} />
                  </Box>
                  <Box
                    w="75%"
                    h="100%"
                    display="flex"
                    flexDirection={"column"}
                    justifyContent={"center"}
                  >
                    <Text fontSize={"1.4rem"} fontWeight={"700"}>
                      B.tech|B.E
                    </Text>
                    <Text fontSize={"14px"} fontWeight={"400"} mt="5px">
                      Mentorship Sessions, Project Based Trainings, Guidance in
                      Research & Development
                    </Text>
                  </Box>
                </Box>

                <Box
                  w="100%"
                  height={"150px"}
                  p="8px"
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  boxShadow={`1px 0px 4px 3px rgb(50, 12, 134,0.5) `}
                  borderRadius={"15px"}
                >
                  <Box w="25%" h="80%">
                    <Image w="100%" h="100%" src={iconimage1} />
                  </Box>
                  <Box
                    w="75%"
                    h="100%"
                    display="flex"
                    flexDirection={"column"}
                    justifyContent={"center"}
                  >
                    <Text fontSize={"1.4rem"} fontWeight={"700"}>
                      B.tech|B.E
                    </Text>
                    <Text fontSize={"14px"} fontWeight={"400"} mt="5px">
                      Mentorship Sessions, Project Based Trainings, Guidance in
                      Research & Development
                    </Text>
                  </Box>
                </Box>

                <Box
                  w="100%"
                  height={"150px"}
                  p="8px"
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  boxShadow={`1px 0px 4px 3px rgb(50, 12, 134,0.5) `}
                  borderRadius={"15px"}
                >
                  <Box w="25%" h="80%">
                    <Image w="100%" h="100%" src={iconimage1} />
                  </Box>
                  <Box
                    w="75%"
                    h="100%"
                    display="flex"
                    flexDirection={"column"}
                    justifyContent={"center"}
                  >
                    <Text fontSize={"1.4rem"} fontWeight={"700"}>
                      B.tech|B.E
                    </Text>
                    <Text fontSize={"14px"} fontWeight={"400"} mt="5px">
                      Mentorship Sessions, Project Based Trainings, Guidance in
                      Research & Development
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              w="80%"
              p="10px 30px"
              bg={theme.colors.ten}
              borderRadius={"30px"}
              textAlign={"center"}
              fontWeight={"700"}
              _hover={{background:theme.colors.thirty,color:'white'}}
              transition={'all 0.3s ease'}
            >
              Get Guidence Now
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Homesec3;
