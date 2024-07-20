import {
  Box,
  FormControl,
  Input,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { FaListUl, FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { IoPersonOutline, IoPricetagsOutline } from "react-icons/io5";

const BottomBanner = () => {
  return (
    <div>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        height={"3rem"}
        bg={"#febd0d"}
        mt={"10px"}
        px={"4rem"}
      >
        <Box>
          <Text
            fontWeight={"600"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"4px"}
          >
            <FaListUl /> All categories
          </Text>
        </Box>

        <Box>
          <UnorderedList display={"flex"} listStyleType={"none"} gap={"20px"}>
            <ListItem>Home</ListItem>
            <ListItem>Products</ListItem>
            <ListItem>Stores</ListItem>
            <ListItem>Brands</ListItem>
            <ListItem>Categories</ListItem>
            <ListItem>Pages</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Text
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"4px"}
          >
            <IoPricetagsOutline />
            All Deals
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default BottomBanner;
