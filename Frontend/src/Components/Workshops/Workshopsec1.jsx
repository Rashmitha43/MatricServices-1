import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import theme from '../../theme'

const Workshopsec1 = () => {
  return (
   <>
<Box
        maxW="1200px"
        w="95%"
        display={"flex"}
        justifyContent={"flex-start"}
        flexDirection={"column"}
        gap='10px'
        fontFamily={theme.fonts.body}
        mx="auto"
        my={{ base: "3rem", md: "4rem" }}
      >
        
              <Text fontSize={{base:'1.2rem',md:'2rem',lg:'2.5rem'}} fontWeight={'600'} lineHeight={{lg:'3rem'}}><Text opacity='1'>Workshops</Text></Text>
              <Text fontSize={{base:'0.7rem',md:'1rem',lg:'1.2rem'}} textAlign={'justify'}>At Matric Services, we offer workshops on a wide array of existing and emerging technologies, led by experienced industrial experts. Our workshops are designed to foster growth and development for learners at every level, whether they are students or budding professionals. We prioritize hands-on learning experiences, providing individual kits where needed, to ensure participants gain practical skills. Committed to accessibility, we offer these workshops at the most competitive prices in the market.</Text>

          </Box>
   </>
  )
}

export default Workshopsec1