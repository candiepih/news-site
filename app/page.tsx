import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/pages/hero-section/main.component"));
const CategorySections = dynamic(() => import("@/components/pages/home-page/categories.component"));

export default function Home() {
  return (
    <main>
      <HeroSection categoryName="sports" />
      <CategorySections />
    </main>
  );
}
