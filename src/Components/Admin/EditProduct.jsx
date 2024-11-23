import React, { useEffect, useState } from "react";
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
  Stack,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import theme from "../../theme";
import { getProducts, postProducts } from "../../Redux/app/action";
import { useDispatch, useSelector } from "react-redux";
import { CloseIcon } from "@chakra-ui/icons";
import { getProductsbyId } from "../../Redux/app/action";
import { useParams } from "react-router-dom";
import { patchProduct } from "../../Redux/app/action";
const EditProduct = () => {
  const dispatch=useDispatch();
  const {productsingledata}=useSelector(state=>state.app)
  const id=useParams()

  useEffect(()=>{
      dispatch(getProductsbyId(id.productId))
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log("error:",err.message)
      })
    
  
    
  },[dispatch,id.productId])


  const init={
    title: "",
    desc: "",
    price: "",
    productCode: "",
    img: [],
  }
  const [formData, setFormData] = useState(init);

  useEffect(()=>{
   if(productsingledata){
    setFormData({
      title:productsingledata.title || "",
      desc:productsingledata.desc || "",
      price:productsingledata.price || "",
      productCode:productsingledata.productCode|| "",
      img:productsingledata.img||[]
    })
   }
  },[productsingledata])
  console.log(productsingledata)

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const fileArray = Array.from(files);
      console.log(fileArray);
      setFormData((prev) => ({
        ...prev,
        [name]: prev[name] ? [...prev[name], ...fileArray] : [...fileArray],
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };




  const handleimageInput = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.name = "img";
    input.addEventListener("change", handleInputChange);
    input.click();
  };




  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.desc ||
      !formData.price ||
      !formData.productCode 
      
    ) {
      alert("Please Fill all the Input Fields");
    } else {
      
      dispatch(patchProduct(formData,productsingledata._id))
      .then((res) => {
        alert("successfully submitted");
        setFormData(init)
        
      })
      .catch((err) => {
        console.log("error", err.message);
      });
    }
  };
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
       
      >
        UPDATE A PRODUCT
      </Text>

      <form onSubmit={handleSubmit}>
        <VStack spacing={8} align="stretch">
          <FormControl isRequired>
            <FormLabel fontSize="lg" fontWeight="medium">
              Product Name
            </FormLabel>
            <Input
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter your product name"
              size="lg"
              {...inputStyles}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize="lg" fontWeight="medium">
              Product Description
            </FormLabel>
            <Textarea
              name="desc"
              value={formData.desc}
              onChange={handleInputChange}
              placeholder="Describe the project"
              size="lg"
              {...inputStyles}
            />
          </FormControl>

          <HStack spacing={6} width="100%">
            <FormControl isRequired width="50%">
              <FormLabel fontSize="lg" fontWeight="medium">
               Price
              </FormLabel>
              <Input
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Price of the Product"
                size="lg"
                {...inputStyles}
              />
            </FormControl>

            <FormControl isRequired width="50%">
              <FormLabel fontSize="lg" fontWeight="medium">
                Product Code
              </FormLabel>
              <Input
                name="productCode"
                value={formData.productCode}
                onChange={handleInputChange}
                placeholder="Your Products code"
                size="lg"
                {...inputStyles}
              />
            </FormControl>
          </HStack>

          <FormControl>
            <Stack w={"100%"}>
              <Box
                display={"flex"}
                justifyContent={"left"}
                flexDirection={'column'}
                gap='10px'
              >
                <Box>
                  <FormLabel fontSize="lg" fontWeight="medium">
                    Upload image
                  </FormLabel>
                </Box>
                <Box display={"flex"} alignItems={"start"} flexDirection={'column'} gap='10px'>
                  <input
                    type="file"
                    multiple
                    name="img"
                    onChange={handleInputChange}
                    style={{ display: "none" }}
                  />
                  <Button
                    onClick={handleimageInput}
                    bg='#1A202C'
                    color='white'
                    p='5px 10px'
                    borderRadius={'5px'}
                  >
                    Add Images
                  </Button>

                  {formData.img?.length > 0 && (
                    <HStack gap={"1rem"}>
                      {formData?.img?.map((image, index) => (
                        <Box key={index} display={"flex"} alignItems={"start"}>
                          
                          <Box w='100px' h='100px' mt='10px'><Image src={image} w='100%' h='100%'/></Box>
                          <IconButton
                            aria-label="Remove Image"
                            fontSize={'0.8rem'}
                            icon={<CloseIcon />}
                            onClick={() => {
                              setFormData((prev) => ({
                                ...prev,
                                img: prev.img.filter((_, i) => i !== index),
                              }));
                            }}
                          />
                        </Box>
                      ))}
                    </HStack>
                  )}
                </Box>
              </Box>
            </Stack>
          </FormControl>

          <Box display="flex" justifyContent="center" mt={6}>
            <Button
              type="submit"
              size="lg"
              width="max-content"
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
              Update Product
            </Button>
          </Box>
        </VStack>
      </form>

  
    </Box>
  );
};

export default EditProduct;
