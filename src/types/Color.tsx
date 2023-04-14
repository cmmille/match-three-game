export const ALL_COLORS = ["red", "blue", "green", "yellow", "purple", "cyan"] as const;
type ColorTuple = typeof ALL_COLORS;
export type Color = ColorTuple[number];
