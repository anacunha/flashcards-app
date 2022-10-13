import { NavBar } from './ui-components';
import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <div className="App">
      <NavBar width='100vw' />
    </div>
  );
}

export default withAuthenticator(App);
