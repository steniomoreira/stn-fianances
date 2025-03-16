import { ArrowDownUp, Landmark, LayoutDashboard, ListTree } from "lucide-react";

import SidebarNavItem from "./sidebar-nav-item";

function SidebarNav() {
  return (
    <div className="space-y-8 p-4">
      <SidebarNavItem
        text="Dashboard"
        url="/"
        icon={<LayoutDashboard size={16} />}
      />
      <SidebarNavItem
        text="Transações"
        url="/transactions"
        icon={<ArrowDownUp size={16} />}
      />
      <SidebarNavItem
        text="Categorias"
        url="/categories"
        icon={<ListTree size={16} />}
      />
      <SidebarNavItem
        text="Contas"
        url="/accounts"
        icon={<Landmark size={16} />}
      />
    </div>
  );
}

export default SidebarNav;
