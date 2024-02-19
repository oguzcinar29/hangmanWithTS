import { useState } from "react";
import worldList from "./wordList.json";
import "./style.css";

function App() {
  const [temp, setTemp] = useState<String[]>([
    worldList[Math.floor(Math.random() * worldList.length)],
  ]);

  return (
    <div className="text-3xl font-bold underline text-red-600 flex gap-64">
      <p>hey</p>
      <p>hey2wegweg</p>
    </div>
  );
}

export default App;
