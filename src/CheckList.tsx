// React
import React from "react";
// Chakra Provider
import { ChakraProvider } from "@chakra-ui/react";
// Components
import { Login } from "./components/features/Login/Login";

export const CheckList = () => {
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  );
};
