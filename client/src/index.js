import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
