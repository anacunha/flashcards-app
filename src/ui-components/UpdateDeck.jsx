/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Deck } from "../models";
import { schema } from "../models/schema";
import { useEffect } from "react";
import { Button, Flex, Heading, TextField } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function UpdateDeck(props) {
  const { deck, overrides, ...rest } = props;
  const [nameValue, setNameValue] = useStateMutationAction("");
  const updateButtonOnClick = useDataStoreUpdateAction({
    fields: { name: nameValue },
    id: deck?.id,
    model: Deck,
    schema: schema,
  });
  useEffect(() => {
    if (nameValue === "" && deck !== undefined && deck?.name !== undefined)
      setNameValue(deck?.name);
  }, [deck]);
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
      {...getOverrideProps(overrides, "UpdateDeck")}
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
            children="Update Deck"
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
            value={nameValue}
            onChange={(event) => {
              setNameValue(event.target.value);
            }}
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
          children="Update"
          onClick={() => {
            updateButtonOnClick();
          }}
          {...getOverrideProps(overrides, "UpdateButton")}
        ></Button>
      </Flex>
      <MyIcon
        width="24px"
        height="24px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        type="close"
        {...getOverrideProps(overrides, "Close")}
      ></MyIcon>
    </Flex>
  );
}
