import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./resources/css/Reusable.module.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // I disabled the strict mode because renders the components two times
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
);
