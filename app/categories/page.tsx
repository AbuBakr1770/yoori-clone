import { Box, Container, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

const Categories = () => {
  const categories = [
    {
      url: "https://shopifellow.com/public/images/20231225192817image_190x230_media_375.png",
      name: "Travel",
    },
    {
      url: "https://shopifellow.com/public/images/20231225192817image_190x230_media_375.png",
      name: "Fashion",
    },
    {
      url: "https://shopifellow.com/public/images/20231225192817image_190x230_media_375.png",
      name: "Auto",
    },
    {
      url: "https://shopifellow.com/public/images/20231225192817image_190x230_media_375.png",
      name: "Neon",
    },
    {
      url: "https://shopifellow.com/public/images/20231225192817image_190x230_media_375.png",
      name: "Decoration",
    },
  ];
  return (
    <Container maxW={"7xl"}>
      <Box>
        <Box borderBottom={"1px solid #0000001f"} p={2} mb={10}>
          <Text>Categoreies</Text>
        </Box>

        <Box
          mb={"2rem"}
          //  display={"flex"}
          //  justifyContent={"center"}
        >
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
              xl: "repeat(4 , 1fr)",
            }}
            gap={3}
          >
            {categories.map((item, index) => (
              <GridItem colSpan={1}>
                <Box className="p-4 bg-white shadow-md rounded-lg flex flex-col items-center">
                  <Text className="text-lg font-semibold mb-4">
                    {item.name}
                  </Text>
                  <Box className="category-thumb">
                    {/* <Link href="https://shopifellow.com/category/travel-elg3a"> */}
                    <Image
                      src={item.url}
                      alt={item.name}
                      className="img-fluid"
                      boxSize="190px"
                    />
                    {/* </Link> */}
                  </Box>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Categories;
