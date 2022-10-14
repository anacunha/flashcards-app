/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { Deck } from "../models";
import { schema } from "../models/schema";
import { Flex, Heading, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function DeckCard(props) {
  const { deck, overrides, ...rest } = props;
  const deleteButtonOnClick = useDataStoreDeleteAction({
    id: deck?.id,
    model: Deck,
    schema: schema,
  });
  return (
    <Flex
      gap="16px"
      width="480px"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(174,179,183,1)"
      borderRadius="12px"
      padding="39px 39px 39px 39px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "DeckCard")}
    >
      <Flex
        gap="24px"
        direction="column"
        width="100%"
        justifyContent="center"
        grow="1"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Heading
          display="flex"
          gap="0"
          width="fit-content"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          level="4"
          children={deck?.name}
          {...getOverrideProps(overrides, "Name")}
        ></Heading>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="10 cards"
          {...getOverrideProps(overrides, "Cards")}
        ></Text>
      </Flex>
      <Flex
        gap="16px"
        width="fit-content"
        justifyContent="flex-end"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Actions")}
      >
        <MyIcon
          width="24px"
          height="24px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          type="edit"
          {...getOverrideProps(overrides, "EditButton")}
        ></MyIcon>
        <MyIcon
          width="24px"
          height="24px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          type="delete"
          onClick={() => {
            deleteButtonOnClick();
          }}
          {...getOverrideProps(overrides, "DeleteButton")}
        ></MyIcon>
      </Flex>
    </Flex>
  );
}
