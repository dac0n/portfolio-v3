"use client";
// https://stackoverflow.com/questions/77603249/how-to-make-a-page-transition-with-framer-motion-and-next-js-14
import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction, useContext, useRef, useState } from "react";
import {
  transitionVariants,
  TransitionVariants,
} from "@/components/utils/TransitionVariants";
import { TransitionsMap } from "@/components/utils/NavigateTransitionsMap";

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;
  if (!frozen) {
    return <>{props.children}</>;
  }

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

const defaultVariants = {
  hidden: { opacity: 1, y: 2000 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 1, y: -2000 },
};

export const PageTransitionEffect = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const key = usePathname();
  const currentVariants =
    transitionVariants[TransitionsMap[key as keyof typeof TransitionsMap]];
  if (!currentVariants && key !== "/")
    console.log("Error! Key not found in NavigateTransitionsMap.tsx: ", key);
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={key}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={currentVariants}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionEffect;
