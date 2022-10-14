/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Divider, Flex, Heading, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function Flashcard(props) {
  const { card, overrides, ...rest } = props;
  return (
    <Flex
      gap="32px"
      direction="column"
      width="720px"
      justifyContent="flex-end"
      alignItems="stretch"
      position="relative"
      border="1px SOLID rgba(174,179,183,1)"
      borderRadius="12px"
      padding="31px 31px 31px 31px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Flashcard")}
    >
      <Flex
        gap="0"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Card")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="100%"
          justifyContent="center"
          grow="1"
          height="104px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Front")}
        >
          <Heading
            display="flex"
            gap="0"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="32px 0px 32px 0px"
            level="3"
            children={card?.front}
            {...getOverrideProps(overrides, "FrontContent")}
          ></Heading>
        </Flex>
        <Flex
          gap="16px"
          width="fit-content"
          justifyContent="flex-end"
          alignItems="flex-start"
          shrink="0"
          height="24px"
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
            type="close"
            {...getOverrideProps(overrides, "CloseButton")}
          ></MyIcon>
        </Flex>
      </Flex>
      <Divider
        height="1px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <Flex
        gap="16px"
        direction="column"
        justifyContent="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="32px 0px 32px 0px"
        {...getOverrideProps(overrides, "Back")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="300"
          color="rgba(0,0,0,1)"
          lineHeight="30px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={card?.back}
          {...getOverrideProps(overrides, "BackContent")}
        ></Text>
      </Flex>
      <Button
        display="flex"
        gap="0"
        width="fit-content"
        justifyContent="flex-end"
        alignItems="flex-end"
        shrink="0"
        position="relative"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Show"
        {...getOverrideProps(overrides, "FlipCardButton")}
      ></Button>
    </Flex>
  );
}
