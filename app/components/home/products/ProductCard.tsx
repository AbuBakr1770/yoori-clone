"use client";
import { Box, Image, Text, IconButton, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import ProductModal from "./ProductModal";
import { Item } from "@/app/interfaces/products";
import Link from "next/link";

interface Props {
  item: Item;
}

const ProductCard = ({ item }: Props) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <Box
      border="1px solid #00000040"
      p="10px"
      mx="5px"
      position="relative"
      borderRadius={"15px"}
      width="auto"
      _hover={{ ".hover-buttons": { opacity: 1, transform: "translateX(0)" } }}
      mb={2}
    >
      <Box
        width="auto"
        position="relative"
        display={"flex"}
        justifyContent={"center"}
      >
        <Link href={"/products/detail"}>
          <Image
            src={item.url}
            alt={item.name}
            _hover={{ transform: "scale(1.1)" }}
            transition="transform 0.5s ease"
          />
        </Link>

        <Box
          position="absolute"
          top="25%"
          right="5px"
          transform="translateY(-5%) translateX(50px)"
          display="flex"
          flexDirection="column"
          opacity={0}
          transition="opacity 0.5s ease, transform 0.5s ease"
          className="hover-buttons"
        >
          <IconButton
            aria-label="Add to cart"
            icon={<FaShoppingCart />}
            m="5px"
            _hover={{ transform: "scale(1.1)" }}
          />
          <IconButton
            aria-label="Add to wishlist"
            icon={<CiSearch />}
            onClick={() => {
              console.log("clicked");
              onOpen();
            }}
            m="5px"
            _hover={{ transform: "scale(1.1)" }}
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text
          display="flex"
          gap="8px"
          justifyContent="center"
          alignItems="center"
        >
          ${item.price}
        </Text>
        <Text>{item.name}</Text>
      </Box>
      <Box display="flex" justifyContent="center">
        <ReactStars
          count={5}
          size={24}
          activeColor="#ffd700"
          value={item.rating}
          edit={false}
        />
      </Box>
      <ProductModal item={item} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default ProductCard;
