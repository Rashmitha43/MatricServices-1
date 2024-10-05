import { Box, Image } from "@chakra-ui/react";
import React from "react";
import img from '../../assets/header.jpg'
const Header = () => {
  return (
    <Box
      w="100%"
      h={{
        base: "20vh",
        sm: "28vh",
        md: "35vh",
        lg: "45vh",
        xl: "100vh",
      }}
      bgImage={`url(${img})`}
      backgroundPosition={'center'}
      backgroundSize={'cover'}
      backgroundRepeat={'no-repeat'}
    >

    </Box>
  );
};

export default Header;
