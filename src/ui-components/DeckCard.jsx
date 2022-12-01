/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Heading, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function DeckCard(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="row"
      width="480px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(174,179,183,1)"
      borderRadius="12px"
      padding="23px 31px 23px 31px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "DeckCard")}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Heading
          shrink="0"
          level="4"
          children="Deck Name"
          {...getOverrideProps(overrides, "Name")}
        ></Heading>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
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
        direction="row"
        width="unset"
        height="unset"
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
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="edit"
          {...getOverrideProps(overrides, "EditButton")}
        ></MyIcon>
        <MyIcon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="delete"
          {...getOverrideProps(overrides, "DeleteButton")}
        ></MyIcon>
      </Flex>
    </Flex>
  );
}
