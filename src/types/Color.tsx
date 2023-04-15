type ColorObject = { color: string; class: string } | null;
export const ALL_COLORS: ColorObject[] = [
  { color: "red", class: "text-red-700" },
  { color: "blue", class: "text-blue-700" },
  { color: "green", class: "text-green-700" },
  { color: "yellow", class: "text-yellow-500" },
  { color: "purple", class: "text-purple-700" },
  { color: "cyan", class: "text-cyan-600" },
];
type ColorTuple = typeof ALL_COLORS;
export type Color = ColorTuple[number];
