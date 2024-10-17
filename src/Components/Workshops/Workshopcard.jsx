import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import theme from "../../theme";
import img from "../../assets/Sliderimage1.png";
const workshops = [
  {
    topic: "name",
    date: new Date().toISOString().split("T")[0],
    venue: "venue",
    image: img,
  },
  {
    topic: "name",
    date: new Date().toISOString().split("T")[0],
    venue: "venue",
    image: img,
  },
  {
    topic: "name",
    date: new Date().toISOString().split("T")[0],
    venue: "venue",
    image: img,
  },
  {
    topic: "name",
    date: new Date().toISOString().split("T")[0],
    venue: "venue",
    image: img,
  },
  
];
const Workshopcard = () => {
  return (
    <>
      <Box
        maxW="1200px"
        w="95%"
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        fontFamily={theme.fonts.body}
        mx="auto"
        py={10}
      >
        <Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight={"700"}>
          Upcoming Workshops
        </Text>

        <SimpleGrid columns={[1, 2, 3, 3]} spacingX={3} spacingY={10} mt={6} >
          {workshops.map((event) => (
            <Card maxW="sm" bg={theme.colors.thirty} borderRadius={"15px"} >
              <CardBody>
                <Image
                  src={event.image}
                  alt="Green double couch with wooden legs"
                  borderTopRadius="lg"
                />
                <Stack my="6" spacing="3" px="20px">
                  <Text fontSize="xl">{event.topic}</Text>
                  <Text fontSize="xl">{event.venue}</Text>
                  <Text fontSize="xl">{event.date}</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter px="20px" pb="20px">
                <ButtonGroup spacing="2">
                  <Button
                    bg={theme.colors.ten}
                    w="max-content"
                    p="10px 30px"
                    color="white"
                    borderRadius={"15px"}
                  >
                    View Details
                  </Button>
                  <Button
                    bg={theme.colors.ten}
                    w="max-content"
                    p="10px 30px"
                    color="white"
                    borderRadius={"15px"}
                  >
                    Register
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Workshopcard;
