import React from 'react'
import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import dummyimg from '../../assets/Sliderimage1.png'
const ProductSinglepage = () => {
  return (
    <>
    <Box maxW={'1000px'} width={'95%'} mx='auto' my={{base:'3rem',md:'5rem'}} >
        <HStack direction={{base:'column',md:'row'}} w='100%' boxShadow={'lg'} align='center' spacing={5}>
            <Box w='40%' h='500px'>
                <Image w='100%' h='100%' src={dummyimg} objectFit={'cover'}/>
            </Box>
            <Box w='50%'>
                <VStack align={'stretch'} spacing={5} w='100%'>
                    <Text fontSize={{base:'1.2rem',md:'2rem'}}>Name</Text>
                    <Text fontSize={{base:'0.9rem',md:'1rem'}}>description</Text>
                    <Text fontSize={{base:'1.2rem',md:'2rem'}} color='green'>price</Text>
                    <Text>Quantity</Text>
                      <Box w='100%' letterSpacing={'2px'} bg='black' color='white' p='10px 20px' textAlign={'center'}>Place Order</Box>
                      <HStack w='100%' Spacing={3}>
                         <Box h='100px'><Image w='100%' h='100%' src={dummyimg}/></Box>
                         <Box h='100px'><Image w='100%' h='100%' src={dummyimg}/></Box>
                         <Box h='100px'><Image w='100%' h='100%' src={dummyimg}/></Box>
                      </HStack>
                </VStack>
            </Box>

        </HStack>
    </Box>
    </>
  )
}

export default ProductSinglepage