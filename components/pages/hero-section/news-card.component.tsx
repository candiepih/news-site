import { formatImageUrl } from "@/lib/helpers/format";
import { Article } from "@/lib/types/article";
import {
  Box,
  Card,
  Flex,
  Inset,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  article: Article;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <Card size="2" asChild>
      <Link href={article.link} target="_blank">
        <Flex>
          <Inset clip="padding-box" side="left" className="overflow-clip">
            <Box width="100px" height="100%" position="relative">
              <Image
                src={formatImageUrl(article.image)}
                alt="logo"
                fill={true}
                priority={true}
                sizes="(max-width: 160px) 100vw, 33vw"
                className="object-cover object-top"
              />
            </Box>
          </Inset>
          <Box pl="2">
            <Text as="p" size="2" className="line-clamp-2">
              {article.title}
            </Text>
            <Text as="p" size="1" mt="1" color="gray">
              {article.source}
            </Text>
          </Box>
        </Flex>
      </Link>
    </Card>
  );
};

export default NewsCard;
