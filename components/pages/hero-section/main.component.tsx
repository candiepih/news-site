"use client";

import { formatImageUrl, formatTitle } from "@/lib/helpers/format";
import { fetcher } from "@/lib/queries/fetcher";
import { Article } from "@/lib/types/article";
import { API_CATEGORIES_PATH } from "@/lib/urls";
import { Badge, Box, Flex, Heading, Link, Text } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import Image from "next/image";
import useSWR from "swr";

const NewsCard = dynamic(
  () => import("@/components/pages/hero-section/news-card.component")
);

interface HeroSectionProps {
  categoryName: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ categoryName }) => {
  const { isLoading, error, data } = useSWR<Article[]>(
    `${API_CATEGORIES_PATH}/${categoryName}`,
    fetcher
  );

  const firstArticle = data?.[0];
  const otherArticles = data?.slice(1, 4);
  const defaultImage = "/no-image-2.webp";

  return (
    <Flex position="relative" width="100%" className="min-h-screen">
      <Box className="h-72 w-full absolute bottom-0 left-0 z-[5] bg-gradient-to-t from-[var(--accent-1)] via-[var(--accent-1)] via-20% to-transparent"></Box>
      <Box position="absolute" top="0" left="0" className="w-full h-full">
        <Image
          src={formatImageUrl(
            firstArticle?.image || defaultImage,
            defaultImage
          )}
          alt="logo"
          fill={true}
          priority={true}
          className="object-cover object-top"
        />
      </Box>
      <Box className="z-10" width="100%" p="9">
        <Flex width="100%" height="100%">
          {firstArticle && (
            <Flex className="w-3/4" direction="column" justify="end">
              <Text as="p" className="uppercase tracking-widest" size="1">
                {formatTitle(firstArticle.category)}
              </Text>
              <Box width="70%" my="2">
                <Link
                  href={firstArticle.link}
                  className="text-[var(--gray-12)]"
                >
                  <Heading size="8" className="line-clamp-2">
                    {firstArticle.title}
                  </Heading>
                </Link>
              </Box>
              <Flex gap="2" mt="2">
                {firstArticle.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    highContrast
                    variant="outline"
                    radius="full"
                  >
                    {formatTitle(tag)}
                  </Badge>
                ))}
              </Flex>
            </Flex>
          )}
          <Flex direction="column" className="w-1/4" justify="end" gapY="4">
            {otherArticles?.map((article) => (
              <NewsCard key={article._id} article={article} />
            ))}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default HeroSection;