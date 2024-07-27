import { Grid, GridItem, Box, Container } from "@chakra-ui/react";
import React from "react";
import VendorChatBox from "../components/vendor-chat/ChatBox";
import VendorChatDetail from "../components/vendor-chat/VendorChatDetail";
import VendorTabs from "../components/vendor-chat/VendorTabs";

const VendorChatPage = () => {
  return (
    <Container maxW={"7xl"}>
      <Box p={5} mt={5}>
        <Grid templateColumns="repeat(5, 1fr)" gap={"1rem"}>
          <GridItem colSpan={{ base: 5, md: 5, lg: 3 }} mb={"3rem"}>
            <VendorChatDetail />
          </GridItem>
          <GridItem colSpan={{ base: 5, md: 5, lg: 2 }}>
            <VendorChatBox />
          </GridItem>
        </Grid>

        <Box mt={6}>
          <VendorTabs />
        </Box>
      </Box>
    </Container>
  );
};

export default VendorChatPage;
