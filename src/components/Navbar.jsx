import React from "react";
import { Box, Flex, Spacer, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="white" py={4} px={8} boxShadow="md">
      <Flex align="center">
        <Link as={RouterLink} to="/" fontWeight="bold" fontSize="xl">
          Kim Kardashian
        </Link>
        <Spacer />
        <Link as={RouterLink} to="/projects" fontWeight="medium" mr={4}>
          Projects
        </Link>
        <Link as={RouterLink} to="/merch" fontWeight="medium" mr={4}>
          Merch
        </Link>
        <Link as={RouterLink} to="/contact" fontWeight="medium" mr={4}>
          Contact
        </Link>
        <Link as={RouterLink} to="/cart" fontWeight="medium">
          Cart
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
