import { Article } from "@/lib/types/article";
import { Grid } from "@radix-ui/themes";
import dynamic from "next/dynamic";

const ArticleCard = dynamic(
  () => import("@/components/ui/articles/article-card.component")
);

interface ArticleCardsProps {
  data?: Article[];
}

const ArticleCards: React.FC<ArticleCardsProps> = ({ data }) => {
  return (
    <Grid
      columns="4"
      gap="4"
      rows="repeat(auto-fit, minmax(250px, 1fr))"
      width="auto"
      mb="7"
    >
      {data?.map((article) => (
        <ArticleCard key={article._id} article={article} />
      ))}
    </Grid>
  );
};

export default ArticleCards;
