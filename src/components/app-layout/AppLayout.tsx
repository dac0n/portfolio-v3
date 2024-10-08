"use client";
import { usePathname } from "next/navigation";
import NavLayout from "../nav-layout/NavLayout";
import { AppRoute, AppRoutes, Direction } from "../utils/enums";
import { transitionDirection } from "../utils/transitionsUtils";
import { TransitionPlaceholder } from "../transition-placeholder/TransitionPlaceholder";
import { getLayoutTransforms } from "./helpers";

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
  const shouldDisplayTransitionPlaceholder = currentRoute !== "/";
  const { screenContainerTransforms } = getLayoutTransforms(currentRoute);

  return (
    <div
      id="transition-container"
      className={`flex h-screen w-screen overflow-hidden ${shouldDisplayTransitionPlaceholder ? flexDirectionMap[transitionDirection[AppRoutes[currentRoute]] as Direction] : ""}`}
    >
      <div
        className={`hidden h-screen w-screen flex-none md:flex ${screenContainerTransforms ?? ""}`}
      >
        <NavLayout />
        {children}
      </div>
      <div className="flex h-screen w-screen flex-col items-start justify-center gap-3 p-5 text-xl text-gray-400 md:hidden">
        <div>Mobile design is under construction.</div>
        <div>
          Non-mobile - preview available. You may check it out with a bigger
          screen.
        </div>
        <div className="mt-3"></div>
      </div>
      {shouldDisplayTransitionPlaceholder && <TransitionPlaceholder />}
    </div>
  );
}
