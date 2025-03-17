import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import Header from "./_components/header/header";
import { AppSidebar } from "./_components/sidebar/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <div className="p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
