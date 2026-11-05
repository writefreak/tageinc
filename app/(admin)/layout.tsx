export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div></div>
    // <TooltipProvider delayDuration={0}>
    //   <SidebarProvider>
    //     <AdminSidebar />
    //     <SidebarInset>
    //       <AdminHeader />
    //       <div className="flex-1 p-4 md:p-8 bg-mist/40">{children}</div>
    //     </SidebarInset>
    //   </SidebarProvider>
    // </TooltipProvider>
  );
}
