import React, { useState } from "react";
import { v4 as uid } from "uuid";
import Cell from "./Cell";
import { Icon } from "../types/Icon";
import Grid from "../models/Grid";

interface Props {
  width: number;
  height: number;
  symbol: Icon;
}

const GameGrid: React.FC<Props> = ({ width, height, symbol }) => {
  const [grid, setGrid] = useState(() => {
    const newGrid = new Grid(width, height);
    newGrid.populateGrid();
    return newGrid;
  });

  const handleClick = (coords: { x: number; y: number }) => {
    setGrid((prevGrid) => {
      const newGrid = new Grid(width, height);
      newGrid.grid = prevGrid.deleteCell(coords.x, coords.y);
      return newGrid;
    });
  };

  return (
    <div className="w-full flex items-center justify-center max-w-4xl m-auto overflow-aut p-4">
      <div className={`bg-gray-800 rounded-lg p-2 flex flex-row`}>
        {grid.grid.map((col, x) => (
          <div key={uid()} className="flex flex-col">
            {col.map((cell, y) => (
              <Cell
                color={cell}
                symbol={symbol}
                onClick={handleClick}
                selected={false}
                coords={{ x, y }}
                key={uid()}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameGrid;
