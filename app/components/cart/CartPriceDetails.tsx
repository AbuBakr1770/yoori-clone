import { Box, UnorderedList, ListItem, Button, Text } from "@chakra-ui/react";
import React from "react";

const CartPriceDetails = () => {
  return (
    <div>
      <Box>
        <Box borderBottom={"1px solid #0000001f"} p={2} mb={2}>
          <Text>Order Details</Text>
        </Box>

        <Box border={"1px solid #0000001f"} p={3}>
          <UnorderedList
            spacing={3}
            borderBottom={"1px solid #0000001f"}
            pb={4}
          >
            <ListItem display={"flex"} justifyContent={"space-between"}>
              <span>SubTotal</span>
              <span>Rs 700</span>
            </ListItem>
            <ListItem display={"flex"} justifyContent={"space-between"}>
              <span>Tax</span>
              <span>Rs 700</span>
            </ListItem>
            <ListItem display={"flex"} justifyContent={"space-between"}>
              <span>Discount</span>
              <span>Rs 700</span>
            </ListItem>
            <ListItem display={"flex"} justifyContent={"space-between"}>
              <span>Shipping cost</span>
              <span>Rs 700</span>
            </ListItem>
            <ListItem display={"flex"} justifyContent={"space-between"}>
              <span>Coupon Discount</span>
              <span>Rs 700</span>
            </ListItem>
          </UnorderedList>

          <Text pl={3} my={3} display={"flex"} justifyContent={"space-between"}>
            <span>Total</span>
            <span>Rs 12000</span>
          </Text>
          <Button bg={"black"} color={"white"} w={"100%"}>
            Proceed To Checkout
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default CartPriceDetails;
