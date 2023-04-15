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
  onClick: (coords: { x: number; y: number }) => void;
  coords: { x: number; y: number };
}

const symbols = {
  flower: <GiFlowerEmblem />,
  dot: <GoPrimitiveDot />,
  candy: <TbCandy />,
  jewel: <FaGem />,
};

const Cell: React.FC<Props> = ({
  symbol,
  color,
  selected,
  onClick,
  coords,
}) => {
  const colorClass = color ? color.class : "text-gray-400";

  return (
    <div
      className={`rounded-lg h-10 w-10 flex items-center justify-center text-4xl 
        ${colorClass} 
        ${selected ? "bg-white" : "bg-gray-400"}
      `}
      onClick={() => onClick(coords)}
    >
      {symbols[symbol]}
    </div>
  );
};

export default Cell;
