import React from "react";
import { Box, VStack, HStack, Heading, Text, Image, Divider, Link, IconButton } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh" py={8}>
      <VStack spacing={8} align="center" maxW="container.lg" mx="auto">
        <Image src="https://images.unsplash.com/photo-1571153168245-fc42e56026df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxraW0lMjBrYXJkYXNoaWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEzMTcwNTM3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Kim Kardashian" borderRadius="full" boxSize="200px" />
        <Heading as="h1" size="2xl">
          Kim Kardashian
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Entrepreneur, Reality TV Star, Fashion Icon
        </Text>
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
        <Divider />
        <VStack spacing={4} align="start" maxW="xl">
          <Heading as="h2" size="xl">
            About Me
          </Heading>
          <Text>Kim Kardashian is a reality TV star, social media influencer, and entrepreneur. She first gained media attention as a friend and stylist of Paris Hilton, but received wider notice after the sex tape Kim Kardashian, Superstar, shot in 2002 with her then-boyfriend Ray J, was released in 2007.</Text>
          <Text>Kardashian has developed a significant presence online and across numerous social media platforms, including hundreds of millions of followers on Twitter and Instagram. She has released a variety of products tied to her name, including the 2014 mobile game Kim Kardashian: Hollywood, a variety of clothing and products, the 2015 photo book Selfish and her eponymous personal app.</Text>
        </VStack>
        <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxraW0lMjBrYXJkYXNoaWFuJTIwZmFzaGlvbnxlbnwwfHx8fDE3MTMxNzA1Mzh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Kim Kardashian Fashion" objectFit="cover" w="100%" maxH="400px" />
        <VStack spacing={4} align="start" maxW="xl">
          <Heading as="h2" size="xl">
            Businesses
          </Heading>
          <Text>Kardashian has launched multiple businesses including KKW Beauty, KKW Fragrance, and SKIMS shapewear. She is also involved in the retail and fashion industries with her sisters Kourtney and Khloé. They have launched several clothing collections and fragrances, and additionally released the book Kardashian Konfidential in 2010.</Text>
          <Link as={RouterLink} to="/projects">
            View Projects
          </Link>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;
