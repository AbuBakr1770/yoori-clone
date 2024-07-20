import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { FaAmbulance } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";

const BannerList = () => {
  return (
    <div>
      <Box mt={"1rem"}>
        <UnorderedList
          display={"flex"}
          listStyleType={"none"}
          justifyContent={"space-between"}
          alignItems={"center"}
          border={"1px solid #0000001c"}
          borderRadius={"25px"}
        >
          <ListItem>
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
          </ListItem>
          <ListItem>
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
          </ListItem>
          <ListItem>
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
          </ListItem>
          <ListItem>
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
          </ListItem>
        </UnorderedList>
      </Box>
    </div>
  );
};

export default BannerList;
