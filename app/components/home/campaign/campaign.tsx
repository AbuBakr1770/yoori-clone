import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import CampaignCardSlider from "./campaignCardSlider";

const Campaign = () => {
  return (
    <div>
      <Container
        maxW={"7xl"}
        borderBottom={"1px solid #0000001c"}
        py={"1rem"}
        mb={"1rem"}
      >
        <Text>Campaign</Text>
      </Container>
      <CampaignCardSlider />
    </div>
  );
};

export default Campaign;
