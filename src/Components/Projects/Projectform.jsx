import { Box, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import theme from "../../theme";
import { useDispatch } from "react-redux";
import { postContactInfo } from "../../Redux/app/action";
const Projectform = () => {

  const dispatch = useDispatch();


  const init = {
    Name: "",
    Phone: "",
    Email: "",
    CollegeOrInstitute: "",
    AskYourQuestions: "",
  };
  const [formdata, setFormdata] = useState(init);


 
  const handleFormdata = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formdata.Name || !formdata.Phone || !formdata.Email || !formdata.CollegeOrInstitute || !formdata.AskYourQuestions) {
      alert('Please Fill the Input fields');
      return
    } 

    const formBody = new URLSearchParams();
    for (const key in formdata) {
      formBody.append(key, formdata[key]);
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbwER_t-GGyRNq40gA5UPl6PT9x7sVmWCLZWbi3QeBYvEVWlOKdmcwxJTQZY77JcjMLDBg/exec",
      {
        method: "POST",
        body: formBody,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      }
    )
      .then((response) => response.text())
      .then((data) => {
        if (data.includes("successfully sent")) {
          setFormdata({ Name: "",Phone:"", Email: "", AskYourQuestions: "", CollegeOrInstitute: "" });
        } else {
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

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
                name="Name"
                placeholder="Name"
                value={formdata.Name}
                w="100%"
                onChange={handleFormdata}
                border={`2px solid ${theme.colors.thirty}`}
                p="10px"
              />

              <Input
                type="text"
                name="Phone"
                placeholder="Phone"
                value={formdata.Phone}
                w="100%"
                onChange={handleFormdata}
                border={`2px solid ${theme.colors.thirty}`}
                p="10px"
              />

              <Input
                type="text"
                name="Email"
                placeholder="Email"
                value={formdata.Email}
                w="100%"
                onChange={handleFormdata}
                border={`2px solid ${theme.colors.thirty}`}
                p="10px"
              />

              <Input
                type="text"
                name="CollegeOrInstitute"
                placeholder="College/Institute"
                value={formdata.CollegeOrInstitute}
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
                name="AskYourQuestions"
                value={formdata.AskYourQuestions}
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
