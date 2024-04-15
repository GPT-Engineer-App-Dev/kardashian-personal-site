import React from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box>
      <Heading>Contact Us</Heading>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="message">
        <FormLabel>Message</FormLabel>
        <Textarea />
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default Contact;