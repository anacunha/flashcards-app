import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Card, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly front: string;
  readonly back: string;
  readonly deckID: string;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Card, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly front: string;
  readonly back: string;
  readonly deckID: string;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Card = LazyLoading extends LazyLoadingDisabled ? EagerCard : LazyCard

export declare const Card: (new (init: ModelInit<Card>) => Card) & {
  copyOf(source: Card, mutator: (draft: MutableModel<Card>) => MutableModel<Card> | void): Card;
}

type EagerDeck = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Deck, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly cards?: Card[] | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDeck = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Deck, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly cards: AsyncCollection<Card>;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Deck = LazyLoading extends LazyLoadingDisabled ? EagerDeck : LazyDeck

export declare const Deck: (new (init: ModelInit<Deck>) => Deck) & {
  copyOf(source: Deck, mutator: (draft: MutableModel<Deck>) => MutableModel<Deck> | void): Deck;
}