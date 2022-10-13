/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Heading, TextField } from "@aws-amplify/ui-react";
export default function CreateDeck(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      width="720px"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(174,179,183,1)"
      padding="39px 39px 39px 39px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CreateDeck")}
    >
      <Flex
        gap="32px"
        direction="column"
        width="100%"
        height="228px"
        justifyContent="flex-end"
        alignItems="stretch"
        grow="1"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Form")}
      >
        <Flex
          gap="16px"
          direction="column"
          height="150px"
          grow="1"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Fields")}
        >
          <Heading
            display="flex"
            gap="0"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            level="4"
            children="Create Deck"
            {...getOverrideProps(overrides, "Title")}
          ></Heading>
          <TextField
            display="flex"
            direction="column"
            height="104px"
            justifyContent="center"
            grow="1"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Name"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "Name")}
          ></TextField>
        </Flex>
        <Button
          display="flex"
          gap="0"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Create"
          {...getOverrideProps(overrides, "CreateButton")}
        ></Button>
      </Flex>
    </Flex>
  );
}
