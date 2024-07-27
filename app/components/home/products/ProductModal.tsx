import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  useDisclosure,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import React from "react";

const ProductModal = ({ item, isOpen, onClose }) => {
  //   const { onOpen } = useDisclosure();
  return (
    <div>
      <Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{item.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>
                <Grid templateColumns="repeat(2, 1fr)">
                  <GridItem colSpan={1}>
                    <Image src={item.url} alt={item.name} />
                  </GridItem>
                  <GridItem colSpan={1}>
                    <Box>
                      <Text>{item.name}</Text>
                    </Box>
                  </GridItem>
                </Grid>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </div>
  );
};

export default ProductModal;
