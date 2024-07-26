import React, { useState } from "react";

export default function Square(props) {
  const { i, xIsNext, setXIsNext } = props;

  const [symbol, setSymbol] = useState("");

  function handleOnClick() {
    if (symbol !== "") return;

    xIsNext ? setSymbol("X") : setSymbol("O");

    setXIsNext(!xIsNext);
    console.log(i);
  }

  return (
    <div>
      {" "}
      <button
        onClick={handleOnClick}
        className="border-2 border-blue-600 p-2 min-h-28 min-w-28 bg-blue-400 font-bold
   text-white text-6xl shadow-xl shadow-black/50 hover:bg-blue-200 rounded hover:-translate-y-[1px] hover:text-blue-600 duration-200 ease-in-out"
      >
        {i}
      </button>
    </div>
  );
}
