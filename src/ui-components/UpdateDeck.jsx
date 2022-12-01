/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Heading, TextField } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function UpdateDeck(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="row"
      width="720px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(174,179,183,1)"
      padding="39px 39px 39px 39px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "UpdateDeck")}
    >
      <Flex
        gap="32px"
        direction="column"
        width="unset"
        height="228px"
        justifyContent="flex-end"
        alignItems="flex-end"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Form")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Fields")}
        >
          <Heading
            shrink="0"
            alignSelf="stretch"
            level="4"
            children="Update Deck"
            {...getOverrideProps(overrides, "Title")}
          ></Heading>
          <TextField
            label="Name"
            width="unset"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "Name")}
          ></TextField>
        </Flex>
        <Button
          shrink="0"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Update"
          {...getOverrideProps(overrides, "UpdateButton")}
        ></Button>
      </Flex>
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
        type="close"
        {...getOverrideProps(overrides, "Close")}
      ></MyIcon>
    </Flex>
  );
}
