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
  Grid,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React from "react";
import CartPriceDetails from "../components/cart/CartPriceDetails";
import { FaPlus } from "react-icons/fa";

const CartCheckOutPage = () => {
  const steps = [
    { title: "Cart", description: "View your products" },
    { title: "Check Out", description: "Confirm address and payment" },
    { title: "Third", description: "Select Rooms" },
  ];

  const { activeStep } = useSteps({
    index: 2,
    count: steps.length,
  });

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
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        display={"flex"}
                        gap={2}
                        alignItems={"center"}
                      >
                        <FaPlus />
                        Add Address
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    border={"1px solid #00000021"}
                    p={5}
                    borderRadius={"10px"}
                  >
                    <Grid templateColumns={"repeat(2,1fr)"} gap={3}>
                      <GridItem colSpan={1}>
                        <FormControl>
                          <FormLabel>Name</FormLabel>
                          <Input type="text" />
                        </FormControl>
                      </GridItem>
                      <GridItem colSpan={1}>
                        <FormControl>
                          <FormLabel>Email</FormLabel>
                          <Input type="email" />
                        </FormControl>
                      </GridItem>
                      <GridItem colSpan={1}>
                        <FormControl>
                          <FormLabel>Phone</FormLabel>
                          <Input type="tel" />
                        </FormControl>
                      </GridItem>
                      <GridItem colSpan={1}>
                        <FormControl>
                          <FormLabel>Country</FormLabel>
                          <Input type="text" />
                        </FormControl>
                      </GridItem>
                      <GridItem colSpan={1}>
                        <FormControl>
                          <FormLabel>State</FormLabel>
                          <Input type="text" />
                        </FormControl>
                      </GridItem>
                      <GridItem colSpan={1}>
                        <FormControl>
                          <FormLabel>City</FormLabel>
                          <Input type="text" />
                        </FormControl>
                      </GridItem>
                      <GridItem colSpan={1}>
                        <FormControl>
                          <FormLabel>Postal Code</FormLabel>
                          <Input type="text" />
                        </FormControl>
                      </GridItem>
                      <GridItem colSpan={2}>
                        <FormControl>
                          <FormLabel>Address in detail</FormLabel>
                          <Textarea size={"md"} />
                        </FormControl>
                      </GridItem>
                      <GridItem colSpan={2}>
                        <Button color={"white"} bg={"black"}>
                          Add
                        </Button>
                      </GridItem>
                    </Grid>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
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

export default CartCheckOutPage;
