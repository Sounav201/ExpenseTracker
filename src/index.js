import React from 'react'
import ReactDOM from 'react-dom'

import {SpeechProvider} from '@speechly/react-client'
import {Provider} from "./context/context";
import App from "./App"
import "./index.css";

ReactDOM.render(
  <SpeechProvider appId="d47ebbfe-a4b6-4384-8121-14c3d0833fbe" language="en-US">
 <Provider> 
<App />
</Provider> 
</SpeechProvider>  
, document.getElementById('root')
);


