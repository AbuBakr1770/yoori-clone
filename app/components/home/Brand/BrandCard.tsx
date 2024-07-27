import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";

const BrandCard = ({ item }) => {
  return (
    <div>
      <Box
        mr={4}
        border={"1px solid #0000001c"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box p={5} textAlign={"center"}>
          <Image
            src={item.url}
            alt="no brand "
            _hover={{ transform: "scale(1.1)" }}
            transition="transform 0.8s ease"
          />
        </Box>
        <Box w={"-webkit-fill-available"}>
          <Button
            bg={"var(--background-yellow-theme)"}
            borderRadius={"none"}
            w={"100%"}
          >
            {item.name}
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default BrandCard;
