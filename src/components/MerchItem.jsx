import React from "react";
import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";

const MerchItem = ({ item, addToCart }) => {
  return (
    <Box borderWidth={1} borderRadius="lg" p={4}>
      <Image src={item.image} alt={item.name} />
      <Heading as="h3" size="md" mt={2}>
        {item.name}
      </Heading>
      <Text mt={2}>${item.price}</Text>
      <Button mt={4} colorScheme="blue" onClick={() => addToCart(item)}>
        Add to Cart
      </Button>
    </Box>
  );
};

export default MerchItem;
