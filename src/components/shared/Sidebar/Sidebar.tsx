// React
import React, { ReactNode, ReactText } from "react";
// Chakra UI
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  FlexProps,
} from "@chakra-ui/react";
// Data
import { SIDEBAR_DATA } from "./../../../data/Sidebar/SidebarData";
// Sidebar Movile
import { MobileNav } from "./SidebarMovile/SidebarMovile";
import { SidebarContent } from "./SIdebarContent/SidebarContent";

interface NavItemProps extends FlexProps {
  icon: any;
  children: ReactText;
}

export const Sidebar = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      {/* SIDEBAR MOVILE */}
      <MobileNav onOpen={onOpen} />
      {/* SIDEBAR MOVILE */}
      {/* MAIN CONTENT */}
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
      {/* MAIN CONTENT */}
    </Box>
  );
};
