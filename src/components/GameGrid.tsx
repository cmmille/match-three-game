import React from "react";
import Cell from "./Cell";
import { Icon } from "../types/Icon";
import { Color, ALL_COLORS } from "../types/Color";

interface Props {
  width: number;
  height: number;
  symbol: Icon;
}

function randomColor(): Color {
  const colors = ALL_COLORS;
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex] as Color;
}

function generateGrid(numCells: number): Color[] {
  const grid: Color[] = [];
  for (let i = 0; i < numCells; i++) {
    grid.push(randomColor());
  }
  return grid;
}

const GameGrid: React.FC<Props> = ({ width, height, symbol }) => {
  const style = {
    gridTemplateColumns: `repeat(${width}, 1fr)`,
    gridTemplateRows: `repeat(${height}, 1fr)`,
  };

  const numCells = width * height;
  const grid = generateGrid(numCells);

  return (
    <div className="w-full flex items-center justify-center max-w-4xl m-auto overflow-aut p-4">
      <div
        className={`bg-gray-800 rounded-lg p-2 grid gap-2 w-min`}
        style={style}
      >
        {grid.map((color, index) => (
          <Cell
            key={index}
            symbol={symbol}
            color={color}
            selected={false}
            onClick={() => console.log("clicked")}
          />
        ))}
      </div>
    </div>
  );
};

export default GameGrid;
