import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";

const BrandCard = ({ item }) => {
  return (
    <div>
      <Box
        mx={4}
        border={"1px solid #0000001c"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box p={5} textAlign={"center"}>
          <Image src={item.url} />
        </Box>
        <Box w={"-webkit-fill-available"}>
          <Button bg={"#febd0d"} w={"100%"}>
            {item.name}
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default BrandCard;
