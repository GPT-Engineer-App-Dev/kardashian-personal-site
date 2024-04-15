import React from "react";
import { Box, VStack, Text, Button } from "@chakra-ui/react";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        {cart.length === 0 ? (
          <Text>Your cart is empty.</Text>
        ) : (
          cart.map((item, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
              <Text>{item.name}</Text>
              <Text>{`Price: $${item.price}`}</Text>
              <Button colorScheme="red" onClick={() => removeFromCart(index)}>
                Remove from Cart
              </Button>
            </Box>
          ))
        )}
      </VStack>
    </Box>
  );
};

export default Cart;
