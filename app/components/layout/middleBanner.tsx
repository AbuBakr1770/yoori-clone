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
      {/* Laptop nav start */}
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
            <Link
              href={"/favourite"}
              style={{ fontSize: "13px", cursor: "pointer" }}
            >
              <FaRegHeart fontSize={"2rem"} className="cursor-pointer" />
            </Link>

            <Link
              href={"/cart"}
              style={{ fontSize: "13px", cursor: "pointer" }}
            >
              <FaShoppingBag fontSize={"2rem"} className="cursor-pointer" />
            </Link>

            <Link
              href={"/profile"}
              style={{ fontSize: "13px", cursor: "pointer" }}
            >
              <IoPersonOutline fontSize={"2rem"} className="cursor-pointer" />
            </Link>
          </Box>
          <Box>
            <Link
              href={"/login"}
              style={{ fontSize: "13px", cursor: "pointer" }}
            >
              Sign in
            </Link>
            <Link
              href={"/register"}
              style={{ fontSize: "13px", cursor: "pointer", display: "block" }}
            >
              Register
            </Link>
          </Box>
        </Box>
      </Container>
      {/* Laptop nav end*/}

      {/* Mobile Nav start*/}
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
              <Link href={"/favourite"}>
                <FaRegHeart fontSize={"1rem"} className="cursor-pointer" />
              </Link>
              <Link href={"/cart"}>
                <FaShoppingBag fontSize={"1rem"} className="cursor-pointer" />
              </Link>
              <Link href={"/profile"}>
                <IoPersonOutline fontSize={"1rem"} className="cursor-pointer" />
              </Link>
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
      {/* Mobile Nav end*/}
    </div>
  );
};

export default MiddleBanner;
