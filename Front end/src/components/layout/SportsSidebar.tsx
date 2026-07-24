"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, Trophy, Building2, Users, MonitorPlay, Target, 
  MapPin, Activity, Apple, Bot, Compass, Award, Calendar, 
  MessageSquare, Star, Bookmark, CalendarDays, Award as CertIcon, HelpCircle
} from "lucide-react";

const mainLinks = [
  { href: "/sports", label: "Sports Home", icon: Home },
  { href: "/sports/all", label: "All Sports", icon: Trophy },
  { href: "/sports/academies", label: "Academies", icon: Building2 },
  { href: "/sports/coaches", label: "Coaches", icon: Users },
  { href: "/sports/live", label: "Live Coaching", icon: MonitorPlay },
  { href: "/sports/tournaments", label: "Tournaments", icon: Target },
  { href: "/sports/grounds", label: "Sports Grounds", icon: MapPin },
  { href: "/sports/fitness", label: "Fitness Tracker", icon: Activity },
  { href: "/sports/nutrition", label: "Nutrition Planner", icon: Apple },
  { href: "/sports/ai-coach", label: "Sports AI Coach", icon: Bot },
  { href: "/sports/roadmap", label: "Career Roadmap", icon: Compass },
  { href: "/sports/scholarships", label: "Scholarships", icon: Award },
  { href: "/sports/events", label: "Events", icon: Calendar },
  { href: "/community", label: "Community", icon: MessageSquare },
  { href: "/success-stories", label: "Success Stories", icon: Star },
];

const userLinks = [
  { href: "/dashboard", label: "My Dashboard", icon: Home },
  { href: "/saved", label: "Saved", icon: Bookmark },
  { href: "/sports/bookings", label: "My Bookings", icon: CalendarDays },
  { href: "/sports/certificates", label: "Certificates", icon: CertIcon },
  { href: "/support", label: "Help & Support", icon: HelpCircle },
];

export default function SportsSidebar() {
  const pathname = usePathname();

  const NavItem = ({ href, label, icon: Icon }: { href: string; label: string; icon: any }) => {
    const isActive = pathname === href;
    return (
      <Link 
        href={href}
        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
          isActive 
            ? "bg-indigo-600 text-white shadow-md shadow-indigo-200" 
            : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
        }`}
      >
        <Icon className={`w-[18px] h-[18px] ${isActive ? "text-white" : "text-gray-500"}`} />
        {label}
        {isActive && <span className="ml-auto text-white">&gt;</span>}
      </Link>
    );
  };

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-100 overflow-y-auto z-40 hidden lg:block custom-scrollbar">
      <div className="py-6 px-4 space-y-8">
        
        <div className="space-y-1">
          {mainLinks.map((link) => (
            <NavItem key={link.href} {...link} />
          ))}
        </div>

        <div className="pt-4 border-t border-gray-100 space-y-1">
          {userLinks.map((link) => (
            <NavItem key={link.href} {...link} />
          ))}
        </div>

        <div className="pt-2">
          <div className="bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100/50">
            <h4 className="font-bold text-indigo-900 mb-2 text-sm leading-tight">Sports Talent Assessment</h4>
            <p className="text-xs text-indigo-700/80 mb-4 font-medium leading-relaxed">Find the perfect sport that matches your strengths and potential.</p>
            <button className="w-full bg-indigo-700 hover:bg-indigo-800 text-white py-2 rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2">
              Start Assessment 🎯
            </button>
            <div className="flex justify-center mt-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Target className="w-6 h-6 text-pink-500" />
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
