"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  transitionVariants,
  TransitionType,
} from "@/components/utils/TransitionVariants";

type TransitionLinkProps = {
  href: string;
  children: React.ReactNode;
  direction?: TransitionType;
};

export const TransitionLink = ({
  href,
  children,
  direction,
}: TransitionLinkProps) => {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const handleRouteChange = () => {
      if (href && direction) {
        sessionStorage.setItem(
          "transitionVariants",
          JSON.stringify(transitionVariants[direction])
        );
      }
      router.push(href);
    };

    handleRouteChange();
  };

  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default TransitionLink;
