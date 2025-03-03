import { ArrowDownUp, LayoutDashboard, ListTree } from "lucide-react";

import SidebarNavItem from "./sidebar-nav-item";

function SidebarNav() {
  return (
    <div className="space-y-8 p-4">
      <SidebarNavItem
        text="Dashboard"
        url="/"
        icon={<LayoutDashboard size={20} />}
      />
      <SidebarNavItem
        text="Transações"
        url="/transactions"
        icon={<ArrowDownUp size={20} />}
      />
      <SidebarNavItem
        text="Categorias"
        url="/categories"
        icon={<ListTree size={20} />}
      />
    </div>
  );
}

export default SidebarNav;
