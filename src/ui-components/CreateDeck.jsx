/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useAuth,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Deck } from "../models";
import { schema } from "../models/schema";
import { Button, Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function CreateDeck(props) {
  const { overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const [textFieldValue, setTextFieldValue] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      name: textFieldValue,
      cards: "[]",
      owner: authAttributes["username"],
    },
    model: Deck,
    schema: schema,
  });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      as="form"
      {...rest}
      {...getOverrideProps(overrides, "CreateDeck")}
    >
      <Flex
        gap="24px"
        direction="column"
        height="256px"
        justifyContent="space-between"
        alignItems="stretch"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Create Deck"
            {...getOverrideProps(overrides, "Create Deck")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Name"
            placeholder="New deck"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldValue}
            onChange={(event) => {
              setTextFieldValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField")}
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
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
