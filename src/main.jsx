import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import CallBackTutorial from "./CallBackTutorial";
import "./index.css";
// import { store } from "./app/store";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import MemoTutorial from "./Memotutorial.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider
        clientId={import.meta.env.VITE_MY_GOOGLE_LOGIN_CLIENT_ID}
      >
        {/* <MemoTutorial /> */}
        <App />
        {/* <CallBackTutorial /> */}
      </GoogleOAuthProvider>
      ;
    </Provider>
    ,
  </React.StrictMode>
);
