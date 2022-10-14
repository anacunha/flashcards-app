/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Card, Deck } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import DeckCard from "./DeckCard";
import { Collection } from "@aws-amplify/ui-react";
export default function DeckCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const cardItems = useDataStoreBinding({
    type: "collection",
    model: Card,
  }).items;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Deck,
  }).items.map((item) => ({
    ...item,
    cards: cardItems.filter((model) => model.deckId === item.id),
  }));
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      itemsPerPage={6}
      direction="column"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "DeckCardCollection")}
    >
      {(item, index) => (
        <DeckCard
          deck={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></DeckCard>
      )}
    </Collection>
  );
}
