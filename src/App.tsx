import { useState } from "react";
import worldList from "./wordList.json";
import "./style.css";

function App() {
  const [word, setWord] = useState<String[]>([
    worldList[Math.floor(Math.random() * worldList.length)],
  ]);
  const [pickWord, setPickWord] = useState<string>();

  const [alphabet, setAlphabet] = useState<string[]>([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]);
  return (
    <div className="flex flex-col align-middle text-center gap-10 mt-10 ">
      <h2>Winner! - Refresh to try again</h2>
      <h1>{word}</h1>
      <div className="flex justify-center pl-64 ">
        <div className="flex  flex-col justify-center items-center">
          <div className="bg-black h-2 w-32 ml-32"></div>
          <div className=" bg-black h-72 w-2"></div>
          <div className="bg-black  h-2 w-64"></div>
        </div>
        <div className="flex flex-col mr-10 justify-start mr-10 items-center w-64 pr-64">
          <div className="bg-black h-10 w-2"></div>
          <div className="rounded-full w-16 h-16  border-solid border-black border-8 "></div>
          <div className="w-2 h-16 bg-black"></div>
        </div>
      </div>
      <div className="flex gap-2 w-96 m-auto flex-wrap justify-center items-center">
        {alphabet.map((item: string, indx) => {
          return (
            <button
              key={indx}
              onClick={() => {
                let findItem: boolean = word[0].includes(item);
                console.log(findItem);
                if (findItem) setWord(item);
              }}
              className="border-black border border-solid p-4"
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
