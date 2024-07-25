import { Badge, Box, Card, Flex, Heading, Inset, Strong, Text } from "@radix-ui/themes";
import Image from "next/image";
import dynamic from "next/dynamic";
import CategorySection from "@/components/pages/sections/categories/category";

const HeroSection = dynamic(() => import("@/components/pages/sections/hero-section/main.component"));

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategorySection />
      <CategorySection />
      <CategorySection />
      <CategorySection />
    </main>
  );
}
