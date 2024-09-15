"use client";

import { AppRoute } from "@/components/utils/enums";
import { getNewBodyTransitionName } from "@/components/utils/transitionsUtils";
import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

function switchTransitionType(currentRoute: AppRoute, newRoute: AppRoute) {
  const transitionContainer = document.getElementById("transition-container");

  const newBodyTransitionName = getNewBodyTransitionName(
    currentRoute,
    newRoute,
  );
  console.log(newBodyTransitionName);
  if (!transitionContainer)
    console.error(
      "Transition container not found, error source: useNavigation.tsx",
    );
  else {
    transitionContainer.style.viewTransitionName = newBodyTransitionName ?? "";
  }
}

export const useNavigation = () => {
  const router = useRouter();
  const currentRoute = usePathname() as AppRoute;
  const navigate = useCallback(
    (newRoute: AppRoute) => {
      if (!document.startViewTransition) {
        console.error(
          "Transitions are not supported. Navigation will happen without transition animation.",
        );
        router.push(newRoute);
      } else {
        const transitionContainer = document.getElementById(
          "transition-container",
        );
        if (!transitionContainer)
          console.error(
            "Transition container not found. Check NavLayout.tsx for transition-container id.",
          );
        else {
          transitionContainer.style.overflow = "visible";
          switchTransitionType(currentRoute, newRoute);
          const transition = document.startViewTransition(() => {
            router.push(newRoute);
          });
          transition.finished.then(() => {
            transitionContainer.style.overflow = "hidden";
          });
        }
      }
    },
    [currentRoute, router],
  );

  return { navigate, currentRoute };
};
