"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Badge, Text } from "@radix-ui/themes";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import React from "react";

interface NavListItemProps {
  className?: string;
  title: string;
  href: string;
}

const NavListItem: React.FC<NavListItemProps> = ({ title, href }) => {
  const pathname = usePathname();
  const isActive = (pathname || '/') === href;
  const activeClass = isActive
    ? "text-[var(--accent-11)]"
    : "text-[var(--gray-11)]";

  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link
        className={clsx("hover:text-[var(--accent-11)]", activeClass)}
        href={href}
      >
        {isActive && (
          <Badge variant="solid" radius="full" mb="2" size="3">
            {title}
          </Badge>
        )}
        {!isActive && (<Text size="3">{title}</Text>)}
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
};

export default NavListItem;
