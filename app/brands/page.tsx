"use client";
import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import BrandCard from "../components/home/Brand/BrandCard";

const Brands = () => {
  const brands = [
    {
      url: "https://yoori.spagreen.net/public/images/20220328145340image_130x93-153.png",
      name: "Gucci",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20220328145027image_130x93-230.png",
      name: "H & P",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20220328144908image_130x93-122.png",
      name: "HERMES",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20220328144842image_130x93-101.png",
      name: "Honda",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20220328153438image_130x93-92.png",
      name: "Audi",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20220328152557image_130x93-323.png",
      name: "Apple",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20220328152534image_130x93-476.png",
      name: "Dell",
    },
  ];
  return (
    <div>
      <Container maxW={"7xl"}>
        <Box borderBottom={"1px solid #0000001c"} mb={3}>
          <Text fontSize={"1.7rem"}>Brands</Text>
        </Box>
        <Grid templateColumns={"repeat(8,1fr)"}>
          {brands.map((item, index) => (
            <GridItem colSpan={{ base: 4, md: 2 }} mb={3}>
              <BrandCard item={item} key={index} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Brands;
