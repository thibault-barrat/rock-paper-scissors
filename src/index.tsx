import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DifficultyProvider } from "./utils/context";

ReactDOM.render(
  <React.StrictMode>
    <DifficultyProvider>
      <App />
    </DifficultyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
