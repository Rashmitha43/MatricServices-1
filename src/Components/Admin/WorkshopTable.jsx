import React, { useState,  useEffect } from "react";
import { EditIcon, DeleteIcon, ViewIcon } from "@chakra-ui/icons";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  IconButton,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  delWorkshopId,
  getWorkshop,
  getworkshopRegister,
} from "../../Redux/app/action";

const WorkshopTable = () => {

  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {workshopadd}=useSelector(state=>state.app)
  const [registrations, setRegistrations] = useState([]);
  const [viewReg, setViewReg] = useState(null);
  const [deletestatus,setDeletestatus]=useState(false)
  useEffect(() => {
    dispatch(getWorkshop())
      .then((res) => {
        console.log(res.payload);
      })
      .catch((err) => {
        console.log("error", err.message);
      });
    dispatch(getworkshopRegister())
      .then((res) => {
        setRegistrations(res.payload);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  }, [dispatch,deletestatus]);

 

  const handleView = (workshop) => {
    setSelectedWorkshop(workshop);
  };

  const handleEdit = (workshop) => {
    navigate(`/admin/workshoptable/editworkshop/${workshop._id}`);
  };


  const handleDelete = (workshop) => {
 
    dispatch(delWorkshopId(workshop?._id))
    .then((res)=>{
      alert("successfully deleted")
      setDeletestatus(true)

    })
    .catch((err)=>{
      console.log("error:",err)
    })
  };

  return (
    <Box bg="white" shadow="lg" rounded="lg" overflow="auto" borderWidth="1px">
      <Table
        variant="simple"
        colorScheme="gray"
        size="md"
        minW="100%"
        textAlign="left"
      >
        <Thead bg="gray.100">
          <Tr>
            <Th py={4} px={6} textAlign="center">
              #
            </Th>
            <Th py={4} px={6}>
              Workshop Name
            </Th>
            <Th py={4} px={6}>
              Description
            </Th>
            <Th py={4} px={6}>
              Criteria
            </Th>
            <Th py={4} px={6}>
              Location
            </Th>
            <Th py={4} px={6}>
              Date
            </Th>
            <Th py={4} px={6}>
              Time
            </Th>
            <Th py={4} px={6} whiteSpace="nowrap">
              Phone Number
            </Th>
            <Th py={4} px={6}>
              Email
            </Th>
            <Th py={4} px={6} textAlign="center">
              Registrations
            </Th>
            <Th py={4} px={6} textAlign="center">
              Actions
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {workshopadd?.map((workshop, index) => (
            
              <Tr key={workshop._id}>
                <Td py={4} px={6} textAlign={"center"}>
                  {index + 1}
                </Td>
                <Td py={4} px={6}>
                  {workshop.topic}
                </Td>
                <Td py={4} px={6}>
                  {workshop.desc.substring(0, 20)}...
                </Td>
                <Td py={4} px={6}>
                  {workshop.criteria}
                </Td>
                <Td py={4} px={6}>
                  {workshop.venue}
                </Td>
                <Td py={4} px={6}>
                  {workshop.date}
                </Td>
                <Td py={4} px={6}>
                  {workshop.time}
                </Td>
                <Td py={4} px={6}>
                  {workshop.contact}
                </Td>
                <Td py={4} px={6}>
                  {workshop.email}
                </Td>
                <Td py={4} px={6} textAlign={"center"}>
                  {registrations?.length > 0
                    ? registrations?.filter(
                        (reg) => reg.eventId?._id === workshop?._id
                      ).length
                    : 0}
                </Td>
                <Td
                  py={6}
                  px={6}
                  display="flex"
                  justifyContent="center"
                  my="auto"
                >
                  <IconButton
                    icon={<EditIcon />}
                    colorScheme="blue"
                    variant="solid"
                    size="xl"
                    aria-label="Edit workshop"
                    mr={4}
                    borderRadius="md"
                    boxShadow="md"
                    _hover={{ bg: "blue.50" }}
                    onClick={() => handleEdit(workshop)}
                  />
                  <IconButton
                    icon={<DeleteIcon />}
                    colorScheme="red"
                    variant="solid"
                    size="xl"
                    aria-label="Delete workshop"
                    mr={4}
                    borderRadius="md"
                    boxShadow="md"
                    _hover={{ bg: "red.50" }}
                    onClick={() => handleDelete(workshop)}
                  />
                  <IconButton
                    icon={<ViewIcon />}
                    colorScheme="green"
                    variant="solid"
                    size="xl"
                    aria-label="View workshop"
                    borderRadius="md"
                    boxShadow="md"
                    _hover={{ bg: "green.50" }}
                    onClick={() => handleView(workshop)}
                  />
                </Td>
              </Tr>
            
          ))}
        </Tbody>
      </Table>

      {selectedWorkshop && (
        <>
          <Box
            position="fixed"
            w={"100%"}
            inset={0}
            height={"100vh"}
            bgColor={"rgb(0,0,0,0.6)"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Box
              position="absolute"
              right={{ base: "2%", md: "5%" }}
              top={{ base: "2%", md: "5%" }}
              bg="white"
              p="10px"
              borderRadius={"50%"}
              boxShadow={"md"}
              fontSize="1rem"
              color="black"
              onClick={() => setSelectedWorkshop(null)}
              cursor="pointer"
            >
              <ImCross />
            </Box>
            <Box
              bgColor={"white"}
              w={"auto"}
              py={"10"}
              px={"20"}
              pl="10"
              borderRadius={"10px"}
            >
              <VStack align={"stretch"} w="100%" spacing={5}>
                <Text>
                  <Box as="span" fontWeight={700} fontSize={"1.2rem"} mr={2}>
                    Workshop Topic:
                  </Box>
                  {selectedWorkshop.topic}
                </Text>
                <Text>
                  <Box as="span" fontWeight={700} fontSize={"1.2rem"} mr={2}>
                    Description:
                  </Box>
                  {selectedWorkshop.desc}
                </Text>
                <Text>
                  <Box as="span" fontWeight={700} fontSize={"1.2rem"} mr={2}>
                    Venue:
                  </Box>
                  {selectedWorkshop.venue}
                </Text>
                <Text>
                  <Box as="span" fontWeight={700} fontSize={"1.2rem"} mr={2}>
                    Date:
                  </Box>
                  {selectedWorkshop.date}
                </Text>
                <Text>
                  <Box as="span" fontWeight={700} fontSize={"1.2rem"} mr={2}>
                    Time:
                  </Box>
                  {selectedWorkshop.time}
                </Text>
                <Text>
                  <Box as="span" fontWeight={700} fontSize={"1.2rem"} mr={2}>
                    Eligibility Criteria:
                  </Box>
                  {selectedWorkshop.criteria}
                </Text>
                <Text>
                  <Box as="span" fontWeight={700} fontSize={"1.2rem"} mr={2}>
                    Email:
                  </Box>
                  {selectedWorkshop.email}
                </Text>
                <Text>
                  <Box as="span" fontWeight={700} fontSize={"1.2rem"} mr={2}>
                    Contact:
                  </Box>
                  {selectedWorkshop.contact}
                </Text>
                <Text>
                  <Box as="span" fontWeight={700} fontSize={"1.2rem"} mr={2}>
                    Registrations:
                  </Box>
                  {registrations?.length > 0
                    ? registrations.filter(
                        (reg) => reg.eventId?._id === selectedWorkshop?._id
                      ).length
                    : 0}
                </Text>
                {registrations &&
                registrations.length > 0 &&
                selectedWorkshop ? (
                  registrations.filter(
                    (reg) => reg.eventId?._id === selectedWorkshop?._id
                  ).length > 0 ? (
                    <Box
                      w="max-content"
                      p="10px 20px"
                      bg="#02e8a7"
                      borderRadius="10px"
                      cursor="pointer"
                      onClick={() => setViewReg(selectedWorkshop)}
                    >
                      View Registrations
                    </Box>
                  ) : null
                ) : null}
              </VStack>
            </Box>
          </Box>
        </>
      )}

      {viewReg && (
        <>
          <Box
            position="fixed"
            w={"100%"}
            inset={0}
            height={"100vh"}
            bgColor="white"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            p="20px"
            overflow={"scroll"}
          >
            <Box
              position="absolute"
              right={{ base: "2%", md: "5%" }}
              top={{ base: "2%", md: "5%" }}
              bg="white"
              p="10px"
              borderRadius={"50%"}
              boxShadow={"md"}
              fontSize="1rem"
              color="black"
              onClick={() => setViewReg(null)}
              cursor="pointer"
            >
              <ImCross />
            </Box>

            <VStack w="100%" h="100%" spacing={4}>
              {registrations.length > 0 &&
                registrations
                  ?.filter((reg) => reg.eventId?._id === viewReg?._id)
                  ?.map((reg, index) => (
                    <>
                      <VStack align={"stretch"} spacing={0} w="100%">
                        <Text
                          fontWeight={600}
                          fontSize={"1.2rem"}
                        >{`Registration ${index + 1}`}</Text>
                        <Text>
                          <Box as="span" fontWeight={500} mr="5px">
                            Name:
                          </Box>
                          {reg.name}
                        </Text>
                        <Text>
                          <Box as="span" fontWeight={500} mr="5px">
                            Phone:
                          </Box>
                          {reg.phone}
                        </Text>
                        <Text>
                          <Box as="span" fontWeight={500} mr="5px">
                            Email:
                          </Box>
                          {reg.email}
                        </Text>
                        <Text>
                          <Box as="span" fontWeight={500} mr="5px">
                            College:
                          </Box>
                          {reg.collageOrInstitute}
                        </Text>
                        <Text>
                          <Box as="span" fontWeight={500} mr="5px">
                            Enquiry:
                          </Box>
                          {reg.askYourQuestions}
                        </Text>
                      </VStack>
                      <Box w="100%" h="1px" bg="gray"></Box>
                    </>
                  ))}
            </VStack>
          </Box>
        </>
      )}
    </Box>
  );
};

export default WorkshopTable;
