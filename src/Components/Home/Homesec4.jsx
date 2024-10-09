import React, { useEffect, useState } from "react";
import theme from "../../theme";
import { Box, Button, Text } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import { ImQuotesLeft } from "react-icons/im";

const testimonials = [
  {
    name: "name",
    qualification: "qualification",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, consequuntur!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, consequuntur!",
  },
  {
    name: "name1",
    qualification: "qualification",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, consequuntur!",
  },
  {
    name: "name2",
    qualification: "qualification",
    des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, consequuntur!",
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
        maxW="700px"
        m="0 auto"
        bg={theme.colors.thirty}
        borderRadius={"15px"}
        mt={5}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        h='auto'
        p={10} 
        
      >
        {testimonials?.map((review, index) => (
          <Box
            position={index === currentIndex?'relative':'absolute'}
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
            p={{base:2,md:3,lg:5}}
            
          >
            {index === currentIndex && (
              <Box >
                
                <Box  gap='5px' display={'flex'} justifyContent={'flex-start'} flexDirection={'column'}><ImQuotesLeft fontSize={'1rem'}/><Box ml='20px'>{review.des}</Box></Box>
                <Box float='right' mt={{base:'10px',md:'none'}}>
                <Box>{review.name}</Box>
                <Box>{review.qualification}</Box>
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
