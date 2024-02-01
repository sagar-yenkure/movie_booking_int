import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import{ ShowProvider} from "./context/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShowProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShowProvider>
  </React.StrictMode>
);
