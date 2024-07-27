import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import ShopsCard from "../components/home/Shops/ShopsCard";

const SellersPage = () => {
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
    {
      mainUrl:
        "https://yoori.spagreen.net/public/images/seller/20231101123528-seller_banner-297x203-22.jpg",
      subUrl:
        "https://yoori.spagreen.net/public/images/seller/20231101123527image_small_two_seller_logo182.jpg",
      name: "Shop 4",
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
  return (
    <div>
      <Container maxW={"7xl"}>
        <Box borderBottom={"1px solid #0000001c"} mb={3}>
          <Text fontSize={"1.7rem"}>Sellers</Text>
        </Box>

        <Grid templateColumns={"repeat(12,1fr)"} mb={3}>
          {shops.map((item, index) => (
            <GridItem colSpan={{ base: 12, md: 6, lg: 4 }} mb={5}>
              <ShopsCard item={item} key={index} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default SellersPage;
