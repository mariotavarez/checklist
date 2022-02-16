// React
import React from "react";
// Chakra
import { Stack, Flex, Heading, Text, Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
// Images
import logo from "../../../assets/img/bg-login.png";
import loading from "../../../assets/img/loading.gif";
// Form Login
import { FormLogin } from "./FormLogin/FormLogin";

import "./Login.scss";

const Login = () => {
  return (
    <Box
      w={"full"}
      bgGradient={[
        "linear(to-tr, pink.200, blue.50)",
        "linear(to-b, blue.50, red.500)",
        "linear(to-t, pink.100 20%, blue.50)",
      ]}
    >
      <Stack minH={"100vh"} direction={{ base: "column-reverse", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "red.400",
                  zIndex: -1,
                }}
              >
                Requisitos
              </Text>
              <br />{" "}
              <Text
                color={"blue.400"}
                as={"span"}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
              >
                Oficialía de partes
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"black.500"}>
              Ingrese los siguientes campos para continuar
            </Text>
            <Stack
              backgroundColor={"white"}
              boxShadow={"lg"}
              rounded={"2xl"}
              w={"full"}
              p={"3rem"}
              direction={{ base: "column", md: "row" }}
              spacing={5}
            >
              <FormLogin />
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} justify="center" align="center">
          <Box
            position={"relative"}
            transform={"perspective(1000px) rotateY(20deg)  "}
            rounded={"3xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              boxShadow={"pink.500"}
              alignSelf={"center"}
              justifySelf={"center"}
              alt={"Login Image"}
              fallback={loading}
              objectFit={"contain"}
              transition="0.5s ease-in-out"
              src={logo}
            />
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Login;
