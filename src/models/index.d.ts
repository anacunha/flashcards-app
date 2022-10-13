import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type CardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DeckMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Card {
  readonly id: string;
  readonly front: string;
  readonly back: string;
  readonly deckId: string;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Card, CardMetaData>);
  static copyOf(source: Card, mutator: (draft: MutableModel<Card, CardMetaData>) => MutableModel<Card, CardMetaData> | void): Card;
}

export declare class Deck {
  readonly id: string;
  readonly name: string;
  readonly cards?: Card[] | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Deck, DeckMetaData>);
  static copyOf(source: Deck, mutator: (draft: MutableModel<Deck, DeckMetaData>) => MutableModel<Deck, DeckMetaData> | void): Deck;
}