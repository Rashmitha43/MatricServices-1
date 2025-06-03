import React from "react";
import HeroWebsiteDesign from "../../Components/SoftwareDevelopment/HeroWebsiteDesign";
import WhyChooseUsShowcase from "../../Components/SoftwareDevelopment/WhyChooseUsShowcase";
import TechStackCarousel from "../../Components/SoftwareDevelopment/TechStackCarousel";
import OurServices from "../../Components/SoftwareDevelopment/OurServices";
import WebsiteDesignCard from "../../Components/SoftwareDevelopment/WebsiteDesignCard";
import AppWebDevTabCard from "../../Components/SoftwareDevelopment/AppWebDevTabCard";
import { Box } from "@chakra-ui/react";



const SoftwareDevelopment = () => {
  return (
    <Box bg="#ffffff" minH="100vh" pb={6}>
      <Box mb={20}>
        <HeroWebsiteDesign />
      </Box>
      <Box mb={20}>
        <WhyChooseUsShowcase />
      </Box>
      <Box mb={20}>
        <OurServices />
      </Box>
      <Box mb={20}>
        <AppWebDevTabCard />
      </Box>
      <Box mb={20}>
        <TechStackCarousel />
      </Box>
      <Box mb={20}>
        <WebsiteDesignCard />
      </Box>
    </Box>
  );
};

export default SoftwareDevelopment;
