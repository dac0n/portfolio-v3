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
  | `body-transition-${Direction}`
  | `body-transition-${Direction}-${Direction}`;

type TransitionNameParts =
  | ["body", "transition", Direction]
  | ["body", "transition", Direction, Direction]
  | [""];

export const getNewBodyTransitionName = (
  currentRoute: AppRoute,
  newRoute: AppRoute,
) => {
  /*   const currentTransitionName = document.body.style.viewTransitionName;
  console.log(currentTransitionName);
  let nextTransitionDirection = transitionDirection[AppRoutes[route]];
  // if we move to home, we apply opposite transition of what got us here
  if (nextTransitionDirection === null) {
    // body-transition- length is 16
    const currentTransition = currentTransitionName.slice(16) as Direction;
    nextTransitionDirection = oppositeDirection[currentTransition] as Direction;
  }
  const nextTransitionName =
    `body-transition-${nextTransitionDirection}` as BodyTransitionName;
  return nextTransitionName; */

  if (currentRoute === "/") {
    if (newRoute === "/") {
      console.error(
        "You've tried to navigate from Home to Home. Don't know how you achieved, but congrats.",
      );
    } else {
      return `body-transition-${transitionDirection[AppRoutes[newRoute]]}` as BodyTransitionName;
    }
  } else {
    if (newRoute === "/") {
      return `body-transition-${oppositeDirection[transitionDirection[AppRoutes[currentRoute]] as Direction]}` as BodyTransitionName;
    } else {
      return `body-transition-${oppositeDirection[transitionDirection[AppRoutes[currentRoute]] as Direction]}-${transitionDirection[AppRoutes[newRoute]]}` as BodyTransitionName;
    }
  }
};

/* 

"""      GET IN TOUCH      """
PROJECTS     HOME        ABOUT
"""       TECH STACK       """

*/
