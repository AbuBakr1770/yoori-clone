"use client";
import {
  Box,
  Container,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Grid,
  GridItem,
  Image,
  Text,
  UnorderedList,
  ListItem,
  VStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import CartPriceDetails from "../components/cart/CartPriceDetails";

const CartPage = () => {
  const steps = [
    { title: "Cart", description: "View your products" },
    { title: "Check Out", description: "Confirm address and payment" },
    { title: "Third", description: "Select Rooms" },
  ];

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  const products = [
    {
      url: "https://yoori.spagreen.net/public/images/20220403164037image_190x230_media_216.png",
      price: "15",
      rating: 2,
      name: "Name 1",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20220328160446image_190x230_media_482.png",
      price: "15",
      rating: 3,
      name: "Name2",
    },
    {
      url: "https://yoori.spagreen.net/public/images/20220329123832image_190x230_media_478.png",
      price: "15",
      rating: 4,
      name: "Name 3",
    },
  ];
  return (
    <div>
      <Container maxW={"7xl"} my={3}>
        <Box my={7}>
          <Stepper index={activeStep}>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>

                <Box flexShrink="0">
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </Box>

        <Box mt={15}>
          <Grid templateColumns={"repeat(6,1fr)"}>
            <GridItem colSpan={{ base: 6, lg: 3 }}>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Product</Th>
                      <Th>Unit Price</Th>
                      <Th>Quantity</Th>
                      <Th>Total</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {products.map((item, index) => (
                      <Tr>
                        <Td display={"flex"} alignItems={"center"} gap={2}>
                          <Image src={item.url} alt={item.name} height={50} />
                          <Text>{item.name}</Text>
                        </Td>
                        <Td>{item.price}</Td>
                        <Td display={"flex"} gap={2} alignItems={"center"}>
                          <IconButton bg={"transparent"} icon={<FaPlus />} />
                          3
                          <IconButton bg={"transparent"} icon={<FaMinus />} />
                        </Td>
                        <Td>{item.price * 3}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </GridItem>

            <GridItem
              colStart={{ base: 1, lg: 5 }}
              colEnd={{ base: 5, lg: 7 }}
              my={{ base: 3, lg: 0 }}
            >
              <CartPriceDetails />
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default CartPage;
