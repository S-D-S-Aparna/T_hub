"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Compass, PlusCircle, Bookmark, Star, Users, Map, Target, TrendingUp, Trophy
} from "lucide-react";

const mainLinks = [
  { href: "/roadmap", label: "My Roadmaps", icon: Compass },
  { href: "/roadmap#generate", label: "Generate New", icon: PlusCircle },
  { href: "/saved", label: "Saved Goals", icon: Bookmark },
];

const resourceLinks = [
  { href: "/mentors", label: "Find a Mentor", icon: Users },
  { href: "/community", label: "Community", icon: Users },
  { href: "/success-stories", label: "Success Stories", icon: Star },
];

export default function RoadmapSidebar() {
  const pathname = usePathname();

  const NavItem = ({ href, label, icon: Icon }: { href: string; label: string; icon: any }) => {
    const isActive = pathname === href || (href.startsWith("/roadmap#") && pathname === "/roadmap");
    return (
      <Link 
        href={href}
        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
          isActive && !href.includes('#') 
            ? "bg-indigo-600 text-white shadow-md shadow-indigo-200" 
            : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
        }`}
      >
        <Icon className={`w-[18px] h-[18px] ${(isActive && !href.includes('#')) ? "text-white" : "text-gray-500"}`} />
        {label}
        {(isActive && !href.includes('#')) && <span className="ml-auto text-white">&gt;</span>}
      </Link>
    );
  };

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-100 overflow-y-auto z-40 hidden lg:block custom-scrollbar">
      <div className="py-6 px-4 space-y-8">
        
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-3">Journey</h4>
          {mainLinks.map((link) => (
            <NavItem key={link.href} {...link} />
          ))}
        </div>

        <div className="pt-4 border-t border-gray-100 space-y-1">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-3">Resources</h4>
          {resourceLinks.map((link) => (
            <NavItem key={link.href} {...link} />
          ))}
        </div>

        <div className="pt-2">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-5 rounded-2xl border border-indigo-100">
            <h4 className="font-bold text-indigo-900 mb-2 text-sm flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-indigo-600" /> Career Tracker
            </h4>
            <p className="text-xs text-indigo-700/80 mb-4 font-medium leading-relaxed">
              Complete milestones in your roadmap to unlock special badges and community recognition.
            </p>
            <div className="flex gap-2 justify-center">
               <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                 <Trophy className="w-4 h-4 text-yellow-500" />
               </div>
               <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                 <Target className="w-4 h-4 text-red-500" />
               </div>
               <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                 <Map className="w-4 h-4 text-green-500" />
               </div>
            </div>
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
