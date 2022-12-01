/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Divider, Flex, Heading, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function Flashcard(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="32px"
      direction="column"
      width="720px"
      height="unset"
      justifyContent="flex-end"
      alignItems="flex-end"
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
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Card")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Front")}
        >
          <Heading
            padding="32px 0px 32px 0px"
            shrink="0"
            alignSelf="stretch"
            level="3"
            children="Tienen un piso en el centro de la ciudad."
            {...getOverrideProps(overrides, "FrontContent")}
          ></Heading>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="flex-start"
          shrink="0"
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
            type="close"
            {...getOverrideProps(overrides, "CloseButton")}
          ></MyIcon>
        </Flex>
      </Flex>
      <Divider
        width="unset"
        shrink="0"
        alignSelf="stretch"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
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
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="de.sa.yu.nar [desaʝu'naɾ]&#xA;&#xA;Primer alimento que se toma por la mañana."
          {...getOverrideProps(overrides, "BackContent")}
        ></Text>
      </Flex>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="flex-end"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 0px 24px 0px"
        {...getOverrideProps(overrides, "Buttons")}
      >
        <Button
          shrink="0"
          size="large"
          isDisabled={false}
          variation="default"
          children="Play"
          {...getOverrideProps(overrides, "PlayButton")}
        ></Button>
        <Button
          justifyContent="flex-end"
          alignItems="flex-end"
          shrink="0"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Show"
          {...getOverrideProps(overrides, "FlipCardButton")}
        ></Button>
      </Flex>
    </Flex>
  );
}
