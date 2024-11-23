import {
  Box,
  Heading,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import theme from "../../theme";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { postCampusAmbReg } from "../../Redux/app/action";
const CampusAmbassdor = () => {
  const [form, setForm] = useState(false);

  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const init = {
    Name: "",
    Phone: "",
    Email: "",
    CollegeOrInstitute: "",
    AreaOfStudy: "",
    KnowAboutMatricService: "",
    WhyBecAmb: "",
  };
  const [formdata, setFormdata] = useState(init);
  const handleFormdata = (event) => {
    const { name, value } = event.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };
  const toggleform = () => {
    setForm(!form);
    if (form === true) {
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflowY = "hidden";
    }
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   if(!formdata.name || !formdata.Phone || !formdata.Email || !formdata.CollegeOrInstitute || !formdata.AreaOfStudy  || !formdata.KnowAboutMatricService || !formdata.WhyBecAmb){
  //     alert("Please Fill the Input Fields")
  //   }
  //   else{
  //     dispatch(postCampusAmbReg(formdata))
  //     .then(res=>{
  //         alert("Form Submitted");
  //         setForm(init)
  //     })
  //     .catch(err=>{
  //       console.log('error',err.message)
  //     })
  //   }
  //   setFormdata(init);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formdata.Name ||
      !formdata.Phone ||
      !formdata.Email ||
      !formdata.CollegeOrInstitute ||
      !formdata.AreaOfStudy ||
      !formdata.KnowAboutMatricService ||
      !formdata.WhyBecAmb
    ) {
      alert("Please Fill the Input Fields");
      return;
    }
    if (!validatePhone(formdata.Phone)) {
      alert("Phone number must be 10 digits.");
      return;
    }

    if (!validateEmail(formdata.Email)) {
      alert("Please enter a valid email address.");
      return;
    }
    setIsSubmitting(true);
    const formBody = new URLSearchParams();
    for (const key in formdata) {
      formBody.append(key, formdata[key]);
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbygt9VIadGPg9CC4nS4i2BLrSNUvvZtFuOgkJIrAFI-UAsP9a0LDOfpgNfasp-OF7pFDg/exec",
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
        setIsSubmitting(false);
        if (data.includes("successfully sent")) {
          alert("Form successfully submitted!");
          setFormdata({
            Name: "",
            Phone: "",
            Email: "",
            CollegeOrInstitute: "",
            AreaOfStudy: "",
            KnowAboutMatricService: "",
            WhyBecAmb: "",
          });
        } else {
          alert("Failed to submit the form. Please try again.");
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <>
      <Box
        maxW="1200px"
        w="95%"
        display={"flex"}
        justifyContent={"flex-start"}
        flexDirection={"column"}
        fontFamily={theme.fonts.body}
        mx="auto"
        py={10}
      >
        <Text fontSize={{ base: "1.5rem", md: "2rem" }} fontWeight={"700"}>
          Campus Ambassador Program
        </Text>

        <VStack spacing={"8"} align="stretch" mt={5}>
          <Text fontSize={{ base: "1.1rem", md: "1.4rem" }}>
            Why become a Campus Ambassador?
          </Text>
          <ul style={{ lineHeight: "2rem", marginLeft: "20px" }}>
            <li>
              Get hands-on experience in event management and workshop
              coordination.
            </li>
            <li>Enhance your leadership and communication skills.</li>
            <li>
              Work closely with industry experts in trending technologies like
              IoT, VLSI, Android development, and more.
            </li>
            <li>
              Earn certificates and exclusive perks for your contributions.
            </li>
            <li>
              Network with professionals and fellow students across various
              campuses.
            </li>
          </ul>
          <Box
            p={{ base: "5px 15px", md: "10px 30px" }}
            w="max-content"
            bg={theme.colors.ten}
            color="white"
            cursor="pointer"
            borderRadius={{ base: "7px", md: "15px" }}
            onClick={toggleform}
          >
            Register Here
          </Box>
        </VStack>
      </Box>
      {form && (
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
                  <Heading
                    fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }}
                    fontWeight={"500"}
                  >
                    Campus Ambassdor Registration
                  </Heading>
                  <Input
                    type="text"
                    name="Name"
                    placeholder="Name*"
                    size={{ base: "md", md: "lg" }}
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                    value={formdata.Name}
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
                      type="text"
                      name="Phone"
                      placeholder="Phone*"
                      size={{ base: "md", md: "lg" }}
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      value={formdata.Phone}
                      w="100%"
                      onChange={handleFormdata}
                      border={`2px solid ${theme.colors.thirty}`}
                      p="10px"
                    />

                    <Input
                      type="text"
                      name="Email"
                      placeholder="Email*"
                      value={formdata.Email}
                      size={{ base: "md", md: "lg" }}
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      w="100%"
                      onChange={handleFormdata}
                      border={`2px solid ${theme.colors.thirty}`}
                      p="10px"
                    />
                  </HStack>
                  <HStack
                    w="100%"
                    flexDirection={{ base: "column", md: "row" }}
                  >
                    <Input
                      type="text"
                      name="AreaOfStudy"
                      placeholder="Area of Study*"
                      size={{ base: "md", md: "lg" }}
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      value={formdata.AreaOfStudy}
                      w="100%"
                      onChange={handleFormdata}
                      border={`2px solid ${theme.colors.thirty}`}
                      p="10px"
                    />
                    <Input
                      type="text"
                      name="CollegeOrInstitute"
                      placeholder="Name of College/Institute*"
                      size={{ base: "md", md: "lg" }}
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      value={formdata.CollegeOrInstitute}
                      w="100%"
                      onChange={handleFormdata}
                      border={`2px solid ${theme.colors.thirty}`}
                      p="10px"
                    />
                  </HStack>

                  <Textarea
                    placeholder="How did you get to know about Matric Services?"
                    size={{ base: "sm", md: "lg" }}
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                    border={`2px solid ${theme.colors.thirty}`}
                    style={{ width: "100%", padding: "10px" }}
                    onChange={handleFormdata}
                    name="KnowAboutMatricService"
                    value={formdata.KnowAboutMatricService}
                  />

                  <Textarea
                    placeholder="Why do you wanna become a campus Ambassador?"
                    border={`2px solid ${theme.colors.thirty}`}
                    style={{ width: "100%", padding: "10px" }}
                    size={{ base: "sm", md: "lg" }}
                    fontSize={{ base: "0.9rem", md: "1rem" }}
                    name="WhyBecAmb"
                    value={formdata.WhyBecAmb}
                    onChange={handleFormdata}
                  ></Textarea>

                  <Input
                    type="submit"
                    p="10px 30px"
                    bg={theme.colors.ten}
                    color="white"
                    borderRadius="15px"
                    cursor="pointer"
                    value={isSubmitting ? "Submitting..." : "Submit"}
                    disabled={isSubmitting}
                  />

                  {isSubmitting && (
                    <Text mt="1rem" color={theme.colors.ten}>
                      Submitting your form, please wait...
                    </Text>
                  )}
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
                onClick={toggleform}
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

export default CampusAmbassdor;
