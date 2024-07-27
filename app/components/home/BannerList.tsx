import {
  Box,
  Container,
  Grid,
  GridItem,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { FaAmbulance } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";

const BannerList = () => {
  return (
    <Container maxW={"7xl"} mb={"1rem"} display={{ base: "none", lg: "block" }}>
      <Box mt={"1rem"}>
        <Grid
          // display={"flex"}
          listStyleType={"none"}
          justifyContent={"space-between"}
          alignItems={"center"}
          border={"1px solid #0000001c"}
          templateColumns="repeat(4, 1fr)"
          // borderRadius={"25px"}
        >
          <GridItem colSpan={{ base: 2, lg: 1 }}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              padding={"1rem"}
              gap={"20px"}
            >
              <FaAmbulance color="#ba0202" fontSize={"3rem"} />
              <Box>
                <Text>Free Shipping & Returns</Text>
                <Text color={"#0000004f"}> For all orders over $100</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 2, lg: 1 }}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              padding={"1rem"}
              gap={"20px"}
            >
              <IoChatbubblesOutline color="#ba0202" fontSize={"3rem"} />
              <Box>
                <Text>Customer Support</Text>
                <Text color={"#0000004f"}>Call or Email us 24X7</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 2, lg: 1 }}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              padding={"1rem"}
              gap={"20px"}
            >
              <TfiReload color="#ba0202" fontSize={"3rem"} />
              <Box>
                <Text>Secure Payment</Text>
                <Text color={"#0000004f"}>We ensure secure payment</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem colSpan={{ base: 2, lg: 1 }}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              padding={"1rem"}
              gap={"20px"}
            >
              <CiCreditCard1 color="#ba0202" fontSize={"3rem"} />
              <Box>
                <Text>Money Back Guarantee</Text>
                <Text color={"#0000004f"}>Any back within 30 days</Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
};

export default BannerList;
