import { Button, buttonVariants } from "../ui/button";
import ThreeBooksBlock from "./ThreeBooksBlock";

const TopSection = () => {
  return (
    <section className="flex justify-center bg-secondary py-16 px-4 md:px-24">
      <div className="flex flex-1 flex-col items-center gap-y-[80px] max-w-[1440px] lg:flex-row justify-center lg:gap-[20px]">
        <div className="flex flex-col items-center gap-[20px] lg:items-start lg:w-2/5">
          <h1 className="font-bold leading-relaxed text-center lg:text-start text-5xl lg:text-5xl xl:text-6xl">
            Trouvez Votre
            <br />
            Prochain Livre
          </h1>
          <p>Retrouvez la plus grande collection de livres !</p>

          <Button className={buttonVariants({ variant: "default" })}>
            Voir les livres
          </Button>
        </div>

        <ThreeBooksBlock />
      </div>
    </section>
  );
};

export default TopSection;
