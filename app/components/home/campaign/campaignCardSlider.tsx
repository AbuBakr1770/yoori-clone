"use client";
import { Box, Button, Image, Text, Container } from "@chakra-ui/react";
import React from "react";
import { SlCalender } from "react-icons/sl";
import Slider from "react-slick";

const CampaignCardSlider = () => {
  const campaignCardData = [
    {
      url: "https://yoori.spagreen.net/public/images/20230830171453image_374x374-109.png",
      date: "27 March 2022 - 30 April 2023",
      offer: "Test",
      name: "Name 1",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20230830171443image_374x374-5.png",
      date: "27 March 2022 - 30 April 2023",
      offer: "Test 2",
      name: "Name 2",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20230830171432image_374x374-98.png",
      date: "27 March 2022 - 30 April 2023",
      offer: "Test 3",
      name: "Name 3",
    },
  ];

  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // xl
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 0, // default
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   }
      // }
    ],
  };
  return (
    <div>
      <Container maxW={"7xl"} mb={"1rem"}>
        <Slider {...settings}>
          {campaignCardData.map((item, index) => (
            <Box
              key={index}
              sx={{
                border: "1px solid #00000040",
                width: "auto !important",
                p: "10px",
                mx: "1rem",
              }}
            >
              <Box sx={{ width: "auto" }}>
                <Image
                  src={item.url}
                  alt={item.offer}
                  _hover={{ transform: "scale(1.1)" }}
                  transition="transform 0.3s ease"
                />
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                mt={"15px"}
              >
                {/* <Text
                  display={"flex"}
                  gap={"8px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderBottom={"1px solid #00000040"}
                  paddingBottom={"9px"}
                  mb={"7px"}
                >
                  {" "}
                  <SlCalender />
                  {item.date}
                </Text> */}
                <Text my={"8px"}>{item.offer}</Text>
                <Text my={"7px"}>{item.name}</Text>
                <Button>Get Discount</Button>
              </Box>
            </Box>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default CampaignCardSlider;
