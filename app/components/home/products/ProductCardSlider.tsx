"use client";
import { Box, Button, Container, Image, Text } from "@chakra-ui/react";
import React from "react";
import { SlCalender } from "react-icons/sl";
import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";
import ProductCard from "./ProductCard";

const ProductCardSlider = () => {
  const campaignCardData = [
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
      {
        breakpoint: 320, // sm
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  // Debug logging to check the settings being applied
  console.log("Slider settings:", settings);

  return (
    <div>
      <Container maxW={"7xl"} mb={"1rem"}>
        <Slider {...settings}>
          {campaignCardData.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default ProductCardSlider;
