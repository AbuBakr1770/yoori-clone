import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

const BlogsCard = ({ blog }) => {
  return (
    <>
      <Box border="1px solid #00000017" mx={8}>
        <Image src={blog.url} height={"auto"} width={"100%"} />

        <Box p={4}>
          <Text fontSize="medium" fontWeight="bold" maxW="100%">
            {blog.heading}
          </Text>
          <Text mt={2}>{blog.subHeading}</Text>
          <Button mt={4}>Read More</Button>
        </Box>
      </Box>
    </>
  );
};

export default BlogsCard;
