import { useState } from "react";
import Square from "./components/Square";

function App() {
  const [xIsNext, setXIsNext] = useState(true);

  const btns = [];

  for (let i = 0; i < 9; i++) {
    btns.push(i);
  }

  const squares = btns.map((nums, i) => {
    return (
      <div key={i}>
        <Square i={nums} xIsNext={xIsNext} setXIsNext={setXIsNext} />
      </div>
    );
  });

  const winningSpots = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function onResetButtonPressed() {
    location.reload();
  }

  return (
    <main className="flex flex-col gap-12 min-h-screen bg-gradient-to-r from-blue-200 items-center justify-center">
      <h1>This is a test.</h1>
      <button
        className="bg-blue-400 rounded-xl p-4 px-8 border-2 border-blue-200 text-xl font-semibold shadow shadow-black hover:bg-blue-300 hover:-translate-y-0.5 duration-200"
        onClick={onResetButtonPressed}
      >
        Reset
      </button>
      <div className="grid grid-cols-3 gap-[1px]">{squares}</div>
    </main>
  );
}

export default App;
