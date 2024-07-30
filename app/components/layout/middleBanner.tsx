"use client";
import {
  Box,
  Container,
  FormControl,
  Input,
  ListItem,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";

const MiddleBanner = () => {
  return (
    <div>
      {/* Laptop nav */}
      <Container
        maxW={"7xl"}
        // px={"3.5rem"}
        mt={"20px"}
        sx={{ display: { base: "none", lg: "flex" } }}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box textAlign={"center"}>
          <Link
            href={"/"}
            style={{
              fontSize: "2.5rem",
              fontStyle: "italic",
              fontWeight: "800",
            }}
          >
            YOORI
          </Link>
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
      </Container>
      {/* Mobile Nav */}
      <Container
        maxW={"7xl"}
        sx={{ display: { base: "block", lg: "none" } }}
        // px={"3.5rem"}
        mt={"20px"}
        // display={"flex"}
        // justifyContent={"space-between"}
        // alignItems={"center"}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box textAlign={"center"}>
            <Link
              href={"/"}
              style={{
                fontSize: "1.7rem",
                fontStyle: "italic",
                fontWeight: "800",
              }}
            >
              YOORI
            </Link>
          </Box>
          <Box
            display={"flex"}
            gap={"13px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box display={"flex"} gap={"10px"}>
              <FaRegHeart fontSize={"1rem"} className="cursor-pointer" />
              <FaShoppingBag fontSize={"1rem"} className="cursor-pointer" />
              <IoPersonOutline fontSize={"1rem"} className="cursor-pointer" />
            </Box>
            <Box>
              <Link href={"login"}>
                <Text fontSize={"13px"} className="cursor-pointer">
                  Sign in
                </Text>
              </Link>

              <Link href={"/register"}>
                <Text fontSize={"13px"} className="cursor-pointer">
                  Register
                </Text>
              </Link>
            </Box>
          </Box>
        </Box>

        <Box display={"block"} my={"20px"}>
          <FormControl>
            <Input type="text" placeholder="I'm Looking For" />
          </FormControl>
        </Box>
      </Container>
    </div>
  );
};

export default MiddleBanner;
