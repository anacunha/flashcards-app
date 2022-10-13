/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Heading, Text } from "@aws-amplify/ui-react";
export default function Deck(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      width="480px"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(174,179,183,1)"
      padding="39px 39px 39px 39px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Deck")}
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
        direction="column"
        width="fit-content"
        alignItems="stretch"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Actions")}
      >
        <Button
          display="flex"
          gap="0"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="5px"
          size="small"
          isDisabled={false}
          variation="default"
          children="Edit"
          {...getOverrideProps(overrides, "Edit")}
        ></Button>
        <Button
          display="flex"
          gap="0"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="5px"
          size="small"
          isDisabled={false}
          variation="default"
          children="Delete"
          {...getOverrideProps(overrides, "Delete")}
        ></Button>
      </Flex>
    </Flex>
  );
}
