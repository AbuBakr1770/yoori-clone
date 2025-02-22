"use client";
import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import ShopsCard from "./ShopsCard";

const ShopsSlider = () => {
  const shops = [
    {
      mainUrl:
        "https://yoori.spagreen.net/public/images/seller/20220903172524-seller_banner-297x2037.png",
      subUrl:
        "https://yoori.spagreen.net/public/images/seller/20220903171408image_small_twoseller_logo292.png",
      name: "Shop 2",
      rating: "4.5",
    },
    {
      mainUrl:
        "https://yoori.spagreen.net/public/images/seller/20220903171543-seller_banner-297x2031.png",
      subUrl:
        "https://yoori.spagreen.net/public/images/seller/20220903163816image_small_twoseller_logo320.png",
      name: "Shop 3",
      rating: "4.5",
    },
    {
      mainUrl:
        "https://yoori.spagreen.net/public/images/seller/20231101123528-seller_banner-297x203-22.jpg",
      subUrl:
        "https://yoori.spagreen.net/public/images/seller/20231101123527image_small_two_seller_logo182.jpg",
      name: "Shop 4",
      rating: "4.5",
    },
  ];

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024, // xl
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 430, // sm
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 320, // sm
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Container maxW={"7xl"}>
      <Box
        borderBottom={"1px solid #0000001c"}
        py={"1rem"}
        px={"4rem"}
        mb={"2rem"}
      >
        <Text fontSize={"3xl"}>Shops Slider</Text>
      </Box>

      <Slider {...settings}>
        {shops.map((item, index) => (
          <ShopsCard item={item} key={index} />
        ))}
      </Slider>
    </Container>
  );
};

export default ShopsSlider;
