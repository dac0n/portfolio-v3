"use client";
import Link from "next/link";
import { AppRoute, Direction } from "./enums";
import { useNavigation } from "@/hooks/useNavigation";
import { ClassName } from "./types";

type TransitionLinkProps = {
  href: AppRoute;
  className?: ClassName;
  children: React.ReactNode;
  transitionDirection?: Direction;
};

export const TransitionLink = ({
  href,
  children,
  className,
}: TransitionLinkProps) => {
  const { navigate } = useNavigation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(href);
  };
  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default TransitionLink;
