/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useAuthSignOutAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Heading, View } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  const signOutButtonOnClick = useAuthSignOutAction({ global: false });
  return (
    <Flex
      gap="20px"
      width="1440px"
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
        width="fit-content"
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
          shrink="0"
          position="relative"
          border="2px SOLID rgba(174,179,183,1)"
          borderRadius="3px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(174,179,183,1)"
          {...getOverrideProps(overrides, "Rectangle 1164")}
        ></View>
        <Heading
          display="flex"
          gap="0"
          width="fit-content"
          shrink="0"
          height="30px"
          position="relative"
          padding="0px 0px 0px 0px"
          level="4"
          children="Flashcards"
          {...getOverrideProps(overrides, "Heading")}
        ></Heading>
      </Flex>
      <Flex
        gap="32px"
        width="100%"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        height="40px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <Button
          display="flex"
          gap="0"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="42px"
          position="relative"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Create Deck"
          {...getOverrideProps(overrides, "CreateDeckButton")}
        ></Button>
        <Button
          display="flex"
          gap="0"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="40px"
          position="relative"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Sign Out"
          onClick={() => {
            signOutButtonOnClick();
          }}
          {...getOverrideProps(overrides, "SignOutButton")}
        ></Button>
      </Flex>
    </Flex>
  );
}
