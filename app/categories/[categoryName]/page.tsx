import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("@/components/pages/hero-section/main.component")
);
const CategoryPageArticles = dynamic(
  () => import("@/components/pages/categories/articles.component")
);

interface CategoryPageProps {
  params: {
    categoryName: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return (
    <main>
      <HeroSection categoryName={params.categoryName} />
      <CategoryPageArticles categoryName={params.categoryName} />
    </main>
  );
}
