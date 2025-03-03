import Image from "next/image";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import SidebarNav from "./sidebar-nav";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex h-[56px] items-center gap-2 border-b">
          <div className="relative h-8 w-8">
            <Image
              src="/logo-stn-finance.svg"
              alt="STN Finance"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xl font-semibold">STN Finance</p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarNav />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
