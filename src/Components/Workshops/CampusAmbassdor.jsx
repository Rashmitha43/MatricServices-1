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
import {  postCampusAmbReg } from "../../Redux/app/action";
const CampusAmbassdor = () => {
  const [form, setForm] = useState(false);

  const dispatch = useDispatch();


  const init = {
    name: "",
    phone: "",
    email: "",
    collageOrInstitute: "",
    areaOfStudy: "",
    knowAboutMatricService: "",
    whyBecAmb: "",
  };
  const [formdata, setFormdata] = useState(init);
  const handleFormdata = (event) => {
    const { name, value } = event.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const toggleform = () => {
    setForm(!form);
    if (form === true) {
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflowY = "hidden";
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if(!formdata.name || !formdata.phone || !formdata.email || !formdata.collageOrInstitute || !formdata.areaOfStudy  || !formdata.knowAboutMatricService || !formdata.whyBecAmb){
      alert("Please Fill the Input Fields")
    }
    else{
      dispatch(postCampusAmbReg(formdata))
      .then(res=>{
          alert("Form Submitted");
          setForm(init)
      })
      .catch(err=>{
        console.log('error',err.message)
      })
    }

    setFormdata(init);
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
              w={{ base: "90%", md: "70%", lg: "50%",xl:'40%' }}
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
                    name="name"
                    placeholder="Name*"
                    size={{base:'md',md:'lg'}}
                    fontSize={{base:'0.9rem',md:'1rem'}}
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
                      type="text"
                      name="phone"
                      placeholder="Phone*"
                      size={{base:'md',md:'lg'}}
                    fontSize={{base:'0.9rem',md:'1rem'}}
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
                      size={{base:'md',md:'lg'}}
                    fontSize={{base:'0.9rem',md:'1rem'}}
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
                      name="areaOfStudy"
                      placeholder="Area of Study*"
                      size={{base:'md',md:'lg'}}
                    fontSize={{base:'0.9rem',md:'1rem'}}
                      value={formdata.areaOfStudy}
                      w="100%"
                      onChange={handleFormdata}
                      border={`2px solid ${theme.colors.thirty}`}
                      p="10px"
                    />
                    <Input
                      type="text"
                      name="collageOrInstitute"
                      placeholder="Name of College/Institute*"
                      size={{base:'md',md:'lg'}}
                    fontSize={{base:'0.9rem',md:'1rem'}}
                      value={formdata.collageOrInstitute}
                      w="100%"
                      onChange={handleFormdata}
                      border={`2px solid ${theme.colors.thirty}`}
                      p="10px"
                    />
                  </HStack>

                  <Textarea
                    placeholder="How did you get to know about Matric Services?"
                    size={{base:'sm',md:'lg'}}
                    fontSize={{base:'0.9rem',md:'1rem'}}
                    border={`2px solid ${theme.colors.thirty}`}
                    style={{ width: "100%", padding: "10px" }}
                    onChange={handleFormdata}
                    name='knowAboutMatricService'
                    value={formdata.knowAboutMatricService}
                  />

                  <Textarea
                    placeholder="Why do you wanna become a campus Ambassador?"
                    border={`2px solid ${theme.colors.thirty}`}
                    style={{ width: "100%", padding: "10px" }}
                    size={{base:'sm',md:'lg'}}
                    fontSize={{base:'0.9rem',md:'1rem'}}
                    name='whyBecAmb'
                    value={formdata.whyBecAmb}
                    onChange={handleFormdata}

                  ></Textarea>

                  <Input
                    type="submit"
                    p="10px 30px"
                    bg={theme.colors.ten}
                    color="white"
                    borderRadius="15px"
                    cursor="pointer"
                    size={{base:'md',md:'lg'}}
                    fontSize={{base:'0.9rem',md:'1rem'}}
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
