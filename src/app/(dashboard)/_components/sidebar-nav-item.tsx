import Link from "next/link";
import { ReactNode } from "react";

interface ISidebarNavItemProps {
  text: string;
  url: string;
  icon: ReactNode;
}

function SidebarNavItem({ text, url, icon }: ISidebarNavItemProps) {
  return (
    <Link
      href={url}
      className="flex items-center gap-2 text-gray-500/60 hover:text-gray-400"
    >
      {icon} {text}
    </Link>
  );
}

export default SidebarNavItem;
