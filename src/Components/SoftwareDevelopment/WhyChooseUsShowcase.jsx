import React from "react";
import {
  Box,
  Text,
  Stack,
  Flex,
  Circle,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import CurvedArrowLeftToRight from "./CurvedArrowLeftToRight";
import expteam from "../../assets/expteam.jpg";
import customsol from "../../assets/customsol.jpg";
import provenresults from "../../assets/provenresults.jpg";
import Ongoingsupport from "../../assets/Ongoingsupport.png";

const showcaseItems = [
  { id: "01", title: "Experienced Team", imgSrc: expteam },
  { id: "02", title: "Custom Solutions", imgSrc: customsol },
  { id: "03", title: "Proven Results", imgSrc: provenresults },
  { id: "04", title: "Ongoing Support", imgSrc: Ongoingsupport },
];

const WhyChooseUsCircle = ({ label, step, imgSrc }) => {
  const circleBg = "#ffffff";           // always white
  const badgeBg = "#a5a5a5";            // gray tone for badge background
  const badgeColor = "#000000";         // black text for badge
  const labelColor = "#4A4A4A";         // dark gray for label

  return (
    <Stack
      align="center"
      spacing={4}
      transition="transform 0.3s ease"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Box position="relative">
        <Circle
          size="200px"
          bg={circleBg}
          boxShadow={`0 0 15px ${badgeBg}`}  // always visible shadow
          display="flex"
          alignItems="center"
          justifyContent="center"
          px={4}
          textAlign="center"
          overflow="hidden"
          border="2px solid"
          borderColor={badgeBg}
          transition="border-color 0.3s ease, box-shadow 0.3s ease"
          _hover={{
            borderColor: badgeBg,
            boxShadow: `0 0 25px ${badgeBg}`,  // stronger shadow on hover
          }}
        >
          {imgSrc ? (
            <Image
              src={imgSrc}
              alt={label}
              boxSize="120px"
              objectFit="contain"
              pointerEvents="none"
            />
          ) : (
            <Text
              fontWeight="bold"
              color={labelColor}
              fontSize="lg"
              userSelect="none"
            >
              {label}
            </Text>
          )}
        </Circle>
        <Box
          position="absolute"
          top="-10px"
          right="-10px"
          bg={badgeBg}
          color={badgeColor}
          fontWeight="bold"
          px={3}
          py={1}
          borderRadius="full"
          fontSize="sm"
          boxShadow="md"
          userSelect="none"
        >
          {step}
        </Box>
      </Box>
      <Text
        fontSize="md"
        fontWeight="bold"
        textAlign="center"
        textTransform="uppercase"
        color={labelColor}
        userSelect="none"
      >
        {label}
      </Text>
    </Stack>
  );
};


const WhyChooseUsShowcase = () => {
  const arrowColor = "#4A4A4A";

  return (
    <Box py={6} px={4} maxW="100%" textAlign="center" bg="#ffffff">
      <Text
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="extrabold"
        mb={8}
        letterSpacing="wide"
        userSelect="none"
        color="#000000" // black title text
      >
        WHY CHOOSE US?
      </Text>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={6}
        flexWrap="wrap"
      >
        {showcaseItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <WhyChooseUsCircle
              label={item.title}
              step={item.id}
              imgSrc={item.imgSrc}
            />
            {index < showcaseItems.length - 1 && (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                mx={3}
                minW="90px"
                minH="60px"
                transform="translateY(5px)"
              >
                <CurvedArrowLeftToRight
                  flip={index % 2 !== 0}
                  color={arrowColor}
                />
              </Box>
            )}
          </React.Fragment>
        ))}
      </Flex>
    </Box>
  );
};

export default WhyChooseUsShowcase;
