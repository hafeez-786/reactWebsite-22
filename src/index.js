import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { Provider } from "./Context";

ReactDOM.render(
  <React.StrictMode>
      <Provider>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
