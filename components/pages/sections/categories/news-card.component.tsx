import {
  Box,
  Card,
  Inset,
  Link,
  Text,
  Badge,
} from "@radix-ui/themes";
import Image from "next/image";

const NewsCard = () => {
  return (
    <Card size="2" asChild>
      <Link href="#">
        <Inset clip="padding-box" side="top" pb="current">
          <Box width="100%" height="140px" position="relative">
            <Image
              src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="Bold typography"
              fill={true}
              priority={true}
              sizes="(max-width: 500px) 100vw, 33vw"
              className="object-cover bg-[var(--gray-5)]"
            />
          </Box>
        </Inset>
        <Badge highContrast variant="outline" radius="full" mb="2">
          Kotaku
        </Badge>
        <Text as="p" size="3" className="text-[var(--gray-12)]">
          Typography is the art and technique of arranging type to make written
          language legible, readable and appealing when displayed.
        </Text>
        <Box my="2">
          <Text size="2" className="text-[var(--accent-11)]">
            Sport
          </Text>
        </Box>
      </Link>
    </Card>
  );
};

export default NewsCard;
