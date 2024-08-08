import {
  Badge,
  Box,
  Flex,
  Heading,
  Text
} from "@radix-ui/themes";
import dynamic from "next/dynamic";
import Image from "next/image";

const NewsCard = dynamic(() => import("@/components/pages/sections/hero-section/news-cards.component"));

const HeroSection = () => {
  return (
    <Flex position="relative" width="100%" className="min-h-screen">
      <Box className="h-72 w-full absolute bottom-0 left-0 z-[5] bg-gradient-to-t from-[var(--accent-1)] via-[var(--accent-1)] via-20% to-transparent"></Box>
      <Box position="absolute" top="0" left="0" className="w-full h-full">
        <Image
          src="https://www.kbc.co.ke/wp-content/uploads/2024/07/alcohol-.avif"
          alt="logo"
          fill={true}
          priority={true}
          className="object-cover object-center"
        />
      </Box>
      <Box className="z-10" width="100%" p="9">
        <Flex width="100%" height="100%">
          <Flex className="w-3/4" direction="column" justify="end">
            <Text as="p" className="uppercase tracking-widest" size="1">
              Entertainment
            </Text>
            <Box width="70%" my="2">
              <Heading size="8" className="line-clamp-2">
                Is Already The Movie Of The Summer And It&apos;s Not Even Out Yet
              </Heading>
            </Box>
            <Flex gap="2" mt="2">
              <Badge highContrast variant="outline" radius="full">
                Video games
              </Badge>
              <Badge highContrast variant="outline" radius="full">
                Kotaku
              </Badge>
            </Flex>
          </Flex>
          <Flex direction="column" className="w-1/4" justify="end" gapY="4">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default HeroSection;
