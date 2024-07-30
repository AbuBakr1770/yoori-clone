"use client";
import {
  Box,
  Container,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaBoxes, FaList, FaListUl } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { IoHomeOutline, IoPricetagsOutline } from "react-icons/io5";

const BottomBanner = () => {
  const iconStyles = {
    color: "white",
    "font-size": "1.5rem",
  };
  return (
    <div>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        sx={{ display: { base: "none", lg: "flex" } }}
        alignItems={"center"}
        height={"3rem"}
        bg="var(--background-yellow-theme)"
        mt={"10px"}
        mb={"10px"}
        px={"0.5rem"}
        position={"sticky"}
        top={"0"}
      >
        <Container
          maxW={"7xl"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          height={"3rem"}
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
              <ListItem>
                <Link href={"/"}>Home</Link>
              </ListItem>
              <ListItem>
                <Link href={"/products"}>Products</Link>
              </ListItem>
              <ListItem>
                <Link href={"/sellers"}>Stores</Link>
              </ListItem>
              <ListItem>
                <Link href={"/brands"}>Brands</Link>
              </ListItem>
              <ListItem>
                <Link href={"/categories"}>Categories</Link>
              </ListItem>
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
        </Container>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        sx={{ display: { base: "flex", lg: "none" } }}
        alignItems={"center"}
        height={"2.5rem"}
        bg="var(--background-yellow-theme)"
        // mt={"10px"}
        // mb={"10px"}
        zIndex={1000}
        px={"4rem"}
        w={"100vw"}
        position={"fixed"}
        mt={"2rem"}
        bottom={"px"}
      >
        <FaList style={iconStyles} />
        <FaBoxes style={iconStyles} />
        <IoHomeOutline style={iconStyles} />
        <CiShoppingCart style={iconStyles} />
        <GoPerson style={iconStyles} />
      </Box>
    </div>
  );
};

export default BottomBanner;
