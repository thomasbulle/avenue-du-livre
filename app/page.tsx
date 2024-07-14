import TopSection from "@/components/home/TopSection";
import Header from "@/components/layout/Header";
import Bestsellers from "@/components/home/Bestsellers";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <TopSection />

        <Bestsellers />
      </main>
    </>
  );
}
