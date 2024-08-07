import { Box } from "@radix-ui/themes";
import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("@/components/pages/sections/hero-section/main.component")
);
const NewsCards = dynamic(
  () => import("@/components/pages/sections/categories/news-cards.component")
);

export default function CategoryPage() {
  return (
    <main>
      <HeroSection />
      <Box className="h-auto" m="9">
        <NewsCards />
        <NewsCards />
        <NewsCards />
        <NewsCards />
      </Box>
    </main>
  );
}
