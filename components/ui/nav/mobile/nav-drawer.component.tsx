"use client";

import {
  Drawer,
  DrawerContent,
  DrawerTrigger
} from "@/components/ui/drawer";
import { formatTitle } from "@/lib/helpers/format";
import { CATEGORIES_ROUTE } from "@/lib/routes";
import { fetcher } from "@/lib/swr/fetcher";
import { QueryApiResponse } from "@/lib/types/query-api-response";
import { API_CATEGORIES_PATH } from "@/lib/urls";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Box, Link, Text } from "@radix-ui/themes";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import useSWR from "swr";

const NavDrawer = () => {
  const { isLoading, error, data } = useSWR<QueryApiResponse<string>>(
    API_CATEGORIES_PATH,
    fetcher
  );

  const pathname = usePathname();

  return (
    <Drawer>
      <DrawerTrigger>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </DrawerTrigger>
      <DrawerContent className="px-10">
        <DialogTitle className="uppercase tracking-widest flex items-center gap-x-2">
          <Box as="span" display="inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M14 25h14v2H14zm-6.83 1l-2.58 2.58L6 30l4-4l-4-4l-1.42 1.41zM14 15h14v2H14zm-6.83 1l-2.58 2.58L6 20l4-4l-4-4l-1.42 1.41zM14 5h14v2H14zM7.17 6L4.59 8.58L6 10l4-4l-4-4l-1.42 1.41z"
              />
            </svg>
          </Box>
          <Text>Categories</Text>
        </DialogTitle>
        <DialogDescription className="text-gray-500">
          All the latest news categories
        </DialogDescription>
        <Box className="py-10">
          <ul>
            {data?.results.map((category: string) => (
              <li
                key={category}
                className={clsx(
                  "py-2 hover:text-orange-400",
                  pathname === `${CATEGORIES_ROUTE}/${category}`
                    ? "font-extrabold border-b border-gray-800"
                    : "text-gray-300"
                )}
              >
                <Link href={`${CATEGORIES_ROUTE}/${category}`}>
                  {formatTitle(category)}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      </DrawerContent>
    </Drawer>
  );
};

export default NavDrawer;
