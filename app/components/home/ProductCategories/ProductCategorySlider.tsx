"use client";
import { Box, Button, Image, Text, Container } from "@chakra-ui/react";
import React from "react";
import { SlCalender } from "react-icons/sl";

import Slider from "react-slick";

const ProductCategorySlider = () => {
  const campaignCardData = [
    {
      url: "https://yoori.spagreen.net/public/images/20220328175123image_130x95-193.png",
      name: "Name 1",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20230226151321image_130x95-173.png",

      name: "Name 2",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20230226151410image_130x95-297.png",

      name: "Name 3",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20230226151333image_130x95-433.png",

      name: "Name 4",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20230226151359image_130x95-193.png",

      name: "Name 5",
    },
    {
      url: "https://yoori.spagreen.net/public/images/default/130x95_no_bg.png",

      name: "Name 6",
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
  return (
    <div>
      <Container maxW={"7xl"} mb={"1rem"}>
        <Slider {...settings}>
          {campaignCardData.map((item, index) => (
            <Box
              key={index}
              bg={"var(--background-yellow-theme-bg)"}
              sx={{
                border: "1px solid #00000040",
                borderRadius: "20px",
                width: "auto !important",
                p: "10px",
                mx: "5px",
              }}
            >
              <Box sx={{ width: "auto" }}>
                <Image
                  _hover={{ transform: "scale(1.1)" }}
                  transition="transform 0.3s ease"
                  src={item.url}
                  alt={item.name}
                />
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Text>{item.name}</Text>
              </Box>
            </Box>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default ProductCategorySlider;
