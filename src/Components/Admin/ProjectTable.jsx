import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  IconButton,
  HStack,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon, ViewIcon } from '@chakra-ui/icons';

const ProjectTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'Project Alpha',
      description: 'Detailed description of Project Alpha with more info.',
      location: 'New York, USA',
      amount: '$10,000',
      date: '2024-10-01',
      time: '10:30 AM',
      phoneNumber: '123-456-7890',
      email: 'alpha@example.com',
    },
    {
      id: 2,
      name: 'Project Beta',
      description: 'Detailed description of Project Beta with more info.',
      location: 'London, UK',
      amount: '$20,000',
      date: '2024-10-05',
      time: '2:00 PM',
      phoneNumber: '987-654-3210',
      email: 'beta@example.com',
    },
    {
      id: 3,
      name: 'Project Gamma',
      description: 'Detailed description of Project Gamma with more info.',
      location: 'Tokyo, Japan',
      amount: '$15,000',
      date: '2024-10-10',
      time: '9:00 AM',
      phoneNumber: '456-123-7890',
      email: 'gamma@example.com',
    },
  ];

  const handleView = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <Box
      p={4}
      boxShadow="lg"
      borderRadius="lg"
      width="100%"
      maxW="100%"
      height="100vh"
      overflow="hidden"
      bg="gray.50"
    >
      <TableContainer overflowX="auto" overflowY="auto" height="100%">
        <Table variant="striped" colorScheme="teal" size="md">
          <Thead>
            <Tr>
              <Th p={4}>#</Th>
              <Th p={4}>Project Name</Th>
              <Th p={4}>Project Description</Th>
              <Th p={4}>Location</Th>
              <Th p={4}>Amount</Th>
              <Th p={4}>Date</Th>
              <Th p={4}>Time</Th>
              <Th p={4}>Phone Number</Th>
              <Th p={4}>Email</Th>
              <Th p={4}>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {projects.map((project, index) => (
              <Tr key={project.id} _hover={{ bg: 'gray.100' }} p={4}>
                <Td p={4}>{index + 1}</Td>
                <Td p={4}>{project.name}</Td>
                <Td p={4}>
                  {project.description.split(' ')[0]}...
                </Td>
                <Td p={4}>{project.location}</Td>
                <Td p={4}>{project.amount}</Td>
                <Td p={4}>{project.date}</Td>
                <Td p={4}>{project.time}</Td>
                <Td p={4}>{project.phoneNumber}</Td>
                <Td p={4}>{project.email}</Td>
                <Td p={4}>
                  <HStack spacing={2}>
                    <IconButton
                      aria-label="Edit project"
                      icon={<EditIcon />}
                      size="sm"
                      colorScheme="blue"
                      onClick={() => alert(`Edit project: ${project.name}`)}
                    />
                    <IconButton
                      aria-label="Delete project"
                      icon={<DeleteIcon />}
                      size="sm"
                      colorScheme="red"
                      onClick={() => alert(`Delete project: ${project.name}`)}
                    />
                    <IconButton
                      aria-label="View project"
                      icon={<ViewIcon />}
                      size="sm"
                      colorScheme="green"
                      onClick={() => handleView(project)}
                    />
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {/* Modal for viewing full project details */}
      {selectedProject && (
        <Modal isOpen={isOpen} onClose={onClose} size="2xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Project Details: {selectedProject.name}</ModalHeader>
            <ModalBody px={6} py={4}>
              <Text mb={2}>
                <strong>Description:</strong> {selectedProject.description}
              </Text>
              <Text mb={2}>
                <strong>Location:</strong> {selectedProject.location}
              </Text>
              <Text mb={2}>
                <strong>Amount:</strong> {selectedProject.amount}
              </Text>
              <Text mb={2}>
                <strong>Date:</strong> {selectedProject.date}
              </Text>
              <Text mb={2}>
                <strong>Time:</strong> {selectedProject.time}
              </Text>
              <Text mb={2}>
                <strong>Phone Number:</strong> {selectedProject.phoneNumber}
              </Text>
              <Text mb={2}>
                <strong>Email:</strong> {selectedProject.email}
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default ProjectTable;
