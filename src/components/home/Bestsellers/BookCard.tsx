import Image from "next/image";
import Link from "next/link";

import Couverture from "../../../../public/images/CVT_Miracle-dans-les-Andes_3249.webp";
import { Button } from "@/components/ui/button";

const BookCard = () => {
  return (
    <article className="flex-2 lg:flex-1">
      <div className="w-[200px] h-[300px] overflow-hidden">
        <Image src={Couverture} alt="Couverture livre" />
      </div>

      <div className="flex flex-col gap-1 items-start">
        <h3 className="font-bold text-lg">Titre du livre</h3>
        <p>Auteur: Test</p>

        <div className="mb-1">
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
        </div>

        <Button asChild>
          <Link href="#">Découvrir</Link>
        </Button>
      </div>
    </article>
  );
};

export default BookCard;
