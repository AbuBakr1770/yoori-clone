"use client";
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";

const VendorChatDetail = () => {
  return (
    <Box className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-2xl">
      <Image
        src="https://shopifellow.com/public/images/20231227042157image_850x480-433.png"
        alt="Best Price"
        className="w-full object-cover object-center"
      />
      <Box className="p-4">
        <Text fontSize="lg" fontWeight="bold">
          rk traders
        </Text>
        <Box>
          <Text>(5 out of 5)</Text>
          <ReactStars
            count={5}
            size={24}
            activeColor="yellow"
            value={5}
            edit={false}
          />
          <Text>(0 reviews)</Text>
        </Box>

        <Text className="mt-2 text-gray-600">Products: 0</Text>
        <Text className="mt-2 text-gray-600">Joined: 26 Dec 2023</Text>
      </Box>
    </Box>
  );
};

export default VendorChatDetail;
