import TopSection from "@/components/home/TopSection";
import Bestsellers from "@/components/home/Bestsellers";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <main>
        <TopSection />

        <Bestsellers />
      </main>
    </Layout>
  );
}
