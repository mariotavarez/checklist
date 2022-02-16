import React from "react";
// Chakra
import {
  Box,
  Flex,
  FormLabel,
  Input,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { PopOver } from "..";
// Chakra Icons
import { QuestionIcon } from "@chakra-ui/icons";
import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  placeholder: any;
  type?: string;
  [key: string]: any;
}

export const InputField = ({ label, ...props }: Props) => {
  const [field] = useField(props);
  return (
    <>
      <Box w={"full"}>
        <Stack alignItems={"center"} direction={{ base: "row", md: "row" }}>
          <FormLabel mt={2} alignSelf={"center"} {...props}>
            {label}
          </FormLabel>
          <Spacer />
          <PopOver
            title={label}
            body={"El usuario consiste de 6 caracteres"}
            icon={"🙎"}
            childComponent={
              <QuestionIcon
                ml={4}
                _hover={{
                  transform: "scale(1.2)",
                  color: "pink",
                }}
              />
            }
          />
        </Stack>
        <Input {...field} {...props} />
        <Text color={"red.500"} fontWeight={600}>
          <ErrorMessage component="spam" name={props.name} />
        </Text>
      </Box>
    </>
  );
};
