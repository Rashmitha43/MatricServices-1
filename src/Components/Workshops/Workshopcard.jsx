import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  HStack,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import hooks from react-router-dom
import theme from "../../theme";
import img from "../../assets/Sliderimage1.png";
import { RxCross2 } from "react-icons/rx";


const init = {
  name: "",
  phone: "",
  email: "",
  institution: "",
  enquiry:""
};



const workshops = [
  {
    topic: "Workshop 1",
    date: new Date().toISOString().split("T")[0],
    venue: "Venue 1",
    image: img,
  },
  {
    topic: "Workshop 2",
    date: new Date().toISOString().split("T")[0],
    venue: "Venue 2",
    image: img,
  },
  {
    topic: "Workshop 3",
    date: new Date().toISOString().split("T")[0],
    venue: "Venue 3",
    image: img,
  },
  {
    topic: "Workshop 4",
    date: new Date().toISOString().split("T")[0],
    venue: "Venue 4",
    image: img,
  },
];

const Workshopcard = () => {
  const [viewAll, setViewAll] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  // const [form,setForm]=useState(false)
  // const [formdata,setFormdata]=useState(init)


  // const handleFormdata=(event)=>{
  //   const {name,value}=event.target
  //   setFormdata((prev)=>({
  //     ...prev,
  //     [name]:value
  //   }))
  // }

  // const toggleform = () => {
  //   setForm(!form);
  //   if (form === true) {
  //     document.body.style.overflowY = "scroll";
  //   } else {
  //     document.body.style.overflowY = "hidden";
  //   }
  // };

  // const handleSubmit=(e)=>{
  //     e.preventDefault()
  //     setFormdata(init)

  // }
  const handleViewAll = () => {
    navigate("/workshopcard", { state: { showAll: true } });
  };

  useEffect(() => {
    if (location.state?.showAll) {
      setViewAll(true);
    }
  }, [location.state]);

  return (<>
    <Box
      maxW="1200px"
      w="95%"
      display={"flex"}
      justifyContent={"space-around"}
      flexDirection={"column"}
      fontFamily={theme.fonts.body}
      mx="auto"
      py={10}
    >
      {/* Heading Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight={"700"}>
          Upcoming Workshops
        </Text>

        {!viewAll && workshops.length > 3 && (
          <Button
            bg={theme.colors.ten}
            color="white"
            height="30px"
            width="100px"
            borderRadius={"10px"}
            onClick={handleViewAll}
          >
            View All
          </Button>
        )}
      </Box>

      {/* Display workshops */}
      <SimpleGrid columns={[1, 2, 2, 3]} spacingX={3} spacingY={10} mt={6}>
        {viewAll
          ? workshops.map((event, index) => (
              <Card
                key={index}
                maxW="sm"
                bg={theme.colors.thirty}
                borderRadius={"15px"}
              >
                <CardBody>
                  <Image
                    src={event.image}
                    alt="Workshop image"
                    borderTopRadius="lg"
                  />
                  <Stack my="6" spacing="3" px="20px">
                    <Text fontSize={{base:'md',md:'md',lg:'lg'}}>{event.topic}</Text>
                    <Text fontSize={{base:'md',md:'md',lg:'lg'}}>{event.venue}</Text>
                    <Text fontSize={{base:'md',md:'md',lg:'lg'}}>{event.date}</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter px="20px" pb="20px">
                  <ButtonGroup spacing="2">
                    <Button
                      bg={theme.colors.ten}
                      w="max-content"
                      p={{base:'5px 15px',md:'10px 30px'}}
                      color="white"
                      borderRadius={{base:'7px',md:'15px'}}
                    >
                      View Details
                    </Button>
                    {/* <Button
                      bg={theme.colors.ten}
                      w="max-content"
                      p={{base:'5px 15px',md:'10px 30px'}}
                      color="white"
                      borderRadius={{base:'7px',md:'15px'}}
                      onClick={toggleform}
                    >
                      Register
                    </Button> */}
                  </ButtonGroup>
                </CardFooter>
              </Card>
            ))
          : workshops.slice(0, 3).map((event, index) => (
              <Card
                key={index}
                maxW="sm"
                bg={theme.colors.thirty}
                borderRadius={"15px"}
              >
                <CardBody>
                  <Image
                    src={event.image}
                    alt="Workshop image"
                    borderTopRadius="lg"
                  />
                  <Stack my="6" spacing="3" px="20px">
                    <Text fontSize={{base:'md',md:'md',lg:'lg'}}>{event.topic}</Text>
                    <Text fontSize={{base:'md',md:'md',lg:'lg'}}>{event.venue}</Text>
                    <Text fontSize={{base:'md',md:'md',lg:'lg'}}>{event.date}</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter px="20px" pb="20px">
                  <ButtonGroup spacing="2">
                    <Button
                      bg={theme.colors.ten}
                      w="max-content"
                      p={{base:'5px 15px',md:'10px 30px'}}
                      color="white"
                      borderRadius={{base:'7px',md:'15px'}}
                    >
                      View Details
                    </Button>
                    {/* <Button
                      bg={theme.colors.ten}
                      w="max-content"
                      p={{base:'5px 15px',md:'10px 30px'}}
                      color="white"
                      borderRadius={{base:'7px',md:'15px'}}
                      onClick={toggleform}
                    >
                      Register
                    </Button> */}
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
