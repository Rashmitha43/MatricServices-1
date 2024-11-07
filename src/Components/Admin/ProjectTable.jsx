import React, { useState, useMemo } from "react";
import { EditIcon, DeleteIcon, ViewIcon } from "@chakra-ui/icons";
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  Flex,
  Heading,
  Divider,
} from "@chakra-ui/react";

const WorkshopRow = ({
  workshop,
  index,
  handleView,
  handleEdit,
  handleDelete,
}) => (
  <Tr
    _hover={{ bg: "gray.50" }}
    transition="background-color 0.3s ease"
    textAlign="left"
  >
    <Td py={6} px={6} textAlign="center">
      {index + 1}
    </Td>
    <Td py={6} px={6} maxW="200px" isTruncated fontWeight="medium">
      {workshop.name}
    </Td>
    <Td py={6} px={6} maxW="250px" color="gray.600" isTruncated>
      {workshop.description.split(" ").slice(0, 3).join(" ")}...
    </Td>
    <Td py={6} px={6} maxW="150px" isTruncated>
      {workshop.location}
    </Td>
    <Td py={6} px={6} fontWeight="bold" color="green.600">
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(workshop.amount)}
    </Td>
    <Td py={6} px={6}>
      {new Date(workshop.date).toLocaleDateString()}
    </Td>
    <Td py={6} px={6} whiteSpace="nowrap">
      {workshop.time}
    </Td>
    <Td py={6} px={6} maxW="200px" isTruncated whiteSpace="nowrap">
      {workshop.phoneNumber}
    </Td>
    <Td py={6} px={6}>
      {workshop.email}
    </Td>
    <Td py={6} px={6} textAlign="center">
      {workshop.registrations.length}
    </Td>
    <Td py={6} px={6} display="flex" justifyContent="center" my="auto">
      <IconButton
        icon={<EditIcon />}
        colorScheme="blue"
        variant="solid"
        size="xl"
        onClick={() => handleEdit(workshop)}
        aria-label="Edit workshop"
        mr={4}
        borderRadius="md"
        boxShadow="md" 
        _hover={{ bg: "blue.50" }} 
      />
      <IconButton
        icon={<DeleteIcon />}
        colorScheme="red"
        variant="solid"
        size="xl"
        onClick={() => handleDelete(workshop)}
        aria-label="Delete workshop"
        mr={4} 
        borderRadius="md"
        boxShadow="md"
        _hover={{ bg: "red.50" }}
      />
      <IconButton
        icon={<ViewIcon />}
        colorScheme="green"
        variant="solid"
        size="xl"
        onClick={() => handleView(workshop)}
        aria-label="View workshop"
        borderRadius="md"
        boxShadow="md"
        _hover={{ bg: "green.50" }} 
      />
    </Td>
  </Tr>
);

const WorkshopTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isRegOpen,
    onOpen: onRegOpen,
    onClose: onRegClose,
  } = useDisclosure();
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const workshops = useMemo(
    () => [
      {
        id: 1,
        name: "workshop Alpha",
        description: "Detailed description of workshop Alpha with more info.",
        location: "New York, USA",
        amount: 10000,
        date: "2024-10-01",
        time: "10:30 AM",
        phoneNumber: "123-456-7890",
        email: "alpha@example.com",
        registrations: [
          {
            userId: 101,
            name: "John Doe",
            email: "johndoe@example.com",
            registrationDate: "2024-09-20",
          },
          {
            userId: 102,
            name: "Jane Smith",
            email: "janesmith@example.com",
            registrationDate: "2024-09-22",
          },
        ],
      },
      {
        id: 2,
        name: "workshop Beta",
        description: "Detailed description of workshop Beta with more info.",
        location: "London, UK",
        amount: 20000,
        date: "2024-10-05",
        time: "2:00 PM",
        phoneNumber: "987-654-3210",
        email: "beta@example.com",
        registrations: [
          {
            userId: 103,
            name: "Alice Johnson",
            email: "alicejohnson@example.com",
            registrationDate: "2024-09-25",
          },
        ],
      },
      {
        id: 3,
        name: "workshop Gamma",
        description: "Detailed description of workshop Gamma with more info.",
        location: "Tokyo, Japan",
        amount: 15000,
        date: "2024-10-10",
        time: "9:00 AM",
        phoneNumber: "456-123-7890",
        email: "gamma@example.com",
        registrations: [],
      },
      {
        id: 4,
        name: "workshop Gamma",
        description: "Detailed description of workshop Gamma with more info.",
        location: "Tokyo, Japan",
        amount: 15000,
        date: "2024-10-10",
        time: "9:00 AM",
        phoneNumber: "456-123-7890",
        email: "gamma@example.com",
        registrations: [],
      },
      {
        id: 5,
        name: "workshop Gamma",
        description: "Detailed description of workshop Gamma with more info.",
        location: "Tokyo, Japan",
        amount: 15000,
        date: "2024-10-10",
        time: "9:00 AM",
        phoneNumber: "456-123-7890",
        email: "gamma@example.com",
        registrations: [],
      },
      {
        id: 6,
        name: "workshop Gamma",
        description: "Detailed description of workshop Gamma with more info.",
        location: "Tokyo, Japan",
        amount: 15000,
        date: "2024-10-10",
        time: "9:00 AM",
        phoneNumber: "456-123-7890",
        email: "gamma@example.com",
        registrations: [],
      },
      {
        id: 7,
        name: "workshop Gamma",
        description: "Detailed description of workshop Gamma with more info.",
        location: "Tokyo, Japan",
        amount: 15000,
        date: "2024-10-10",
        time: "9:00 AM",
        phoneNumber: "456-123-7890",
        email: "gamma@example.com",
        registrations: [],
      },
      {
        id: 8,
        name: "workshop Gamma",
        description: "Detailed description of workshop Gamma with more info.",
        location: "Tokyo, Japan",
        amount: 15000,
        date: "2024-10-10",
        time: "9:00 AM",
        phoneNumber: "456-123-7890",
        email: "gamma@example.com",
        registrations: [],
      },
    ],
    []
  );

  const handleView = (workshop) => {
    setSelectedWorkshop(workshop);
    onOpen();
  };

  const handleEdit = (workshop) => {
    alert(`Editing ${workshop.name}`);
  };

  const handleDelete = (workshop) => {
    alert(`Deleting ${workshop.name}`);
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
              Location
            </Th>
            <Th py={4} px={6}>
              Amount
            </Th>
            <Th py={4} px={6}>
              Date
            </Th>
            <Th py={4} px={6}>
              Time
            </Th>
            <Th py={4} px={6}>
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
          {workshops.map((workshop, index) => (
            <WorkshopRow
              key={workshop.id}
              workshop={workshop}
              index={index}
              handleView={handleView}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent bg="gray.50" p={6} shadow="2xl" maxW="100%">
          <ModalCloseButton
            position="absolute"
            top="10px"
            right="20px"
            size="lg"
            color="gray.600"
            _hover={{ color: "red.500" }}
          />
          <ModalHeader textAlign="center">
            <Heading fontSize="2xl" color="blue.700">
              Workshop Details: {selectedWorkshop?.name}
            </Heading>
          </ModalHeader>
          <Divider my={3} />
          <ModalBody>
            <Flex direction="column" gap={4}>
              <Text>
                <strong>Description:</strong> {selectedWorkshop?.description}
              </Text>
              <Text>
                <strong>Location:</strong> {selectedWorkshop?.location}
              </Text>
              <Text>
                <strong>Amount:</strong>{" "}
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(selectedWorkshop?.amount)}
              </Text>
              <Text>
                <strong>Date:</strong>{" "}
                {new Date(selectedWorkshop?.date).toLocaleDateString()}
              </Text>
              <Text>
                <strong>Time:</strong> {selectedWorkshop?.time}
              </Text>
              <Text>
                <strong>Phone Number:</strong> {selectedWorkshop?.phoneNumber}
              </Text>
              <Text>
                <strong>Email:</strong> {selectedWorkshop?.email}
              </Text>
              <Flex align="center">
                <Text fontSize="md" mr={2}>
                  <strong>Registrations:</strong>{" "}
                  {selectedWorkshop?.registrations.length}
                </Text>
                {selectedWorkshop?.registrations.length > 0 && (
                  <Button
                    colorScheme="blue"
                    variant="solid"
                    size="sm"
                    onClick={onRegOpen}
                    borderRadius="md"
                    width="170px"
                    padding="6px"
                    bgColor="#02e8a7"
                    marginLeft="10px"
                    _hover={{ bg: "blue.500" }}
                    _active={{ bg: "blue.600" }}
                  >
                    View Registrations
                  </Button>
                )}
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal isOpen={isRegOpen} onClose={onRegClose} size="md">
        <ModalOverlay />
        <ModalContent bg="gray.50" p={6} shadow="2xl" maxW="100%">
          <ModalCloseButton
            position="absolute"
            top="10px"
            right="20px"
            size="lg"
            color="gray.600"
            _hover={{ color: "red.500" }}
          />
          <ModalHeader textAlign="center">
            <Heading fontSize="xl" color="blue.700">
              Registrations for {selectedWorkshop?.name}
            </Heading>
          </ModalHeader>
          <ModalBody>
            {selectedWorkshop?.registrations.map((registration, idx) => (
              <Box
                key={registration.userId}
                borderBottom="1px solid"
                borderColor="gray.200"
                py={3}
              >
                <Text>
                  <strong>Name:</strong> {registration.name}
                </Text>
                <Text>
                  <strong>Email:</strong> {registration.email}
                </Text>
                <Text>
                  <strong>Registration Date:</strong>{" "}
                  {new Date(registration.registrationDate).toLocaleDateString()}
                </Text>
              </Box>
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default WorkshopTable;
