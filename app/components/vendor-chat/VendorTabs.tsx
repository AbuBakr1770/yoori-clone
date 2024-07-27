import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  GridItem,
  Grid,
  Box,
  Text,
  Menu,
  Button,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import VendorFilter from "./VendorFilter";
import { FaAngleDown, FaListUl } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";

const VendorTabs = () => {
  return (
    <div>
      <Tabs align="center">
        <TabList>
          <Tab>Store</Tab>
          <Tab>Coupons</Tab>
          <Tab>Products</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>Store</p>
          </TabPanel>
          <TabPanel>
            <p>No Coupons Available</p>
          </TabPanel>
          <TabPanel>
            <Grid templateColumns="repeat(5, 1fr)">
              <GridItem colSpan={{ base: 5, lg: 1 }} mb={{ md: "1rem" }}>
                <VendorFilter />
              </GridItem>
              <GridItem colSpan={{ base: 5, lg: 4 }}>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    p={"2"}
                    gap={"10px"}
                    my={5}
                  >
                    <Text
                      fontWeight={"700"}
                      display={{ base: "none", md: "flex" }}
                    >
                      Sort By
                    </Text>
                    <Menu>
                      <MenuButton as={Button} rightIcon={<FaAngleDown />}>
                        Filter by
                      </MenuButton>
                      <MenuList>
                        <MenuItem>Newest</MenuItem>
                        <MenuItem>Oldest</MenuItem>
                        <MenuItem>Top Sellers</MenuItem>
                        <MenuItem>Top Selling</MenuItem>
                      </MenuList>
                    </Menu>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    p={"2"}
                    gap={"10px"}
                  >
                    <Menu>
                      <MenuButton as={Button} rightIcon={<FaAngleDown />}>
                        Show by 15
                      </MenuButton>
                      <MenuList>
                        <MenuItem> Show by 25</MenuItem>
                        <MenuItem> Show by 30</MenuItem>
                        <MenuItem> Show by 45</MenuItem>
                      </MenuList>
                    </Menu>
                    {/* <Box display={"flex"} gap={"15px"}>
                      <FaListUl
                        style={{
                          color: "var(--background-yellow-theme)",
                          fontSize: "1.3rem",
                        }}
                      />
                      <BsFillGridFill
                        style={{
                          color: "var(--background-yellow-theme)",
                          fontSize: "1.3rem",
                        }}
                      />
                    </Box> */}
                  </Box>
                </Box>
              </GridItem>
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default VendorTabs;
