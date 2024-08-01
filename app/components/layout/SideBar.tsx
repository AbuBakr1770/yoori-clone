"use client";

import React from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import { FaList } from "react-icons/fa";
import { IconType } from "react-icons";
import Link from "next/link";

interface LinkItemProps {
  href: string;
  label: string;
}

const LinkItems: LinkItemProps[] = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/sellers", label: "Stores" },
  { href: "/brands", label: "Brands" },
  { href: "/categories", label: "Categories" },
];

export default function SimpleSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <IconButton
        onClick={onOpen}
        aria-label="open menu"
        icon={<FaList />}
        zIndex="tooltip"
        p={0}
        sx={{
          bg: "transparent",
          color: "white",
          fontSize: "1.5rem",
          _hover: { bg: "transparent" },
        }}
      />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        size={"full"}
      >
        <DrawerContent
          css={{
            width: "40vw", // Set width to 30% of the viewport width
            maxWidth: "40vw", // Ensure max width is also 30% of the viewport width
          }}
        >
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.700", "gray.800")}
      w="full"
      pos="fixed"
      h="full"
      zIndex="modal"
      {...rest}
    >
      <Flex p="4" align="center" justify="end">
        <CloseButton onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.href} href={link.href}>
          {link.label}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  href: string;
  children: React.ReactNode;
}

const NavItem = ({ href, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="div"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Link href={href} passHref>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "yellow.400",
            color: "white",
          }}
          {...rest}
        >
          {children}
        </Flex>
      </Link>
    </Box>
  );
};
