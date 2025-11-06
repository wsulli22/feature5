import React from "react";
import Components from "./Components/Components.js";
import * as Env from "./environments";
import Parse from "parse";

Parse.initialize(Env.REACT_APP_BACK4APP_APP_ID, Env.REACT_APP_BACK4APP_JS_KEY);
Parse.serverURL = Env.REACT_APP_BACK4APP_URL;

function App() {
  return <Components />;
}

export default App;
