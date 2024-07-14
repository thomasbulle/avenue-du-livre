import BookCard from "../shared/BookCard";
import FiltersSection from "./FiltersSection";

const AllBooksList = () => {
  return (
    <section className="flex justify-center py-16 px-4 md:px-24">
      <div className="flex flex-col gap-y-[40px] max-w-[1440px]">
        <h2 className="font-bold text-center text-2xl">Tous les livres</h2>

        <div className="flex flex-col sm:flex-row gap-[40px]">
          <FiltersSection />

          <ul className="flex flex-wrap flex-col sm:flex-row max-sm:items-center max-sm:justify-center gap-[40px] max-sm:w-full w-3/4">
            <li>
              <BookCard />
            </li>
            <li>
              <BookCard />
            </li>
            <li>
              <BookCard />
            </li>
            <li>
              <BookCard />
            </li>
            <li>
              <BookCard />
            </li>
            <li>
              <BookCard />
            </li>
            <li>
              <BookCard />
            </li>
            <li>
              <BookCard />
            </li>
            <li>
              <BookCard />
            </li>
            <li>
              <BookCard />
            </li>
            <li>
              <BookCard />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AllBooksList;
