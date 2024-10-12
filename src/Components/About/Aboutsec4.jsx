import { Box, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import theme from "../../theme";
import { useInView } from 'react-intersection-observer'; // Import IntersectionObserver hook

const images = [
  '/images/Homegallery/galleryimg1.jpeg',
  '/images/Homegallery/galleryimg2.jpeg',
  '/images/Homegallery/galleryimg3.jpeg',
  '/images/Homegallery/galleryimg4.jpeg',
  '/images/Homegallery/galleryimg11.jpeg',
  '/images/Homegallery/galleryimg6.jpeg',
  '/images/Homegallery/galleryimg12.jpeg',
  './images/Homegallery/galleryimg8.jpeg'
];

const workshops = [
  '/images/Homegallery/galleryimg1.jpeg',
  '/images/Homegallery/galleryimg3.jpeg',
  './images/Homegallery/galleryimg8.jpeg'
];

const projects = [
  '/images/Homegallery/galleryimg11.jpeg',
  '/images/Homegallery/galleryimg12.jpeg',
];

const MotionBox = motion(Box);

const Aboutsec4 = () => {
  const [photoIndex, setPhotoIndex] = useState(-1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filter, setFilter] = useState(images);

  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1, // Percentage of the component that must be visible before triggering
  });

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
      ref={ref} // Connect the ref to the main section box
    >
      {/* Animate text only when in view */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight={"700"}>
          Our Gallery
        </Text>
      </MotionBox>

      {/* Animated underline */}
      <MotionBox
        w="80px"
        h="3px"
        bg={theme.colors.ten}
        borderRadius={"20px"}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6 }}
      ></MotionBox>

      <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap='10px' mt='10px' fontSize={{ base: '1rem', md: '1.2rem' }} color={theme.colors.ten}>
        <Text
          cursor='pointer'
          onClick={() => setFilter(images)}
          _hover={{ textDecoration: 'underline', color: 'black' }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          All
        </Text>
        /
        <Text
          cursor='pointer'
          onClick={() => setFilter(workshops)}
          _hover={{ textDecoration: 'underline', color: 'black' }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Workshops
        </Text>
        /
        <Text
          cursor='pointer'
          onClick={() => setFilter(projects)}
          _hover={{ textDecoration: 'underline', color: 'black' }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Projects
        </Text>
      </Box>

      {/* Animate the image grid only when in view */}
      <SimpleGrid columns={[2, 2, 3, 3]} spacing={5} mt={10}>
        {filter.map((image, index) => (
          <MotionBox
            key={index}
            w='100%'
            overflow={'hidden'}
            h={{ base: '150px', md: '200px', lg: '250px' }}
            display='flex'
            alignItems={'center'}
            justifyContent={'center'}
            position={'relative'}
            onClick={() => setPhotoIndex(index)}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Image
              src={image}
              objectFit="cover"
              width="100%"
              height={'100%'}
              alt={`Gallery Image ${index + 1}`}
            />
          </MotionBox>
        ))}
      </SimpleGrid>

      <Modal isOpen={photoIndex >= 0} onClose={() => setPhotoIndex(-1)} size="full" bg='black' zIndex={5}>
        <ModalOverlay bg="rgba(0, 0, 0, 0.8)" />
        <ModalContent>
          <ModalBody display="flex" alignItems="center" justifyContent="center" h="100%">
            {photoIndex >= 0 && (
              <MotionBox
                display={'flex'}
                alignItems={'flex-start'}
                justifyContent={'center'}
                gap={{ base: '5px', md: '10px', lg: '20px' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={images[photoIndex]}
                  objectFit="cover"
                  width={{ base: '80%', md: '90%', lg: '100%' }}
                  maxH={{ base: '50vh', md: '70vh' }}
                  alt={`Full Image ${photoIndex + 1}`}
                />
                <ModalCloseButton fontSize={{ base: '1rem', md: '1.5rem', lg: '2rem' }} color='white' zIndex={'overlay'} />
              </MotionBox>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Aboutsec4;
