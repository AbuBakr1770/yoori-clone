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
  Image,
  Radio,
  Stack,
  RadioGroup,
} from "@chakra-ui/react";
import React from "react";
import CartPriceDetails from "../components/cart/CartPriceDetails";
import { FaPlus } from "react-icons/fa";

const CartPaymentPage = () => {
  const steps = [
    { title: "Cart", description: "View your products" },
    { title: "Check Out", description: "Confirm address and payment" },
    { title: "Third", description: "Select Rooms" },
  ];

  const { activeStep } = useSteps({
    index: 3,
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
              <RadioGroup>
                <Stack spacing={4} direction="row" wrap="wrap">
                  <Box
                    borderWidth="1px"
                    borderRadius="md"
                    p={4}
                    width="fit-content"
                  >
                    <FormControl display="flex" alignItems="center">
                      <Radio
                        id="cash_on_delivery"
                        name="payment"
                        value="cash_on_delivery"
                      />
                      <FormLabel
                        htmlFor="cash_on_delivery"
                        mb={0}
                        ml={2}
                        display="flex"
                        alignItems="center"
                      >
                        <Image
                          src="https://shopifellow.com/public/images/payment-method/cash.svg"
                          alt="Cash on Delivery"
                          boxSize="24px"
                          mr={2}
                        />
                        Cash on Delivery
                      </FormLabel>
                    </FormControl>
                  </Box>

                  {/* Add more payment options here */}
                </Stack>
              </RadioGroup>
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

export default CartPaymentPage;
