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
import SimpleSidebar from "./SideBar";

const BottomBanner = () => {
  const iconStyles = {
    color: "white",
    "font-size": "1.8rem",
  };

  const bottomMobilebannerNavs = [
    { icon: <SimpleSidebar />, url: "" },
    { icon: <FaBoxes style={iconStyles} />, url: "" },
    { icon: <IoHomeOutline style={iconStyles} />, url: "/" },
    { icon: <CiShoppingCart style={iconStyles} />, url: "/cart" },
    { icon: <GoPerson style={iconStyles} />, url: "/profile" },
  ];

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/sellers", label: "Stores" },
    { href: "/brands", label: "Brands" },
    { href: "/categories", label: "Categories" },
  ];
  return (
    <>
      <Box
        display={{ base: "none", lg: "flex" }}
        justifyContent="space-between"
        alignItems="center"
        height="3rem"
        bg="var(--background-yellow-theme)"
        mt="10px"
        mb="10px"
        px="0.5rem"
        position="sticky"
        top="0"
      >
        <Container
          maxW="7xl"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          height="3rem"
        >
          <Box>
            <Text
              fontWeight="600"
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="4px"
            >
              {/* <FaListUl /> */}
              <Link href={"/categories"}>All categories</Link>
            </Text>
          </Box>

          <Box>
            <UnorderedList display="flex" listStyleType="none" gap="20px">
              {links.map(({ href, label }) => (
                <ListItem key={href}>
                  <Link href={href}>{label}</Link>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>

          <Box>
            <Text
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="4px"
            >
              <IoPricetagsOutline /> All Deals
            </Text>
          </Box>
        </Container>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        sx={{ display: { base: "flex", lg: "none" } }}
        alignItems={"center"}
        height={"3.5rem"}
        bg="var(--background-yellow-theme)"
        // mt={"10px"}
        // mb={"10px"}
        zIndex={1000}
        px={"1rem"}
        w={"100vw"}
        position={"fixed"}
        mt={"2rem"}
        bottom={"px"}
      >
        {bottomMobilebannerNavs.map((item, index) => (
          <Link href={item.url} key={index}>
            {item.icon}
          </Link>
        ))}
      </Box>
    </>
  );
};

export default BottomBanner;
