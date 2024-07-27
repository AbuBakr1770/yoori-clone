"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import VendorFilter from "../components/vendor-chat/VendorFilter";
import { FaAngleDown } from "react-icons/fa";
import ProductCard from "../components/home/products/ProductCard";
import { Item } from "../interfaces/products";

const ProductsPage = () => {
  const products: Item[] = [
    {
      url: "https://yoori.spagreen.net/public/images/20220403164037image_190x230_media_216.png",
      price: "15",
      rating: 2,
      name: "Name 1",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20220328160446image_190x230_media_482.png",
      price: "15",
      rating: 3,
      name: "Name2",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20220329123832image_190x230_media_478.png",
      price: "15",
      rating: 4,
      name: "Name 3",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20220329150503image_190x230_media_254.png",
      price: "15",
      rating: 5,
      name: "Name 4",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20220904113043image_190x230-117.png",
      price: "15",
      rating: 1,
      name: "Name 5",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20220331153805image_190x230_media_99.png",
      price: "15",
      rating: 3,
      name: "Name 6",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20231115124358image_190x230-174.png",
      price: "15",
      rating: 3,
      name: "Name 7",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20220328184956image_190x230_media_135.png",
      price: "15",
      rating: 3,
      name: "Name 8",
    },
  ];

  return (
    <Container my={3} maxW={"7xl"}>
      <Grid templateColumns="repeat(11, 1fr)">
        <GridItem
          mt={"3.2rem"}
          display={{ base: "none", lg: "block" }}
          colSpan={{ base: 0, lg: 3 }}
        >
          <VendorFilter />
        </GridItem>
        <GridItem colSpan={{ base: 11, lg: 8 }}>
          <Grid templateColumns="repeat(5, 1fr)">
            <GridItem colSpan={{ base: 5, lg: 5 }}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  p={"2"}
                  gap={"10px"}
                  //   my={5}
                >
                  <Text
                    fontWeight={"700"}
                    display={{ base: "none", md: "flex" }}
                  >
                    Sort By
                  </Text>
                  <Menu>
                    <MenuButton as={Button} rightIcon={<FaAngleDown />}>
                      Filter by
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Newest</MenuItem>
                      <MenuItem>Oldest</MenuItem>
                      <MenuItem>Top Sellers</MenuItem>
                      <MenuItem>Top Selling</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  p={"2"}
                  gap={"10px"}
                >
                  <Menu>
                    <MenuButton as={Button} rightIcon={<FaAngleDown />}>
                      Show by 15
                    </MenuButton>
                    <MenuList>
                      <MenuItem> Show by 25</MenuItem>
                      <MenuItem> Show by 30</MenuItem>
                      <MenuItem> Show by 45</MenuItem>
                    </MenuList>
                  </Menu>
                  {/* <Box display={"flex"} gap={"15px"}>
                      <FaListUl
                        style={{
                          color: "var(--background-yellow-theme)",
                          fontSize: "1.3rem",
                        }}
                      />
                      <BsFillGridFill
                        style={{
                          color: "var(--background-yellow-theme)",
                          fontSize: "1.3rem",
                        }}
                      />
                    </Box> */}
                </Box>
              </Box>
            </GridItem>
          </Grid>

          <Grid templateColumns="repeat(6, 1fr)">
            {products.map((item, index) => (
              <GridItem colSpan={{ base: 3, md: 2 }}>
                <ProductCard item={item} key={index} />
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default ProductsPage;
