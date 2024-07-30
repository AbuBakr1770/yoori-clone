import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
interface Item {
  name: string;
  price: string;
}

interface Props {
  item: Item;
}
const RecentlyViewedCard = ({ item }: Props) => {
  console.log("🚀 ~ RecentlyViewedCard ~ item:", item);
  return (
    <div>
      <Box display={"flex"} border={"1px solid #e1e1e1"} p={3} gap={4}>
        <Image
          src="https://shopifellow.com/public/images/20231225222452image_40x40_media_400.png"
          alt={"pic name"}
          height={"40px"}
          maxHeight={"100%"}
        />

        <Box>
          <Text>{item.name}</Text>
          <Text> {`RS ${item.price}`}</Text>
        </Box>
      </Box>
    </div>
  );
};

export default RecentlyViewedCard;
