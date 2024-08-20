"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CATEGORIES_ROUTE } from "@/lib/routes";
import { formatTitle } from "@/lib/helpers/format";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { fetcher } from "@/lib/swr/fetcher";
import { QueryApiResponse } from "@/lib/types/query-api-response";
import { API_CATEGORIES_PATH } from "@/lib/urls";
import { Box, Button, IconButton, Text } from "@radix-ui/themes";
import useSWR from "swr";
import NavListItem from "../list-item.component";
import Link from "next/link";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import navItemIcons from "../nav-item-icons.component";

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
        <DialogTitle className="uppercase tracking-widest">
          News Categories
        </DialogTitle>
        <DialogDescription className="text-gray-500">
          View news articles by category
        </DialogDescription>
        <Box className="py-10">
          <ul>
            {data?.results.map((category: string) => (
              <li
                key={category}
                className={clsx(
                  "py-2",
                  pathname === `${CATEGORIES_ROUTE}/${category}`
                    ? "font-extrabold text-[var(--accent-10)]"
                    : "text-gray-300"
                )}
              >
                <Link href={`${CATEGORIES_ROUTE}/${category}`}>
                  <Text as="p">{formatTitle(category)}</Text>
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
