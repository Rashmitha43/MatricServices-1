import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Select,
  Stack,
  Text,
  VStack,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@chakra-ui/react";
import dummyimg from "../../assets/Sliderimage1.png";
import theme from "../../theme";
import { useParams } from "react-router-dom";
import { getProductsbyId } from "../../Redux/app/action";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
const ProductSinglepage = () => {
  const dispatch = useDispatch();
  const id = useParams();
  const { productsingledata } = useSelector((state) => state.app);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [gateway, setGateway] = useState(false);
  let message = "";
  const init = {
    name: "",
    email: "",
    phone: "",
  };
  const [formdata, setFormData] = useState(init);

  useEffect(() => {
    dispatch(getProductsbyId(id.id))
      .then((res) => {
        console.log(res.payload);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  }, [dispatch, id.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formdata);
    if (!formdata.name || !formdata.email || !formdata.phone) {
      alert("please fill out all the fields");
    } else {
      if(open==='Whatsapp'){
        message = 
        `Hello! 👋
         Thank you for your purchase. Here are the details of your order:\n
         Name: ${formdata.name}
         Email: ${formdata.email}
         Phone: ${formdata.phone}
         Product: ${productsingledata.title}
         Price: ${productsingledata.price}/-
         We’ll process your order and keep you updated. If you have any questions, feel free to reach out!\n
         Best regards,
         MatricServices`;
        const whatsappMessage = `https://api.whatsapp.com/send?phone=919390555433&text=${encodeURIComponent(
          message
        )}`;
        window.open(whatsappMessage, "_blank")
        setOpen(false);
        setFormData(init);
      }else{
      
        message =`
         Hello! 👋
         Thank you for your purchase. Here are the details of your order:\n
         Name: ${formdata.name}
         Email: ${formdata.email}
         Phone: ${formdata.phone}
         Product: ${productsingledata.title}
         Price: ${productsingledata.price}/-
         We’ll process your order and keep you updated. If you have any questions, feel free to reach out!\n
         Best regards,
         MatricServices`;
        
          // Construct the mailto link for email
          const emailSubject = encodeURIComponent('Your Order Details from MatricServices');
          const emailBody = encodeURIComponent(message);
          const mailtoLink = `mailto:enquiry@matricservices.in?subject=${emailSubject}&body=${emailBody}`;
          // const mailtoLink = `mailto:pranesha182004@gmail.com?subject=${emailSubject}&body=${emailBody}`;
        
          // Open the default email client with the pre-filled email
          window.open(mailtoLink, '_blank');
        
          // Reset the form data
          setOpen(false);
          setFormData(init);
        
        
      }
      
    }
  };

  const handleOrderChange=(e)=>{
    setOpen(e.target.value);
    setGateway(false);
  }
  const handleFormdata = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Box
        maxW={"1000px"}
        width={"95%"}
        mx="auto"
        my={{ base: "3rem", md: "5rem" }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          w="100%"
          boxShadow={"lg"}
          align="center"
          spacing={5}
          padding={"20px"}
        >
          <Box
            w={{ base: "100%", md: "50%", lg: "49%" }}
            h={{ base: "300px", md: "400px", lg: "500px" }}
            position="relative"
            display={{ base: "flex", md: "column" }}
            justifyContent={{ base: "space-between", md: "none" }}
          >
            <VStack
              w="18%"
              display={{ base: "flex", md: "none" }}
              align="space-evenly"
              h="100%"
            >
              {productsingledata?.img?.map((img, ind) => (
                <>
                  <Box
                    h={{ base: "100%" }}
                    onClick={() => setIndex(ind)}
                    border={index === ind ? "1px solid black" : "none"}
                    p="2px"
                  >
                    <Image
                      w="100%"
                      h="100%"
                      src={img}
                      objectFit={"contain"}
                      cursor={"pointer"}
                    />
                  </Box>
                </>
              ))}
            </VStack>
            {productsingledata?.img && productsingledata?.img.length > 0 ? (
              <Image
                w={{ base: "80%", md: "100%" }}
                h="100%"
                src={productsingledata.img[index]}
                objectFit={"contain"}
              />
            ) : (
              <Text>No images available</Text>
            )}
          </Box>
          <Box w={{ base: "100%", md: "40%", lg: "50%" }}>
            <VStack align={"stretch"} spacing={5} w="100%">
              <Text fontSize={{ base: "1.2rem", md: "2rem" }}>
                {productsingledata.title}
              </Text>
              <Text fontSize={{ base: "0.9rem", md: "1rem" }}>
                {productsingledata.desc}
              </Text>
              <Text fontSize={{ base: "1.2rem", md: "2rem" }} color="green">
                Rs:{productsingledata.price}/-
              </Text>
              <Box
                w="100%"
                letterSpacing={"2px"}
                bg="black"
                color="white"
                p="10px 20px"
                textAlign={"center"}
                cursor="pointer"
                onClick={() => setGateway(true)}
              >
                Place Order
              </Box>

              <HStack w="100%" Spacing={3} mt="auto">
                {productsingledata?.img?.map((img, ind) => (
                  <>
                    <Box
                      h={{ base: "0px", md: "80px", lg: "100px", xl: "120px" }}
                      onClick={() => setIndex(ind)}
                      border={index === ind ? "1px solid black" : "none"}
                      p="2px"
                    >
                      <Image
                        w="100%"
                        h="100%"
                        src={img}
                        cursor={"pointer"}
                        objectFit={"contain"}
                      />
                    </Box>
                  </>
                ))}
              </HStack>
            </VStack>
          </Box>
        </Stack>
      </Box>

      {gateway && (
        <>
          <Box
            position="fixed"
            w={"100%"}
            height={"100%"}
            top="0"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            bg="rgb(0,0,0,0.9)"
            zIndex={99999}
          >  <select
           style={{ width: "90%", 
            maxWidth: "500px", 
            padding: "15px",
            fontSize: "lg", 
            cursor: "pointer", 
            position: "relative", 
            backgroundColor: "white", 
            color: "black",
            borderRadius: "10px", 
            ":hover": {
              backgroundColor: "gray.700", 
            },
            ":focus": {
              borderColor: theme.colors.ten,
              color:'white',
              outline: "none",
            },}}
            onChange={handleOrderChange}
          
        >
          <option value="" disabled selected>Order via</option>
          <option style={{ backgroundColor: theme.colors.thirty, color: 'black' }}>Whatsapp</option>
          <option style={{ backgroundColor: theme.colors.thirty, color: 'black' }}>Gmail</option>
        </select>
          </Box>
        </>
      )}
      {open && (
        <>
          <Box
            position="fixed"
            w={"100%"}
            height={"100%"}
            top="0"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            bg="rgb(0,0,0,0.9)"
            zIndex={99999}
          >
            <HStack
              spacing={"3"}
              align={"start"}
              w={{ base: "90%", md: "70%", lg: "50%", xl: "40%" }}
            >
              <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <VStack w="100%" mx="auto" gap={"1rem"} bg="white" p="20px">
                  <Text
                    fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }}
                    fontWeight={"500"}
                  >
                    Fill out the details for Placing order
                  </Text>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    size={{ base: "md", md: "lg" }}
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                    value={formdata.name}
                    w="100%"
                    onChange={handleFormdata}
                    border={`2px solid ${theme.colors.thirty}`}
                    p="10px"
                  />
                  <HStack
                    w="100%"
                    flexDirection={{ base: "column", md: "row" }}
                  >
                    <Input
                      type="number"
                      name="phone"
                      placeholder="Phone*"
                      size={{ base: "md", md: "lg" }}
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      value={formdata.phone}
                      w="100%"
                      onChange={handleFormdata}
                      border={`2px solid ${theme.colors.thirty}`}
                      p="10px"
                    />

                    <Input
                      type="text"
                      name="email"
                      placeholder="Email*"
                      value={formdata.email}
                      size={{ base: "md", md: "lg" }}
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      w="100%"
                      onChange={handleFormdata}
                      border={`2px solid ${theme.colors.thirty}`}
                      p="10px"
                    />
                  </HStack>

                  <Input
                    type="submit"
                    p="10px 30px"
                    bg={theme.colors.ten}
                    color="white"
                    borderRadius="15px"
                    cursor="pointer"
                    size={{ base: "md", md: "lg" }}
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                  />
                </VStack>
              </form>
              <Box
                position="absolute"
                right={{ base: "2%", md: "5%" }}
                top={{ base: "2%", md: "5%" }}
                bg="white"
                p={{ base: "2px", md: "5px" }}
                borderRadius={"50%"}
                boxShadow={"md"}
                fontSize={{ base: "1.2rem", md: "1.8rem" }}
                color="black"
                onClick={() => setOpen(false)}
                cursor="pointer"
              >
                <RxCross2 />
              </Box>
            </HStack>
          </Box>
        </>
      )}
    </>
  );
};

export default ProductSinglepage;
