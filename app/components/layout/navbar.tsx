"use client";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaAngleDown, FaApple, FaGooglePlay } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import TopBanner from "./topBanner";
import MiddleBanner from "./middleBanner";
import BottomBanner from "./bottomBanner";

const Navbar = () => {
  return (
    <div>
      <TopBanner />
      <MiddleBanner />
      <BottomBanner />
    </div>
  );
};

export default Navbar;
