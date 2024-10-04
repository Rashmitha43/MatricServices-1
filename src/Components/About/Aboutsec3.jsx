import { Box, Button, Text, useBreakpointValue, Fade } from "@chakra-ui/react";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import theme from "../../theme";

const Aboutsec3 = () => {
  const padding = useBreakpointValue({ base: 4, md: 6, lg: 8 });
  const buttonSize = useBreakpointValue({ base: "md", lg: "lg" });

  return (
    <Fade in={true} transition={{ enter: { duration: 0.5 } }}>
      <Box
        width="100%"
        display="flex"
        flexDirection={["column", "column", "row"]}
        alignItems="center"
        justifyContent="center"
        pt="20px"
        pb="20px"
        bgColor="#fff"
      >
        <Box
          display="flex"
          flexDirection={["column", "column", "row"]}
          alignItems="center"
          justifyContent="space-between"
          p={padding}
          width={["95%", "90%", "80%"]}
          bgColor="#ffffff"
          position="relative"
          boxShadow="xl"
          borderRadius="lg"
          gap={[4, 4, 0]}
          border="1px solid #e2e8f0"
        >
          {/* First Box */}
          <Box
            flex="1"
            width="100%"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            borderRadius="20px"
            overflow="hidden"
          >
            <Box
              width="90%"
              mb={[6, 6, 0]}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              borderRadius="20px"
              overflow="hidden"
              position="relative"
              bgColor={theme.colors.thirty}
              p={5}
              textAlign="center"
              boxShadow="md"
              transition="all 0.3s ease"
              _hover={{ boxShadow: "2xl", transform: "scale(1.02)" }}
            >
              <Text
                as="p"
                fontSize={["lg", "xl"]}
                fontWeight="bold"
                color="white"
                mb={2}
              >
                Are You Ready?
              </Text>
              <Text
                as="h2"
                fontSize={["xl", "2xl"]}
                fontWeight="semibold"
                color="white"
                mb={4}
              >
                Start a New Project
              </Text>
              <Button
                colorScheme="whiteAlpha"
                width="150px"
                variant="solid"
                size={buttonSize}
                leftIcon={<FaWhatsapp />}
                p={4}
                bgColor="white" // Set the button background to white
                color="black" // Set the text color to black
                borderRadius="10px"
                boxShadow="md"
                _hover={{
                  bg: "gray.200", // Light gray hover effect
                  color: "black",
                  transform: "scale(1.05)",
                  boxShadow: "lg",
                }}
                _active={{
                  bg: "gray.300", // Slightly darker gray when active
                  transform: "scale(0.98)",
                }}
                aria-label="Contact us via WhatsApp"
              >
                WhatsApp
              </Button>
            </Box>
          </Box>

          {/* Second Box */}
          <Box
            flex="1"
            width="100%"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            borderRadius="20px"
            overflow="hidden"
          >
            <Box
              flex="1"
              mb={[6, 6, 0]}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              width="80%"
              borderRadius="20px"
              overflow="hidden"
              position="relative"
              bgColor={theme.colors.ten}
              p={5}
              textAlign="center"
              boxShadow="md"
              transition="all 0.3s ease"
              _hover={{ boxShadow: "2xl", transform: "scale(1.02)" }}
            >
              <Text
                as="h2"
                fontSize={["xl", "2xl"]}
                fontWeight="semibold"
                color="black"
                mb={2}
              >
                What Are You Waiting for?
              </Text>
              <Text as="p" fontSize={["md", "lg"]} color="black" mb={4}>
                Let's Talk About Work
              </Text>
              <Button
                colorScheme="blackAlpha"
                variant="solid"
                size={buttonSize}
                p={4}
                bgColor="black"
                color="white"
                borderRadius="10px"
                boxShadow="md"
                rightIcon={<FaArrowRight />}
                _hover={{
                  bg: "gray.700",
                  color: "white",
                  transform: "scale(1.05)",
                  boxShadow: "lg",
                }}
                _active={{
                  bg: "gray.800",
                  transform: "scale(0.98)",
                }}
                aria-label="Start Now"
              >
                Start Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

export default Aboutsec3;
