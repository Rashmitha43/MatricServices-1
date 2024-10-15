import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import theme from '../../theme'
import image from '../../assets/projectheader.png'
const ProjectHeader = () => {
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
        
              <Text fontSize={{base:'1.2rem',md:'2rem',lg:'2.5rem'}} fontWeight={'600'} lineHeight={{lg:'3rem'}}><Text opacity='1'>Empowering Innovation with Real-World Project Documentation</Text></Text>
              <Text fontSize={{base:'0.7rem',md:'1rem',lg:'1.2rem'}} textAlign={'justify'}>Our projects cater to students and researchers from diploma to PhD levels, ensuring that each project is tailored to your specific needs and ideas, without compromising on quality or industry standards. Whether you come with a project concept or need help generating ideas, we provide full support. We also collaborate with institutions, supplying equipment and offering guidance to help students successfully complete their projects at any academic stage.</Text>

          </Box>
        
 \
   </>
  )
}

export default ProjectHeader