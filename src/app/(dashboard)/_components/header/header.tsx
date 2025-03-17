import { SidebarTrigger } from "@/components/ui/sidebar";

import DropdownMenuHeader from "./dropdown-menu-header";

function Header() {
  return (
    <header className="relative flex h-16 shrink-0 items-center justify-between gap-2 px-4">
      <SidebarTrigger className="-ml-1" />

      <DropdownMenuHeader />
    </header>
  );
}

export default Header;
