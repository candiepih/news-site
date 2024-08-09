"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Badge, Text } from "@radix-ui/themes";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavListItemProps {
  className?: string;
  title: string;
  href: string;
}

const NavListItem: React.FC<NavListItemProps> = ({ title, href }) => {
  const pathname = usePathname();
  const isActive = (pathname || "/") === href;
  const activeClass = isActive
    ? "text-[var(--accent-11)]"
    : "text-[var(--gray-12)]";

  return (
    <NavigationMenu.Item>
      <Link
        href={href}
        className={clsx("hover:text-[var(--accent-11)]", activeClass)}
      >
        {isActive && (
          <Badge variant="solid" radius="full" size="3">
            {title}
          </Badge>
        )}
        {!isActive && <Text size="3">{title}</Text>}
      </Link>
    </NavigationMenu.Item>
  );
};

export default NavListItem;
