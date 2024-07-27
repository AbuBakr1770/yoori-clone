import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import ProductCardSlider from "./ProductCardSlider";

const Products = ({ title }) => {
  return (
    <div>
      <Container
        borderBottom={"1px solid #0000001c"}
        py={"0.5rem"}
        // px={"4rem"}'
        maxW={"7xl"}
        mb={"1rem"}
        mt={"1rem"}
      >
        <Text>{title}</Text>
      </Container>
      <ProductCardSlider />
    </div>
  );
};

export default Products;
