"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppRoute, Direction } from "./enums";
import { getNewBodyTransitionName } from "./transitionsUtils";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useCallback } from "react";

type TransitionLinkProps = {
  href: AppRoute;
  children: React.ReactNode;
  transitionDirection?: Direction;
};

function switchTransitionType(newRoute: AppRoute) {
  const newBodyTransitionName = getNewBodyTransitionName(newRoute);
  document.body.style.viewTransitionName = newBodyTransitionName;
}

export const TransitionLink = ({ href, children }: TransitionLinkProps) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(router, href);
  };
  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default TransitionLink;

export const navigate = (router: AppRouterInstance, href: AppRoute) => {
  if (!document.startViewTransition) {
    console.error(
      "Transitions are not supported. Navigation will happen without transition animation.",
    );
    router.push(href);
  } else {
    switchTransitionType(href);
    document.startViewTransition(async () => {
      router.push(href);
    });
  }
};
