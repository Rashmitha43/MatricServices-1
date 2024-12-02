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
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import hooks from react-router-dom
import theme from "../../theme";
import img from "../../assets/Sliderimage1.png";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { getWorkshop } from "../../Redux/app/action";
import Loading from "../Loading/Loading";
import axios from "axios";

const Workshopcard = () => {
  const [viewAll, setViewAll] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { workshopadd, isLoading } = useSelector((state) => state.app);
  const currentDate = new Date();

  const handleViewAll = () => {
    navigate("/workshopcard", { state: { showAll: true } });
  };

  useEffect(() => {
    if (location.state?.showAll) {
      setViewAll(true);
    }
  }, [location.state]);

  useEffect(() => {
    dispatch(getWorkshop())
      .then((res) => {
        console.log(res.payload);
      })
      .catch((err) => {
        console.log("error", err.message);
      });
  }, [dispatch]);

  return (
    <>
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
           Our Workshops
          </Text>

          {!viewAll && workshopadd.length > 3 && (
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

        {isLoading ? (
          <>
            <Box
              w="100%"
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Loading message="Fetching Workshops..." loadHeight="250px" />
            </Box>
          </>
        ) : viewAll ? (
          <>
            <SimpleGrid
              columns={[1, 2, 2, 3]}
              spacingX={{ base: "none", md: 3 }}
              spacingY={10}
              mt={6}
              alignItems={"center"}
            >
              {workshopadd.map((event, index) => {
            
                return (
                  <Card
                    key={event._id}
                    maxW="sm"
                    bg={theme.colors.thirty}
                    borderRadius={"15px"}
                    position={"relative"}
                  >
                    <CardBody>
                      <Box w="100%" h={"250px"}>
                        <Image
                          src={event.img[0]}
                          alt="Workshop image"
                          borderTopRadius="lg"
                          w="100%"
                          h="100%"
                          objectFit={"cover"}
                        />
                      </Box>
                      <Stack
                        my="6"
                        spacing="3"
                        px="20px"
                        h={{ base: "200px", md: "200px" }}
                      >
                        <Text fontSize={{ base: "md", md: "md", lg: "lg" }}>
                          {event.topic}
                        </Text>
                        <Text fontSize={{ base: "md", md: "md", lg: "lg" }}>
                          {event.venue}
                        </Text>
                        <Text fontSize={{ base: "md", md: "md", lg: "lg" }}>
                          dates:{event.fromdate}-{event.todate}
                        </Text>
                      </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter px="20px" pb="20px">
                      <ButtonGroup spacing="2">
                        <Button
                          bg={theme.colors.ten}
                          w="max-content"
                          p={{ base: "5px 15px", md: "10px 30px" }}
                          color="white"
                          borderRadius={{ base: "7px", md: "15px" }}
                          onClick={() => navigate(`/singlepage/${event._id}`)}
                          position={"absolute"}
                          bottom="20px"
                        >
                          View Details
                        </Button>
                      </ButtonGroup>
                    </CardFooter>
                  </Card>
                );
              })}
            </SimpleGrid>
          </>
        ) : (
          <SimpleGrid
            columns={[1, 2, 2, 3]}
            spacingX={{ base: "none", md: 3 }}
            spacingY={10}
            mt={6}
            alignItems={"center"}
          >
            {workshopadd.slice(0, 3).map((event, index) => (
              <Card
                key={event._id}
                maxW="sm"
                bg={theme.colors.thirty}
                borderRadius={"15px"}
                position={"relative"}
              >
                <CardBody>
                  <Box w="100%" h="250px">
                    <Image
                      src={event.img[0]}
                      alt="Workshop image"
                      borderTopRadius="lg"
                      width={"100%"}
                      h={"100%"}
                      objectFit={"cover"}
                    />
                  </Box>
                  <Stack my="6" spacing="3" px="20px" h="200px">
                    <Text fontSize={{ base: "md", md: "md", lg: "lg" }}>
                      {event.topic}
                    </Text>
                    <Text fontSize={{ base: "md", md: "md", lg: "lg" }}>
                      {event.venue}
                    </Text>
                    <Text fontSize={{ base: "md", md: "md", lg: "lg" }}>
                      {event.fromdate} - {event.todate}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter px="20px" pb="20px">
                  <ButtonGroup spacing="2">
                    <Button
                      bg={theme.colors.ten}
                      w="max-content"
                      p={{ base: "5px 15px", md: "10px 30px" }}
                      color="white"
                      borderRadius={{ base: "7px", md: "15px" }}
                      onClick={() => navigate(`/singlepage/${event._id}`)}
                      position={"absolute"}
                      bottom={"20px"}
                    >
                      View Details
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
        )}
      </Box>
    </>
  );
};

export default Workshopcard;
