import SidebarNav from "@/components/sidebar-nav";

export default function DashboardLayout({
  children,
  algorithms,
  pathfinder,
}: {
  children: React.ReactNode;
  algorithms: React.ReactNode;
  pathfinder: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-12 max-h-screen">
      {children}
      <div className="col-span-2">
        <SidebarNav />
      </div>
      <div className="col-span-10 grid grid-cols-10">
        <div className="col-span-5">{algorithms}</div>
        <div className="col-span-5">{pathfinder}</div>
      </div>
    </section>
  );
}
