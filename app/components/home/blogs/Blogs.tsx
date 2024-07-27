"use client";
import React from "react";
import Slider from "react-slick";
import BlogsCard from "./BlogsCard";
import { Box, Container, Text } from "@chakra-ui/react";

const Blogs = () => {
  const blogs = [
    {
      url: "https://yoori.spagreen.net/public/images/20221029103001image_260x175-86.png",
      heading: "I should be free of them were animals, and some of them.",
      subHeading: "I should be free of them were animals, and some of them.",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20221029103249image_260x175-77.png",
      heading: "The Cat's head began fading away the moment she appeared",
      subHeading: "I should be free of them were animals, and some of them.",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20221029103136image_260x175-453.png",
      heading: "Alice. 'Then you shouldn't talk,' said the Hatter, 'you.",
      subHeading: "I should be free of them were animals, and some of them.",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20221029103433image_260x175-112.png",
      heading: "White Rabbit, 'and that's a fact.' Alice did not like to.",
      subHeading: "I should be free of them were animals, and some of them.",
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
        breakpoint: 425, // sm
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Debug logging to check the settings being applied
  console.log("Slider settings:", settings);

  return (
    <Container maxW={"7xl"}>
      <Box>
        <Box
          borderBottom={"1px solid #0000001c"}
          py={"1rem"}
          // px={"4rem"}
          mb={"1rem"}
        >
          <Text fontSize={"3xl"}>Blogs</Text>
        </Box>
        <Box>
          <Slider {...settings}>
            {blogs.map((item, index) => (
              <BlogsCard blog={item} key={index} />
            ))}
          </Slider>
        </Box>
      </Box>
    </Container>
  );
};

export default Blogs;
