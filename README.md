# Flashcards Amplify App

## Amplify CLI

Install and configure the [Amplify CLI](https://docs.amplify.aws/cli/) by following the instructions [here](https://docs.amplify.aws/cli/start/install/).

## Setup project

Create a new [React](https://reactjs.org/) project:

```shell
npx create-react-app@latest flashcards
```

Initialize Amplify from the project root folder to create a cloud project in the [Amplify Console](https://console.aws.amazon.com/amplify):

```shell
amplify init
```

Install the [AWS Amplify library](https://github.com/aws-amplify/amplify-js):

```shell
npm install aws-amplify
```

Configure Amplify on our frontend app `src/index.js` file so we can use it to interact with our backend services:

```javascript
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);
```

## Authentication

Amplify uses [Amazon Cognito](https://aws.amazon.com/cognito/) as the default authentication provider for our applications.

```shell
amplify add auth
```

Use the default configuration:

<pre>
? <b>Do you want to use the default authentication and security configuration?</b> Default configuration
? <b>How do you want users to be able to sign in?</b> Username
? <b>Do you want to configure advanced settings?</b> No, I am done.
</pre>

Run `amplify push` to provision the authentication resources in the cloud:

```shell
amplify push
```

Install the [Amplify UI library](https://ui.docs.amplify.aws/):

```shell
npm install @aws-amplify/ui-react
```

Configure the [Authenticator component](https://ui.docs.amplify.aws/react/connected-components/authenticator) on `src/App.js`:

```javascript
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default withAuthenticator(App);
```

## API (GraphQL)

```shell
amplify add api
```

https://docs.amplify.aws/cli/graphql/authorization-rules/
