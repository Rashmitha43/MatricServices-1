import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  Icon,
  FormControl,
  FormLabel,
  Textarea,
  HStack,
  VStack,
  Text,
  Select,
  InputGroup,
  useColorModeValue,
  useToast,
  Image,
  CloseButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import theme from "../../theme";
import { useDispatch } from "react-redux";
import { postWorkshop } from "../../Redux/app/action";

const AddWorkshop = () => {

  const dispatch=useDispatch();
  const init={
      topic: "",
      desc: "",
      venue: "",
      date: "",
      time: "",
      criteria: "",
      contact: "",
      email: "",
      img: [],
    
  }
  const [formData, setFormData] = useState(init);

  const [selectedImage, setSelectedImage] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files); // Convert to array for multiple uploads
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setFormData((prevFormData) => ({
      ...prevFormData,
    img: [...prevFormData.img, ...newImages], // Add new images to the existing array
    }));
  };

  const handleImageRemove = (index) => {
    const updatedImages = [...formData.img];
    updatedImages.splice(index, 1); // Remove the image at the specified index
    setFormData({ ...formData, img: updatedImages });
  };

  const handleImageClick = (imagePreview) => {
    setSelectedImage(imagePreview);
    onOpen();
  };

  const handleSubmit = (e) => 
    {
    e.preventDefault();
    if(!formData.topic || !formData.desc || !formData.venue || !formData.date || !formData.time || !formData.criteria || !formData.contact || !formData.email){
      alert('Please Fill all the Input Fields')
    }else{
      dispatch(postWorkshop(formData))
      .then(res=>{
        alert('successfully submitted');
        // setFormData(init)
      })
      .catch(err=>{
        console.log('error',err.message)
      })
    

    }
  }

  const inputStyles = {
    borderRadius: "md",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: `${theme.colors.thirty}`,
    width: "100%",
    p: "10px",
  };

  return (
    <Box
      bgGradient={useColorModeValue(
        "linear(to-r, #f7fafc, #edf2f7)",
        "linear(to-r, gray.700, gray.900)"
      )}
      p={8}
      mx="auto"
      width="100%"
      borderRadius="lg"
      boxShadow="2xl"
      border="none"
      transition="all 0.3s ease"
      _hover={{
        boxShadow: "3xl",
        transform: "translateY(-4px)",
      }}
    >
      <Text
        fontSize="4xl"
        fontWeight="xl"
        mb={6}
        textAlign="center"
        color="black"
        // color={useColorModeValue("gray.800", "yellow.300")}
        // bgGradient="linear(to-r, yellow.400, yellow.500)"
        // bgClip="text"
      >
        ADD A WORKSHOP
      </Text>

      <form onSubmit={handleSubmit}>
        <VStack spacing={8} align="stretch">
          <FormControl isRequired>
            <FormLabel fontSize="lg" fontWeight="medium">
              Workshop Name
            </FormLabel>
            <Input
              name="topic"
              value={formData.topic}
              onChange={handleInputChange}
              placeholder="Enter your workshop name"
              size="lg"
              {...inputStyles}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize="lg" fontWeight="medium">
              workshop Description
            </FormLabel>
            <Textarea
              name="desc"
              value={formData.desc}
              onChange={handleInputChange}
              placeholder="Describe the workshop"
              size="lg"
              {...inputStyles}
            />
          </FormControl>

          <FormControl>
            <FormLabel fontSize="lg" fontWeight="medium">
              Location
            </FormLabel>
            <Input
              name="venue"
              value={formData.venue}
              onChange={handleInputChange}
              placeholder="City, Country"
              size="lg"
              {...inputStyles}
            />
          </FormControl>

          <HStack spacing={6} width="100%">
           

            <FormControl width="100%">
              <FormLabel fontSize="lg" fontWeight="medium" w="100%">
                Criteria
              </FormLabel>
              <Input
                name="criteria"
                value={formData.criteria}
                onChange={handleInputChange}
                placeholder="Selection criteria"
                size="lg"
                {...inputStyles}
                w="100%"
              />
            </FormControl>
          </HStack>

          <HStack spacing={6} width="100%">
            <FormControl width="50%">
              <FormLabel fontSize="lg" fontWeight="medium">
                Date
              </FormLabel>
              <InputGroup size="lg">
                <Input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  {...inputStyles}
                />
              </InputGroup>
            </FormControl>

            <FormControl width="50%">
              <FormLabel fontSize="lg" fontWeight="medium">
                Time
              </FormLabel>
              <InputGroup size="lg">
                <Input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  {...inputStyles}
                />
              </InputGroup>
            </FormControl>
          </HStack>

          <HStack spacing={6} width="100%">
            <FormControl isRequired width="50%">
              <FormLabel fontSize="lg" fontWeight="medium">
                Phone Number
              </FormLabel>
              <Input
                type="phoneNumber"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="Your contact number"
                size="lg"
                {...inputStyles}
              />
            </FormControl>

            <FormControl isRequired width="50%">
              <FormLabel fontSize="lg" fontWeight="medium">
                Email
              </FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email address"
                size="lg"
                {...inputStyles}
              />
            </FormControl>
          </HStack>

          <FormControl>
            <FormLabel fontSize="lg" fontWeight="medium">
              Upload Images
            </FormLabel>

            <Box
              border="2px dashed"
              borderColor="gray.300"
              p={2}
              borderRadius="md"
              width="170px"
              textAlign="center"
              cursor='pointer'
              _hover={{backgroundColor:'blue.200'}}
            >
              <Button
                colorScheme="yellow"
                variant="solid"
                size="lg"
                position="relative"
                overflow="hidden"
                leftIcon={<Icon as={AiOutlineCloudUpload} boxSize={6} />}
                cursor={'pointer'}
              >
                Upload Images
                <Input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileUpload}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: 0,
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                  }}
                />
              </Button>
            </Box>

            <HStack spacing={4} mt={4} wrap="wrap">
              {formData.img.map((image, index) => (
                <Box key={index} position="relative" boxSize="120px">
                  <CloseButton
                    position="absolute"
                    fontSize="10px"
                    borderRadius="50%"
                    padding="5px"
                    bgColor="yellow.400"
                    top="0"
                    right="0"
                    onClick={() => handleImageRemove(index)}
                  />
                  <Image
                    src={image.preview}
                    alt={`Uploaded Image ${index + 1}`}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    borderRadius="md"
                    boxShadow="lg"
                    cursor="pointer"
                    onClick={() => handleImageClick(image.preview)}
                    _hover={{ transform: "scale(1.1)" }}
                    transition="transform 0.3s ease"
                  />
                </Box>
              ))}
            </HStack>
          </FormControl>

          <Box display="flex" justifyContent="center" mt={6}>
            <Button
              type="submit"
              size="lg"
              width="150px"
              borderRadius="10px"
              bgColor="blue.200"
              padding="10px"
              display="inline-block"
              textAlign="center"
              fontSize="lg"
              fontWeight="bold"
              _hover={{
                transform: "scale(1.05)",
                transition: "all 0.5s ease",
              }}
            >
              Add workshop
            </Button>
          </Box>
        </VStack>
      </form>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>View Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            justifyContent="center"
            alignItems="center"
            p={0}
            maxHeight="80vh"
            overflowY="auto"
          >
            <Image
              src={selectedImage}
              alt="Selected Image"
              maxHeight="100%"
              maxWidth="100%"
              objectFit="contain"
            />
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AddWorkshop;
