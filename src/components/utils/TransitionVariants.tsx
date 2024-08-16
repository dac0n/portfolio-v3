/*

the idea is that
0) we have fake simplified home layout without text
1) fake home layout is actually much bigger than screen, but all other screens have higher z-index
2) whenever we move from home screen, we render both outer screen and fake home screen
3) when transition occurs from outer screen, we move back to fake home screen 
(simple exit transition, since both screens are already rendered) and then to direction of a new screen
after new screen is rendered, we render fake home screen again in a correct direction
*/

import { Variant } from "framer-motion";

export type TransitionVariants = {
  [key in TransitionType]: {
    hidden: Variant;
    enter: Variant;
    exit: Variant;
  };
};

export enum TransitionType {
  Up,
  Down,
  Right,
  Left,
}

export const transitionVariants: TransitionVariants = {
  [TransitionType.Up]: {
    hidden: { y: -2000 },
    enter: { y: 0 },
    exit: { y: -2000 },
  },
  [TransitionType.Down]: {
    hidden: { y: 2000 },
    enter: { y: 0 },
    exit: { y: 2000 },
  },
  [TransitionType.Right]: {
    hidden: { x: 2000 },
    enter: { x: 0 },
    exit: { x: 2000 },
  },
  [TransitionType.Left]: {
    hidden: { x: -2000 },
    enter: { x: 0 },
    exit: { x: -2000 },
  },
};

/* 

"""      GET IN TOUCH      """
PROJECTS     HOME        ABOUT
"""       TECH STACK       """

*/
