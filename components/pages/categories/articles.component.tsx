"use client";

import { fetcher } from "@/lib/swr/fetcher";
import { getKey } from "@/lib/swr/infinite";
import { Article } from "@/lib/types/article";
import { QueryApiResponse } from "@/lib/types/query-api-response";
import { API_CATEGORIES_PATH } from "@/lib/urls";
import { Box, Button, Flex } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import useSWRInfinite from "swr/infinite";

const ArticleCards = dynamic(
  () => import("@/components/ui/articles/article-cards.component")
);

interface CategoryPageArticlesProps {
  categoryName: string;
}

const CategoryPageArticles: React.FC<CategoryPageArticlesProps> = ({ categoryName }) => {
  const url = `${API_CATEGORIES_PATH}/${categoryName}`;
  const { isLoading, error, data: pages, size, setSize } = useSWRInfinite<QueryApiResponse<Article>>(
    getKey(url),
    fetcher
  );

  const loadMore = () => {
    setSize(size + 1);
  }

  const lastPage = pages?.at(size - 1);

  return (
    <Box className="h-auto" mx={{ initial: "5", md: "9" }} my="9">
      <ArticleCards data={pages?.flatMap((page) => page.results)} />
      {lastPage?.next && (
        <Flex justify="center" my="9">
          <Button
            color="gray"
            variant="outline"
            loading={isLoading}
            size="3"
            onClick={loadMore}
          >
            Load More Articles
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default CategoryPageArticles;
