import { useMemo } from "react";
import Image from "next/image";

import Couverture from "../../../../public/images/CVT_Miracle-dans-les-Andes_3249.webp";

export type BookBlockProps = {
  isSecondary?: boolean;
};

const BookBlock = ({ isSecondary = false }: BookBlockProps) => {
  const renderTexts = useMemo(
    () => (
      <>
        <p className="font-bold">Titre</p>
        <p className="text-sm">Auteur</p>
      </>
    ),
    []
  );

  return (
    <article className="flex flex-col items-center gap-2 lg:w-3/5">
      {isSecondary && renderTexts}
      <Image
        src={Couverture}
        alt="Couverture livre"
        className={isSecondary ? "rounded-b-full" : "rounded-t-full"}
      />
      {!isSecondary && renderTexts}
    </article>
  );
};

export default BookBlock;
