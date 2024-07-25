import {
  Box,
  Card,
  Flex,
  Heading,
  Inset,
  Strong,
  Link,
  Text,
  Grid,
} from "@radix-ui/themes";

const NewsCard = () => {
  return (
    <Card size="2">
      <Inset clip="padding-box" side="top" pb="current">
        <img
          src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
          alt="Bold typography"
          style={{
            display: "block",
            objectFit: "cover",
            width: "100%",
            height: 140,
            backgroundColor: "var(--gray-5)",
          }}
        />
      </Inset>
      <Text as="p" size="3">
        <Strong>Typography</Strong> is the art and technique of arranging type
        to make written language legible, readable and appealing when displayed.
      </Text>
    </Card>
  );
};

const CategorySection = () => {
  return (
    <Box className="h-auto" m="9">
      <Flex justify="between" align="center" gap="4" my="5">
        <Heading as="h1" size="6">
          Category
        </Heading>
        <Link href="#">
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
      <Grid columns="4" gap="4" rows="repeat(1, auto)" width="auto">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </Grid>
    </Box>
  );
};

export default CategorySection;
