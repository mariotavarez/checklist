import React from "react";
// Chakra UI
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  BoxProps,
} from "@chakra-ui/react";
// Data
import { SIDEBAR_DATA } from "./../../../../data/Sidebar/SidebarData";
import { SidebarItem } from "./../SidebarItem/SidebarItem";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="0.4s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          textAlign={"center"}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
        >
          REQUISITOS RPP
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {SIDEBAR_DATA.map(({ nombre, icon }) => (
        <SidebarItem
          key={nombre}
          icon={icon}
          _hover={{
            color: "white",
            bg: "pink.400",
          }}
        >
          {nombre}
        </SidebarItem>
      ))}
    </Box>
  );
};
