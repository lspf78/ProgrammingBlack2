import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import Weather from './Weather';
Amplify.configure(awsExports);

ReactDOM.render(
  <React.StrictMode>
    <Weather />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();