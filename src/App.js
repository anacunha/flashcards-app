import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { DataStore } from 'aws-amplify';
import { Deck } from './models';

function App() {
  const createDeck = async () => {
    const newDeck = await DataStore.save(new Deck({
      name: prompt("Deck name")
    }))
    console.log(newDeck);
  }
  return (
    <div className="App">
      <button onClick={createDeck}>Create Deck</button>
    </div>
  );
}

export default withAuthenticator(App);
