import { Box,Simplegrid,Image,SimpleGrid,Text } from '@chakra-ui/react'
import React from 'react'
import theme from '../../theme'
import img1 from '../../assets/homeimag4.jpeg'
const Homesec2 = () => {
  return (
    <Box maxW='1200px' w='95%' display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} fontFamily={theme.fonts.body} mx='auto' my={{base:'3rem',md:'4rem',lg:'5rem'}}>
       <Text fontSize={{base:'1.5rem',md:'2rem'}} fontWeight={'700'}>Easing the life of Engineers with...</Text>
       <Box w='50px' h='1px' bg={theme.colors.thirty}></Box>
       
<SimpleGrid columns={[1,2,2,4]} spacing='40px' mt={'2rem'} >
  <Box  height='250px' w='250px'><Image w='100%' h='100%' src={img1}/></Box>
  <Box bg={theme.colors.ten} p='5px' color='white' height='auto' w='250px' borderRadius={'15px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
    <Text fontSize={{base:'1.5rem',md:'2rem'}} >INNOVATION</Text>
    <Box w='50px' h='2px' bg='white'></Box>
    <Text textAlign={'center'} fontSize={'0.9rem'} mt='10px'>Without the necessary support, a significant number of potentially groundbreaking research initiatives remain unrealized, limiting the overall innovation potential of aspiring researchers.</Text>
  </Box>
  <Box bg={theme.colors.thirty} p='5px' color='white' height='auto' w='250px' borderRadius={'15px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
    <Text fontSize={{base:'1.5rem',md:'2rem'}} >INNOVATION</Text>
    <Box w='50px' h='2px' bg='white'></Box>
    <Text textAlign={'center'} fontSize={'0.9rem'} mt='10px'>Without the necessary support, a significant number of potentially groundbreaking research initiatives remain unrealized, limiting the overall innovation potential of aspiring researchers.</Text>
  </Box>
  <Box bg={theme.colors.ten} p='5px' color='white' height='auto' w='250px' borderRadius={'15px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
    <Text fontSize={{base:'1.5rem',md:'2rem'}} >INNOVATION</Text>
    <Box w='50px' h='2px' bg='white'></Box>
    <Text textAlign={'center'} fontSize={'0.9rem'} mt='10px'>Without the necessary support, a significant number of potentially groundbreaking research initiatives remain unrealized, limiting the overall innovation potential of aspiring researchers.</Text>
  </Box>
  
</SimpleGrid>

        {/* <Box w='250px' height={'250px'}>
            <Image w='100%' h='100%' src={img1}/>
        </Box>
        <Box h='250px' bg={theme.colors.thrity} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} p={{base:'10px',md:'20px' }} color='white'>
            <Text fontSize={{base:'1.5rem',md:'2rem'}} >
             INNOVATION
            </Text>
            <Box w='50px' h='1px' bg='white'></Box>
            <Text>Without the necessary support, a significant number of potentially groundbreaking research initiatives remain unrealized, limiting the overall innovation potential of aspiring researchers.</Text>
        </Box>
        <Box></Box>
        <Box></Box> */}


        
    </Box>
  )
}

export default Homesec2