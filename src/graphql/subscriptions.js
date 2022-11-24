/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCard = /* GraphQL */ `
  subscription OnCreateCard(
    $filter: ModelSubscriptionCardFilterInput
    $owner: String
  ) {
    onCreateCard(filter: $filter, owner: $owner) {
      id
      front
      back
      deckID
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCard = /* GraphQL */ `
  subscription OnUpdateCard(
    $filter: ModelSubscriptionCardFilterInput
    $owner: String
  ) {
    onUpdateCard(filter: $filter, owner: $owner) {
      id
      front
      back
      deckID
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCard = /* GraphQL */ `
  subscription OnDeleteCard(
    $filter: ModelSubscriptionCardFilterInput
    $owner: String
  ) {
    onDeleteCard(filter: $filter, owner: $owner) {
      id
      front
      back
      deckID
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateDeck = /* GraphQL */ `
  subscription OnCreateDeck(
    $filter: ModelSubscriptionDeckFilterInput
    $owner: String
  ) {
    onCreateDeck(filter: $filter, owner: $owner) {
      id
      name
      cards {
        items {
          id
          front
          back
          deckID
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateDeck = /* GraphQL */ `
  subscription OnUpdateDeck(
    $filter: ModelSubscriptionDeckFilterInput
    $owner: String
  ) {
    onUpdateDeck(filter: $filter, owner: $owner) {
      id
      name
      cards {
        items {
          id
          front
          back
          deckID
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteDeck = /* GraphQL */ `
  subscription OnDeleteDeck(
    $filter: ModelSubscriptionDeckFilterInput
    $owner: String
  ) {
    onDeleteDeck(filter: $filter, owner: $owner) {
      id
      name
      cards {
        items {
          id
          front
          back
          deckID
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
