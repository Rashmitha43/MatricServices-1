import { Box, HStack, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, SimpleGrid, StackDivider, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import theme from '../../theme'
import { GrWorkshop } from "react-icons/gr";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const photos=[
  '/images/Homegallery/galleryimg1.jpeg',
    '/images/Homegallery/galleryimg1.jpeg'
]
const Singlepage = () => {
  const [photoIndex, setPhotoIndex] = useState(-1);
  return (
    <>
    <Box
        maxW="1200px"
        w="95%"
        display={"flex"}
        justifyContent={"flex-start"}
        flexDirection={{base:'column',md:'row'}}
        fontFamily={theme.fonts.body}
        mx="auto"
        gap='2%'
        my={{ base: "3rem", md: "4rem" }}
      >
       <Box w={{base:'100%',md:'60%'}} boxShadow={'lg'}>
        <VStack spacing={'8'} align={'center'} p='20px'>
         <Box w={{base:'100%',md:'80%'}} h='300px'><Image w='100%'h='100%' src='/images/Homegallery/projectimage5.jpeg'/></Box>
         <Box textAlign={'justify'}><Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi error sint praesentium nemo earum nesciunt. Temporibus quis quasi asperiores repudiandae illum, unde tenetur dolorum dignissimos id, vitae totam. Cum, mollitia, est soluta veniam fugiat exercitationem voluptates aspernatur commodi excepturi, doloribus rem laudantium vel voluptatem fuga culpa error tenetur eveniet? Expedita architecto nemo voluptates quia porro quisquam eaque sit delectus?</Text></Box>
        </VStack>
       </Box>
       <Box w={{base:'100%',md:'38%'}} boxShadow={'lg'} >
        <VStack spacing={'5'} align={'stretch'} p='20px' divider={<StackDivider borderColor='gray.200' />}>
          {/* heading */}
          <HStack fontSize={{base:'1rem',md:'1.2rem'}} fontWeight={'500'}><Box><GrWorkshop/></Box> <Text>workshop details</Text></HStack>
          <Box fontWeight={'500'}>Topic:</Box>
          <Box fontWeight={'500'}>Venue:</Box>
          <Box fontWeight={'500'}>Date:</Box>
          <Box fontWeight={'500'}>Time:</Box>
          <Box fontWeight={'500'}>Eligibility Criteria:</Box>
          {/* contact info */}
          <HStack fontSize={{base:'1rem',md:'1.2rem'}} fontWeight={'500'}><Box><RiContactsBook2Fill/></Box> <Text>Contact Info</Text></HStack>
          <HStack  ><Box fontWeight={'500'}><FaPhoneAlt/></Box> <a href="tel:+18475555555"><Text>234567890</Text></a></HStack>
          <HStack ><Box fontWeight ={'500'}><IoMdMail/></Box> <a href="mailto:someone@example.com"><Text>someone@example.com</Text></a></HStack>

        </VStack>
       </Box>
        </Box>

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
        Related Images
      </Text>
     
      <Box w="80px" h="3px" bg={theme.colors.ten} borderRadius={"20px"}></Box>

      
      <SimpleGrid columns={[2,2,3,3]} spacing={5} mt={10}>
        {
          photos.map((image,index)=>(
            <Box cursor='pointer' key={index} w='100%' overflow={'hidden'} h={{base:'150px',md:'200px',lg:'250px'}} display='flex' alignItems={'center'} justifyContent={'center'} position={'relative'} onClick={()=>setPhotoIndex(index)} _hover={{transition:'all 0.5s ease',transform:'scale(1.03)'}}> 
            <Image  src={image}          
            objectFit="cover" 
            width="100%" 
            height={'100%'}
            alt={`Gallery Image ${index + 1}`} 
           />
            </Box>
          ))
        }
      </SimpleGrid>
      <Modal isOpen={photoIndex >= 0} onClose={()=>setPhotoIndex(-1)} size="full" bg='black' zIndex={5}>
        <ModalOverlay bg="rgba(0, 0, 0, 0.8)" />
        <ModalContent>
          
          <ModalBody display="flex" alignItems="center" justifyContent="center" h="100%" >
          
            {photoIndex >= 0 && (
              <Box display={'flex'} alignItems={'flex-start'} justifyContent={'center'} gap={{base:'5px',md:'10px',lg:'20px'}}>
              <Image 
                src={photos[photoIndex]} 
                objectFit="cover" 
                width={{base:'80%',md:'90%',lg:'100%'}}
                maxH={{base:'50vh',md:'70vh'}}
                alt={`Full Image ${photoIndex + 1}`} 
              />
               <ModalCloseButton fontSize={{base:'1rem',md:'1.5rem',lg:'2rem'}} color='white' zIndex={'overlay'}/>
              </Box>
            )}
           
          </ModalBody>
          
        </ModalContent>
      </Modal>

      
    </Box>
    </>
  )
}

export default Singlepage