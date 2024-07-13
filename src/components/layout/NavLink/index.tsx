"use client";

import { PropsWithChildren } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { RoutesPath } from "@/enums";

export type NavLinkProps = PropsWithChildren<{
  href: RoutesPath;
}>;

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`flex flex-col items-center hover:font-bold transition-all${
        pathname == href ? " font-bold" : ""
      }`}
    >
      {children}
      {pathname == href && (
        <div className="w-1/3 h-[2px] bg-black rounded-lg" />
      )}
    </Link>
  );
};

export default NavLink;
