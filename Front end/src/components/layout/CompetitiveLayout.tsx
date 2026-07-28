import Navbar from "./Navbar";
import CompetitiveSidebar from "./CompetitiveSidebar";

export default function CompetitiveLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <CompetitiveSidebar />
      <main className="lg:pl-64 pt-16 min-h-screen">
        <div className="p-4 md:p-6 max-w-[1600px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
