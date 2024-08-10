import { formatTitle } from "@/lib/helpers/format";
import { CATEGORIES_ROUTE } from "@/lib/routes";
import { fetcher } from "@/lib/swr/fetcher";
import { Article } from "@/lib/types/article";
import { QueryApiResponse } from "@/lib/types/query-api-response";
import { API_CATEGORIES_PATH } from "@/lib/urls";
import {
  Box,
  Flex,
  Heading,
  Link
} from "@radix-ui/themes";
import dynamic from "next/dynamic";
import useSWR from "swr";

const NewsCards = dynamic(() => import("@/components/ui/articles/article-cards.component"));

interface CategorySectionProps {
  categoryName: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({ categoryName }) => {
  const { isLoading, error, data } = useSWR<QueryApiResponse<Article>>(
    `${API_CATEGORIES_PATH}/${categoryName}`,
    fetcher
  );

  return (
    <Box className="h-auto" m="9">
      <Flex justify="between" align="center" gap="4" my="5">
        <Heading as="h1" size="6">
          {formatTitle(categoryName)}
        </Heading>
        <Link href={`${CATEGORIES_ROUTE}/${categoryName}`}>
          <Flex as="span" display="inline-flex" align="center" gapX="2">
            View all
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </Flex>
        </Link>
      </Flex>
      <NewsCards data={data?.results.slice(0, 4)} />
    </Box>
  );
};

export default CategorySection;
