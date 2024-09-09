"use client";
import { usePathname } from "next/navigation";
import NavLayout from "../nav-layout/NavLayout";
import { AppRoute, AppRoutes, Direction } from "../utils/enums";
import { transitionDirection } from "../utils/transitionsUtils";
import { TransitionPlaceholder } from "../transition-placeholder/TransitionPlaceholder";

const flexDirectionMap = {
  [Direction.Bottom]: "flex-col-reverse",
  [Direction.Top]: "flex-col",
  [Direction.Left]: "flex-row",
  [Direction.Right]: "flex-row-reverse",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentRoute = usePathname() as AppRoute;
  // const transitionContainer = document.getElementById("transition-container");
  // const currentTransitionName = transitionContainer?.style.viewTransitionName;
  const shouldDisplayTransitionPlaceholder = currentRoute !== "/";
  return (
    <div
      id="transition-container"
      className={`flex h-screen w-screen overflow-hidden bg-pink-900 ${shouldDisplayTransitionPlaceholder ? flexDirectionMap[transitionDirection[AppRoutes[currentRoute]] as Direction] : ""}`}
    >
      <div className="flex h-screen w-screen flex-none bg-pink-900">
        <NavLayout />
        {children}
      </div>
      {shouldDisplayTransitionPlaceholder && <TransitionPlaceholder />}
    </div>
  );
}
