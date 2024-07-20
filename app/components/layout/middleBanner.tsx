import { Box, FormControl, Input, Text } from "@chakra-ui/react";
import React from "react";
import { FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";

const MiddleBanner = () => {
  return (
    <div>
      <Box
        px={"3.5rem"}
        mt={"20px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box textAlign={"center"}>
          <Text fontSize={"2.5rem"} fontStyle={"italic"} fontWeight={800}>
            YOORI
          </Text>
        </Box>
        <Box w={"55%"}>
          <FormControl>
            <Input type="text" placeholder="I'm Looking For" />
          </FormControl>
        </Box>
        <Box
          display={"flex"}
          gap={"13px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box display={"flex"} gap={"10px"}>
            <FaRegHeart fontSize={"2rem"} className="cursor-pointer" />
            <FaShoppingBag fontSize={"2rem"} className="cursor-pointer" />
            <IoPersonOutline fontSize={"2rem"} className="cursor-pointer" />
          </Box>
          <Box>
            <Text fontSize={"13px"} className="cursor-pointer">
              Sign in
            </Text>
            <Text fontSize={"13px"} className="cursor-pointer">
              Register
            </Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MiddleBanner;
