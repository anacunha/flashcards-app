import { DeckCardCollection, NavBar, UpdateDeck } from './ui-components';
import { Flex, View, withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { useState } from 'react';

function App() {
  const [showUpdateDeckForm, setShowUpdateDeckForm] = useState(false);
  const [deck, setDeck] = useState();

  return (
    <div className="App">
      <NavBar width='100vw' />
      <Flex
        direction="row"
        justifyContent="center"
      >
        <View>
          <DeckCardCollection overrideItems={({ item }) => ({
            overrides: {
              Cards: {
                children: `${item.cards.length} ${item.cards.length === 1 ? 'card' : 'cards'}`
              },
              EditButton: {
                onClick: () => {
                  setShowUpdateDeckForm(true);
                  setDeck(item);
                }
              }
            }
          })} />
        </View>
        <View>
          {showUpdateDeckForm ?
            <UpdateDeck deck={deck} overrides={{
              Close: { onClick: () => setShowUpdateDeckForm(false) }
            }} />
            : ''}
        </View>
      </Flex>
    </div>
  );
}

export default withAuthenticator(App);
