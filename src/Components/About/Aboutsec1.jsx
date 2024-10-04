import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import aboutimg from "../../assets/Aboutsec1.jpg.jpg";
import theme from "../../theme";

const Aboutsec1 = () => {
  return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: ["column", "column", "row"],
          alignItems: "center",
          justifyContent: "center",
          pt:'20px',
          pb:'20px'
        }}
      >
        <Box
          display="flex"
          flexDirection={["column", "column", "row"]}
          alignItems="center"
          justifyContent="space-between"
          p={[5, 8, 10]}
          width={["95%", "90%", "80%"]}
          bgColor="#f2f5f7"
          position="relative"
          boxShadow="md"
          borderRadius="lg"
        >

          <Box
            flex="1.2"
            pr={[0, 0, 20]}
            mb={[6, 6, 0]}
          >
            <Box position="relative" display="inline-block" textAlign={["center", "center", "left"]}>

              <motion.div
                style={{ position: "absolute", top: "-10px", right: "-32px" }}
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Box fontSize={["25px", "30px"]} color={theme.colors.yellow}>
                  ✨
                </Box>
              </motion.div>

              <Heading
                fontSize={["2xl", "3xl"]}
                fontWeight="bold"
                mb={4}
                fontFamily={theme.fonts.body}
                display="inline-block"
                order={[0, 0, 0]}
              >
                Matrix{" "}
                <Box as="span" color={theme.colors.ten}>
                  Services
                </Box>
              </Heading>
            </Box>

            <Heading
              fontSize={["xl", "2xl"]}
              fontWeight="bold"
              mb={4}
              fontFamily={theme.fonts.body}
              textAlign={"left"}
              order={[2, 2, 1]}
            >
              An initiative towards practicality of knowledge.
            </Heading>
            <Text mb={4} fontSize={["md", "lg"]} textAlign={"left"}>
              Welcome to Engineer's Planet, where we redefine engineering
              education by connecting students with experienced mentors
              worldwide. Our mission is to bridge knowledge gaps and upgrade
              research and development quality.
            </Text>
            <Text fontSize={["md", "lg"]} textAlign={"left"}>
              At Engineer’s Planet (EP), we are establishing a streamlined
              platform tailored to the distinct requirements of engineering
              students and researchers across all disciplines.
            </Text>
          </Box>

          <Box flex="1.5" order={[1, 1, 2]}>
            <motion.div
              initial={{ x: 1000 }}
              animate={{ x: 100 }}
              transition={{ duration: 2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={aboutimg}
                alt="Engineers Illustration"
                objectFit="cover"
                height={["250px", "350px", "400px"]}
                width={["250px", "350px", "400px"]} 
                borderRadius="lg"
                boxShadow="lg"
                mx={["auto", "auto", "0"]} 
              />
            </motion.div>
          </Box>
        </Box>
      </Box>
  );
};

export default Aboutsec1;
