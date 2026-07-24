"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Users, Monitor, Palette, Landmark, Trophy, GraduationCap, 
  Bookmark, CalendarDays, Star, HelpCircle
} from "lucide-react";

const mainLinks = [
  { href: "/mentors", label: "All Mentors", icon: Users },
  { href: "/mentors#tech", label: "Tech & Upskilling", icon: Monitor },
  { href: "/mentors#design", label: "Creative & Design", icon: Palette },
  { href: "/mentors#exams", label: "Competitive Exams", icon: Landmark },
  { href: "/mentors#sports", label: "Sports & Athletics", icon: Trophy },
  { href: "/mentors#education", label: "Higher Education", icon: GraduationCap },
];

const userLinks = [
  { href: "/dashboard", label: "My Dashboard", icon: Users },
  { href: "/saved", label: "Saved Mentors", icon: Bookmark },
  { href: "/dashboard", label: "My Sessions", icon: CalendarDays },
  { href: "/dashboard", label: "My Reviews", icon: Star },
  { href: "/support", label: "Help & Support", icon: HelpCircle },
];

export default function MentorsSidebar() {
  const pathname = usePathname();

  const NavItem = ({ href, label, icon: Icon }: { href: string; label: string; icon: any }) => {
    // For hash links, we just check if it's the mentors page. Active state for hashes would require intersection observers, keeping it simple here.
    const isActive = href === "/mentors" ? pathname === "/mentors" : (pathname === href || (href.startsWith("/mentors#") && pathname === "/mentors"));
    
    // For this redesign, "All Mentors" is the active one in the screenshot.
    // We will apply the solid styling to href="/mentors" if it's the exact match.
    // The design has active state with bg-indigo-600 and white text.
    const isExactActive = href === "/mentors" && pathname === "/mentors";
    
    return (
      <Link 
        href={href}
        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all mb-1 ${
          isExactActive 
            ? "bg-[#5D34F9] text-white shadow-md" 
            : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
        }`}
      >
        <Icon className={`w-5 h-5 ${isExactActive ? "text-white" : "text-gray-500 group-hover:text-indigo-500"}`} />
        {label}
        {isExactActive && <span className="ml-auto text-white">&gt;</span>}
      </Link>
    );
  };

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-100 overflow-y-auto z-40 hidden lg:flex flex-col custom-scrollbar">
      <div className="py-6 px-4 flex-1">
        
        <div className="space-y-1">
          <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4 px-3">Categories</h4>
          {mainLinks.map((link) => (
            <NavItem key={link.href} {...link} />
          ))}
        </div>
      </div>
      
      {/* Become a Mentor Banner matching screenshot */}
      <div className="p-4 mt-auto">
        <div className="bg-[#4D28E0] rounded-2xl p-5 text-white relative overflow-hidden shadow-lg">
          <div className="relative z-10 w-2/3">
            <h4 className="font-bold text-sm mb-1 leading-tight">Become a Mentor</h4>
            <p className="text-[10px] text-white/80 mb-4 font-medium leading-relaxed">Share your knowledge and inspire others</p>
            <button className="bg-white text-[#4D28E0] py-1.5 px-4 rounded-md text-[11px] font-bold shadow-sm hover:bg-gray-50 transition-colors">
              Join Now
            </button>
          </div>
          {/* Illustration replacement */}
          <div className="absolute -right-2 bottom-0 w-24 h-24 flex items-end justify-end">
            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Teacher&backgroundColor=transparent" alt="Mentor" className="w-full h-full object-cover scale-110 origin-bottom-right" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #e5e7eb;
          border-radius: 20px;
        }
      `}</style>
    </aside>
  );
}
