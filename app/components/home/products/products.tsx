import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ProductCardSlider from "./ProductCardSlider";

const Products = ({ title }) => {
  return (
    <div>
      <Box
        borderBottom={"1px solid #0000001c"}
        py={"1rem"}
        px={"4rem"}
        mb={"2rem"}
      >
        <Text>{title}</Text>
      </Box>
      <ProductCardSlider />
    </div>
  );
};

export default Products;
