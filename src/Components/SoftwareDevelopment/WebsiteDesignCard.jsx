import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Button,
  VStack,
  HStack,
  Image,
  Heading,
  Text,
  Icon,
} from "@chakra-ui/react";
import { FaCheckCircle, FaArrowUp } from "react-icons/fa";

const COLORS = {
  background: "#ededed",        // light gray
  gradientEnd: "#ededed",       // consistent background
  heading: "black",             // main heading color
  text: "#333333",              // readable dark gray text
  bulletIcon: "#a5a5a5",        // medium gray icon
  buttonBg: "#a5a5a5",          // medium gray button
  buttonHoverBg: "#333333",     // slightly darker for hover
  boxShadow: "rgba(0, 0, 0, 0.2)",  // subtle shadow
  border: "#a5a5a5",            // for subtle contrast
  tabActive: "#555555",
  tabBg: "#ededed",
  tabInactive: "#a5a5a5",
  white: "white",
  black: "black",
};

const deviceImg = "/images/web-mock.png";

const tabData = [
  {
    label: "Why It Matters",
    title: "WHY IT MATTERS",
    paragraph:
      "In a digital-first world, your website or app is often the first impression a customer has of your business — and first impressions are lasting. A strong digital presence isn’t just about looking good; it’s about functionality, trust, and growth.",
    bullets: [
      "A well-designed website/app improves brand credibility and builds customer trust.",
      "Mobile responsiveness and performance directly impact user experience and retention.",
      "Features like online bookings, product showcases, or seamless navigation can drive more leads and conversions.",
      "It gives you a competitive edge and allows 24/7 access to your business from anywhere.",
    ],
  },
  {
    label: "Our Build Process",
    title: "OUR BUILD PROCESS",
    paragraph:
      "We follow a structured, transparent process to deliver high-quality digital solutions tailored to your needs. Every step is designed to ensure alignment, quality, and collaboration.",
    bullets: [
      "Discovery & Strategy: We learn about your business, goals, and target audience to define a clear project roadmap.",
      "Design & User Experience: Our designers create intuitive, responsive, and visually engaging UI/UX prototypes.",
      "Development: Using modern frameworks and best practices, we transform the designs into a fully functional product.",
      "Testing & QA: Rigorous testing ensures everything works smoothly across devices and browsers.",
      "Launch & Deployment: After your final approval, we make the website/app live with complete support.",
      "Feedback Loops: We involve you at each phase for reviews, ensuring the final product truly reflects your vision.",
    ],
  },
  {
    label: "Custom vs Ready-Made",
    title: "CUSTOM VS. READY-MADE",
    paragraph:
      "Choosing between a custom-built solution and a template-based one can shape the outcome of your digital project. Our team guides you through these options to ensure you pick the path that offers the best balance between cost, time, and goals.",
    bullets: [
      "Custom development offers tailored design that reflects your brand identity, scalable architecture for future enhancements, and unique user journeys with custom functionalities.",
      "It requires a higher upfront investment but provides long-term flexibility.",
      "Template-based solutions come with pre-designed layouts that are fast to launch and budget-friendly for small businesses or MVPs.",
      "They offer limited customization but quicker turnaround, ideal for simple websites or informational platforms.",
    ],
  },
  {
    label: "Pricing & Timeline",
    title: "PRICING & TIMELINE",
    paragraph:
      "One of the most common questions we get is: “How much will it cost and how long will it take?” While there’s no one-size-fits-all answer, we provide transparent quotes, milestone tracking, and continuous updates so you always know where your project stands.",
    bullets: [
      "Project scope: number of pages, features, and integrations impact cost and timeline.",
      "Design complexity: includes custom animations, branding needs, and multiple design rounds.",
      "Third-party integrations: such as APIs, payment gateways, and external services.",
      "Platform choice: web only or additional Android, iOS, or cross-platform apps.",
      "Typical timelines: 2–4 weeks for basic websites, 4–8 weeks for custom dynamic websites, and 6–12+ weeks for web plus mobile apps depending on scope.",
    ],
  },
];

const WebsiteDesignCard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { title, paragraph, bullets } = tabData[activeTab];

  return (
    <Box w="100%" minH="100vh" bg={COLORS.white} py={10} px={2} display="flex" flexDir="column" alignItems="center">
      <Heading
               textAlign="center"
               mb={8}
               fontSize={{ base: "2xl", md: "3xl" }}
               fontWeight="extrabold"
               letterSpacing="wide"
               fontFamily="'Poppins', sans-serif"
              color={COLORS.black}
             >
               KNOW EVERYTHING ABOUT &gt;&gt;&gt;
             </Heading>

      <Box
        w="100%"
        maxW="1100px"
        mx="auto"
        bg={COLORS.white}
        borderRadius="2xl"
        boxShadow="lg"
        px={{ base: 4, md: 10 }}
        py={10}
        border="1px solid"
        borderColor={COLORS.border}
      >
        <HStack spacing={0} justify="center" mb={8} borderRadius="full" overflow="hidden" bg={COLORS.tabBg}>
          {tabData.map((tab, idx) => (
            <Button
              key={tab.label}
              onClick={() => setActiveTab(idx)}
              variant="unstyled"
              px={6}
              py={4}
              fontWeight="bold"
              fontSize="md"
              borderRadius="full"
              bg={activeTab === idx ? COLORS.tabActive : COLORS.tabInactive}
              color={activeTab === idx ? "white" : COLORS.text}
              borderRight={idx !== tabData.length - 1 ? `1px solid ${COLORS.border}` : "none"}
              _hover={{
                bg: COLORS.tabActive,
                color: "white",
              }}
              boxShadow={activeTab === idx ? "md" : "none"}
            >
              {tab.label}
            </Button>
          ))}
        </HStack>

        <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" gap={{ base: 12, md: 40 }}>
          <Image
            src={deviceImg}
            alt="Device mockup"
            maxW={{ base: "220px", md: "300px" }}
            borderRadius="xl"
            boxShadow="md"
            bg={COLORS.white}
            draggable={false}
          />
          <VStack align="start" spacing={6} maxW="580px">
            <Heading
              color={COLORS.tabActive}
              textTransform="uppercase"
              fontSize="2xl"
              fontWeight="bold"
              fontFamily="'Poppins', sans-serif"
            >
              {title}
            </Heading>
            <Text color={COLORS.text} fontSize="md" fontWeight="medium" lineHeight="1.8">
              {paragraph}
            </Text>
            <VStack as="ul" align="start" spacing={4}>
              {bullets.map((b, i) => (
                <Flex as="li" key={i} align="start" gap={3}>
                  <Icon as={FaCheckCircle} boxSize={4} color={COLORS.icon} mt={1} />
                  <Text color={COLORS.text} fontWeight="medium" fontSize="md">
                    {b}
                  </Text>
                </Flex>
              ))}
            </VStack>
          </VStack>
        </Flex>
      </Box>

      {showScroll && (
        <Button
          position="fixed"
          bottom="20px"
          right="20px"
          bg={COLORS.buttonBg}
          _hover={{ bg: COLORS.buttonHoverBg }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          borderRadius="full"
          color="white"
          size="lg"
          boxShadow="md"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </Button>
      )}
    </Box>
  );
};

export default WebsiteDesignCard;
