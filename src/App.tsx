import React, { useState } from "react";
import "./global.less";
import { BrowserRouter, Router, useRoutes } from "react-router-dom";

import routes from "@/router";

function App() {
  return useRoutes(routes);
}
export default App;
