import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';

if (process.env.NODE_ENV === 'production') {
  console.log("PROD");
  Amplify.configure({
    aws_project_region: process.env.REACT_APP_AWS_REGION,
    aws_cognito_region: process.env.REACT_APP_AWS_REGION,
    aws_user_pools_id: process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID,
    aws_user_pools_web_client_id: process.env.REACT_APP_AWS_COGNITO_USER_POOL_WEB_CLIENT_ID,
    aws_cognito_identity_pool_id: process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
    aws_appsync_region: process.env.REACT_APP_AWS_REGION,
    aws_appsync_graphqlEndpoint: process.env.REACT_APP_AWS_APPSYNC_API,
    aws_appsync_authenticationType: process.env.REACT_APP_AWS_APPSYNC_AUTH_TYPE,
    predictions:
    {
      convert: {
        speechGenerator: {
          region: process.env.REACT_APP_AWS_REGION,
          proxy: false,
          defaults: {
            VoiceId: process.env.REACT_APP_AWS_POLLY_VOICE_ID,
            LanguageCode: process.env.REACT_APP_AWS_POLLY_LANGUAGE_CODE
          }
        }
      },
    }
  });
} else {
  // Amplify.configure('./aws-exports');
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();