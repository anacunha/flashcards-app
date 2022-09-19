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
? <b>How do you want users to be able to sign in?</b> Email
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

<pre>
? <b>Select from one of the below mentioned services:</b> GraphQL
? <b>Here is the GraphQL API that we will create. Select a setting to edit or continue</b> Authorization modes
? <b>Choose the default authorization type for the API</b> Amazon Cognito User Pool
Use a Cognito user pool configured as a part of this project.
? <b>Configure additional auth types?</b> No
? <b>Here is the GraphQL API that we will create. Select a setting to edit or continue</b> Conflict detection
? <b>Enable conflict detection?</b> Yes
? <b>Select the default resolution strategy</b> Auto Merge
? <b>Here is the GraphQL API that we will create. Select a setting to edit or continue</b> Continue
? <b>Choose a schema template:</b> Objects with fine-grained access control (e.g., a project management app with
 owner-based authorization)
</pre>

### Schema

```graphql
type Card @model @auth(rules: [{allow: owner}]) {
  id: ID!
  front: String!
  back: String!
  deckId: ID! @index(name: "byDeck")
  owner: String @auth(rules: [{ allow: owner, operations: [read, delete] }])
}

type Deck @model @auth(rules: [{allow: owner}]) {
  id: ID!
  name: String!
  cards: [Card!] @hasMany(indexName: "byDeck", fields: ["id"])
  owner: String @auth(rules: [{ allow: owner, operations: [read, delete] }])
}
```

https://docs.amplify.aws/cli/graphql/authorization-rules/
https://docs.amplify.aws/lib/datastore/getting-started/q/platform/js/
https://docs.amplify.aws/lib/datastore/setup-auth-rules/q/platform/js/

https://docs.amplify.aws/cli/graphql/authorization-rules/#per-user--owner-based-data-access
https://docs.amplify.aws/cli/graphql/authorization-rules/#field-level-authorization-rules

```shell
amplify push
```

<pre>
┌──────────┬────────────────────┬───────────┬───────────────────┐
│ Category │ Resource name      │ Operation │ Provider plugin   │
├──────────┼────────────────────┼───────────┼───────────────────┤
│ Api      │ flashcards         │ Create    │ awscloudformation │
├──────────┼────────────────────┼───────────┼───────────────────┤
│ Auth     │ flashcards23904dd8 │ No Change │ awscloudformation │
└──────────┴────────────────────┴───────────┴───────────────────┘
? <b>Are you sure you want to continue?</b> Yes

? <b>Do you want to generate code for your newly created GraphQL API</b> Yes
? <b>Choose the code generation language target</b> javascript
? <b>Enter the file name pattern of graphql queries, mutations and subscriptions</b> src/graphql/**/*.js
? <b>Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions</b> Y
es
? <b>Enter maximum statement depth [increase from default if your schema is deeply nested]</b> 2
</pre>

## UI Components

https://docs.amplify.aws/console/uibuilder/eventhandling/#bind-ui-to-create-update-or-delete-a-data-record
