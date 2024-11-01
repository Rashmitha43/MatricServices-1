import { Box, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import theme from "../../theme";
import { useDispatch } from "react-redux";
import { postContactInfo } from "../../Redux/app/action";
const Projectform = () => {

  const dispatch = useDispatch();


  const init = {
    name: "",
    phone: "",
    email: "",
    collageOrInstitute: "",
    askYourQuestions: "",
  };
  const [formdata, setFormdata] = useState(init);


 
  const handleFormdata = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit=(e)=>{
  e.preventDefault();
  
   if(!formdata.name || !formdata.phone || !formdata.email || !formdata.collageOrInstitute || !formdata.askYourQuestions){
    alert('Please Fill the Input Fields')
   }
   else{
     dispatch(postContactInfo(formdata))
     .then(res=>{
        alert("Form Submitted");
        setFormdata(init)
     })
     .catch(err=>{
       console.log('error',err.message)
     })
   }
   


  }

  const isFormFilled = () => {
    return Object.values(formdata).every((value) => value.trim() !== "");
  };
  return (
    <>
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
          Contact Us
        </Text>
        <Box w="80px" h="3px" bg={theme.colors.ten} borderRadius={"20px"}></Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          mt={5}
          bg={theme.colors.thirty}
          w={{ base: "100%", md: "60%" }}
          py="50px"
        >
          <form onSubmit={handleSubmit}>
            <VStack w="90%" mx="auto" gap={"1rem"}>
              <Input
                type="text"
                size={"lg"}
                name="name"
                placeholder="Name"
                value={formdata.name}
                w="100%"
                onChange={handleFormdata}
                border={`2px solid ${theme.colors.thirty}`}
                p="10px"
              />

              <Input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formdata.phone}
                w="100%"
                onChange={handleFormdata}
                border={`2px solid ${theme.colors.thirty}`}
                p="10px"
              />

              <Input
                type="text"
                name="email"
                placeholder="Email"
                value={formdata.email}
                w="100%"
                onChange={handleFormdata}
                border={`2px solid ${theme.colors.thirty}`}
                p="10px"
              />

              <Input
                type="text"
                name="collageOrInstitute"
                placeholder="College/Institute"
                value={formdata.collageOrInstitute}
                w="100%"
                onChange={handleFormdata}
                border={`2px solid ${theme.colors.thirty}`}
                p="10px"
              />

              <textarea
                placeholder="Curious about our projects? Ask your questions!"
                style={{ width: "100%", padding: "10px" }}
                rows="5"
                onChange={handleFormdata}
                name="askYourQuestions"
                value={formdata.askYourQuestions}
              ></textarea>

              <Input
                type="submit"
                p="10px 30px"
                bg={isFormFilled() ? theme.colors.thirty : theme.colors.ten}
                color="white"
                borderRadius="15px"
                cursor="pointer"
              />
            </VStack>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Projectform;
