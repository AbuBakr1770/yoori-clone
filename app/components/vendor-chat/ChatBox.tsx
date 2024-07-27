"use client";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

const VendorChatBox = () => {
  const [isLargerThanMedium] = useMediaQuery("(min-width: 768px)");

  return (
    <Box
      w="100%"
      maxW={isLargerThanMedium ? "700px" : "400px"}
      bg={"#00000012"}
      borderRadius={"20px"}
      p={5}
    >
      <Box textAlign="center">
        <FormLabel fontSize="xl" fontWeight="bold">
          Send Message To Seller
        </FormLabel>
      </Box>
      <FormControl isRequired mb={4}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input id="name" bg={"white"} type="text" placeholder="Your Name" />
      </FormControl>
      <FormControl isRequired mb={4}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          bg={"white"}
          type="email"
          placeholder="youremail@example.com"
        />
      </FormControl>
      <FormControl isRequired mb={4}>
        <FormLabel htmlFor="subject">Subject</FormLabel>
        <Input
          id="subject"
          bg={"white"}
          type="text"
          placeholder="Subject of Message"
        />
      </FormControl>
      <FormControl isRequired mb={4}>
        <FormLabel htmlFor="message">Message</FormLabel>
        <Textarea
          id="message"
          bg={"white"}
          placeholder="Write Your Message"
          rows={6}
        />
      </FormControl>
      <Button
        bg={"var(--background-yellow-theme)"}
        color={"white"}
        type="submit"
      >
        SEND
      </Button>
    </Box>
  );
};

export default VendorChatBox;
