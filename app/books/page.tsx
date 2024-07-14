import Layout from "@/components/layout";
import MostPopulars from "@/components/books/MostPopulars";
import AllBooksList from "@/components/books/AllBooksList";

export default function Home() {
  return (
    <Layout>
      <main>
        <MostPopulars />

        <AllBooksList />
      </main>
    </Layout>
  );
}
