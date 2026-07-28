import Navbar from "./Navbar";
import MentorsSidebar from "./MentorsSidebar";

export default function MentorsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <MentorsSidebar />
      <main className="lg:pl-64 pt-16 min-h-screen">
        <div className="p-4 md:p-6 max-w-[1600px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
