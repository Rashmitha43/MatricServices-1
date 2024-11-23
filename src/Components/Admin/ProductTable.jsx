import React, { useState, useMemo, useEffect } from "react";
import { EditIcon, DeleteIcon, ViewIcon } from "@chakra-ui/icons";
import { useNavigate, useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";
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
  VStack,
  Center,
  CircularProgress,
} from "@chakra-ui/react";
import { getProducts } from "../../Redux/app/action";
import { useDispatch, useSelector } from "react-redux";
import { delProductId } from "../../Redux/app/action";
import { ImCross } from "react-icons/im";



const ProductTable = () => {
 
  const navigate = useNavigate();
  const {productadd, isLoading } = useSelector((state) => state.app);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [deletestatus,setDeletestatus]=useState(false)
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(getProducts())
      .then((res) => {
       console.log(res.payload)
      })
      .catch((err) => {
        console.log("error", err.message);
      });
  
  }, [dispatch,deletestatus]);
  
  const handleView = (product) => {
    setSelectedProduct(product);
  };

  const handleEdit = (product) => {
    navigate(`/admin/projecttable/editproduct/${product._id}`);
  };


  const handleDelete = (product) => {
 
    dispatch(delProductId(product._id))
    .then((res)=>{
      alert("successfully deleted")
      setDeletestatus(true)

    })
    .catch((err)=>{
      console.log("error:",err)
    })
  };

  if (isLoading) {
    return <Loading message="Loading Projects..." />;
  }
 
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
            
            <Th py={4} px={6} textAlign="center">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            productadd?.map((product,index)=>(
              <Tr key={product._id}>
                 <Td py={4} px={6} textAlign={"center"}>
                  {index + 1}
                </Td>
                <Td py={4} px={6}>
                  {product.title}
                </Td>
                <Td py={4} px={6}>
                  {product.desc.substring(0, 40)}...
                </Td>
                <Td py={4} px={6}>
                  {product.price}
                </Td>
                <Td py={4} px={6}>
                  {product.productCode}
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
                    onClick={() => handleEdit(product)}
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
                    onClick={() => handleDelete(product)}
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
                    onClick={() => handleView(product)}
                  />
                </Td>
              </Tr>
            ))
          }
        </Tbody>
      </Table>

      {selectedProduct && (
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
              onClick={() => setSelectedProduct(null)}
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
                    Product Name:
                  </Box>
                  {selectedProduct.title}
                </Text>
                <Text>
                  <Box as="span" fontWeight={700} fontSize={"1.2rem"} mr={2}>
                    Description:
                  </Box>
                  {selectedProduct.desc}
                </Text>
                <Text>
                  <Box as="span" fontWeight={700} fontSize={"1.2rem"} mr={2}>
                    Price:
                  </Box>
                  {selectedProduct.price}
                </Text>
                <Text>
                  <Box as="span" fontWeight={700} fontSize={"1.2rem"} mr={2}>
                    Product Code
                  </Box>
                  {selectedProduct.productCode}
                </Text>
                
                
              
                
   
              </VStack>
            </Box>
          </Box>
        </>
      )}


    </Box>
  );
};

export default ProductTable;
