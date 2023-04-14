import React from "react";
import { GiFlowerEmblem } from "react-icons/gi";
import { GoPrimitiveDot } from "react-icons/go";
import { TbCandy } from "react-icons/tb";
import { FaGem } from "react-icons/fa";
import { Icon } from "../types/Icon";
import { Color } from "../types/Color";

interface Props {
  selected: boolean;
  symbol: Icon;
  color: Color;
  onClick: () => void;
}

const symbols = {
  flower: <GiFlowerEmblem />,
  dot: <GoPrimitiveDot />,
  candy: <TbCandy />,
  jewel: <FaGem />,
};

const colors = {
  red: "text-red-700",
  blue: "text-blue-700",
  green: "text-green-700",
  yellow: "text-yellow-500",
  purple: "text-purple-700",
  cyan: "text-cyan-600",
};

const Cell: React.FC<Props> = ({ symbol, color, selected, onClick }) => {
  const colorName = colors[color];
  return (
    <div
      className={`rounded-lg h-10 w-10 flex items-center justify-center text-4xl 
        ${colorName} 
        ${selected ? "bg-white" : "bg-gray-400"}
      `}
      onClick={onClick}
    >
      {symbols[symbol]}
    </div>
  );
};

export default Cell;
