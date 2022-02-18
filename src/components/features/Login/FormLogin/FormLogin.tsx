import React from "react";
// Shared
import { InputField } from "../../../shared";
// Chakra UI
import { Box, Button, FormControl, Stack, Flex } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
// Formik
import { Formik } from "formik";
// Hooks
import { useAlert } from "./../../../../hooks/Alerts/useAlert";
// React Hot Toast
import { Toaster } from "react-hot-toast";
// Validation Schema
import { LOGIN_SCHEMA } from "./../../../../data/ValidationSchemas/Login/LoginSchema";
import { useNavigate } from "react-router-dom";

export const FormLogin = () => {
  const { showMessage } = useAlert();
  let navigate = useNavigate();

  return (
    <Stack w={"full"} direction={{ base: "column", md: "column" }}>
      <Formik
        initialValues={{ usuario: "", contrasena: "" }}
        validationSchema={LOGIN_SCHEMA}
        onSubmit={(values, actions) => {
          localStorage.setItem("idSesion", (Math.random() * 100000).toString());

          navigate(`/inicio`);
          showMessage({ message: "Acceso correcto", icon: "👌" });
        }}
      >
        {(formik) => (
          <form>
            <FormControl>
              {/* USUARIO */}
              <Flex flex={1} align="center">
                <InputField
                  name={"usuario"}
                  label={"Usuario"}
                  type={"text"}
                  maxLength={6}
                  placeholder={"Ingrese su usuario a 6 carácteres"}
                />
              </Flex>
              {/* USUARIO */}
              {/* USUARIO */}
              <Flex flex={1} align="center">
                <InputField
                  name={"contrasena"}
                  label={"Contraseña"}
                  type={"password"}
                  maxLength={8}
                  placeholder={"Ingrese su contraseña a 8 carácteres"}
                />
              </Flex>
              {/* USUARIO */}
            </FormControl>
            <Box paddingTop={"1rem"}>
              <Button
                _hover={{
                  background: "pink.400",
                  color: "white",
                  transform: "scale(1.1)",
                }}
                onClick={formik.submitForm}
                rounded="md"
                colorScheme={"pink"}
                boxShadow={
                  "0px 1px 25px -5px rgb(255 20 147 / 48%), 0 10px 10px -5px rgb(199 21 133 / 53%)"
                }
                rightIcon={<ArrowRightIcon />}
              >
                Iniciar
              </Button>
              {/* TOASTER NOTIFICATIONS */}
              {/* TOASTER NOTIFICATIONS */}
            </Box>
          </form>
        )}
      </Formik>
      <Toaster />
    </Stack>
  );
};
