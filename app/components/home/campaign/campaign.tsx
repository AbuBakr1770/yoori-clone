import { Box, Text } from "@chakra-ui/react";
import React from "react";
import CampaignCardSlider from "./campaignCardSlider";

const Campaign = () => {
  return (
    <div>
      <Box
        borderBottom={"1px solid #0000001c"}
        py={"1rem"}
        px={"4rem"}
        mb={"2rem"}
      >
        <Text>Campaign</Text>
      </Box>
      <CampaignCardSlider />
    </div>
  );
};

export default Campaign;
