import React from "react";
import { Box, VStack, HStack, Text, Link, IconButton } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.200" py={8}>
      <VStack spacing={4} align="center">
        <Text>&copy; 2024 Kim Kardashian. All rights reserved.</Text>
        <HStack spacing={4}>
          <Link href="https://www.instagram.com/kimkardashian" isExternal>
            <IconButton icon={<FaInstagram />} aria-label="Instagram" size="lg" variant="ghost" />
          </Link>
          <Link href="https://twitter.com/KimKardashian" isExternal>
            <IconButton icon={<FaTwitter />} aria-label="Twitter" size="lg" variant="ghost" />
          </Link>
          <Link href="https://www.facebook.com/KimKardashian" isExternal>
            <IconButton icon={<FaFacebook />} aria-label="Facebook" size="lg" variant="ghost" />
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Footer;
