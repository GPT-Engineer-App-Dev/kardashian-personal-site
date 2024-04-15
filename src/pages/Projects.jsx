import React from "react";
import { Box, VStack, Heading, Text, Image, Link } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Box bg="gray.100" minH="100vh" py={8}>
      <VStack spacing={8} align="center" maxW="container.lg" mx="auto">
        <Heading as="h1" size="2xl">
          Projects
        </Heading>
        <VStack spacing={4} align="start" maxW="xl">
          <Box>
            <Heading as="h2" size="xl">
              SKIMS
            </Heading>
            <Text>SKIMS is a solutions-oriented brand creating the next generation of underwear, loungewear and shapewear.</Text>
            <Link href="https://skims.com" isExternal>
              Visit SKIMS
            </Link>
          </Box>
          <Box>
            <Heading as="h2" size="xl">
              KKW Beauty
            </Heading>
            <Text>KKW Beauty is a cruelty-free cosmetics line offering innovative formulas and versatile products for all skin tones.</Text>
            <Link href="https://kkwbeauty.com" isExternal>
              Visit KKW Beauty
            </Link>
          </Box>
        </VStack>
        <Image src="https://images.unsplash.com/photo-1617391765934-f6e7a5a3ba9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxraW0lMjBrYXJkYXNoaWFuJTIwc2tpbXN8ZW58MHx8fHwxNzEzMTcwNTM4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="SKIMS" objectFit="cover" w="100%" maxH="400px" />
      </VStack>
    </Box>
  );
};

export default Projects;
