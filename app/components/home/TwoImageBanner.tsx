import { Box, Container, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";

const TwoImageBanner = () => {
  const image = [
    {
      url: "https://yoori.spagreen.net/public/images/20240218163717image_620x320-40.png",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20240218163717image_620x320-413.png",
    },
  ];

  return (
    <Container maxW={"7xl"}>
      <Box display={"flex"} justifyContent={"center"}>
        <Grid templateColumns="repeat(2, 1fr)" gap={"1rem"}>
          {image.map((item, index) => (
            <GridItem key={index} colSpan={{ base: 2, md: 1 }}>
              <Box overflow="hidden">
                <Image
                  src={item.url}
                  alt="no pic available"
                  transition="transform 0.3s ease"
                  _hover={{ transform: "scale(1.1)" }}
                />
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default TwoImageBanner;
