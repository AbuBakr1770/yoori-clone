"use client";
import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { imagesArray, imagesArray2 } from "@/app/images/images";
import Slider from "react-slick";
import { Image } from "@chakra-ui/react";
import BannerList from "./BannerList";
import Categories from "./Categories/Categories";

const HeroSection = () => {
  var settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container maxW={"7xl"}>
      <Grid templateColumns="repeat(4, 1fr)">
        <GridItem
          colSpan={{ base: 0, lg: 1 }}
          display={{ base: "none", lg: "inline-block" }}
        >
          <Categories />
        </GridItem>
        <GridItem colSpan={{ base: 4, lg: 3 }}>
          <Box>
            <Slider {...settings}>
              {imagesArray.map((item, id) => (
                <div key={id}>
                  <Box position="relative">
                    <Image src={item.url} alt="No Image found" />
                  </Box>
                </div>
              ))}
            </Slider>
          </Box>
          <Box mt={"1rem"}>
            <Grid templateColumns="repeat(4, 1fr)">
              {imagesArray2.map((item, index) => (
                <GridItem colSpan={{ base: 2, md: 1 }} m={1}>
                  <Image
                    _hover={{ transform: "scale(1.1)" }}
                    transition="transform 0.3s ease"
                    key={index}
                    src={item.url}
                    alt="No Image found"
                  />
                </GridItem>
              ))}
            </Grid>
          </Box>
        </GridItem>
      </Grid>

      <BannerList />
    </Container>
  );
};

export default HeroSection;
