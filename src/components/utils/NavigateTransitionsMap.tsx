import { TransitionType } from "@/components/utils/TransitionVariants";

// links app routes to transition types so PageTransitionEffect
// would know what transitions to apply
export enum TransitionsMap {
  "/about" = TransitionType.Right,
  "/get-in-touch" = TransitionType.Up,
  "/tech-stack" = TransitionType.Down,
  "/projects" = TransitionType.Left,
}

/* 

"""      GET IN TOUCH      """
PROJECTS     HOME        ABOUT
"""       TECH STACK       """

*/
