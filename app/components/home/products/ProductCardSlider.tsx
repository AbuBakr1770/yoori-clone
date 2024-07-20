"use client";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { SlCalender } from "react-icons/sl";
import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";

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
      name: "Name 1",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20220329123832image_190x230_media_478.png",
      price: "15",
      rating: 4,
      name: "Name 1",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20220329150503image_190x230_media_254.png",
      price: "15",
      rating: 5,
      name: "Name 1",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20220904113043image_190x230-117.png",
      price: "15",
      rating: 1,
      name: "Name 1",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20220331153805image_190x230_media_99.png",
      price: "15",
      rating: 3,
      name: "Name 1",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20231115124358image_190x230-174.png",
      price: "15",
      rating: 3,
      name: "Name 1",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20220328184956image_190x230_media_135.png",
      price: "15",
      rating: 3,
      name: "Name 1",
    },
  ];

  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Box px={"8rem"}>
        <Slider {...settings}>
          {campaignCardData.map((item, index) => (
            <Box
              key={index}
              sx={{
                border: "1px solid #00000040",
                width: "auto !important",
                p: "10px",
                mx: "5px",
              }}
            >
              <Box sx={{ width: "auto" }}>
                <Image src={item.url} alt={item.name} />
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Text
                  display={"flex"}
                  gap={"8px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  {" "}
                  ${item.price}
                </Text>
                <Text>{item.name}</Text>
              </Box>
              <Box display={"flex"} justifyContent={"center"}>
                <ReactStars
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                  value={item.rating}
                  edit={false}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </div>
  );
};

export default ProductCardSlider;
