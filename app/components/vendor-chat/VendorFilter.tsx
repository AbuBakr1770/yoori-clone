"use client";
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";

const VendorFilter = () => {
  const [priceRange, setPriceRange] = useState([0.01, 7.01]);

  return (
    <Box className="p-4 bg-white shadow-md rounded-lg">
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="2" textAlign="left" my={2}>
                Price
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Box className="flex justify-between">
              <Input value={priceRange[0]} readOnly className="w-20" />
              <Text> - </Text>
              <Input value={priceRange[1]} readOnly className="w-20" />
            </Box>
            <Slider
              aria-label="slider-ex-1"
              defaultValue={priceRange}
              min={0.01}
              max={7.01}
              step={0.01}
              onChange={(val) => setPriceRange(val)}
              className="mt-4"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="2" textAlign="left" my={2}>
                Brand
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Box className="55555555 flex justify-start flex-col">
              <Checkbox>Imported</Checkbox>
              <Checkbox>Custom</Checkbox>
              <Checkbox>Non PTA</Checkbox>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="2" textAlign="left" my={2}>
                test
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Box className="55555555 flex justify-start flex-col">
              <Checkbox>Imported</Checkbox>
              <Checkbox>Custom</Checkbox>
              <Checkbox>Non PTA</Checkbox>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="2" textAlign="left" my={2}>
                Color
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Box className="55555555 flex justify-start flex-col">
              <Checkbox>Imported</Checkbox>
              <Checkbox>Custom</Checkbox>
              <Checkbox>Non PTA</Checkbox>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="2" textAlign="left" my={2}>
                Rating
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Box className="55555555 flex justify-start flex-col">
              <Checkbox>Imported</Checkbox>
              <Checkbox>Custom</Checkbox>
              <Checkbox>Non PTA</Checkbox>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default VendorFilter;
