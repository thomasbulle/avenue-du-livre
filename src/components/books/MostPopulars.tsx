import Link from "next/link";

import { RoutesPath } from "@/enums";
import { Button } from "../ui/button";
import BookCard from "../shared/BookCard";

const MostPopulars = () => {
  return (
    <section className="flex justify-center bg-secondary py-16 px-4 md:px-24">
      <div className="flex flex-col gap-y-[40px] max-w-[1440px]">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-[20px]">
          <h1 className="font-bold text-center lg:text-start text-4xl">
            Livres les plus populaires
          </h1>
          <Button asChild variant="link">
            <Link href={RoutesPath.BOOKS}>Voir plus</Link>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-[40px]">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </div>
    </section>
  );
};

export default MostPopulars;
