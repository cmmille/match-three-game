import React, { useState } from "react";
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
  const [grid, setGrid] = useState<Color[]>(generateGrid(numCells));
  const [selectedCells, setSelectedCells] = useState<number[]>([]);

  const handleCellClick = (index: number) => {
    setSelectedCells((selected) => [...selected, index]);
  };

  if (selectedCells.length === 2) {
    const [index1, index2] = selectedCells;
    const color1 = grid[index1];
    const color2 = grid[index2];
    if (color1 === color2) {
      // Remove matched cells from grid
      const newGrid = grid.slice();
      newGrid.splice(index1, 1);
      newGrid.splice(index2 < index1 ? index2 : index2 - 1, 1);
      setGrid(newGrid);
    }
    setSelectedCells([]);
  }

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
            selected={selectedCells.includes(index)}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GameGrid;
