import { CreateDeck, DeckCardCollection, FlashcardCollection, NavBar } from './ui-components';
import { Flex, View, withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { useState } from 'react';

function App() {
  const [createDeck, setCreateDeck] = useState(false);
  // const [editDeck, setEditDeck] = useState();
  const [deck, setDeck] = useState();
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="App">
      <NavBar width='100vw' overrides={{ CreateDeckButton: { onClick: () => setCreateDeck(true) } }} />
      <Flex direction="row" justifyContent="center" >
        <View>
          {deck ? ''
            :
            <DeckCardCollection overrideItems={({ item }) => ({
              onClick: () => setDeck(item),
              overrides: {
                Cards: {
                  children: `${item.cards.length} ${item.cards.length === 1 ? 'card' : 'cards'}`
                },
                DeleteButton: { display: 'none' },
                EditButton: {
                  display: 'none'
                  // onClick: () => {
                  //   setEditDeck(item);
                  // }
                }
              }
            })} />
          }
        </View>
        <View>
          {/* {editDeck ?
            <UpdateDeck deck={editDeck} overrides={{
              Close: { onClick: () => setEditDeck() }
            }} />
            : ''
          } */}
          {createDeck ?
            <CreateDeck overrides={{
              Close: { onClick: () => setCreateDeck(false) }
            }} />
            : ''
          }
          {deck ?
            <FlashcardCollection items={deck.cards} overrideItems={() => ({
              overrides: {
                Back: { display: showAnswer ? 'block' : 'none' },
                CloseButton: {
                  onClick: () => {
                    setDeck();
                    setShowAnswer(false);
                  }
                },
                FlipCardButton: {
                  onClick: () => {
                    setShowAnswer(!showAnswer);
                    console.log(showAnswer);
                  },
                  children: showAnswer ? 'Hide' : 'Show'
                },
              }
            })}
            />
            : ''
          }
        </View>
      </Flex>
    </div >
  );
}

export default withAuthenticator(App);
