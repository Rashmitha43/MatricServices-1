import { Box, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import theme from "../../theme";
const Projectform = () => {
  const init = {
    name: "",
    phone: "",
    email: "",
    doubts: "",
    college: "",
  };
  const [formdata, setFormdata] = useState(init);
  const [isLoading, setIsLoading] = useState(false); // State to track form submission state

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormFilled()) {
      alert("Please fill out all fields before submitting.");
      return; // Early return if form is not filled
    }

    setIsLoading(true); // Set loading state to indicate ongoing submission
    console.log("formatted data: " + JSON.stringify(formdata));

    try {
      const response = await fetch("https://matric-services-api.vercel.app/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
        // Send form data as JSON in the request body
      });

      if (!response.ok) {
        throw new Error("Failed to submit form data.");
      }

      console.log("Form data submitted successfully:", await response.json());
      setFormdata(init); // Reset form data after successful submission
    } catch (error) {
      console.error("Error submitting form data:", error);
      alert(
        "An error occurred while submitting the form. Please try again later."
      );
    } finally {
      setIsLoading(false); // Reset loading state after submission attempt
    }
  };
  const handleFormdata = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // const handleSubmit=(e)=>{
  // e.preventDefault()
  // console.log("Form data:",formdata);

  // setFormdata(init)

  // }
  // Function to check if all fields are filled
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
                name="college"
                placeholder="College/Institute"
                value={formdata.college}
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
                name="doubts"
                value={formdata.doubts}
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
