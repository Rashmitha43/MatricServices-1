import React from 'react';
import { Box, Flex, Text, Link, Stack, IconButton, Input, Button, useBreakpointValue, VStack, Fade } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import theme from '../../theme';

const Footer = () => {
  // Use dynamic background colors and styles based on screen size
  const footerBg = theme.colors.thirty;
  const inputWidth = useBreakpointValue({ base: '100%', md: '70%' });
  const textSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const socialSize = useBreakpointValue({ base: 'lg', md: 'xl' });

  return (
    <Fade in={true} transition={{ enter: { duration: 0.5 } }}>

      <Box 
        as="footer" 
        bg={footerBg} 
        color="white" 
        py={10} 
        mt={12} 
        boxShadow="2xl" 
        position="relative" 
        overflow="hidden"
        bgAttachment="fixed"
      >

        <Flex
          direction={['column', 'column', 'row']}
          justify="space-between"
          align="center"
          px={[4, 8, 12]}
          textAlign={['center', 'center', 'left']}
        >

          <VStack alignItems="flex-start" spacing={4} mb={[6, 6, 0]} textShadow="1px 1px 5px rgba(0,0,0,0.4)">
            <Text fontSize="2xl" fontWeight="bold" letterSpacing="wide">Matrix Services</Text>
            <Stack direction={['column', 'row']} spacing={6}>
              {['Home', 'About Us', 'Services', 'Contact'].map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  _hover={{ color: 'yellow.300', transform: 'scale(1.1)', textDecoration: 'underline' }}
                  transition="all 0.2s ease-in-out"
                >
                  {link}
                </Link>
              ))}
            </Stack>
          </VStack>


          <VStack alignItems="flex-start" spacing={4} mb={[6, 6, 0]} textShadow="1px 1px 5px rgba(0,0,0,0.4)">
            <Text fontSize="lg" fontWeight="semibold">Get In Touch</Text>
            <Text fontSize={textSize}>Main Street, Ghandi Nagar, ST 12345</Text>
            <Text fontSize={textSize}>Phone: +91 9998887776</Text>
            <Link href="mailto:contact@brandname.com" _hover={{ color: 'yellow.300' }} fontSize={textSize}>
              Email: contact@brandname.com
            </Link>
          </VStack>

          <VStack alignItems="flex-start" spacing={4} textShadow="1px 1px 5px rgba(0,0,0,0.4)">
            <Text fontSize="xl" fontWeight="bold">Follow Us</Text>
            <Stack direction="row" spacing={4}>
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube].map((Icon, index) => (
                <IconButton
                  key={index}
                  as="a"
                  href="#"
                  aria-label={`${Icon.displayName}`}
                  icon={<Icon />}
                  size={socialSize}
                  variant="outline"
                  _hover={{ color:"#292b2a", bg: 'whiteAlpha.900', transform: 'scale(1.5)', boxShadow: 'lg' }}
                  transition="all 0.3s ease-in-out"
                />
              ))}
            </Stack>
            
            <Flex direction={['column', 'column', 'row']} align="center" width="100%">
              <Input
                placeholder="Enter your email"
                variant="filled"
                bg="whiteAlpha.900"
                color="black"
                _placeholder={{ color: 'gray.500' }}
                borderRadius="md"
                width={inputWidth}
                mb={[4, 4, 0]}
              />
              <Button
                colorScheme="yellow"
                variant="solid"
                size="md"
                rightIcon={<MdEmail />}
                ml={[0, 0, 4]}
                borderRadius="md"
                _hover={{ bg: 'yellow.500', transform: 'scale(1.05)' }}
                transition="all 0.2s ease-in-out"
              >
                Contact Us
              </Button>
            </Flex>
          </VStack>
        </Flex>

        <Box 
          textAlign="center" 
          py={4} 
          mt={8} 
        >
          <Text fontSize="lg" color="gray.100" fontWeight="medium">
            © {new Date().getFullYear()} BrandName. All Rights Reserved.
          </Text>
        </Box>
      </Box>
    </Fade>
  );
};

export default Footer;

