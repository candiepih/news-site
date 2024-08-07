import { Grid } from "@radix-ui/themes";
import dynamic from "next/dynamic";

const NewsCard = dynamic(
  () => import("@/components/pages/sections/categories/news-card.component")
);

const NewsCards = () => {
  return (
    <Grid
      columns="4"
      gap="4"
      rows="repeat(auto-fit, minmax(250px, 1fr))"
      width="auto"
      mb="7"
    >
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </Grid>
  );
};

export default NewsCards;
