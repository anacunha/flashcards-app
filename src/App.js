import { DeckCardCollection, NavBar } from './ui-components';
import { Flex, View, withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <div className="App">
      <NavBar width='100vw' />
      <Flex
        direction="row"
        justifyContent="space-around"
      >
        <View>
          <DeckCardCollection overrideItems={({ item }) => ({
            overrides: {
              Cards: {
                children: `${item.cards.length} ${item.cards.length === 1 ? 'card' : 'cards'}`
              }
            }
          })} />
        </View>
      </Flex>
    </div>
  );
}

export default withAuthenticator(App);
