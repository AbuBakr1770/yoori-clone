"use client";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Text,
  Grid,
  Checkbox,
  GridItem,
  Image,
  Input,
} from "@chakra-ui/react";
import React from "react";

const LoginPage = () => {
  const sxStyles = {
    my: "13px",
  };
  return (
    <div>
      <Container
        maxW={"7xl"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mb={3}
      >
        <Grid templateColumns={"repeat(5,1fr)"}>
          <GridItem colSpan={2}>
            <Image
              src="https://shopifellow.com/public/images/default/default-image-320x520.png"
              alt="Image is here yah know"
            />
          </GridItem>
          <GridItem
            colSpan={3}
            display={"flex"}
            // justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            // p={7}
            border={"1px solid #00000026"}
          >
            <Box w={"90%"}>
              <Text sx={sxStyles} textAlign={"center"} fontWeight={800}>
                SIGN IN
              </Text>
              <Text sx={sxStyles} textAlign={"center"} fontWeight={600}>
                Sign In To Continue Shopping
              </Text>

              <FormControl sx={sxStyles}>
                {/* <FormLabel>Email address</FormLabel> */}
                <Input type="email" placeholder="Enter your email" />
                {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
              </FormControl>

              <FormControl sx={sxStyles}>
                {/* <FormLabel>Password</FormLabel> */}
                <Input type="password" placeholder="Enter your password" />
              </FormControl>

              <Box
                sx={sxStyles}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Checkbox mb={1} defaultChecked>
                  Rember Me
                </Checkbox>

                <Text>Forgot your password</Text>
              </Box>

              <Button sx={sxStyles} w={"100%"} bg={"black"} color={"white"}>
                Sign in
              </Button>

              <Text textAlign={"center"}>
                Don't have an account?{" "}
                <span style={{ fontWeight: 700 }}> Sign Up</span>
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
};

export default LoginPage;
