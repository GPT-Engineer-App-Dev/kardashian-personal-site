import React, { useState } from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import MerchItem from "../components/MerchItem";

const merchandise = [
  {
    id: 1,
    name: "Kim K T-Shirt",
    price: 29.99,
    image: "https://example.com/kimk-tshirt.jpg",
  },
  {
    id: 2,
    name: "Kim K Poster",
    price: 19.99,
    image: "https://example.com/kimk-poster.jpg",
  },
];

const Merch = ({ cart, setCart }) => {
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart.splice(index, 1);
      return newCart;
    });
  };

  return (
    <Box>
      <Heading>Merchandise</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={8}>
        {merchandise.map((item) => (
          <MerchItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Merch;
