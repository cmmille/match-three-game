import { useState } from "react";
import GameGrid from "./GameGrid";

const Game: React.FC = () => {
  const [gameOver, setGameOver] = useState(false);

  return (
    <div className="w-full h-full flex items-center justify-center overflow-auto bg-gray-600">
      {gameOver ? (
        <h1 className="text-4xl text-red-500 font-bold text-center">Game Over</h1>
      ) : (
        <div className="flex flex-col w-full">
          <h1 className="text-4xl text-green-500 font-bold text-center">In Progress</h1>
          <GameGrid width={8} height={8} symbol="flower"/>
        </div>
      )}
    </div>
  );
};

export default Game;