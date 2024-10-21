import React, { useEffect, useState } from "react";
import theme from "../../theme";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

const testimonials = [
  {
    name: "S.LIKHITHA VEDASAI MANVITHA",
    qualification:
      "Student - KKR & KSR INSTITUTE OF TECHNOLOGY AND SCIENCES, Guntur",
    des: "We explored with the new equipment. They provide hands on equipment so that we can do new projects. This workshop helps us to gain knowledge about the internet of things. We loved it.",
  },
  {
    name: "Dr. N. Chandra Shekhar",
    qualification:
      "Principal - Government Polytechnic, Pendurthi,Visakhapatnam ",
    des: "Your expertise, interactive approach, and dedication have inspired our students, providing them with valuable insights into emerging technologies.",
  },
  {
    name: "K Sahithi",
    qualification: "Student - Government Polytechnic for Women, Guntur",
    des: "I found the workshop to be very informative. The workshop provided me with specific hands-on skills. These skills will be  invaluable in my professional and personal life and it is so useful.  i understand that these techniques can be used on a daily basis.",
  },

  {
    name: " Dr. M. Nagamani",
    qualification: "Head of ECE,Government Polytechnic, Visakhapatnam",
    des: `We recently Conducting the IoT and Sensors Workshop by this team, was an excellent experience. The session was clear, engaging, and full of practical insights. I particularly appreciated how complex concepts were explained in a simple, understandable way. Looking forward to more workshops like this !`,
  },
];
const Homesec4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const prevTestimonial = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
      );
      setTransitioning(false);
    }, 300);
  };

  const nextTestimonial = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
      );
      setTransitioning(false);
    }, 300);
  };

  return (
    <Box
      maxW="1200px"
      w="95%"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      fontFamily={theme.fonts.body}
      mx="auto"
      my={{ base: "3rem", md: "4rem", lg: "5rem" }}
    >
      <Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight={"700"}>
        Our Testimonials
      </Text>
      <Box w="80px" h="3px" bg={theme.colors.ten} borderRadius={"20px"}></Box>
      <Box
        position="relative"
        width="100%"
        maxW="750px"
        m="0 auto"
        bg={theme.colors.thirty}
        borderRadius={"15px"}
        mt={5}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        h="auto"
        p={10}
      >
        {testimonials?.map((review, index) => (
          <Box
            position={index === currentIndex ? "relative" : "absolute"}
            w="100%"
            h="100%"
            display={index === currentIndex ? "flex" : "none"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            zIndex={index === currentIndex ? 1 : 0}
            opacity={index === currentIndex && !transitioning ? 1 : 0}
            transform={
              index === currentIndex && !transitioning
                ? "translateX(0)"
                : "translateX(20px)"
            }
            transition="opacity 0.3s ease, transform 0.3s ease"
            p={{ base: 2, md: 3, lg: 5 }}
          >
            {index === currentIndex && (
              <Box>
                <Box
                  gap="5px"
                  display={"flex"}
                  justifyContent={"flex-start"}
                  flexDirection={"column"}
                >
                  <ImQuotesLeft fontSize={"1rem"} />
                  <Box>
                    <Text>
                      {review.des}
                      <ImQuotesRight  style={{ display: "inline",marginLeft:'8px',position:'relative', top:'5px'}} />
                    
                     
                    </Text>
                  </Box>
                </Box>
                <Box float="right" mt={{ base: "10px", md: "none" }} ml="20px">
                  <Box fontSize={"0.8rem"}>{review.name}</Box>
                  <Box fontSize={"0.7rem"}>{review.qualification}</Box>
                </Box>
              </Box>
            )}
          </Box>
        ))}

        <Button
          position="absolute"
          top="50%"
          left="10px"
          transform="translateY(-50%)"
          onClick={prevTestimonial}
        >
          <FaChevronLeft />
        </Button>
        <Button
          position="absolute"
          top="50%"
          right="10px"
          transform="translateY(-50%)"
          onClick={nextTestimonial}
        >
          <FaChevronRight />
        </Button>
      </Box>
    </Box>
  );
};

export default Homesec4;
