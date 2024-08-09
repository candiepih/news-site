"use client";

import { fetcher } from "@/lib/queries/fetcher";
import { Article } from "@/lib/types/article";
import { API_CATEGORIES_PATH } from "@/lib/urls";
import { Box } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import useSWR from "swr";

const ArticleCards = dynamic(
  () => import("@/components/ui/articles/article-cards.component")
);

interface CategoryPageArticlesProps {
  categoryName: string;
}

const CategoryPageArticles: React.FC<CategoryPageArticlesProps> = ({ categoryName }) => {
  const { isLoading, error, data } = useSWR<Article[]>(
    `${API_CATEGORIES_PATH}/${categoryName}`,
    fetcher
  );

  return (
    <Box className="h-auto" m="9">
      <ArticleCards data={data?.slice(4)} />
    </Box>
  );
};

export default CategoryPageArticles;
