"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
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
        {title}
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
};

export default NavListItem;
