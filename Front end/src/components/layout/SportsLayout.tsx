import Navbar from "./Navbar";
import SportsSidebar from "./SportsSidebar";

export default function SportsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <SportsSidebar />
      <main className="lg:pl-64 pt-16 min-h-screen">
        <div className="p-4 md:p-6 max-w-[1400px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
