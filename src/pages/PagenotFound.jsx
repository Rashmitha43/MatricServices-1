import React from 'react'
import { Box,Text } from '@chakra-ui/react'
import theme from '../theme'
const PagenotFound = () => {
  return (
   <Box   
   maxW="1200px"
   w="95%"
   display={"flex"}
   justifyContent={"center"}
  alignItems={'center'}
  flexDirection={'column'}
   h='100vh'
   fontFamily={theme.fonts.body}
   mx="auto"
   fontSize={{base:'2rem',md:'5rem'}}
 
   >
    <Text>404</Text>
    <Text fontSize={{base:'1rem',md:'3rem'}}> PAGE NOT FOUND</Text></Box>
  )
}

export default PagenotFound
