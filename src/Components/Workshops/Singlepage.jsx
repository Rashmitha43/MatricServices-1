import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  StackDivider,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import theme from "../../theme";
import { GrWorkshop } from "react-icons/gr";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getworkshopRegister } from "../../Redux/app/action";
import { RxCross2 } from "react-icons/rx";
import { Heading } from "lucide-react";
import { useParams } from "react-router-dom";
import { getWorkshopbyId } from "../../Redux/app/action";
import { postworkshopRegister } from "../../Redux/app/action";

const Singlepage = () => {
  const dispatch = useDispatch();
  const { workshopsingledata } = useSelector((state) => state.app);
  const eventid = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const init = {
    name: "",
    phone: "",
    email: "",
    collageOrInstitute: "",
    areaOfStudy: "",
    askYourQuestions: "",
    eventId: eventid.id,
  };
  useEffect(() => {
    dispatch(getWorkshopbyId(eventid.id))
      .then((res) => {
        console.log(res.payload);
      })
      .catch((err) => {
        console.log("error", err.message);
      });
  }, [dispatch, eventid.id]);

  const [photoIndex, setPhotoIndex] = useState(-1);
  const [form, setForm] = useState(false);
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

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata((prev) => ({
      ...prev,
      eventId: eventid.id,
    }));
    console.log(formdata);
    if (
      !formdata.name ||
      !formdata.areaOfStudy ||
      !formdata.askYourQuestions ||
      !formdata.collageOrInstitute ||
      !formdata.email ||
      !formdata.phone ||
      !formdata.eventId
    ) {
      alert("please fill all the required fields");
      return;
    } else if (!validatePhone(formdata.phone)) {
      alert("Phone number must be 10 digits.");
      return;
    } else if (!validateEmail(formdata.email)) {
      alert("Please enter a valid email address.");
      return;
    } else {
      setIsSubmitting(true);
      dispatch(postworkshopRegister(formdata))
        .then((res) => {
          // setFormdata(init);
        })
        .catch((err) => {
          console.log("error:", err);
        });

      const formBody = new URLSearchParams();
      const googleFormdata = [];
      googleFormdata.Name = formdata.name;
      googleFormdata.Phone = formdata.Phone;
      googleFormdata.Email = formdata.email;
      googleFormdata.CollegeOrInstitute = formdata.collageOrInstitute;
      googleFormdata.AreaOfStudy = formdata.areaOfStudy;
      googleFormdata.AskYourQuestions = formdata.askYourQuestions;
      googleFormdata.EventId = formdata.eventId;
      for (const key in googleFormdata) {
        formBody.append(key, googleFormdata[key]);
      }
      fetch(
        "https://script.google.com/macros/s/AKfycbzx_8EVKVZDHsa_mRLP1buLtcBws2FvEGG6YZfir0FeywGCNhiYaFxieo_RPPcoJKEFrg/exec",
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
              name: "",
              phone: "",
              email: "",
              collageOrInstitute: "",
              areaOfStudy: "",
              askYourQuestions: "",
              eventId: eventid.id,
            });
            setFormdata(init);
          } else {
            alert("Failed to submit the form. Please try again.");
          }
        })
        .catch((error) => {
          setIsSubmitting(false);
          console.error("Error:", error);
          alert("An error occurred. Please try again.");
        });
    }
  };
  const eventEndDate = new Date(workshopsingledata.todate); 
  const currentDate = new Date();
  const isEventover=currentDate>eventEndDate
  return (
    <>
      <Box
        maxW="1200px"
        w="95%"
        display={"flex"}
        justifyContent={"flex-start"}
        flexDirection={{ base: "column", md: "row" }}
        fontFamily={theme.fonts.body}
        mx="auto"
        gap="2%"
        my={{ base: "3rem", md: "4rem" }}
      >
        <Box
          w={{ base: "100%", md: "60%" }}
          boxShadow={{ base: "sm", md: "lg" }}
        >
          <VStack spacing={"8"} align={"center"} p="20px">
            <Box w={{ base: "100%", md: "80%" }} h="300px">
              {workshopsingledata?.img && workshopsingledata?.img.length > 0 ? (
                <Image
                  w="100%"
                  h="100%"
                  src={workshopsingledata.img[0]}
                  objectFit={"contain"}
                />
              ) : (
                <Text>No images available</Text>
              )}
            </Box>
            <Box textAlign={"justify"}>
              <Text style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
                {workshopsingledata.desc}
              </Text>
            </Box>
            <HStack w="100%" justifyContent={"center"}>
              <Button
                bg={theme.colors.ten}
                w={{ base: "40%", md: "30%", lg: "25%" }}
                p={{ base: "5px 15px", md: "10px 30px" }}
                color="white"
                borderRadius={{ base: "7px", md: "15px" }}
                onClick={toggleform}
                isDisabled={isEventover}
                _disabled={{color:'#d7d7d7',bg:theme.colors.thirty,cursor:"no-drop"}}
              >
                Register
              </Button>
            </HStack>
          </VStack>
        </Box>
        <Box w={{ base: "100%", md: "38%" }} boxShadow={"lg"}>
          <VStack
            spacing={"5"}
            align={"stretch"}
            p="20px"
            divider={<StackDivider borderColor="gray.200" />}
          >
            {/* heading */}
            <HStack
              fontSize={{ base: "1rem", md: "1.2rem" }}
              fontWeight={"500"}
            >
              <Box>
                <GrWorkshop />
              </Box>{" "}
              <Text>workshop details</Text>
            </HStack>

            <Box fontWeight={"500"}>
              <Box as="span" fontWeight={"600"} fontSize={"1.1rem"} mr='5px'>
                Topic:
              </Box>
              {workshopsingledata?.topic}
            </Box>
            <Box fontWeight={"500"}>
              <Box as="span" fontWeight={"600"} fontSize={"1.1rem"} mr='5px'>
                Location:
              </Box>
              {workshopsingledata?.venue}
            </Box>
            <Box fontWeight={"500"}>
              <Box as="span" fontWeight={"600"} fontSize={"1.1rem"} mr='5px'>
                From:
              </Box>
              {workshopsingledata?.fromdate}
            </Box>
            <Box fontWeight={"500"}>
              <Box as="span" fontWeight={"600"} fontSize={"1.1rem"} mr='5px'>
                To:
              </Box>
              {workshopsingledata?.todate}
            </Box>
            <Box fontWeight={"500"}>
              <Box as="span" fontWeight={"600"} fontSize={"1.1rem"} mr='5px'>
                Eligibility Criteria:
              </Box>
              {workshopsingledata?.criteria}
            </Box>
            {/* contact info */}
            <HStack
              fontSize={{ base: "1rem", md: "1.2rem" }}
              fontWeight={"500"}
            >
              <Box>
                <RiContactsBook2Fill />
              </Box>{" "}
              <Text>Contact Info</Text>
            </HStack>
            <HStack>
              <Box fontWeight={"500"}>
                <FaPhoneAlt />
              </Box>{" "}
              <a href={`tel:+91${workshopsingledata.contact}`}>
                <Text>{workshopsingledata?.contact}</Text>
              </a>
            </HStack>
            <HStack>
              <Box fontWeight={"500"}>
                <IoMdMail />
              </Box>{" "}
              <a href={`mailto:${workshopsingledata.email}`}>
                <Text>{workshopsingledata?.email}</Text>
              </a>
            </HStack>
          </VStack>
        </Box>
      </Box>

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
          Related Images
        </Text>

        <Box w="80px" h="3px" bg={theme.colors.ten} borderRadius={"20px"}></Box>

        <SimpleGrid columns={[2, 2, 3, 3]} spacing={5} mt={10}>
          {workshopsingledata.img?.map((image, index) => (
            <Box
              cursor="pointer"
              key={index}
              w="100%"
              overflow={"hidden"}
              h={{ base: "150px", md: "200px", lg: "250px" }}
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
              position={"relative"}
              onClick={() => setPhotoIndex(index)}
              _hover={{ transition: "all 0.5s ease", transform: "scale(1.03)" }}
            >
              <Image
                src={image}
                objectFit="cover"
                width="100%"
                height={"100%"}
                alt={`Gallery Image ${index + 1}`}
              />
            </Box>
          ))}
        </SimpleGrid>
        <Modal
          isOpen={photoIndex >= 0}
          onClose={() => setPhotoIndex(-1)}
          size="full"
          bg="black"
          zIndex={5}
        >
          <ModalOverlay bg="rgba(0, 0, 0, 0.8)" />
          <ModalContent>
            <ModalBody
              display="flex"
              alignItems="center"
              justifyContent="center"
              h="100%"
            >
              {photoIndex >= 0 && (
                <Box
                  display={"flex"}
                  alignItems={"flex-start"}
                  justifyContent={"center"}
                  gap={{ base: "5px", md: "10px", lg: "20px" }}
                >
                  <Image
                    src={workshopsingledata.img[photoIndex]}
                    objectFit="cover"
                    width={{ base: "80%", md: "90%", lg: "100%" }}
                    maxH={{ base: "50vh", md: "70vh" }}
                    alt={`Full Image ${photoIndex + 1}`}
                  />
                  <ModalCloseButton
                    fontSize={{ base: "1rem", md: "1.5rem", lg: "2rem" }}
                    color="white"
                    zIndex={"overlay"}
                  />
                </Box>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>

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
                    <Text
                      fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2rem" }}
                      fontWeight={"500"}
                    >
                      Register for Workshop
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
                    <HStack
                      w="100%"
                      flexDirection={{ base: "column", md: "row" }}
                    >
                      <Input
                        type="text"
                        name="areaOfStudy"
                        placeholder="Area of Study*"
                        size={{ base: "md", md: "lg" }}
                        fontSize={{ base: "0.9rem", md: "1rem" }}
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
                        size={{ base: "md", md: "lg" }}
                        fontSize={{ base: "0.9rem", md: "1rem" }}
                        value={formdata.collageOrInstitute}
                        w="100%"
                        onChange={handleFormdata}
                        border={`2px solid ${theme.colors.thirty}`}
                        p="10px"
                      />
                    </HStack>

                    <Textarea
                      placeholder="Any queries regarding registration?, please post here..."
                      size={{ base: "sm", md: "lg" }}
                      fontSize={{ base: "0.9rem", md: "1rem" }}
                      border={`2px solid ${theme.colors.thirty}`}
                      style={{ width: "100%", padding: "10px" }}
                      name="askYourQuestions"
                      value={formdata.askYourQuestions}
                      onChange={handleFormdata}
                    />

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
      </Box>
    </>
  );
};

export default Singlepage;
