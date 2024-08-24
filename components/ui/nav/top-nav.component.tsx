"use client";

import { Box, Flex, Heading, IconButton, Tooltip } from "@radix-ui/themes";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import dynamic from "next/dynamic";
import useSWR from "swr";
import { API_CATEGORIES_PATH } from "@/lib/urls";
import { CATEGORIES_ROUTE } from "@/lib/routes";
import { formatTitle } from "@/lib/helpers/format";
import { QueryApiResponse } from "@/lib/types/query-api-response";
import { fetcher } from "@/lib/swr/fetcher";
import NavDrawer from "./mobile/nav-drawer.component";

const NavListItem = dynamic(
  () => import("@/components/ui/nav/list-item.component")
);

const TopNav = () => {
  const { isLoading, error, data } = useSWR<QueryApiResponse<string>>(
    API_CATEGORIES_PATH,
    fetcher
  );

  return (
    <NavigationMenu.Root className="fixed top-0 left-0 z-20 w-[100%]">
      <Box
        width="100%"
        className="h-20 absolute top-0 left-0 bg-gradient-to-b from-[var(--accent-2)] via-[var(--accent-2)] via-35% to-transparent to-95%"
      />
      <Flex
        justify="between"
        py="5"
        px={{ "initial": "5", "md": "9" }}
        position="absolute"
        top="0"
        left="0"
        width="100%"
      >
        <Flex gap="6" direction="row" className="flex items-center">
          <Box>
            <Heading>News</Heading>
          </Box>
          <Box className="hidden lg:block">
            {data && (
              <NavigationMenu.List className="flex flex-row gap-5 items-center">
                <NavListItem title="All" href="/" />
                {data?.results.map((category) => (
                  <NavListItem
                    key={category}
                    title={formatTitle(category)}
                    href={`${CATEGORIES_ROUTE}/${category}`}
                  />
                ))}
              </NavigationMenu.List>
            )}
          </Box>
        </Flex>
        <Box className="lg:hidden">
          <NavDrawer />
        </Box>
      </Flex>
    </NavigationMenu.Root>
  );
};

export default TopNav;
