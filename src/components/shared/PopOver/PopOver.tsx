import React from "react";
// Chakra UI
import {
  PopoverTrigger,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverContent,
  Popover,
} from "@chakra-ui/react";
// Models
import { PopOverModel } from "./../../../interfaces/PopOver/PopOverModel";

export const PopOver: React.FC<PopOverModel> = ({
  childComponent,
  title,
  body,
  icon,
}: PopOverModel) => {
  return (
    <Popover isLazy={true} closeOnBlur={false}>
      <PopoverTrigger>{childComponent}</PopoverTrigger>
      <PopoverContent bg={"#ffffff"} color={"gray.600"}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>{title}</PopoverHeader>
        <PopoverBody>{`${body} ${icon}`}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
