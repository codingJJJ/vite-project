import { useState } from "react";
import { IconCard } from "./components/icon-card";
import "./index.less";
import { Layout } from "@pages/layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Layout />
    </div>
  );
}
export default App;
