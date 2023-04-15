import { ALL_COLORS, Color } from "../types/Color";

type Cell = Color | null;

class Grid {
  grid: Cell[][];
  constructor(public x: number, public y: number) {
    this.grid = this.generateGrid();
  }

  // return a table of x by y
  private generateGrid(): Cell[][] {
    const grid: Cell[][] = [];
    for (let i = 0; i < this.x; i++) {
      grid.push([]);
      for (let j = 0; j < this.y; j++) {
        grid[i].push(null);
      }
    }
    return grid;
  }

  // return a random color
  private randomColor(): Color {
    const colors = ALL_COLORS;
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // populate the grid with random colors
  public populateGrid(): void {
    for (let i = 0; i < this.x; i++) {
      for (let j = 0; j < this.y; j++) {
        this.grid[i][j] = this.randomColor();
      }
    }
  }

  // count number of nulls in an array of Cells
  public countNulls(cells: Cell[]): number {
    return cells.filter((cell) => cell === null).length;
  }

  private printGrid(message?: string): void {
    console.log(message);
    this.grid.forEach((col) => {
      console.log(col.map((cell) => cell?.color));
    });
  }

  private shiftDown(): void {
    this.grid = this.grid.map((column) => {
      const numNulls = this.countNulls(column);
      const newColumn: Cell[] = column.filter((cell) => cell !== null);
      const nulls = Array(numNulls).fill(this.randomColor());
      return [...nulls, ...newColumn];
    });
  }

  public deleteCell(x: number, y: number): Cell[][] {
    this.grid[x][y] = null;
    this.shiftDown();
    return this.grid;
  }
}

export default Grid;
