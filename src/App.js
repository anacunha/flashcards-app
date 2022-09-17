import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { DataStore } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Deck } from './models';
import { CreateDeck } from "./ui-components";

function App() {
  const [decks, setDecks] = useState([]);

  const createDeck = async () => {
    const newDeck = await DataStore.save(new Deck({
      name: prompt("Deck name")
    }))
    console.log(newDeck);
  }

  const getDecks = async () => {
    const data = await DataStore.query(Deck)
    setDecks(data)
  }

  useEffect(() => {
    getDecks()
  })
  return (
    <div className="App">
      <ul>
        {decks.map((deck) => (
          <li key={deck.id}>
            {deck.name}
          </li>
        ))}
      </ul>
      <CreateDeck />
      <button onClick={createDeck}>Create Deck</button>
    </div>
  );
}

export default withAuthenticator(App);
