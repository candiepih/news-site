"use client";

import { fetcher } from "@/lib/queries/fetcher";
import { API_CATEGORIES_PATH } from "@/lib/urls";
import dynamic from "next/dynamic";
import useSWR from "swr";

const CategorySection = dynamic(
  () => import("@/components/pages/home-page/category.component")
);

const CategorySections = () => {
  const { isLoading, error, data } = useSWR<string[]>(API_CATEGORIES_PATH, fetcher);
  
  return (
    <>
      {
        data?.map((category) => (
          <CategorySection key={category} categoryName={category} />
        ))
      }
    </>
  );
};

export default CategorySections;
