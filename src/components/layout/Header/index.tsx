import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";

import Logo from "../../../../public/images/logo.png";
import { RoutesPath } from "@/enums";
import NavLink from "../NavLink";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="flex justify-center bg-primary">
      <div className="flex flex-1 items-center gap-[20px] max-w-[1440px]">
        <Link href={RoutesPath.HOME}>
          <Image src={Logo} alt="Logo Avenue du Livre" style={{ width: 150 }} />
        </Link>

        <nav className="flex-1 flex gap-5">
          <NavLink href={RoutesPath.HOME}>Livres</NavLink>
          <NavLink href={RoutesPath.CATEGORIES}>Catégories</NavLink>
          <NavLink href={RoutesPath.ABOUT}>A propos</NavLink>
        </nav>

        <div className="flex items-center gap-1">
          <IoSearch />
          <Input className="w-fit" placeholder="Rechercher un livre ..." />
        </div>
      </div>
    </header>
  );
};

export default Header;
