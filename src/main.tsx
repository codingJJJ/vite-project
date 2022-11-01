import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { instance } from "./server/index";
import { BrowserRouter as Router } from "react-router-dom";

instance.get("getlist").then((res) => {
  console.log(res);
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
