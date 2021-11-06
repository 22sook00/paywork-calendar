import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { calendarReducer } from './_reducers/btn_reducer'

const calendarStore = createStore(calendarReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={calendarStore}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
