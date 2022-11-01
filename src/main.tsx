import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { instance } from "./server/index";

instance.get("getlist").then((res) => {
  console.log(res);
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
