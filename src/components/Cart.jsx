import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <Box>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        cart.map((item, index) => (
          <Box key={index}>
            <Text>{item.name}</Text>
            <Button onClick={() => removeFromCart(index)}>Remove</Button>
          </Box>
        ))
      )}
    </Box>
  );
};

export default Cart;
