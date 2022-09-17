import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import App from "./App";
import { Provider } from "./context/context";
import "./index.css";

ReactDOM.render(
  <SpeechProvider appId="adbede84-6ac6-4d70-9371-79fcaefbaed9" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
