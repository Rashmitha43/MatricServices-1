import { Box, Image } from "@chakra-ui/react";
import img1 from '../../assets/Sliderimage1.webp';
import img2 from '../../assets/Sliderimage2.png';
import img3 from '../../assets/Sliderimage1.webp'
import React, { useEffect, useState } from "react";
import theme from "../../theme";

const Sliderimages = [img1, img2, img3];

const Carousel = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const increment = () => {
    console.log(currentImg)
    setCurrentImg(prev=>prev === Sliderimages.length - 1 ? 0 : prev + 1);
  };
  useEffect(() => {
    const timer=setInterval(()=>{
       increment()
    },4000)
    return()=>{
      clearInterval(timer)
    }
  },[currentImg]);

  return (
    <>
      <Box
        w="100%"
        h={{
          base: "20vh",
          sm: "28vh",
          md: "35vh",
          lg: "45vh",
          xl: "60vh",
        }}
        position={"relative"}
      >
        {
          <Box
            position="absolute"
            top="0px"
            w="100%"
            h="100%"
            objectFit={"cover"}
          >
            <Image w="100%" height={"100%"} src={Sliderimages[currentImg]} />
            <Box position={'absolute'} left='50%' ml='-50px' display={'flex'} alignItems={'center'} justifyContent={'center'} bottom='20px' gap='10px'>
                 <Box w='10px' h='10px' borderRadius={'50%'}  style={{background:0===currentImg?theme.colors.thirty:'gray',scale:0===currentImg?'1.2':'1'}}></Box>
                 <Box w='10px' h='10px' borderRadius={'50%'} style={{background:1===currentImg?theme.colors.thirty:'gray',scale:1===currentImg?'1.2':'1'}}></Box>
                 <Box w='10px' h='10px' borderRadius={'50%'} style={{background:2===currentImg?theme.colors.thirty:'gray',scale:2===currentImg?'1.2':'1'}}></Box>
            </Box>
      
          </Box>
        }
      </Box>
    </>
  );
};

export default Carousel;
