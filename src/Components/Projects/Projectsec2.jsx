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
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import theme from "../../theme";

const projects = [
  {
    name: "Software Projects",
    des: "Our software projects cover a wide range of areas including web development, mobile app development, data analytics, machine learning, and artificial intelligence. We provide full support for both frontend and backend development, offering solutions in various programming languages like Python, Java, C++, and more. These projects are ideal for students in computer science, IT, and related fields, helping them build software applications that solve real-world problems.",
    pdflink: "/images/pdfs/Software_Projects.pdf",
  },
  {
    name: "Electrical Projects",
    des: "We offer electrical projects that explore the principles of electricity, electromagnetism, and circuitry. These projects often involve power systems, renewable energy, electrical machines, and control systems. Whether you’re working on smart grids, solar energy solutions, or automation systems, our electrical projects ensure practical and industrial relevance. These are suitable for electrical engineering students looking to develop hands-on experience.",
    pdflink: "/images/pdfs/Electrical_Projects.pdf",
  },
  {
    name: "Electronics Projects",
    des: "Our electronics projects focus on circuits, embedded systems, microcontrollers, and digital/analog electronics. Whether you're building communication devices, IoT systems, or robotics, we offer in-depth guidance and equipment support. These projects help students understand circuit design, signal processing, and system integration, bridging the gap between theory and practical application.",
    pdflink: "/images/pdfs/Electronics_Projects.pdf",
  },
  {
    name: "Mechanical Projects",
    des: "Mechanical projects cover areas like thermodynamics, fluid mechanics, robotics, CAD/CAM design, and manufacturing processes. Whether it’s a design and simulation project or the development of a mechanical system, we provide industry-standard solutions. These projects are ideal for students in mechanical engineering, focusing on solving engineering problems through practical implementation.",
    pdflink: "/images/pdfs/Mechanical_Projects.pdf",
  },
  {
    name: "Embedded Projects",
    des: "Our embedded systems projects involve the integration of hardware and software, focusing on microcontrollers, sensors, and real-time systems. From IoT solutions to automation systems, these projects are perfect for students looking to build expertise in both electronics and software. We guide you through programming, circuit design, and system testing to ensure your embedded projects meet industrial standards.",
    pdflink: "/images/pdfs/Embedded_Projects.pdf",
  },
];
const Projectsec2 = () => {
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
        mb={{ base: "3rem", md: "4rem" }}
      >
        <Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight={"700"}>
          Academic Projects
        </Text>
        <Box w="80px" h="3px" bg={theme.colors.ten} borderRadius={"20px"}></Box>
        <Text mt="10px" fontWeight={"500"} fontSize={"1.2rem"}>
          We provide a diverse range of academic projects at various levels{" "}
        </Text>
        <SimpleGrid columns={[1, 2, 2, 3]} mt={"2rem"} spacing={5}>
          {projects.map((project, index) => (
            <>
              <Card
               key={index}
                maxW="sm"
                bg={theme.colors.thirty}
                p={"20px"}
                _hover={{
                  transform: "scale(1.03)",
                  transition: "all 0.5s ease",
                }}
                position={'relative'}
                h='100%'
              >
                <CardBody >
                  <Box mt="4" spacing="3" display={'flex'} justifyContent={'space-between'} flexDirection='column' gap='10px'>
                    <Heading size="md" textAlign={'center'} fontSize={{base:'1.2rem',md:'1.5rem'}} >{project.name}</Heading>
                    <Text fontSize={{base:'0.9rem',md:'1rem'}} textAlign={'justify'} mb={10}>{project.des}</Text>
                    <a
                    href={project.pdflink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      bg={theme.colors.ten}
                      color='white'
                      variant="solid"
                      size="sm"
                      p='10px 30px'
                      mt={10}
                      position={'absolute'}
                      bottom='20px'
                    >
                      View PDF
                    </Button>
                  </a>
                  </Box>
                </CardBody>
            
              </Card>
            </>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Projectsec2;
