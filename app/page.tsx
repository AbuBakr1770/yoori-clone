"use client";
import Image from "next/image";
import HeroSection from "./components/home/heroSection";
import Campaign from "./components/home/campaign/campaign";
import ProductCardSlider from "./components/home/products/ProductCardSlider";
import Products from "./components/home/products/products";
import TwoImageBanner from "./components/home/TwoImageBanner";
import ProductCategorySlider from "./components/home/ProductCategories/ProductCategorySlider";
import ProductCategories from "./components/home/ProductCategories/ProductCategories";
import { Box } from "@chakra-ui/react";
import Blogs from "./components/home/blogs/Blogs";
import Brands from "./components/home/Brand/Brands";
import ShopsSlider from "./components/home/Shops/ShopsSlider";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Campaign />
      <Products title={"Best Products"} />
      {/* <TwoImageBanner /> */}
      <Products title={"Popular Products"} />
      <ProductCategories type={"simple"} />
      <Box bg={"#f8f8f8"} p={"1rem"} pb={"2rem"} mt={"1.5rem"} mb={"1rem"}>
        <ProductCategories type={"of_the_month"} />
      </Box>
      <Products title={"Todays Deals"} />
      <TwoImageBanner />
      <Blogs />
      <Brands />
      <ShopsSlider />
      <TwoImageBanner />
    </main>
  );
}
