import Link from "next/link";

import TopSection from "@/components/home/TopSection";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <TopSection />

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
