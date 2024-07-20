import {
  Box,
  Menu,
  MenuButton,
  Text,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";
import { FaAngleDown, FaGooglePlay, FaApple } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

const TopBanner = () => {
  return (
    <div>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        bg={"#f5f5f5"}
        px={"3rem"}
      >
        <Box>
          <Menu>
            <MenuButton rightIcon={<FaAngleDown />} as={Button}>
              English
            </MenuButton>
            <MenuList sx={{ width: "50px !important" }}>
              <MenuItem>Urdu</MenuItem>
              <MenuItem>French</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton rightIcon={<FaAngleDown />} as={Button}>
              Us Dollar
            </MenuButton>
            <MenuList>
              <MenuItem>Taka</MenuItem>
              <MenuItem>Dinar</MenuItem>
            </MenuList>
          </Menu>

          <Button>
            <FaGooglePlay className="mr-1 justify-center flex" />
            Google play
          </Button>
          <Button>
            <FaApple className="mr-1 justify-center flex" />
            App Store
          </Button>
          <Button>Become A Seller</Button>
        </Box>

        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Text>Call : 123456</Text>

          <Button>
            <LuMapPin />
            Track
          </Button>

          <Button>Compare</Button>
          <Button>Blog</Button>
        </Box>
      </Box>
    </div>
  );
};

export default TopBanner;
