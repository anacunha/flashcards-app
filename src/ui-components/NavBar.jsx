/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Heading, View } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBar")}
    >
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      >
        <View
          width="27px"
          height="18px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          border="2px SOLID rgba(174,179,183,1)"
          borderRadius="3px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(174,179,183,1)"
          {...getOverrideProps(overrides, "Rectangle 1164")}
        ></View>
        <Heading
          shrink="0"
          level="4"
          children="Flashcards"
          {...getOverrideProps(overrides, "Heading")}
        ></Heading>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <Button
          shrink="0"
          size="default"
          isDisabled={false}
          variation="default"
          children="Create Deck"
          {...getOverrideProps(overrides, "CreateDeckButton")}
        ></Button>
        <Button
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Sign Out"
          {...getOverrideProps(overrides, "SignOutButton")}
        ></Button>
      </Flex>
    </Flex>
  );
}
