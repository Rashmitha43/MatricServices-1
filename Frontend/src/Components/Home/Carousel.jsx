import { Box, Image } from "@chakra-ui/react";
import img1 from "../../assets/Sliderimage1.png";
import img2 from "../../assets/Sliderimage2.png";
import img3 from "../../assets/Sliderimage3.png";
import React, { useEffect, useState } from "react";
import theme from "../../theme";
import { NavLink } from "react-router-dom";

const Sliderimages = [
  {
    image: img1,
    maintext: "Welcome to Matric Services",
    subtext: "Empowering Students Through Quality Education",
    buttontext: "Learn More",
    navlink:'about'
  },
  {
    image: img2,
    maintext: "Hands-On Workshops",
    subtext: "Enhance Your Skills with Our Expert-Led Programs",
    buttontext: "Explore more",
    navlink:'workshop'
  },
  {
    image: img3,
    maintext: "Exciting Projects",
    subtext: "Transform Your Ideas into Reality",
    buttontext: "View Projects",
    navlink:'projects'
  },
];

const Carousel = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const increment = () => {
    console.log(currentImg);
    setCurrentImg((prev) => (prev === Sliderimages.length - 1 ? 0 : prev + 1));
  };
  useEffect(() => {
    const timer = setInterval(() => {
      increment();
    }, 4000);
    return () => {
      clearInterval(timer);
    };
  }, [currentImg]);

  return (
    <>
      <Box
        w="100%"
        h={{
          base: "30vh",
          sm: "30vh",
          md: "40vh",
          lg: "50vh",
          xl: "80vh",
        }}
        position={"relative"}
        fontFamily={theme.fonts.body}
      >
        {
          <Box
            position="absolute"
            top="0px"
            w="100%"
            h="100%"
            objectFit={"cover"}
          >
            <Image
              w="100%"
              height={"100%"}
              src={Sliderimages[currentImg].image}
            />
            <Box
              position={"absolute"}
              display={"flex"}
              justifyContent={"flex-start"}
              flexDirection={"column"}
              top={'50%'}
              transform={'translateY(-50%)'}
              left={'5%'}
              color='white'
            >
              <Box fontSize={{base:'1.2rem',md:'2rem',lg:'3rem'}} fontWeight={'600'}>{Sliderimages[currentImg].maintext}</Box>
              <Box fontSize={{base:'0.7rem',md:'1rem',lg:'1.2rem'}} mt='-5px'>{Sliderimages[currentImg].subtext}</Box>
              <NavLink to={`/${Sliderimages[currentImg].navlink}`}><Box color='black' mt={{base:'10px',md:'20px',lg:'30px'}}  fontSize={{base:'0.8rem',md:'1rem'}} bg={theme.colors.thirty} w='max-content' p={{base:'5px 15px',md:'10px 30px'}} borderRadius={{base:'5px',md:'10px',lg:'15px'}} cursor={'pointer'}>{Sliderimages[currentImg].buttontext}</Box></NavLink>
            </Box>
            <Box
              position={"absolute"}
              left="50%"
              transform="translateX(-50%)"
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              bottom="20px"
              gap="10px"
            >
              <Box
                w={{ base: "6px", md: "8px", lg: "10px" }}
                h={{ base: "6px", md: "8px", lg: "10px" }}
                borderRadius={"50%"}
                style={{
                  background: 0 === currentImg ? "white" : "gray",
                  scale: 0 === currentImg ? "1.2" : "1",
                }}
              ></Box>
              <Box
                w={{ base: "6px", md: "8px", lg: "10px" }}
                h={{ base: "6px", md: "8px", lg: "10px" }}
                borderRadius={"50%"}
                style={{
                  background: 1 === currentImg ? "white" : "gray",
                  scale: 1 === currentImg ? "1.2" : "1",
                }}
              ></Box>
              <Box
                w={{ base: "6px", md: "8px", lg: "10px" }}
                h={{ base: "6px", md: "8px", lg: "10px" }}
                borderRadius={"50%"}
                style={{
                  background: 2 === currentImg ? "white" : "gray",
                  scale: 2 === currentImg ? "1.2" : "1",
                }}
              ></Box>
            </Box>
          </Box>
        }
      </Box>
    </>
  );
};

export default Carousel;
