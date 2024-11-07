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
  Image,
  Button,
  Heading,
  Divider,
  Flex,
  VStack,
} from "@chakra-ui/react";

const ProductRow = ({ product, index, handleView, handleEdit, handleDelete }) => (
  <Tr _hover={{ bg: "gray.50" }} transition="background-color 0.3s ease" textAlign="left">
    <Td py={6} px={6}  textAlign="center">{index + 1}</Td>
    <Td py={6} px={6}  maxW="200px" isTruncated fontWeight="medium">
      {product.title}
    </Td>
    <Td py={6} px={6}  maxW="250px" color="gray.600" isTruncated>
      {product.desc.slice(0, 50)}...
    </Td>
    <Td py={6} px={6}  fontWeight="bold" color="green.600">
      ${product.price}
    </Td>
    <Td py={6} px={6} >{product.productCode}</Td>
    <Td py={6} px={6}>
      {product.registrations.length}
    </Td>
    <Td py={6} px={6} display="flex" justifyContent="center" my="auto">
      <IconButton
        icon={<EditIcon />}
        colorScheme="blue"
        variant="solid"
        size="xl"
        onClick={() => handleEdit(product)}
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
        onClick={() => handleDelete(product)}
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
        onClick={() => handleView(product)}
        aria-label="View workshop"
        borderRadius="md"
        boxShadow="md"
        _hover={{ bg: "green.50" }} 
      />
    </Td>
  </Tr>
);

const ProductTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isRegOpen,
    onOpen: onRegOpen,
    onClose: onRegClose,
  } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = useMemo(() => [
    {
      id: 1,
      title: "Product One",
      desc: "This is a detailed description of Product One with extra details.",
      price: 49.99,
      productCode: "P001",
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
      title: "Product Two",
      desc: "This is a detailed description of Product Two with extra details.",
      price: 79.99,
      productCode: "P002",
      registrations: []
    },
  ], []);

  const handleView = (product) => {
    setSelectedProduct(product);
    onOpen();
  };

  const handleEdit = (product) => {
    alert(`Editing ${product.title}`);
  };

  const handleDelete = (product) => {
    alert(`Deleting ${product.title}`);
  };

  return (
    <Box bg="white" shadow="lg" rounded="lg" overflow="auto" borderWidth="1px">
      <Table variant="simple" colorScheme="gray" size="md" width="100%" textAlign="left">
        <Thead bg="gray.100">
          <Tr>
            <Th py={4} px={6} textAlign="center">#</Th>
            <Th py={4} px={6}>Product Name</Th>
            <Th py={4} px={6}>Description</Th>
            <Th py={4} px={6}>Price</Th>
            <Th py={4} px={6}>Product Code</Th>
            <Th py={4} px={6}>
              Registrations
            </Th>
            <Th py={4} px={6} textAlign="center">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product, index) => (
            <ProductRow
              key={product.id}
              product={product}
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
              Product Details: {selectedProduct?.title}
            </Heading>
          </ModalHeader>
          <Divider my={3} />
          <ModalBody>
            <VStack spacing={4} align="flex-start">
              <Text><strong>Description:</strong> {selectedProduct?.desc}</Text>
              <Text><strong>Price:</strong> ${selectedProduct?.price}</Text>
              <Text><strong>Product Code:</strong> {selectedProduct?.productCode}</Text>
              <Flex align="center">
                <Text fontSize="md" mr={2}>
                  <strong>Registrations:</strong>{" "}
                  {selectedProduct?.registrations.length}
                </Text>
                {selectedProduct?.registrations.length > 0 && (
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
            </VStack>
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
              Registrations for {selectedProduct?.name}
            </Heading>
          </ModalHeader>
          <ModalBody>
            {selectedProduct?.registrations.map((registration, idx) => (
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

export default ProductTable;
