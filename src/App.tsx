import { useState } from "react";
import worldList from "./wordList.json";
import "./style.css";

function App() {
  const [temp, setTemp] = useState<String[]>([
    worldList[Math.floor(Math.random() * worldList.length)],
  ]);

  return (
    <div className="flex flex-col align-middle text-center gap-32 mt-10 ">
      <h2>Winner! - Refresh to try again</h2>
      <div className="flex  flex-col justify-center items-center">
        <div className="bg-black h-1 w-32 ml-32"></div>
        <div className=" bg-black h-72 w-1"></div>
        <div className="bg-black  h-1 w-64"></div>
      </div>
    </div>
  );
}

export default App;
