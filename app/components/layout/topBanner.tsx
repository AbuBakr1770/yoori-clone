import {
  Box,
  Menu,
  MenuButton,
  Text,
  Button,
  MenuList,
  Container,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";
import { FaAngleDown, FaGooglePlay, FaApple } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

const TopBanner = () => {
  return (
    <div>
      <Box display={"flex"} justifyContent={"space-between"} bg={"#f5f5f5"}>
        <Container
          maxW={"7xl"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Box>
            <Box
              // display={"inline-block"}
              sx={{
                display: { base: "none", lg: "inline-block" },
                // Other styles can be added here
              }}
            >
              <Box></Box>
              <Menu>
                <MenuButton rightIcon={<FaAngleDown />} as={Button}>
                  English
                </MenuButton>
                <MenuList sx={{ width: "50px !important" }}>
                  <MenuItem>Urdu</MenuItem>
                  <MenuItem>French</MenuItem>
                </MenuList>
              </Menu>
            </Box>

            <Box
              sx={{
                display: { base: "none", lg: "inline-block" },
                // Other styles can be added here
              }}
            >
              <Menu>
                <MenuButton rightIcon={<FaAngleDown />} as={Button}>
                  Us Dollar
                </MenuButton>
                <MenuList>
                  <MenuItem>Taka</MenuItem>
                  <MenuItem>Dinar</MenuItem>
                </MenuList>
              </Menu>
            </Box>

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
            <Box sx={{ display: { base: "none", lg: "flex" } }}>
              <Button>
                <LuMapPin />
                Track
              </Button>

              <Button>Compare</Button>
              <Button>Blog</Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default TopBanner;
