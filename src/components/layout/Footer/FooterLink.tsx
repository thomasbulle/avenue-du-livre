import { PropsWithChildren } from "react";
import Link from "next/link";

import { RoutesPath } from "@/enums";
import { Button } from "@/components/ui/button";

export type FooterLinkProps = PropsWithChildren<{
  href: RoutesPath | string;
}>;

const FooterLink = ({ children, href }: FooterLinkProps) => {
  return (
    <li>
      <Button asChild variant="link">
        <Link href={href} className="py-0 px-0">
          {children}
        </Link>
      </Button>
    </li>
  );
};

export default FooterLink;
