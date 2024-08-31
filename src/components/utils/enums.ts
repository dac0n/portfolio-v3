export enum AppRoutes {
  "/",
  "/about",
  "/get-in-touch",
  "/tech-stack",
  "/projects",
}

export type AppRoute = keyof typeof AppRoutes;

// used for CSS View Transition API selectors in globals.css
export enum Direction {
  Top = "top",
  Bottom = "bottom",
  Left = "left",
  Right = "right",
}

export type OppositeDirection = {
  [key in Direction]: Direction;
};

export const oppositeDirection: OppositeDirection = {
  [Direction.Top]: Direction.Bottom,
  [Direction.Bottom]: Direction.Top,
  [Direction.Right]: Direction.Left,
  [Direction.Left]: Direction.Right,
};

export enum ComponentOrientation {
  Vertical,
  Horizontal,
}

export enum MenuOrientation {
  Top,
  Left,
  Right,
  Bottom,
}
