# Flashcards Amplify App

## Amplify CLI

Install and configure the [Amplify CLI](https://docs.amplify.aws/cli/) by following the instructions [here](https://docs.amplify.aws/cli/start/install/).

## [Set up project](https://docs.amplify.aws/lib/project-setup/create-application/q/platform/js/)

Create a new [React](https://reactjs.org/) project:

```shell
npx create-react-app@latest flashcards
```

Initialize Amplify from the project root folder to create a cloud project in the [Amplify Console](https://console.aws.amazon.com/amplify):

```shell
amplify init
```

Install the [AWS Amplify Javascript Library](https://github.com/aws-amplify/amplify-js):

```shell
npm install aws-amplify
```

Configure Amplify on our frontend app `src/index.js` file so we can use it to interact with our backend services:

```javascript
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
```

## [Authentication](https://docs.amplify.aws/lib/auth/getting-started/q/platform/js/)

Amplify uses [Amazon Cognito](https://aws.amazon.com/cognito/) as the default authentication provider for our applications.

```shell
amplify add auth
```

Use the default configuration:

<pre>
 Do you want to use the default authentication and security configuration? 
 <b> ❯ Default configuration </b>
  Default configuration with Social Provider (Federation) 
  Manual configuration 
  I want to learn more.
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

## [API (GraphQL)](https://docs.amplify.aws/lib/graphqlapi/getting-started/q/platform/js/)

Amplify will use [AWS AppSync](https://aws.amazon.com/appsync/) and [Amazon DynamoDB](https://aws.amazon.com/dynamodb/) to power our GraphQL API:

```shell
amplify add api
```

- Select `Amazon Cognito User Pool` as our API [authorization type](https://docs.amplify.aws/cli/graphql/authorization-rules/).
- Enable [Conflict resolution](https://docs.amplify.aws/lib/datastore/conflict/q/platform/js/) with `Auto Merge` strategy.
- Start off with a `Blank Schema`.

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
? <b>Choose a schema template:</b> Blank Schema
</pre>

### [Data modeling](https://docs.amplify.aws/cli/graphql/data-modeling/)

Update the GraphQL schema file `amplify/backend/api/flashcards/schema.graphql` to configure our application's data model . Amplify will create [Amazon DynamoDB](https://aws.amazon.com/dynamodb/) tables for each of our models annotated with `@model`.

- Only the `owner` of a record will be able to access and modify it. To do that, we will use the `@auth` directive to configure [owner-based data access](https://docs.amplify.aws/cli/graphql/authorization-rules/#per-user--owner-based-data-access).
- To prevent an owner from reassigning their record to another user, we will set up [field-level authorization rules](https://docs.amplify.aws/cli/graphql/authorization-rules/#field-level-authorization-rules) to protect the `owner` field.

```graphql
type Card @model @auth(rules: [{allow: owner}]) {
  id: ID!
  front: String!
  back: String!
  deckId: ID! @index(name: "byDeck")
  owner: String @auth(rules: [{allow: owner, operations: [read, delete]}])
}

type Deck @model @auth(rules: [{allow: owner}]) {
  id: ID!
  name: String!
  cards: [Card!] @hasMany(indexName: "byDeck", fields: ["id"])
  owner: String @auth(rules: [{allow: owner, operations: [read, delete]}])
}
```

Run `amplify push` to deploy the GraphQL API resources in the cloud:

```shell
amplify push
```

We will continue deployment with the default configuration:

<pre>
? <b>Are you sure you want to continue?</b> Yes

? <b>Do you want to generate code for your newly created GraphQL API</b> Yes
? <b>Choose the code generation language target</b> javascript
? <b>Enter the file name pattern of graphql queries, mutations and subscriptions</b> src/graphql/**/*.js
? <b>Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions</b> Y
es
? <b>Enter maximum statement depth [increase from default if your schema is deeply nested]</b> 2
</pre>

## UI Components

To use the [Amplify UI development integration with Figma](https://docs.amplify.aws/console/uibuilder/figmatocode/), enable Amplify Studio under your application settings on the [Amplify Console](https://console.aws.amazon.com/amplify/home):

![Enable Amplify Studio under App settings: Amplify Studio settings](https://user-images.githubusercontent.com/1771610/195656669-ff59ba1f-1b6b-440d-903b-45fcea508a8c.png)

```shell
amplify pull
```

Your components will be on the `src/ui-components/` folder.

## [Predictions](https://docs.amplify.aws/lib/predictions/intro/q/platform/js/)

[Text to speech](https://docs.amplify.aws/lib/predictions/text-speech/q/platform/js/)

```shell
amplify add predictions
```

<pre>
? <b>Please select from one of the categories below</b> Convert
? <b>What would you like to convert?</b> Generate speech audio from text
? <b>Provide a friendly name for your resource</b> speechGeneratorad58d821
? <b>What is the source language?</b> Mexican Spanish
? <b>Select a speaker</b> Mia - Female
? <b>Who should have access?</b> Auth users only
</pre>

```shell
amplify push
```

- https://aws-amplify.github.io/amplify-js/api/classes/predictions.html
- https://docs.amplify.aws/lib/predictions/sample/q/platform/js/#sample-react-app
- https://aws.amazon.com/blogs/mobile/announcing-the-new-predictions-category-in-amplify-framework/
- https://github.com/aws-amplify/amplify-js/issues/3928#issuecomment-701354742

## Resources

- https://ui.docs.amplify.aws/react/components
- https://docs.amplify.aws/console/uibuilder/override/#extend-generated-collections-via-overrideitems-prop
- https://docs.amplify.aws/console/uibuilder/eventhandling/#bind-ui-to-create-update-or-delete-a-data-record
