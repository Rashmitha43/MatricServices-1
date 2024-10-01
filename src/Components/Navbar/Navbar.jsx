import theme from "../../theme";
import { Box, Image } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {

  return (
    <>
      <Box  bg="white" cursor='pointer' fontFamily={theme.fonts.body}>
        <Box
          width={"100%"}
          height={"70px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          boxShadow={"lg"}
          fontWeight={'700'}
        >
          <Box
            width={"70%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box width="20%">
              <Image scr="" width={"100px"} height={"100%"} alt="logo" />
            </Box>
            <Box
              display={"flex"}
              alignContent={"center"}
              justifyContent={"space-evenly"}
              width={"60%"}
              textTransform={'uppercase'}
              fontSize={'14px'}
      
            >
              <Box _hover={{color:theme.colors.thirty}}>Home</Box>
              <Box _hover={{color:theme.colors.thirty}}>AboutUs</Box>
              <Box _hover={{color:theme.colors.thirty}}>Projects</Box>
              <Box _hover={{color:theme.colors.thirty}}>Workshops</Box>
            </Box>

            <Box w={'20%'} display={'flex'} alignItems={'center'} justifyContent={'center'} gap='20px'>
              <Box w='max-content' borderRadius={'30px'} p='5px 15px' bg={theme.colors.ten} display={'flex'} alignItems={'center'} justifyContent={'center'} gap='5px' _hover={{backgroundColor:theme.colors.thirty,color:'white'}}><FaWhatsapp /> chatnow</Box>
              <Box fontSize={'20px'}><CiSearch /></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Navbar;
