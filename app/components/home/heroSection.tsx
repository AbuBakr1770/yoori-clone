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
        <GridItem colSpan={1}>
          <Categories />
        </GridItem>
        <GridItem colSpan={3}>
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
          <Box>
            <Grid templateColumns="repeat(4, 1fr)" pr={"2.5rem"}>
              {imagesArray2.map((item, index) => (
                <GridItem colSpan={1}>
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
