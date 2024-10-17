import React from "react";
import theme from "../../theme";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  VStack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

const workshops = [
  {
    name: "Industrial Training Programs",
    des: "These are comprehensive, hands-on training programs developed in collaboration with industry partners, lasting up to a few months. Ideal for in-depth skill development and practical experience in a professional setting.",
    eg: "Industrial IoT and Automation,Embedded Systems and Robotics,Advanced Software Development Practices,AI and Machine Learning for Industry Applications",
  },
  {
    name: "One-day/Two-day Tech Talks",
    des: " Short, focused sessions designed to introduce participants to new technologies, trends, or tools. Perfect for those looking to gain insights in a short amount of time.",
    eg: "Introduction to Quantum Computing,Tech Talk on Cybersecurity Fundamentals,Blockchain and Cryptocurrency Overview,Latest Trends in Renewable Energy",
  },
  {
    name: "Focused Training Workshops (1-5 Days)",
    des: "These are in-depth workshops on specific technologies or fields, ranging from 1 to 5 days, based on the requirements of participants or institutions.",
    eg: "3days,Introduction to Python Programming,Basics of Data Analytics and Visualization,PCB Design and Manufacturing,Fundamentals of IoT and Embedded Systems,5days,Advanced Machine Learning and AI Applications,Full-Stack Web Development Bootcamp,Robotics and Automation from Scratch,Robotics and Automation from Scratch",
  },
];
const Workshopsec2 = () => {
  return (
    <>
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
            Workhshops that we offer
          </Text>
          <Box
            w="80px"
            h="3px"
            bg={theme.colors.ten}
            borderRadius={"20px"}
          ></Box>
          <SimpleGrid columns={[1, 2, 2, 2]} spacingX={3} spacingY={10} mt={8}>
            {workshops.map((event) => (
              <>
                <Card bg="white" py="10px" px={{base:'10px',md:'20px'}} borderRadius={'15px'}>
                  <VStack
                    divider={<StackDivider borderColor="gray.200" />}
                    spacing={4}
                    align="stretch"
                  >
                    <Box fontSize={{base:'1.2rem',md:'1.5rem'}} fontWeight={'500'}><Text>{event.name}</Text></Box>
                    <Box fontSize={{base:'0.8rem',md:'1rem'}}><Text>{event.des}</Text></Box>
                    <Box><Text fontWeight={'500'}>examples</Text>
                    <Text ml='20px' fontSize={{base:'0.8rem',md:'1rem'}}>{event.eg.split(',').map((eg)=>(
                        <>
                        <ul>
                        <li>{eg}</li>
                        </ul>
                        </>
                    ))}
                    </Text></Box>
                  </VStack>
                </Card>
              </>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default Workshopsec2;
