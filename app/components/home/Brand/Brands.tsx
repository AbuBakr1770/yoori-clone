"use client";
import { Box, Text, Container } from "@chakra-ui/react";
import { title } from "process";
import React from "react";
import Slider from "react-slick";
import BrandCard from "./BrandCard";

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

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 1024, // xl
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 430, // sm
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Container maxW={"7xl"} mb={"1rem"}>
      <Box>
        <Box
          borderBottom={"1px solid #0000001c"}
          py={"1rem"}
          px={"4rem"}
          mb={"2rem"}
        >
          <Text fontSize={"3xl"}>Brands</Text>
        </Box>

        <Slider {...settings}>
          {brands.map((item, index) => (
            <BrandCard item={item} key={index} />
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default Brands;
