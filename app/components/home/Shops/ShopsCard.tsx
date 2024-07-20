import React from "react";
import { Box, Image, Badge, Text, Button, HStack } from "@chakra-ui/react";

const ShopsCard = ({ item }) => {
  return (
    <Box
      // maxW="sm"
      mx={6}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      border={"1px solid #0000001c"}
      className="shadow-lg"
    >
      <Image
        src={item.mainUrl}
        alt="Shop Image"
        w="full"
        h="150px"
        objectFit="cover"
      />
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            50 products &bull; Joined 20 Jul 2024
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {item.name}
        </Box>

        <HStack spacing="1">
          <Text fontSize="sm" fontWeight="bold">
            4.5
          </Text>
          <Text fontSize="sm" color="gray.500">
            {item.ratings}
          </Text>
        </HStack>

        <Button mt="4" colorScheme="teal" variant="outline" w="full">
          Visit Store
        </Button>
      </Box>
    </Box>
  );
};

export default ShopsCard;
