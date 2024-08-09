import { formatImageUrl, formatTitle } from "@/lib/helpers/format";
import { Article } from "@/lib/types/article";
import { Box, Card, Inset, Text, Badge, Flex, Link } from "@radix-ui/themes";
import Image from "next/image";

interface ArticleCardsProps {
  article: Article;
}

const ArticleCards: React.FC<ArticleCardsProps> = ({ article }) => {
  return (
    <Card size="2" className="relative" asChild>
      <Link href={article.link} target="_blank">
        <Inset clip="padding-box" side="top" pb="current">
          <Box width="100%" height="140px" position="relative">
            <Image
              src={formatImageUrl(article.image)}
              alt="Bold typography"
              fill={true}
              priority={true}
              sizes="(max-width: 500px) 100vw, 33vw"
              className="object-cover bg-[var(--gray-5)]"
            />
          </Box>
        </Inset>
        <Flex height="calc(100% - 140px)" direction="column" justify="between">
          <Text
            as="p"
            size="3"
            mb="4"
            className="text-[var(--gray-12)] line-clamp-4"
          >
            {article.title}
          </Text>
          <Box>
            <Flex gap="2">
              {article.tags.map((tag, index) => (
                <Badge key={index} variant="soft" radius="full" mb="2">
                  {formatTitle(tag)}
                </Badge>
              ))}
            </Flex>
            <Text as="p" size="1" mt="1" color="gray">
              {article.source}
            </Text>
          </Box>
        </Flex>
      </Link>
    </Card>
  );
};

export default ArticleCards;
