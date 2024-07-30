"use client";
import Products from "@/app/components/home/products/products";
import RecentlyViewedCard from "@/app/components/recentlyViewedCard/RecentlyViewedCard";
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  IconButton,
  Image,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsCartPlus, BsPlus } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import {
  FaCheckCircle,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { IoGitCompareOutline } from "react-icons/io5";

const ProductDetailPage = () => {
  const recentlyReviewedProducts = [
    { name: "item name 1", price: "500" },
    { name: "item name 2", price: "800" },
    { name: "item name 3", price: "5800" },
    { name: "item name 4", price: "9500" },
  ];
  return (
    <div>
      <Container maxW={"7xl"} my={5}>
        <Grid templateColumns={"repeat(12,1fr)"} mb={3}>
          <GridItem colSpan={3}>
            <Box>
              <Image
                src="https://shopifellow.com/public/images/20231225222812_original__media_456.jpg"
                alt="product detail image"
                maxHeight={"100%"}
                height={"500px"}
              />
            </Box>
          </GridItem>

          <GridItem colSpan={6}>
            <VStack spacing={5} justifyContent={"start"} alignItems={"start"}>
              <Text
                sx={{ fontSize: "20px", lineHeight: "30px", fontWeight: "500" }}
              >
                Daily Ritual Women's Jersey Standard-Fit Ballet-Back T-Shirt
                Dress
              </Text>

              <Button colorScheme="green" leftIcon={<FaCheckCircle />}>
                In Stock
              </Button>

              <Text
                sx={{ fontSize: "20px", color: "#c9151b", fontWeight: "600" }}
              >
                RS. 500
              </Text>

              <Box p={5} border={"1px solid #e1e1e1"} borderRadius={"7px"}>
                <Text sx={{ fontSize: "15px" }}>
                  A casual t-shirt dress that is fitted through the chest and
                  straight through the waist and hips with an open neckline
                  Featuring a ballet back, pair this dress with your favorite
                  flats or tennis shoes Made from our customer loved jersey
                  fabric that is soft, smooth, with a beautiful drape An Amazon
                  brand
                </Text>
              </Box>

              <Box
                display={"flex"}
                gap={3}
                border={"1px solid #e1e1e1"}
                p={3}
                alignItems={"center"}
              >
                <Button rightIcon={<BsPlus />} leftIcon={<FiMinus />}>
                  1
                </Button>

                <Text> Total Price: RS. 500</Text>
              </Box>

              <Box border={"1px solid #e1e1e1"} padding={3}>
                <Box display={"flex"} gap={"3"} mb={2}>
                  <Text borderRight={"1px solid #e1e1e1"} pr={2}>
                    0 Days
                  </Text>

                  <Text>Estimated delivery time</Text>
                </Box>

                <Box gap={1} display={"flex"}>
                  <Button
                    bg={"black"}
                    color={"white"}
                    leftIcon={<CiShoppingCart />}
                  >
                    Add to cart
                  </Button>
                  <Button variant={"outline"} leftIcon={<BsCartPlus />}>
                    Buy Now
                  </Button>
                  <Button variant={"ghost"} leftIcon={<IoGitCompareOutline />}>
                    compare
                  </Button>
                </Box>
              </Box>

              <Box display={"flex"} gap={2}>
                <FaFacebook
                  color="blue"
                  className="transform transition-transform duration-800 hover:scale-110"
                  fontSize={"1.8rem"}
                />
                <FaLinkedin
                  color="blue"
                  className="transform transition-transform duration-800 hover:scale-110"
                  fontSize={"1.8rem"}
                />
                <FaTwitter
                  color="blue"
                  className="transform transition-transform duration-800 hover:scale-110"
                  fontSize={"1.8rem"}
                />
                <FaWhatsapp
                  color="green"
                  className="transform transition-transform duration-800 hover:scale-110"
                  fontSize={"1.8rem"}
                />
              </Box>
            </VStack>
          </GridItem>

          <GridItem colSpan={3}>
            <Box>
              <Box p={4} pt={0}>
                <Text borderBottom={"1px solid #e1e1e1"} pb={2}>
                  Recently Viewed
                </Text>
              </Box>
              <VStack>
                {recentlyReviewedProducts.map((item, index) => (
                  <Box w={"85%"}>
                    <RecentlyViewedCard item={item} key={index} />
                  </Box>
                ))}
                {/* <RecentlyViewedCard /> */}
              </VStack>
            </Box>
          </GridItem>
        </Grid>

        <Box border={"1px solid #e1e1e1"} borderRadius={"15px"} p={2} m={1}>
          <Tabs>
            <TabList>
              <Tab>Details</Tab>
              <Tab>Reviews</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <UnorderedList
                  spacing={4}
                  color="gray.600"
                  fontFamily="Nunito, sans-serif"
                >
                  <ListItem>
                    A casual t-shirt dress that is fitted through the chest and
                    straight through the waist and hips with an open neckline
                  </ListItem>
                  <ListItem>
                    Featuring a ballet back, pair this dress with your favorite
                    flats or tennis shoes
                  </ListItem>
                  <ListItem>
                    Made from our customer loved jersey fabric that is soft,
                    smooth, with a beautiful drape
                  </ListItem>
                  <ListItem>An Amazon brand</ListItem>
                  <ListItem>90% Viscose, 10% Elastane</ListItem>
                  <ListItem>Imported</ListItem>
                  <ListItem>Pull On closure</ListItem>
                  <ListItem>Machine Wash</ListItem>
                  <ListItem>
                    STYLE - Wide scoop neck 2-fer top with mock tank top insert,
                    flutter short sleeves and finished hem on a loose fit
                    pullover body
                  </ListItem>
                  <ListItem>
                    VERSATILITY - Goes great with any bottom from pants to jeans
                    and leggings to shorts or skirts, perfect warm weather
                    attire
                  </ListItem>
                  <ListItem>
                    LENGTH - Ladies cute trendy tee is 25 inches from shoulder
                    to hem with a 22 inch hem sweep and 7 inch short sleeves
                  </ListItem>
                  <ListItem>
                    Anne Klein Jeans – Tailored garments to highlight your best
                    features...FEARLESSNESS, STRENGTH and INDEPENDENCE
                  </ListItem>
                </UnorderedList>
              </TabPanel>
              <TabPanel>
                <Box>
                  <Text fontWeight={700} fontSize={"22px"}>
                    Reviews Go Here
                  </Text>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        <Box>
          <Products title={"Popular Products"} />
        </Box>
      </Container>
    </div>
  );
};

export default ProductDetailPage;
