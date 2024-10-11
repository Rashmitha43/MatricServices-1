import React from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import theme from "../../theme";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { TbBulb } from "react-icons/tb";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { FaDiagramProject } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
const Homesec3 = () => {
  return (
    <Box
      w="100%"
      my={{ base: "3rem", md: "4rem", lg: "5rem" }}
    
      bg={theme.colors.thirty}
    >
      <Box
        maxW="1200px"
        w="95%"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        fontFamily={theme.fonts.body}
        mx="auto"
        py={10}
      >
        <Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight={"700"}>
          Why Choose Us?
        </Text>
        <Box
          w="80px"
          h="3px"
          bg={theme.colors.ten}
          borderRadius={"20px"}
        ></Box>
        <SimpleGrid columns={[1, 2, 2, 2]} spacingX={3} spacingY={10} mt={6}>
          {/* feature1 */}
          <Box display={"flex"} justifyContent={"flex-start"} gap={"10px"}>
            <Box color="black" fontSize={"2.5rem"}>
              <TbBulb />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              gap="10px"
              flexDirection={"column"}
            >
              <Text fontSize={"1.2rem"} fontWeight={'500'}>
                Comprehensive Solutions
              </Text>
              <Text fontSize={"0.8rem"}>
                We offer a wide range of technology-related services, including
                academic projects, workshops, and custom industrial solutions
                tailored to meet diverse needs.
              </Text>
            </Box>
          </Box>

        

           {/* feature2 */}
           <Box display={"flex"} justifyContent={"flex-start"} gap={"15px"}>
            <Box color="black" fontSize={"2rem"}>
            <IoIosCheckmarkCircle />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              gap="10px"
              flexDirection={"column"}
            >
              <Text fontSize={"1.2rem"} fontWeight={'500'}>
              Quality Assurance
              </Text>
              <Text fontSize={"0.8rem"}>
              We maintain the highest industrial standards across all projects, ensuring that every solution we provide meets quality expectations and supports practical learning.

              </Text>
            </Box>
          </Box>

               {/* feature3 */}
               <Box display={"flex"} justifyContent={"flex-start"} gap={"15px"}>
            <Box color="black" fontSize={"1.7rem"}>
            <GrUserExpert />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              gap="10px"
              flexDirection={"column"}
            >
              <Text fontSize={"1.2rem"} fontWeight={'500'}>
              Expert Collaboration
              </Text>
              <Text fontSize={"0.8rem"}>
              Our team collaborates with industrial experts and professionals from around the globe, ensuring that our services are rooted in real-world experience and cutting-edge technology.
              </Text>
            </Box>
          </Box>


           {/* feature4 */}
           <Box display={"flex"} justifyContent={"flex-start"} gap={"15px"}>
            <Box color="black" fontSize={"2.3rem"}>
              <MdOutlineSupportAgent/>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              gap="10px"
              flexDirection={"column"}
            >
              <Text fontSize={"1.2rem"} fontWeight={'500'}>
              Customized Support
              </Text>
              <Text fontSize={"0.8rem"}>
              Our services are tailored to individual and institutional requirements, allowing us to provide personalized guidance and resources that align with specific goals.
              </Text>
            </Box>
          </Box>

           {/* feature5 */}

           <Box display={"flex"} justifyContent={"flex-start"} gap={"15px"}>
            <Box color="black" fontSize={"2.5rem"}>
              <BiSolidBadgeDollar/>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              gap="10px"
              flexDirection={"column"}
            >
              <Text fontSize={"1.2rem"} fontWeight={'500'}>
              Affordable Access
              </Text>
              <Text fontSize={"0.8rem"}>
              We are committed to making technology education and support accessible by offering our services at minimal costs, prioritizing societal benefit over profit.
              </Text>
            </Box>
          </Box>

          {/* feature6 */}

          <Box display={"flex"} justifyContent={"flex-start"} gap={"15px"}>
            <Box color="black" fontSize={"2rem"}>
             <FaDiagramProject/>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              gap="10px"
              flexDirection={"column"}
            >
              <Text fontSize={"1.2rem"} fontWeight={'500'}>
              Diverse Project Offerings
              </Text>
              <Text fontSize={"0.8rem"}>
              We cater to various academic levels, from diploma to PhD, across disciplines such as software, electrical, electronics, mechanical, and embedded projects.
              </Text>
            </Box>
          </Box>

          {/* feature7 */}

          <Box display={"flex"} justifyContent={"flex-start"} gap={"15px"}>
            <Box color="black" fontSize={"2rem"}>
              <FaBookReader/>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              gap="10px"
              flexDirection={"column"}
            >
              <Text fontSize={"1.2rem"} fontWeight={'500'}>
              Hands-on Learning
              </Text>
              <Text fontSize={"0.8rem"}>
              Our workshops and project support provide students and professionals with practical, hands-on experience that enhances their skills and knowledge in technology.
              </Text>
            </Box>
          </Box>


{/* feature8 */}

<Box display={"flex"} justifyContent={"flex-start"} gap={"15px"}>
            <Box color="black" fontSize={"2rem"}>
              <GiArchiveResearch />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              gap="10px"
              flexDirection={"column"}
            >
              <Text fontSize={"1.2rem"} fontWeight={'500'}>
              Research Support
              </Text>
              <Text fontSize={"0.8rem"}>
              We assist students and researchers with their academic papers, offering guidance and resources to ensure successful outcomes.
              </Text>
            </Box>
          </Box>

        

        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Homesec3;
