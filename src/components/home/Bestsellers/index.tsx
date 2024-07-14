import Link from "next/link";

import { Button } from "@/components/ui/button";
import BookCard from "../../shared/BookCard";

const Bestsellers = () => {
  return (
    <section className="flex flex-col py-16 px-4 md:px-24 gap-y-[40px] max-w-[1440px]">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-center lg:text-start text-4xl">
          Bestsellers
        </h2>
        <Button asChild variant="link">
          <Link href="#">Tout voir</Link>
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center md:items-start md:justify-between flex-wrap gap-[20px]">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </section>
  );
};

export default Bestsellers;
