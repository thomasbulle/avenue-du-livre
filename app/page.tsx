import Header from "@/components/layout/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section>
          <h1>Trouvez Votre Prochain Livre</h1>
          <p>Retrouvez la plus grande collection de livres !</p>
          <button>Voir les livres</button>
        </section>

        <section>
          <div>
            <h2>Bestsellers</h2>
            <Link href="#">Tout voir</Link>
          </div>

          <div>
            <article>
              <h3>Titre du livre</h3>
              <p>Auteur: Test</p>
              <div>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
