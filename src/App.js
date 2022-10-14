import { Predictions } from 'aws-amplify';
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';
import { CreateDeck, DeckCardCollection, FlashcardCollection, NavBar } from './ui-components';
import { Flex, View, withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { useState } from 'react';

Predictions.addPluggable(new AmazonAIPredictionsProvider());

function TextToSpeech() {
  const [response, setResponse] = useState("...")
  const [textToGenerateSpeech, setTextToGenerateSpeech] = useState("write to speech");

  function generateTextToSpeech() {
    setResponse('Generating audio...');
    Predictions.convert({
      textToSpeech: {
        source: {
          text: textToGenerateSpeech,
          languageCode: 'pt-BR'
        },
        voiceId: 'Vitoria', // default configured on aws-exports.js
        // list of different options are here https://docs.aws.amazon.com/polly/latest/dg/voicelist.html
      }
    }).then(result => {
      let AudioContext = window.AudioContext || window.webkitAudioContext;
      console.log({ AudioContext });
      const audioCtx = new AudioContext();
      const source = audioCtx.createBufferSource();
      audioCtx.decodeAudioData(result.audioStream, (buffer) => {

        source.buffer = buffer;
        source.connect(audioCtx.destination);
        source.start(0);
      }, (err) => console.log({ err }));

      setResponse(`Generation completed, press play`);
    })
      .catch(err => setResponse(err))
  }

  function setText(event) {
    setTextToGenerateSpeech(event.target.value);
  }

  return (
    <div className="Text">
      <div>
        <h3>Text To Speech</h3>
        <input value={textToGenerateSpeech} onChange={setText}></input>
        <button onClick={generateTextToSpeech}>Text to Speech</button>
        <h3>{response}</h3>
      </div>
    </div>
  );
}

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
          <TextToSpeech />
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
