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
type BodyTransitionName = `body-transition-${Direction}`;

export const getNewBodyTransitionName = (
  route: AppRoute
): BodyTransitionName => {
  const currentTransitionName = document.body.style.viewTransitionName;
  let nextTransitionDirection = transitionDirection[AppRoutes[route]];
  // if we move to home, we apply opposite transition of what got us here
  if (nextTransitionDirection === null) {
    // body-transition- length is 16
    const currentTransition = currentTransitionName.slice(16) as Direction;
    nextTransitionDirection = oppositeDirection[currentTransition] as Direction;
  }
  const nextTransitionName =
    `body-transition-${nextTransitionDirection}` as BodyTransitionName;
  return nextTransitionName;
};

/* 

"""      GET IN TOUCH      """
PROJECTS     HOME        ABOUT
"""       TECH STACK       """

*/
