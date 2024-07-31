import {
  Box,
  Card,
  Flex,
  Inset,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

const NewsCard = () => {
  return (
    <Card size="2" asChild>
      <Link href="#">
        <Flex>
          <Inset clip="padding-box" side="left">
            <Box width="160px" height="100%" position="relative">
              <Image
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="logo"
                fill={true}
                priority={true}
                sizes="(max-width: 160px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </Box>
          </Inset>
          <Box pl="2">
            <Text as="p" size="2" className="line-clamp-2">
              Typography is the art and technique of arranging
              type
            </Text>
            <Text as="p" size="1" mt="1" color="gray">
              Kotaku
            </Text>
          </Box>
        </Flex>
      </Link>
    </Card>
  );
};

export default NewsCard;
