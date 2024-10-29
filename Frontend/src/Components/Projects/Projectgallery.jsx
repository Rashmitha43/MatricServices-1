import { Box, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, SimpleGrid, Text, textDecoration, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import theme from "../../theme";





const projects=[
  '/images/Homegallery/projectimage1.jpeg',
  '/images/Homegallery/projectimage2.jpeg',
  '/images/Homegallery/projectimage4.jpeg',
  '/images/Homegallery/projectimage5.jpeg',
]

const Projectgallery = () => {
  const [photoIndex, setPhotoIndex] = useState(-1);
  const { isOpen, onOpen, onClose } = useDisclosure()

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
        Our Projects
      </Text>
     
      <Box w="80px" h="3px" bg={theme.colors.ten} borderRadius={"20px"}></Box>

      
      <SimpleGrid columns={[2,2,3,3]} spacing={5} mt={10}>
        {
          projects.map((image,index)=>(
            <Box key={index} w='100%' overflow={'hidden'} h={{base:'150px',md:'200px',lg:'250px'}} display='flex' alignItems={'center'} justifyContent={'center'} position={'relative'} onClick={()=>setPhotoIndex(index)} _hover={{transition:'all 0.5s ease',transform:'scale(1.03)'}}> 
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
                src={projects[photoIndex]} 
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
  );
};

export default Projectgallery;
