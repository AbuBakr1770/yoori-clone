"use client";
import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Input,
  Button,
  Stack,
  Flex,
  Icon,
  Link,
  HStack,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.900" color="white" py={10}>
      <Container maxW="container.xl">
        <Box bg="gray.900" color="white" mb={3} py={8} px={4}>
          <Flex align="center" justify="space-between" maxW="6xl" mx="auto">
            <Flex align="center">
              <Icon as={FaEnvelope} w={10} h={10} mr={4} />
              <Box>
                <Text fontSize="lg" fontWeight="bold">
                  SUBSCRIBE TO OUR NEWSLETTER
                </Text>
                <Text fontSize="sm">
                  Get All The Latest Information On Events, Sales And Offers.
                </Text>
              </Box>
            </Flex>
            <Flex as="form">
              <Input
                type="email"
                placeholder="Email"
                bg="white"
                color="gray.800"
                borderRadius="md"
                mr={2}
              />
              <Button
                type="submit"
                bg="gray.700"
                color="white"
                _hover={{ bg: "gray.600" }}
              >
                SUBSCRIBE
              </Button>
            </Flex>
          </Flex>
        </Box>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 5 }} spacing={8}>
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Seller Options
            </Text>
            <Stack>
              <Link href="#">Login as Seller 123</Link>
              <Link href="#">Signup as Seller</Link>
            </Stack>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              My Account
            </Text>
            <Stack>
              <Link href="#">Login</Link>
              <Link href="#">Create Account</Link>
            </Stack>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Useful Links
            </Text>
            <Stack>
              <Link href="#">Refund Policy</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Seller Policy</Link>
              <Link href="#">Terms and Conditions</Link>
            </Stack>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Contact Us
            </Text>
            <Stack>
              <HStack>
                <FaMapMarkerAlt />
                <Text>
                  Concord Shopping Complex, Lake City, Khilkhet, Dhaka-1229
                </Text>
              </HStack>
              <HStack>
                <FaEnvelope />
                <Text>346354343@qq.com</Text>
              </HStack>
              <HStack>
                <FaPhone />
                <Text>+260979575828</Text>
              </HStack>
            </Stack>
          </Box>
        </SimpleGrid>
        <Box mt={10} textAlign="center">
          <Text fontSize="lg" fontWeight="bold">
            About
          </Text>
          <Text mb={4}>
            Leading Computer, Laptop & Gaming PC Retail & Online Shop in
            Bangladesh.
          </Text>
          <HStack spacing={4} justify="center">
            <Link href="#" isExternal>
              <FaFacebook size={24} />
            </Link>
            <Link href="#" isExternal>
              <FaTwitter size={24} />
            </Link>
            <Link href="#" isExternal>
              <FaLinkedin size={24} />
            </Link>
            <Link href="#" isExternal>
              <FaInstagram size={24} />
            </Link>
            <Link href="#" isExternal>
              <FaYoutube size={24} />
            </Link>
          </HStack>
        </Box>
        <Box mt={10} textAlign="center">
          <Text>
            ©homeessentials by SpaGreen Creative 2022, All Rights Reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
