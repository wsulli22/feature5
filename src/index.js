import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Parse from "parse";
import App from "./App";

//PARSE CODE BELOW ADDED
const APP_ID = process.env.REACT_APP_BACK4APP_APP_ID;
const JS_KEY = process.env.REACT_APP_BACK4APP_JS_KEY;
const SERVER_URL = process.env.REACT_APP_BACK4APP_URL;
Parse.initialize(APP_ID, JS_KEY);
Parse.serverURL = SERVER_URL;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
