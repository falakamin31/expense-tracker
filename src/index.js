import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider } from "./context/context"
import {SpeechProvider} from "@speechly/react-client"

ReactDOM.render(
  <SpeechProvider appId="cc9e3430-a483-40e1-990b-a556e372aab5 " language="en-uS">

  <React.StrictMode>
    <Provider>
    <App />
    </Provider>
  </React.StrictMode>
  </SpeechProvider>,
  document.getElementById('root')
);


