"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ISidebarNavItemProps {
  text: string;
  url: string;
  icon: ReactNode;
}

function SidebarNavItem({ text, url, icon }: ISidebarNavItemProps) {
  const pathname = usePathname();

  const isActive = pathname === url;

  return (
    <Link href={url} className="flex items-center gap-2 text-muted-foreground">
      <span
        className={`${isActive && "bg-primary text-primary-foreground"} flex h-8 w-8 items-center justify-center rounded-full`}
      >
        {icon}
      </span>
      <p className={`${isActive && "text-foreground"}`}>{text}</p>
    </Link>
  );
}

export default SidebarNavItem;
