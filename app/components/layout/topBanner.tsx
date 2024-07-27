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
  const btnStyles = { bg: "none", fontSize: "13px !important" };
  return (
    <div>
      <Box display={"flex"} justifyContent={"space-between"} bg={"#f5f5f5"}>
        <Container
          maxW={"7xl"}
          display={"flex"}
          justifyContent={"space-between"}
          paddingY={"8px"}
        >
          <Box
            display={{ base: "flex" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              sx={{
                display: { base: "none", lg: "inline-block" },
              }}
            >
              <Menu>
                <MenuButton sx={btnStyles} as={Text} mr={3}>
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
                <MenuButton sx={btnStyles} mr={3} as={Text}>
                  Us Dollar
                </MenuButton>
                <MenuList>
                  <MenuItem>Taka</MenuItem>
                  <MenuItem>Dinar</MenuItem>
                </MenuList>
              </Menu>
            </Box>

            <Text
              sx={btnStyles}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <FaGooglePlay className="mr-1 justify-center flex" />
              Google play
            </Text>
            <Text
              sx={btnStyles}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mx={2}
            >
              <FaApple className="mr-1 justify-center flex" />
              App Store
            </Text>
            <Text sx={btnStyles} m={0}>
              Be a Seller
            </Text>
          </Box>

          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Text fontSize={"13px"} fontWeight={800}>
              Call : 123456
            </Text>
            <Box sx={{ display: { base: "none", lg: "flex" } }}>
              <Button sx={btnStyles}>
                <LuMapPin />
                Track
              </Button>

              <Button sx={btnStyles}>Compare</Button>
              <Button sx={btnStyles}>Blog</Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default TopBanner;
