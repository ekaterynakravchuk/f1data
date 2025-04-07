
export function getDriverPositionChange(grid: string, position: string) {
  const gridPosition = parseInt(grid, 10);
  const finalPosition = parseInt(position, 10);

  if (isNaN(gridPosition) || isNaN(finalPosition)) {
    throw new Error("Invalid data: grid or position is not a number");
  }

  return gridPosition - finalPosition;
}

