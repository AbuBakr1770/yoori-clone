import { Box, Text, Container } from "@chakra-ui/react";
import React from "react";
import ProductCategorySlider from "./ProductCategorySlider";

const ProductCategories = ({ type }) => {
  return (
    <Container maxW={"7xl"}>
      {type === "simple" ? (
        <Box
          borderBottom={"1px solid #febd0d29"}
          py={"1rem"}
          // px={"4rem"}
          mb={"2rem"}
        >
          <Text>Products Categories</Text>
        </Box>
      ) : (
        <Box textAlign={"center"}>
          <Text fontSize={"2xl"} mb={"1rem"}>
            Top Categories Of This Month
          </Text>
        </Box>
      )}

      <ProductCategorySlider />
    </Container>
  );
};

export default ProductCategories;
