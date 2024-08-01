"use client";
import React from "react";
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
