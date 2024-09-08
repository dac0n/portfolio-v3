"use client";
import Link from "next/link";
import { AppRoute, Direction } from "./enums";
import { useNavigation } from "@/hooks/useNavigation";

type TransitionLinkProps = {
  href: AppRoute;
  children: React.ReactNode;
  transitionDirection?: Direction;
};

export const TransitionLink = ({ href, children }: TransitionLinkProps) => {
  const { navigate } = useNavigation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(href);
  };
  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default TransitionLink;
