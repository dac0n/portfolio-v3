import { AppRoute, AppRoutes, Direction, oppositeDirection } from "./enums";

export const transitionDirection: {
  [key in AppRoutes]: Direction | null;
} = {
  [AppRoutes["/get-in-touch"]]: Direction.Top,
  [AppRoutes["/projects"]]: Direction.Left,
  [AppRoutes["/tech-stack"]]: Direction.Bottom,
  [AppRoutes["/about"]]: Direction.Right,
  [AppRoutes["/"]]: null,
};
type BodyTransitionName =
  | `transition-container-${Direction}`
  | `transition-container-${Direction}-${Direction}`;

type TransitionNameParts =
  | ["transition", "container", Direction]
  | ["transition", "container", Direction, Direction]
  | [""];

export const getNewBodyTransitionName = (
  currentRoute: AppRoute,
  newRoute: AppRoute,
) => {
  if (currentRoute === "/") {
    if (newRoute === "/") {
      console.error(
        "You've tried to navigate from Home to Home. Don't know how you achieved, but congrats.",
      );
    } else {
      return `transition-container-${transitionDirection[AppRoutes[newRoute]]}` as BodyTransitionName;
    }
  } else {
    if (newRoute === "/") {
      return `transition-container-${oppositeDirection[transitionDirection[AppRoutes[currentRoute]] as Direction]}` as BodyTransitionName;
    } else {
      return `transition-container-${oppositeDirection[transitionDirection[AppRoutes[currentRoute]] as Direction]}-${transitionDirection[AppRoutes[newRoute]]}` as BodyTransitionName;
    }
  }
};
