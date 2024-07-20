import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ProductCategorySlider from "./ProductCategorySlider";

const ProductCategories = ({ type }) => {
  return (
    <div>
      {type === "simple" ? (
        <Box
          borderBottom={"1px solid #0000001c"}
          py={"1rem"}
          px={"4rem"}
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
    </div>
  );
};

export default ProductCategories;
