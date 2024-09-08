"use client";

import { AppRoute } from "@/components/utils/enums";
import { getNewBodyTransitionName } from "@/components/utils/transitionsUtils";
import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

function switchTransitionType(currentRoute: AppRoute, newRoute: AppRoute) {
  const newBodyTransitionName = getNewBodyTransitionName(
    currentRoute,
    newRoute,
  );
  console.log(newBodyTransitionName);
  document.body.style.viewTransitionName = newBodyTransitionName ?? "";
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
        switchTransitionType(currentRoute, newRoute);
        document.startViewTransition(() => {
          router.push(newRoute);
        });
      }
    },
    [currentRoute, router],
  );

  return { navigate, currentRoute };
};
